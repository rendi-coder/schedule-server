import ClassRoomModel from '../../db/models/class-room';
import ApiError from '../../error/ApiError';

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
}

export default new ClassRoomService();
