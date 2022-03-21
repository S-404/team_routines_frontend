import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import Login from "../pages/Login";
import Tasks from "../pages/Tasks";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const isAuth = useTypedSelector(state => state.auth.isAuth)
    return (
        isAuth?
            <Routes>
                {privateRoutes.map((route) =>
                    <Route
                        key={Date.now() + route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                )}

                <Route path="*" element={<Tasks/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) =>
                    <Route
                        key={Date.now() + route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                )}
                <Route path="*" element={<Login/>}/>
            </Routes>


    );
};

export default AppRouter;