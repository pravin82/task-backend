import ProjectService from './service';
import Util from '../utils/utils';

const util = new Util();

class ProjectController {

  static async addProject(req, res) {
    const {name, body, AssignerId, status,  assigneeIdArr} = req.body
    if (!(name && AssignerId && status  && assigneeIdArr)) {
      util.setError(400, 'Please provide all the fields');
      return util.send(res);
    }
    const newProject = req.body;
    try {
      const createdProject = await ProjectService.addProject(newProject);
      util.setSuccess(201, 'ProjectAdded!', createdProject);
      
      assigneeIdArr.forEach((item) => {
        let assigneeProject = {
          assigneeId: item,
          projectId:createdProject.id
        }
    const savedAssigneeProject =  ProjectService.addAssigneeProject(assigneeProject);
      });
      util.setSuccess(201, 'Project Added!', createdProject);
      return util.send(res);
    
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

}
  

export default ProjectController;