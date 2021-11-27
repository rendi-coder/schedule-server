import ClassRoomModel from '../../db/models/class-room';
import ApiError from '../../error/ApiError';
import { generateClassRooms } from '../../shared/utils/generateClassRooms';

class ClassRoomService {
  async getClassRooms() {
    const classRooms = await ClassRoomModel.findAll();

    return classRooms;
  }

  async getClassRoomById(id: string) {
    const classRoom = await ClassRoomModel.findOne({ where: { id } });
    if (!classRoom) throw ApiError.badRequest('Class Room not found');

    return classRoom;
  }

  async createClassRoom(code: string) {
    const classRoom = await ClassRoomModel.create({ code });

    return classRoom;
  }

  async createClassRooms() {
    const classRooms = await this.getClassRooms();
    if (!classRooms.length) {
      const data = generateClassRooms(0, 45, 100, 3);
      await Promise.all(data.map((classRoom) => ClassRoomModel.create(classRoom)));
      return 'Success';
    }
  }
}

export default new ClassRoomService();
