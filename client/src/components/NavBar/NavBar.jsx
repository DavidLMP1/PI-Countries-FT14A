import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"
import SearchBar from "../SearchBar/SearchBar"

const Navbar = () => {
    return (
        <header className="navbar">
            <nav >
                <p>
                    <NavLink to="/">
                        <button className="botonland">COUNTRIES LANDING PAGE</button>
                    </NavLink>
                    <NavLink to="/home/createActivity">
                        <button className="botoncreate">CREATE TOURIST ACTIVITY</button></NavLink>
                    <NavLink to="/home">
                        <button className="botonhome">HOME</button>
                    </NavLink>
                    <SearchBar />
                </p>
            </nav>
        </header>
    )
}

export default Navbar;