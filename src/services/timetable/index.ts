import {
  ClassRoomModel,
  DayOfWeekModel,
  DisciplineModel,
  GroupModel,
  LessonModel,
  TeacherModel,
} from '../../db/models';
import TimeTableModel from '../../db/models/timetable';
import TimeTableArticleModel from '../../db/models/timetable-article';
import ApiError from '../../error/ApiError';

interface ITimeTableCreationProps {
  dayOfWeekId: number;
  lessonId: number;
  groupId: number;
  disciplineId: number;
  teacherId: number;
  classRoomId: number;
}

class TimeTableService {
  async createTimeTable(timeTableCreationProps: ITimeTableCreationProps) {
    const timeTable = await TimeTableModel.create(timeTableCreationProps);
    return timeTable;
  }
  async getTimeTable() {
    const rawTimeTable = await TimeTableModel.findAll({
      include: SETTINGS.include,
    });

    return rawTimeTable;
  }
  async getTimeTableById(id: string) {
    const timeTable = await TimeTableModel.findOne({ where: { id } });
    if (!timeTable) throw ApiError.badRequest('TimeTable not found');

    return timeTable;
  }
  async getTimeTableByGroupId(groupId: string) {
    const timeTable = await TimeTableModel.findAll({
      where: { groupId },
      include: SETTINGS.include,
    });
    if (!timeTable) throw ApiError.badRequest('TimeTable not found');

    return timeTable;
  }
}

export default new TimeTableService();

const SETTINGS = {
  include: [
    {
      model: ClassRoomModel,
      as: 'classRoom',
    },
    {
      model: TeacherModel,
      as: 'teacher',
    },
    {
      model: GroupModel,
      as: 'group',
    },
    {
      model: LessonModel,
      as: 'lesson',
    },
    {
      model: DayOfWeekModel,
      as: 'dayOfWeek',
    },
    {
      model: DisciplineModel,
      as: 'discipline',
    },
    {
      model: TimeTableArticleModel,
      as: 'articles',
    },
  ],
};
