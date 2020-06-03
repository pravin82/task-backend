import TaskService from './service';
import Util from '../utils/utils';

const util = new Util();

class TaskController {

  static async addTask(req, res) {
    const {name, description, assigner_id, status, score, project_id} = req.body
    if (!(name && assigner_id && status && project_id)) {
      util.setError(400, 'Please provide all the fields');
      return util.send(res);
    }
    const newTask = req.body;
    try {
      const createdTask = await TaskService.addTask(newTask);
      util.setSuccess(201, 'TaskAdded!', createdTask);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

   static async addTaskAssignee(req, res) {
    const {task_id, assignee_id }= req.body;
    if (!(assignee_id && task_id)) {
      util.setError(400, 'Please provide all the fields');
      return util.send(res);
    }
    const taskAssignee = req.body;
    try {
      const createdTaskAssignee = await TaskService.addTaskAssignee(taskAssignee);
      util.setSuccess(201, 'Task Assignee Added!', createdTaskAssignee);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
/*
  static getWhereClause(query){
    const {minScore, maxScore, assigner_name, assigner_surname,
           assignee_name, assignee_surname, assignee_id,  statusArr} = req.query
    let whereClause = {}
    if()
  }
*/

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