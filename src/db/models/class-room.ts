import { Model, DataTypes, Optional } from 'sequelize';
import { TimeTableModel } from '.';
import sequelize from '../connection';

interface IClassRoomAttributes {
  id: number;
  code: string;
}

type ClassRoomeCreationAttributes = Optional<IClassRoomAttributes, 'id'>;

export interface IClassRoomInstance
  extends Model<IClassRoomAttributes, ClassRoomeCreationAttributes>,
    IClassRoomAttributes {}

const ClassRoomModel = sequelize.define<IClassRoomInstance>('ClassRoom', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  code: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
});

export default ClassRoomModel;
