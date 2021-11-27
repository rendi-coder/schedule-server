import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../connection';

interface ILessonAttributes {
  id: number;
  number: number;
  startTime: string;
  endTime: string;
}

type LessonCreationAttributes = Optional<ILessonAttributes, 'id'>;

export interface ILessonInstance
  extends Model<ILessonAttributes, LessonCreationAttributes>,
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
