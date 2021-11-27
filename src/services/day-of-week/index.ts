import DayOfWeekModel from '../../db/models/day-of-week';
import ApiError from '../../error/ApiError';
import { DAYS_OF_WEEK } from '../../shared/constants/daysOfWeek';

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

  async createDaysOfWeek() {
    await Promise.all(
      DAYS_OF_WEEK.map((day, i) => DayOfWeekModel.create({ name: day, dayOfWeek: i + 1 }))
    );
    return 'Success';
  }
}

export default new DayOfWeekService();
