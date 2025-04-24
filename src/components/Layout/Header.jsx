import { NavLink } from "react-router-dom"
import LogoText from "../LogoText"

function Header() {

    const isAuthenticated = false

    // #161a2d nav
    // #1ABC9C li

    return (
        <nav className="ubuntu py-3 px-12 flex justify-between items-center bg-[#161a2d]">
            <LogoText />
            <ul className="flex gap-8 justify-around items-center text-lg">
                <li>
                    <NavLink to="/about" className="text-white hover:text-[#1ABC9C]">About</NavLink>
                </li>
                <li>
                    <NavLink to="/features" className="text-white hover:text-[#1ABC9C]">Features</NavLink>
                </li>
                {isAuthenticated ?
                    <>
                        <li>
                            <NavLink to="/courses" className="text-white hover:text-[#1ABC9C]">Courses</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" className="text-white hover:text-[#1ABC9C]">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="text-white hover:text-[#1ABC9C]">Logout</NavLink>
                        </li>
                    </> : <>
                        <li>
                            <NavLink to="/register" className="text-white hover:text-[#1ABC9C]">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className="text-white hover:text-[#1ABC9C]">Login</NavLink>
                        </li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default Header