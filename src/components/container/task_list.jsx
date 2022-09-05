import React from 'react'
import {Task} from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent=() => {

    const defaultTask=new Task('Example','Default Description', false, LEVELS.NORMAL);
  return (
    <div>
        <div >
             Your Tasks:
        </div>
        {/*TODO: Aplicar un for/map para renderizar una lista*/}
        <TaskComponent task ={defaultTask}></TaskComponent>
    </div>
  );
};



export default TaskListComponent
