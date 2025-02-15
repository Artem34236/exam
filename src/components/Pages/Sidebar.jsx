import { Link } from "react-router"


export default function Sidebar() {

    const isSmollScreen = window.innerWidth < 767

    return (
        <div className="lg:mb-[0] py-[10px] w-full px-[10px] flex lg:flex-col items-center justify-between lg:px-[22px] bg-[#333333] lg:w-[120px] lg:h-screen lg:py-[32px] fixed top-[0] z-[3]">

            <div className="lg:flex-col flex gap-[15px] justify-between w-full sm:w-max items-center">
                <Link to={'/'}>
                    <img src="/Sidebar/logo.svg" alt="logo" />
                </Link>
                <Link to={'/navigation_page'}>
                    <img width={'34px'} src="/Sidebar/logoBottomLine's.svg" alt="logoBottomLine" />
                </Link>
            </div>

            <div className="flex hidden sm:flex lg:flex-col gap-[10px] items-center justify-between lg:gap-[40px]">
                <Link to={'/menu_editor'}> <img width={"60px"} src="/Sidebar/Plus.svg" alt="Plus" /> </Link>
                <a href="#"><img src="/Sidebar/YouTubeLogo.svg" alt="YouTubeLogo" /></a>
                <a href="#"><img src="/Sidebar/TelegramLogo.svg" alt="TelegramLogo" /></a>
                <a href="#"><img src="/Sidebar/VKLogo.svg" alt="VKLogo" /></a>
            </div>

        </div>
    )
}
