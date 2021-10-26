import GroupModel from '../../db/models/group';
import ApiError from '../../error/ApiError';

class GroupService {
  async getGroups() {
    const rawGroups = await GroupModel.findAll();

    return rawGroups;
  }
  async getGroupById(id: string) {
    const group = await GroupModel.findOne({ where: { id } });
    if (!group) throw ApiError.badRequest('Group not found');

    return group;
  }

  async createGroup(name: string) {
    const group = await GroupModel.create({ name });
    
    return group;
  }
}

export default new GroupService();
