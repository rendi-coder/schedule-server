import express from 'express';
import classRoomController from '../../controllers/class-room';

const classRoomRouter = express.Router();

classRoomRouter.get('/', classRoomController.getClassRooms);
classRoomRouter.get('/:id', classRoomController.getClassRoom);

classRoomRouter.post('/', classRoomController.createClassRoom);

export default classRoomRouter;
