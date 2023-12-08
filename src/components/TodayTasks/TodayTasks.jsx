import { useContext } from 'react'
import styles from './TodayTasks.module.css'
import Title from '../Title/Title';
import { AppContext } from '../../AppContent';
import TaskItem from '../TaskItem/TaskItem';

const TodayTasks = () => {

    const { taskList, progressBarValue } = useContext(AppContext);

    return (
        <div className={styles.container}>
            <Title iconName={"list"} text={"Tarefas de hoje"} />
            {progressBarValue === 100 || taskList.length === 0 ? (
                <span className={styles.todayTasksMessage}>
                    Você não tem tarefas disponiveis </span>
            ) : (
                <ul className={styles.tasklist}>
                    {taskList.map(
                        (task) => !task.done && <TaskItem key={task.id} task={task} />
                    )}
                </ul>
            )}

        </div>
    );
}

export default TodayTasks;