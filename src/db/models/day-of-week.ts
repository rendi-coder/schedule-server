import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection';

interface IDayOfWeekAttributes {
  id: number;
  dayOfWeek: number;
  name: string;
}

export interface IDayOfWeekInstance
  extends Model<IDayOfWeekAttributes, IDayOfWeekAttributes>,
    IDayOfWeekAttributes {}

const DayOfWeekModel = sequelize.define<IDayOfWeekInstance>('DayOfWeek', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  dayOfWeek: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
});

export default DayOfWeekModel;
