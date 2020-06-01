import database from '../src/models';
import {Sequelize}  from 'sequelize';
const Op = Sequelize.Op;

class UserService {
  
  static async addUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async getUsers(req, res) {
    try {
      let whereClause = {name:  {[Op.like]: '%p%'}};
      whereClause.surname = {[Op.like]: '%t%'}
      return await database.User.findAll({
        where: whereClause
      });

    } catch (error) {
      throw error;
    }
  }

}

export default UserService;