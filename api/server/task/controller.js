import TaskService from './service';
import Util from '../utils/utils';
import {Sequelize}  from 'sequelize';
const Op = Sequelize.Op;

const util = new Util();

class TaskController {

  static async addTask(req, res) {
    const {name, description, AssignerId, status, score, ProjectId, assigneeIdArr} = req.body
    if (!(name && AssignerId && status && ProjectId && assigneeIdArr)) {
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
        const savedAssigneeTask =  TaskService.addAssigneeTask(assigneeTask);
      })
      util.setSuccess(201, 'Task Added!', createdTask);
      return util.send(res);
    
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  

static getFilter(req){

  try {
     let assignerFilter = {}
     let taskFilter = {}
     let assigneeFilter = {}
     let{assignerSurname, assignerName, description, minScore, maxScore,
         statusArr, name, assigneeName, assigneeSurname } = req.query

    if(statusArr) statusArr = statusArr.split(',');

    if(assignerName) assignerFilter.name = assignerName
    if(assignerSurname) assignerFilter.surname = assignerSurname
    if(description) taskFilter.description = description
    if(minScore || maxScore) {
      if(minScore && maxScore)  taskFilter.score = { [Op.gte]: minScore , [Op.lte]: maxScore}
      else if(minScore) taskFilter.score = { [Op.gte]: minScore}
      else taskFilter.score = { [Op.lte]: maxScore}
    }
    if(statusArr) taskFilter.status = {[Op.or] :statusArr}
    if(name) taskFilter.name = name
    if(assigneeName) assigneeFilter.name = assigneeName
    if(assigneeSurname) assigneeFilter.surname = assigneeSurname
    return {
      assigner:assignerFilter,
      task:taskFilter,
      assignee:assigneeFilter
    }

  } catch(error) {
    console.log(error)
    throw error
  }
   
}



  static async getTasks(req, res) {
    try {
      console.log("caleddgettss+++++")
      let filters = this.getFilter(req)
      console.log("whereClause++++", filters)
      
      const allTasks = await TaskService.getTasks(filters);
      console.log("allTasks")
      if (allTasks.length > 0) {
        util.setSuccess(200, 'Tasks retrieved', allTasks);
      } else {
        util.setSuccess(200, 'No Task found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  



}

export default TaskController;