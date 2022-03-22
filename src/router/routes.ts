import About from "../pages/About";
import Tasks from "../pages/Tasks";
import Login from "../pages/LoginPage/Login";


export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/tasks', component: Tasks},
]

export const publicRoutes = [
    {path: '/login', component: Login},
]

export const navbarOptions = [
    {name: 'ABOUT', to: '/about'},
    {name: 'LOGOUT', to: '/login'},
]