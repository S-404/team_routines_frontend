import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchTasks,}  from '../store/action-creators/tasks'
import {checkPass} from "../store/action-creators/login";


export const useActions=()=>{
    const dispatch = useDispatch();
    return bindActionCreators({
            fetchTasks,
            checkPass,
        },
        dispatch)
}