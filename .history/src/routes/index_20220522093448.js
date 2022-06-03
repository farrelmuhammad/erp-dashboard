import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Grup from '../pages/DataMaster/Grup'
import Modul from '../pages/Modul'
import BuatModul from '../pages/Modul/buat.jsx'

const RouteApp = () => {

    return (
        <>
            <Routes>
                <Route path="/" exact element={<Dashboard />} />

                <Route path="/modul" exact element={<Modul />} />
                <Route path="/modul/buat" exact element={<BuatModul />} />

                <Route path="/grup" exact element={<Grup />} />
            </Routes>
        </>
    )
}

export default RouteApp;