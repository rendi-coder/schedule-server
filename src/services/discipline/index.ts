import DisciplineModel from '../../db/models/discipline';
import ApiError from '../../error/ApiError';

class DisciplineService {
  async getDisciplines() {
    const rawDesciplines = await DisciplineModel.findAll();

    return rawDesciplines;
  }

  async getDesciplineById(id: string) {
    const descipline = await DisciplineModel.findOne({ where: { id } });
    if (!descipline) throw ApiError.badRequest('Discipline not found');

    return descipline;
  }

  async createDescipline(name: string) {
    const descipline = await DisciplineModel.create({ name });
    
    return descipline;
  }
}

export default new DisciplineService();
