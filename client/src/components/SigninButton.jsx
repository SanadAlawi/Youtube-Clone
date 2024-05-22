import { Person } from "@mui/icons-material"
import { Link } from "react-router-dom"

const SigninButton = () => {
    return (
        <Link to='/register' className="text-blue-500 flex items-center gap-2 border border-blue-500 rounded px-2 py-1">
            <Person />
            <span className="uppercase">sign in</span>
        </Link>
    )
}

export default SigninButton