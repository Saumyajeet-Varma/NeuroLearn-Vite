import { Link } from "react-router-dom"
import Logo from "./Logo"

function LogoText() {

    return (
        <Link to="/" className="text-white">
            <div className="flex items-center">
                <Logo />
                <p className="text-3xl">NeuroLearn</p>
            </div>
        </Link>
    )
}

export default LogoText
