import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Layout = () => {
    return (
        <main className="flex bg-[#f8f8f8]">
            <Sidebar />

            <div className="flex flex-col flex-[7]">
                <Navbar />
                <Outlet />
            </div>
        </main>
    )
}

export default Layout