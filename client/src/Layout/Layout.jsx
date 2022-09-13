import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {

    return (
        <>
       
        <div>
        
            <div className="Outlet">
                <Outlet />
            </div>
          <div>TEST   hj</div>
            </div>
          

        </>
    )
}

export default Layout