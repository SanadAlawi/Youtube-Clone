import { Search } from "@mui/icons-material"
import SigninButton from "./SigninButton"

const Navbar = () => {
    return (
        <header className="p-4 h-[80px] sticky top-0 bg-white shadow-sm flex justify-between gap-2 items-center">
            <span></span>

            <div className="flex items-center border border-gray-400 rounded w-[100%] px-2 p-1 md:w-[50%]">
                <input type="text" placeholder="Search..." className="text-xl border-none outline-none w-full" />
                <Search />
            </div>

            <SigninButton />

        </header>
    )
}

export default Navbar