import { Model, DataTypes, Optional } from 'sequelize';
import {
  ClassRoomModel,
  DayOfWeekModel,
  DisciplineModel,
  GroupModel,
  LessonModel,
  TeacherModel,
} from '.';
import sequelize from '../connection';

interface ITimeTableAttributes {
  id: number;
  dayOfWeekId: number;
  lessonId: number;
  groupId: number;
  disciplineId: number;
  teacherId: number;
  classRoomId: number;
}

type ITimeTableCreationAttributes = Optional<ITimeTableAttributes, 'id'>;

export interface ITimeTableInstance
  extends Model<ITimeTableAttributes, ITimeTableCreationAttributes>,
    ITimeTableAttributes {}

const TimeTableModel = sequelize.define<ITimeTableInstance>('TimeTable', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  dayOfWeekId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  lessonId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  groupId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  disciplineId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  teacherId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  classRoomId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
});

DayOfWeekModel.hasMany(TimeTableModel, {
  as: 'timeTable',
  sourceKey: 'id',
  foreignKey: {
    name: 'dayOfWeekId',
  },
});
TimeTableModel.belongsTo(DayOfWeekModel, {
  as: 'dayOfWeek',
  foreignKey: {
    name: 'dayOfWeekId',
  },
  targetKey: 'id',
});

LessonModel.hasMany(TimeTableModel, {
  as: 'timeTable',
  sourceKey: 'id',
  foreignKey: {
    name: 'lessonId',
  },
});
TimeTableModel.belongsTo(LessonModel, {
  as: 'lesson',
  foreignKey: {
    name: 'lessonId',
  },
  targetKey: 'id',
});

GroupModel.hasMany(TimeTableModel, {
  as: 'timeTable',
  sourceKey: 'id',
  foreignKey: {
    name: 'groupId',
  },
});
TimeTableModel.belongsTo(GroupModel, {
  as: 'group',
  foreignKey: {
    name: 'groupId',
  },
  targetKey: 'id',
});

DisciplineModel.hasMany(TimeTableModel, {
  as: 'timeTable',
  sourceKey: 'id',
  foreignKey: {
    name: 'disciplineId',
  },
});
TimeTableModel.belongsTo(DisciplineModel, {
  as: 'discipline',
  foreignKey: {
    name: 'disciplineId',
  },
  targetKey: 'id',
});

TeacherModel.hasMany(TimeTableModel, {
  as: 'timeTable',
  sourceKey: 'id',
  foreignKey: {
    name: 'teacherId',
  },
});
TimeTableModel.belongsTo(TeacherModel, {
  as: 'teacher',
  foreignKey: {
    name: 'teacherId',
  },
  targetKey: 'id',
});

ClassRoomModel.hasMany(TimeTableModel, {
  as: 'timeTable',
  sourceKey: 'id',
  foreignKey: {
    name: 'classRoomId',
  },
});
TimeTableModel.belongsTo(ClassRoomModel, {
  as: 'classRoom',
  foreignKey: {
    name: 'classRoomId',
  },
  targetKey: 'id',
});

export default TimeTableModel;
