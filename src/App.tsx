import React, {useEffect} from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import AppRouter from "./router/appRouter";
import {useDispatch} from "react-redux";
import './styles/App.css'

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    if (localStorage.getItem('auth') && localStorage.getItem('userid')) {
        dispatch({type: 'SET_AUTH', value: true})
    }
  }, [])
  return (
      <Router>
        <AppRouter/>
      </Router>
  )
}
export default App;
