import express from 'express';

import lessonController from '../../controllers/lesson';

const lessonRouter = express.Router();

lessonRouter.get('/', lessonController.getLessons);
lessonRouter.get('/:id', lessonController.getLesson);

export default lessonRouter;
