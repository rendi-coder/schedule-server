import LessonModel from '../../db/models/lesson';
import ApiError from '../../error/ApiError';
import { LESSONS } from '../../shared/constants/lessons';

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
  async createLessons() {
    const lessons = await this.getLessons();
    if (!lessons.length) {
      await Promise.all(LESSONS.map((lesson, i) => LessonModel.create(lesson)));
      return 'Success';
    } else {
      return 'Lessons has been created';
    }
  }
}

export default new LessonService();
