import React from 'react'
import { Link } from 'react-router'
import LinkWithstyles from '../components/LinkWithstyles'
import Dilivery from "./Dilivery"
import { useState } from "react"

export default function () {

    const [wiew, setWiew] = useState(false)

    function activeModal() {
        setWiew(prew => {
            return !prew
        })
    }

    return (
        <div className='bg-[#333333] flex flex-col justify-between sm:gap-[12vh] gap-[6vh] items-center py-[30px] h-screen'>

            <Dilivery active={wiew} setActive={setWiew} />


            <div className='flex flex-col gap-[2vh] items-center'>
                <Link to={'/'}>
                    <img className='w-[64px] sm:w-[84px]' src="/Sidebar/logo.svg" alt="" />
                </Link>
                <Link to={-1}>
                    <img src="/Navigation/X.svg" alt="" />
                </Link>
            </div>

            <div className='flex flex-col gap-[1vh] sm:gap-[4vh] w-max'>

                <LinkWithstyles text={'Меню'} to={'/menu?page=1&page_size=4'} css={' px-[20px] !py-[10px] font-[700] !text-[20px] xl:!text-[32px]'} />
                <LinkWithstyles text={'Доставка'} to={'/delivery'} css={'px-[20px] !py-[10px] font-[700] !text-[20px] xl:!text-[32px]'} />

                <LinkWithstyles text={'Оплата'} to={'give_me_cash'} css={' px-[20px] !py-[10px] font-[700] !text-[20px] xl:!text-[32px]'} />
                <button onClick={ev => activeModal()} className="px-[20px] py-[10px] text-[20px] xl:text-[32px] font-[700] text-[#FFFFFF] text-center duration-300 min-w-[130px] xl:min-w-[160px] hover:bg-[#B59571]"                >Бронь столика</button>

            </div>

            <div className="flex gap-[10px] items-center">
                <Link to={'/menu_editor'}> <img width={"60px"} src="/Sidebar/Plus.svg" alt="Plus" /> </Link>
                <a href="#"><img src="/Sidebar/YouTubeLogo.svg" alt="YouTubeLogo" /></a>
                <a href="#"><img src="/Sidebar/TelegramLogo.svg" alt="TelegramLogo" /></a>
                <a href="#"><img src="/Sidebar/VKLogo.svg" alt="VKLogo" /></a>
            </div>
        </div>
    )
}
