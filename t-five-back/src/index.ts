import express from 'express';
import config from "../src/config/config";
import cors from 'cors';
// Routes
import SellOrderRoutes from './routes/SellOrderRoutes';

const app = express();
//Settings
app.set('port', config.PORT || 3002);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use('/sell-order', SellOrderRoutes)

//Static files

//Starting the server
app.listen(app.get('port'), ()=>{
    console.info(`Server on port ${app.get('port')}`);
});