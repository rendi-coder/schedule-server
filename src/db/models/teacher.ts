import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../connection';

interface ITeacherAttributes {
  id: number;
  name: string;
  surname: string;
  email: string;
}

type ITeacherCreationAttributes = Optional<ITeacherAttributes, 'id'>;

export interface ITeacherInstance
  extends Model<ITeacherAttributes, ITeacherCreationAttributes>,
    ITeacherAttributes {}

const TeacherModel = sequelize.define<ITeacherInstance>('Teacher', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  surname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

export default TeacherModel;
