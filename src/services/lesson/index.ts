import LessonModel from '../../db/models/lesson';
import ApiError from '../../error/ApiError';

class LessonService {
  async getLessons() {
    const rawLessons = await LessonModel.findAll();

    return rawLessons;
  }
  async getLessonById(id: string) {
    const lesson = await LessonModel.findOne({ where: { id } });
    if (!lesson) throw ApiError.badRequest('Lesson not found');

    return lesson;
  }
}

export default new LessonService();
