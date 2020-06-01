import database from '../src/models';

class ProjectService {
  
  static async addProject(newProject) {
    try {
      return await database.Project.create(newProject);
    } catch (error) {
      throw error;
    }
  }
  
}

export default ProjectService;