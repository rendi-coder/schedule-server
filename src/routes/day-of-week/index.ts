import express from 'express';

import dayOfWeekController from '../../controllers/day-of-week';

const dayOfWeekRouter = express.Router();

dayOfWeekRouter.get('/', dayOfWeekController.getDaysOfWeek);
dayOfWeekRouter.get('/:id', dayOfWeekController.getDayOfWeek);

export default dayOfWeekRouter;
