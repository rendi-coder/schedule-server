import TeacherMoel from '../../db/models/teacher';
import ApiError from '../../error/ApiError';

class TeacherService {
  async getTeachers() {
    const rawTeachers = await TeacherMoel.findAll();

    return rawTeachers;
  }
  async getTeacherById(id: string) {
    const teacher = await TeacherMoel.findOne({ where: { id } });
    if (!teacher) throw ApiError.badRequest('Teacher not found');

    return teacher;
  }
  async createTeacher(name: string, surname: string, email: string) {
    const teacher = await TeacherMoel.create({ name, surname, email });
    
    return teacher;
  }
}

export default new TeacherService();
