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

}

export default TaskController;