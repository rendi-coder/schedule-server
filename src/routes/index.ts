import express from 'express';

import groupRouter from './group';
import authRouter from './auth';
import teacherRouter from './teacher';
import disciplineRouter from './discipline';
import dayOfWeek from './day-of-week';
import lessonRouter from './lesson';
import classRoomRouter from './class-room';
import timeTableRouter from './timetable';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/group', groupRouter);
router.use('/teacher', teacherRouter);
router.use('/discipline', disciplineRouter);
router.use('/dayOfWeek', dayOfWeek);
router.use('/lesson', lessonRouter);
router.use('/classRoom', classRoomRouter);
router.use('/timeTable', timeTableRouter);

export default router;
