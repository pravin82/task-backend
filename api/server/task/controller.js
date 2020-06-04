import TaskService from './service';
import Util from '../utils/utils';

const util = new Util();

class TaskController {

  static async addTask(req, res) {
    const {name, description, AssignerId, status, score, ProjectId, assigneeIdArr} = req.body
    if (!(name && AssignerId && status && ProjectId )) {
      util.setError(400, 'Please provide all the fields');
      return util.send(res);
    }
    const newTask = req.body;
    try {
      const createdTask = await TaskService.addTask(newTask);
      
      assigneeIdArr.forEach((item) => {
       let assigneeTask = {
         assigneeId: item,
         taskId:createdTask.id
        }
        console.log("assig++++++",JSON.stringify(assigneeTask))
        const savedAssigneeTask =  TaskService.addAssigneeTask(assigneeTask);
      })
      util.setSuccess(201, 'Task Added!', createdTask);
      return util.send(res);
    
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }



  static async getTasks(req, res) {
    try {
      let{surname, name} = req.query;
      let whereClause = {};
      if(name) whereClause.name = {[Op.like]: '%' + name + '%'};
      if(surname) whereClause.surname = {[Op.like]: '%' + surname + '%'}
      
      const allUsers = await UserService.getUsers(whereClause);

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

export default TaskController;