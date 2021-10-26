import express from 'express';

import timeTableController from '../../controllers/timetable';

const timeTableRouter = express.Router();

timeTableRouter.get('/', timeTableController.getTimeTable);
timeTableRouter.get('/:id', timeTableController.getTimeTableById);
timeTableRouter.get('/group/:id', timeTableController.getTimeTableByGroup);

timeTableRouter.post('/createTimeTable', timeTableController.createTimeTable);

export default timeTableRouter;
