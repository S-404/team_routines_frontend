import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as TaskActionCreators from '../store/action-creators/tasks'

export const useActions=()=>{
    const dispatch = useDispatch();
    return bindActionCreators(TaskActionCreators, dispatch)
}