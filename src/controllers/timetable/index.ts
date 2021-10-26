import { createTimeTable } from './create-timetable';
import { getTimeTable, getTimeTableByGroup, getTimeTableById } from './get-timetable';

const timeTableController = {
  createTimeTable,
  getTimeTable,
  getTimeTableById,
  getTimeTableByGroup,
};

export default timeTableController;
