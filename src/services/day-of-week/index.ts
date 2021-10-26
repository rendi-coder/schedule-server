import DayOfWeekModel from '../../db/models/day-of-week';
import ApiError from '../../error/ApiError';

class DayOfWeekService {
  async getDaysOfWeek() {
    const daysOfWeek = await DayOfWeekModel.findAll();

    return daysOfWeek;
  }
  
  async getDayOfWeekById(id: string) {
    const dayOfWeek = await DayOfWeekModel.findOne({ where: { id } });
    if (!dayOfWeek) throw ApiError.badRequest('Day of Week not found');

    return dayOfWeek;
  }
}

export default new DayOfWeekService();
