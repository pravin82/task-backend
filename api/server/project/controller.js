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

  static getFilter(req){

  try {
     let assignerFilter = {}
     let projectFilter = {}
     let assigneeFilter = {}
     let{assignerSurname, assignerName, body,
         statusArr, name, assigneeName, assigneeSurname } = req.query

    if(statusArr) statusArr = statusArr.split(',');

    if(assignerName) assignerFilter.name = assignerName
    if(assignerSurname) assignerFilter.surname = assignerSurname
    if(body) projectFilter.body = body
  
    if(statusArr) projectFilter.status = {[Op.or] :statusArr}
    if(name) projectFilter.name = name
    if(assigneeName) assigneeFilter.name = assigneeName
    if(assigneeSurname) assigneeFilter.surname = assigneeSurname
    return {
      assigner:assignerFilter,
      project:projectFilter,
      assignee:assigneeFilter
    }

  } catch(error) {
    console.log(error)
    throw error
  }
   
}



  static async getProjects(req, res) {
    try {
      let filters = this.getFilter(req)
      
      const allProjects = await ProjectService.getProjects(filters);
      if (allProjects.length > 0) {
        util.setSuccess(200, 'Projects retrieved', allProjects);
      } else {
        util.setSuccess(200, 'No Project found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  





}
  

export default ProjectController;