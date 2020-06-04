import database from '../src/models';

class ProjectService {
  
  static async addProject(newProject) {
    try {
      return await database.Project.create(newProject);
    } catch (error) {
      throw error;
    }
  }

  static async addAssigneeProject(assigneeProject) {
    try {
      return await database.AssigneeProject.create(assigneeProject);
    } catch (error) {
      throw error;
    }
  }

  static async getProjects(filters) {
    try {
      return await database.Project.findAll({
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
        where:filters.project
      });

    } catch (error) {
      throw error;
    }
  }

  
}

export default ProjectService;