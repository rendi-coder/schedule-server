import './load-env';
import express from 'express';
import cors from 'cors';
import { urlencoded, json } from 'body-parser';
import fileUpload from 'express-fileupload';
import path from 'path';
import connection from './db/connection';
import router from './routes';
import errorHandler from './middleware/ErrorHandlingMiddleware';

const PORT = process.env.PORT || 4200;

const app = express();
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(express.static(path.resolve(__dirname, '../static')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
  try {
    await connection.authenticate();
    await connection.sync();
    app.listen(PORT, () => {
      console.log(`Server run on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
