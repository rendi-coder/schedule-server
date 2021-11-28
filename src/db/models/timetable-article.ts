import { Model, DataTypes, Optional } from 'sequelize';
import { TimeTableModel } from '.';
import sequelize from '../connection';

interface ITimeTableArticleAttributes {
  id: number;
  title: string;
  date: string;
  description: string;
  timeTableId: number;
}

export type ITimeTableArticleCreationAttributes = Optional<ITimeTableArticleAttributes, 'id'>;

export interface ITimeTableArticleInstance
  extends Model<ITimeTableArticleAttributes, ITimeTableArticleCreationAttributes>,
    ITimeTableArticleAttributes {}

const TimeTableArticleModel = sequelize.define<ITimeTableArticleInstance>('TimeTableArticle', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  date: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  timeTableId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
});

TimeTableModel.hasMany(TimeTableArticleModel, {
  as: 'articles',
  foreignKey: {
    name: 'timeTableId',
  },
});

export default TimeTableArticleModel;
