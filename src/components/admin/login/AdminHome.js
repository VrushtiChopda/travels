import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './AdminNavbar'
import AdminNavbar from './AdminNavbar'
function AdminHome() {
    return (
        <div style={{ background: "#f0f0f0" }}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2' >
                        <Sidebar>
                            <div style={{ height: '100vh' }}>
                                <Menu
                                    menuItemStyles={{
                                        button: {
                                            // the active class will be added automatically by react router
                                            // so we can use it to style the active menu item
                                            [`&.active`]: {
                                                backgroundColor: '#13395e',
                                                color: '#b6c8d9',
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem> <h2 className='m-3 logo'>TRAVELS</h2></MenuItem>
                                    <MenuItem component={<Link to="/userdetail" />}> User Details</MenuItem>
                                    <MenuItem component={<Link to="/packages" />}> Packages</MenuItem>
                                    <MenuItem component={<Link to="/destination" />}>Destination</MenuItem>
                                    <MenuItem component={<Link to="/contact" />}>Contact</MenuItem>
                                    <MenuItem component={<Link to="/booking" />}>Booking</MenuItem>
                                </Menu>
                            </div>
                        </Sidebar>
                    </div>
                    <div className='col-10'>
                        <AdminNavbar />
                        <Outlet />
                    </div>
                </div>
            </div>
        </div >



    )
}

export default AdminHome
