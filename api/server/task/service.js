import database from '../src/models';

class TaskService {
  
  static async addTask(newTask) {
    try {
      return await database.Task.create(newTask);
    } catch (error) {
      throw error;
    }
  }

  static async addAssigneeTask(assigneeTask) {
    try {
      return await database.AssigneeTask.create(assigneeTask);
    } catch (error) {
      throw error;
    }
  }

  
}

export default TaskService;