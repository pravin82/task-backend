import { Router } from 'express';
import TaskController from './controller';

const router = Router();


router.post('/', function(req, res){
  TaskController.addTask(req, res)
});

export default router;