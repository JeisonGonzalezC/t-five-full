import axios from 'axios';
import config from "../config/config";
import { IShippingMethods } from '../types/sellOrder';

export const getShippingmethods = async (): Promise<IShippingMethods[] | undefined> =>{
   try {
      const response = await axios.get(`${config.PATH_MELONN_API}/sandbox/shipping-methods` ,{
         headers: {
            'x-api-key': config.API_KEY_MELONN
         }
      });
      return response.data as IShippingMethods[];
   } catch (error) {
      console.error(error);
   }
};

export const getShippingmethod = async (id: string):Promise<IShippingMethods | undefined> => {
   try {
      const response = await axios.get(`${config.PATH_MELONN_API}/sandbox/shipping-methods/${id}` ,{
         headers: {
            'x-api-key': config.API_KEY_MELONN
         }
      });
      return response.data;
   } catch (error) {
      console.error(error);
   }
};

export const getBusinessDays = async ():Promise<string[] | undefined> => {
   try {
      const response = await axios.get(`${config.PATH_MELONN_API}/sandbox/off-days` ,{
         headers: {
            'x-api-key': config.API_KEY_MELONN
         }
      });
      return response.data;
   } catch (error) {
      console.error(error);
   }
};