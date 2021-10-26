import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../connection';

interface IDisciplineAttributes {
  id: number;
  name: string;
}

type DisciplineCreationAttributes = Optional<IDisciplineAttributes, 'id'>;

export interface IDisciplineInstance
  extends Model<IDisciplineAttributes, DisciplineCreationAttributes>,
    IDisciplineAttributes {}

const DisciplineModel = sequelize.define<IDisciplineInstance>('Discipline', {
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

export default DisciplineModel;
