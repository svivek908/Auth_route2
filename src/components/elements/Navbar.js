import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-secondary">
                 <div className="container">
                        <a href="#" className="navbar-brand">
                            Contact Book Made By ***Ajay Batham***
                        </a>
                        <div className="btn btn-light ml-auto">
                             <NavLink to="contacts/add">
                                create contact
                             </NavLink>
                        </div>
                 </div>
            
            </nav>
        </div>
    )
}

 
