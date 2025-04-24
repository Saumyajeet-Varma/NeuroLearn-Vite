import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="ubuntu py-4 bg-[#161a2d] text-center">
            <p className="text-white">All rights reserved &copy; <NavLink to='/' className="text-[#1ABC9C] font-semibold">NeuroLearn</NavLink></p>
        </footer>
    )
}

export default Footer
