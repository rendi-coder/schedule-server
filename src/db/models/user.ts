import { Model, DataTypes, Optional } from 'sequelize';

import sequelize from '../connection';

export interface UserAttributes {
  id?: number;
  login: string;
  password: string;
  
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

const UserModel = sequelize.define<UserInstance>('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default UserModel;
