import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../connection';

interface IGroupAttributes {
  id: number;
  name: string;
}

type IGroupCreationAttributes = Optional<IGroupAttributes, 'id'>;

export interface IGroupInstance
  extends Model<IGroupAttributes, IGroupCreationAttributes>,
    IGroupAttributes {}

const GroupModel = sequelize.define<IGroupInstance>('Group', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
});

export default GroupModel;
