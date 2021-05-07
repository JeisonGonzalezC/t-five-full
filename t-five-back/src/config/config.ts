import * as dotenv from 'dotenv';
import * as path from 'path';

// NOTE: using full path for knex cli compatibility

let pathJSON = '';
if (/^test$/i.test(process.env.NODE_ENV!)) {
    dotenv.config({
        path: path.join(path.dirname(__filename), '../../.env'),
    });
    pathJSON = process.env.PATH_DB_JSON as string;
}else{
    dotenv.config({
        path: path.join(path.dirname(__filename), '../../../.env'),
    });
    pathJSON = process.env.PATH_DB as string;
}

export default {
    PORT: process.env.PORT as string,
    PATH_MELONN_API: process.env.PATH_MELONN_API as string,
    API_KEY_MELONN: process.env.API_KEY_MELONN as string,
    PATH_DB: pathJSON as string,
}