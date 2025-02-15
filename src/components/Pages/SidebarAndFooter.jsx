import Sidebar from './Sidebar'
import Footer from './Footer'

import { Outlet } from "react-router";

export default function SidebarAndFooter() {
    return (
        <>

            <Sidebar />

            <div className="mb-[66px] lg:mb-[0]"></div> {/* Что б был отступ сверху у телефонного варианта*/}

            <Outlet />

            <Footer />

        </>
    )
}
