import express from 'express';

import teacherController from '../../controllers/teacher';

const teacherRouter = express.Router();

teacherRouter.get('/', teacherController.getTeachers);
teacherRouter.get('/:id', teacherController.getTeacher);

teacherRouter.post('/createTeacher', teacherController.createTeacher);

export default teacherRouter;
