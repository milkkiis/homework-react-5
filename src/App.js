import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RedirectPage from "./pages/RedirectPage";
import OpenClosePage from "./pages/OpenClosePage";

const App = () => {
    return (
        // Router включает маршрутизацию для всего приложения
        <Router>
            <div className="app">
                <nav className="nav">
                    <NavLink to="/" end className="nav-link">
                        Главная
                    </NavLink>
                    <NavLink to="/redirect" className="nav-link">
                        Redirect
                    </NavLink>
                    <NavLink to="/open-close" className="nav-link">
                        Открыть/Закрыть
                    </NavLink>
                </nav>

                {/* Каждому адресу соответствует своя страница */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/redirect" element={<RedirectPage />} />
                    <Route path="/open-close" element={<OpenClosePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;