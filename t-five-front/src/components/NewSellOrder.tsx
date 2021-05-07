import React, { useState } from 'react';
import { ISellOrderArgs, IStateShippingMethodsReducer } from '../types/utils';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { saveSellOrder } from '../actions/SellOrderActions';
import { useHistory } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const NewSellOrder = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const shippingMethods = useSelector((state: IStateShippingMethodsReducer) => state.shippingMethodsReducer );
    const { shipping_methods } = shippingMethods;

    const [inputValues, setInputValues] = useState<ISellOrderArgs>({
        sellerStore: '',
        shippingMethod: '',
        externalOrder: 0,
        buyerFullName: '',
        buyerPhone: 0,
        buyerEmail: '',
        shippingAddress: '',
        shippingCity: '',
        shippingRegion: '',
        shippingCountry: '',
        lineItems: []
    });
    const handleSubmit = async(event: any) => {
        event.preventDefault();
        dispatch(saveSellOrder(inputValues));
        history.push("/");
    }
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        const val = name === 'externalOrder' || name === 'buyerPhone'  ? parseInt(value, 10) : value;
        setInputValues({ ...inputValues, [name]: val });
    }
    const optionsShipping = shipping_methods.map(item =>
        <MenuItem key={item.id} value={item.name}>
            {item.name}
        </MenuItem>);
    return (
        <form onSubmit={handleSubmit}>
            <Grid container={true}>
                <Grid item xs={4}>
                    <div style={{marginTop: '10px'}}>
                        <TextField label="seller store" name="sellerStore" autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <FormControl style={{width: '100%'}}>
                        <InputLabel id="shippingMethod-label">Método de envío</InputLabel>
                        <Select
                            labelId="shippingMethod-label"
                            id="shippingMethod-label"
                            name="shippingMethod"
                            onChange={handleChange}
                            value={inputValues.shippingMethod}
                        >
                            {optionsShipping}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginTop: '10px'}}>
                        <TextField label="external order" name="externalOrder" autoComplete="off" 
                            onChange={handleChange}
                            type="number"
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginTop: '10px'}}>
                        <TextField label="buyer full name" name="buyerFullName" autoComplete="off" 
                            onChange={handleChange}
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginTop: '10px'}}>
                        <TextField label="buyer phone" name="buyerPhone" autoComplete="off" 
                            onChange={handleChange}
                            type="number"
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginTop: '10px'}}>
                        <TextField label="buyer email" name="buyerEmail" autoComplete="off" 
                            onChange={handleChange}
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginTop: '10px'}}>
                        <TextField label="shipping address" name="shippingAddress" autoComplete="off" 
                            onChange={handleChange}
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginTop: '10px'}}>
                        <TextField label="shipping city" name="shippingCity" autoComplete="off" 
                            onChange={handleChange}
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginTop: '10px'}}>
                        <TextField label="shipping region" name="shippingRegion" autoComplete="off" 
                            onChange={handleChange}
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{marginTop: '10px'}}>
                        <TextField label="shipping country" name="shippingCountry" autoComplete="off" 
                            onChange={handleChange}
                        />
                    </div>
                </Grid>
            </Grid>
            <br/>
            <Button variant="contained" color="primary" type="submit">
                Guardar
            </Button>
        </form>
    );
}

export default NewSellOrder;