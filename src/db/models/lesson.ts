import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection';

interface ILessonAttributes {
  id: number;
  number: string;
  startTime: string;
  endTime: string;
}

export interface ILessonInstance
  extends Model<ILessonAttributes, ILessonAttributes>,
    ILessonAttributes {}

const LessonModel = sequelize.define<ILessonInstance>('Lesson', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  number: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  startTime: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  endTime: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

export default LessonModel;
