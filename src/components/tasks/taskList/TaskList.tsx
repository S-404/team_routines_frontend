import React, {useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import LogoutButton from "../../LogoutButton";


const TaskList =  () => {
    const {tasks, loading, error} = useTypedSelector(state => state.task)
    const {fetchTasks} = useActions()

    useEffect(() => {
        fetchTasks(1)
    }, [])

    if (loading) {
        return <h1>Loading</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
<LogoutButton/>
            {tasks.map(task=>(
                <div key={`task_${task.ID}`}>
                    {task.TASK_NAME}
                </div>
            ))}

        </div>
    );
};

export default TaskList;