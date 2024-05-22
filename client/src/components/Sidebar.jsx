import { DarkMode, Explore, Gamepad, Help, Home, LibraryAdd, LiveTv, Movie, MusicNote, Newspaper, Report, Settings, Sports, Subscriptions, YouTube } from "@mui/icons-material"
import { Link } from "react-router-dom"
import SigninButton from "./SigninButton"

const Sidebar = () => {
    const linkStyle = "flex flex-col text-sm items-center gap-2 hover:bg-gray-200 md:flex-row md:text-base"
    const linkTextStyle = "capitalize"

    return (
        
        <nav className="flex-[1.5] flex flex-col gap-4 sticky top-0 bg-white text-black h-screen p-4 overflow-auto">
            <Link to='/' className={`${linkStyle} mb-4`}>
                <YouTube className="text-[#ff0000]" />
                <span className={`${linkTextStyle} hidden md:block`}>youtube</span>
            </Link>


            <Link to='/' className={linkStyle}>
                <Home />
                <span className={linkTextStyle}>home</span>
            </Link>
            <Link to='/' className={linkStyle}>
                <Explore />
                <span className={linkTextStyle}>explore</span>
            </Link>
            <Link to='/' className={linkStyle}>
                <Subscriptions />
                <span className={linkTextStyle}>subscriptions</span>
            </Link>


            <hr />

            <Link to='/' className={linkStyle}>
                <LibraryAdd />
                <span className={linkTextStyle}>library</span>
            </Link>
            <Link to='/' className={linkStyle}>
                <Explore />
                <span className={linkTextStyle}>explore</span>
            </Link>

            <div className="hidden md:flex md:flex-col gap-4">

                <hr />
                <div className="flex flex-col gap-2 items-start">
                    <h1>Sign in to like videos, comment, and subscribe.</h1>
                    <SigninButton />
                </div>
                <hr />

                <h1 className="uppercase text-[#cecece] font-bold">best of youtube</h1>

                <Link to='/' className={linkStyle}>
                    <MusicNote />
                    <span className={linkTextStyle}>music</span>
                </Link>
                <Link to='/' className={linkStyle}>
                    <Sports />
                    <span className={linkTextStyle}>sports</span>
                </Link>
                <Link to='/' className={linkStyle}>
                    <Gamepad />
                    <span className={linkTextStyle}>gaming</span>
                </Link>
                <Link to='/' className={linkStyle}>
                    <Movie />
                    <span className={linkTextStyle}>movies</span>
                </Link>
                <Link to='/' className={linkStyle}>
                    <Newspaper />
                    <span className={linkTextStyle}>news</span>
                </Link>
                <Link to='/' className={linkStyle}>
                    <LiveTv />
                    <span className={linkTextStyle}>live</span>
                </Link>

                <hr />

                <Link to='/' className={linkStyle}>
                    <Settings />
                    <span className={linkTextStyle}>settings</span>
                </Link>
                <Link to='/' className={linkStyle}>
                    <Report />
                    <span className={linkTextStyle}>report</span>
                </Link>
                <Link to='/' className={linkStyle}>
                    <Help />
                    <span className={linkTextStyle}>help</span>
                </Link>
                <Link to='/' className={linkStyle}>
                    <DarkMode />
                    <span className={linkTextStyle}>dark mode</span>
                </Link>
            </div>


        </nav>
    )
}

export default Sidebar