import UserService from './service';
import Util from '../utils/utils';

const util = new Util();

class UserController {

  static async addUser(req, res) {
    const {name, email, surname} = req.body
    if (!(name && email)) {
      util.setError(400, 'Please provide name and email');
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await UserService.addUser(newUser);
      util.setSuccess(201, 'UserAdded!', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getUsers(req, res) {
    try {
      const allUsers = await UserService.getUsers(req, res);
      console.log("allUsers+++++", allUsers)
      if (allUsers.length > 0) {
        util.setSuccess(200, 'Users retrieved', allUsers);
      } else {
        util.setSuccess(200, 'No user found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  

}

export default UserController;