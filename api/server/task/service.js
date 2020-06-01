import database from '../src/models';

class TaskService {
  
  static async addTask(newTask) {
    try {
      return await database.Task.create(newTask);
    } catch (error) {
      throw error;
    }
  }

  static async addTaskAssignee(taskAssignee) {
    try {
      return await database.taskAssignee.create(taskAssignee);
    } catch (error) {
      throw error;
    }
  }

  
}

export default TaskService;