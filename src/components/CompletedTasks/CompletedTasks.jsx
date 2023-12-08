import { useContext } from 'react'
import styles from './CompletedTasks.module.css'
import { AppContext } from '../../AppContent'
import Title from '../Title/Title';
import TaskItem from '../TaskItem/TaskItem';

const CompletedTasks = () => {
    const {taskList} = useContext(AppContext);
  return (
    <div className={styles.container}>
 <Title iconName="completed" text="Tarefas concluidas"/>

 <ul className={styles.taskList}>
{taskList.map(
    (task) => task.done && <TaskItem  key={task.id} task={task}/>
)}
 </ul>
    </div>
  )
}

export default CompletedTasks;