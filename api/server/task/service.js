import database from '../src/models';

class TaskService {
  
  static async addTask(newTask) {
    try {
      return await database.Task.create(newTask);
    } catch (error) {
      throw error;
    }
  }

  static async addAssigneeTask(newAssigneeTask) {
    try {
      return await database.AssigneeTask.create(newAssigneeTask);
    } catch (error) {
      throw error;
    }
  }



 static async getTasks(filters) {
    try {
      return await database.Task.findAll({
        include: [
        {
          model: database.User,
          as: 'Assigner',
          where: filters.assigner 
        },
        { model:database.User,
          as: 'Assignee',
          where: filters.assignee

        }
        ],
        where:filters.task
      });

    } catch (error) {
      throw error;
    }
  }


  
}

export default TaskService;