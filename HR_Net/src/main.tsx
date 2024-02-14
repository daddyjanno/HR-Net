import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import store from './app/store'
import Home from './pages/Home'
import Employees from './pages/Employees'
import ErrorPage from './pages/ErrorPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Provider>
        </Router>
    </React.StrictMode>
)
