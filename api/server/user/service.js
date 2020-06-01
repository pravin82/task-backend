import database from '../src/models';


class UserService {
  
  static async addUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async getUsers(whereClause) {
    try {
      return await database.User.findAll({
        where: whereClause
      });

    } catch (error) {
      throw error;
    }
  }

}

export default UserService;