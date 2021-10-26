import express from 'express';

import disciplineController from '../../controllers/discipline';

const disciplineRouter = express.Router();

disciplineRouter.get('/', disciplineController.getDisciplines);
disciplineRouter.get('/:id', disciplineController.getDiscipline);

disciplineRouter.post('/createDescipline', disciplineController.createDiscipline);

export default disciplineRouter;
