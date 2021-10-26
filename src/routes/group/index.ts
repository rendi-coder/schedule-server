import express from 'express';

import groupController from '../../controllers/group';

const groupRouter = express.Router();

groupRouter.get('/', groupController.getGroups);
groupRouter.get('/:id', groupController.getGroup);

groupRouter.post('/createGroup', groupController.createGroup);

export default groupRouter;
