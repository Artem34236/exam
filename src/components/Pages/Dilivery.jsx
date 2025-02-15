import { useState } from "react"


export default function Dilivery({ active, setActive }) {

    function closeMenu(ev) {
        ev.stopPropagation()
        setActive(false)
    }

    return (
        active ? (<div onClick={(ev) => { closeMenu(ev) }} className={`top-[0] left-[0] bg-[#33333366] fixed w-full h-full z-[3] p-[10px]`}>
            <form onSubmit={ev => { ev.preventDefault(); closeMenu(ev) }} onClick={ev => ev.stopPropagation()} className="bg-[#333333] max-w-[416px] mx-auto p-[10px] sm:p-[30px] flex flex-col items-center mt-[30px] sm:mt-[10vh]">

                <div className="w-full flex justify-end mb-[10px]">
                    <button onClick={ev => closeMenu(ev)} type="button">
                        <img src="/Navigation/X.svg"    alt="" />
                    </button>
                </div>

                <div className="flex flex-col items-center sm:gap-[40px] gap-[20px] mb-[30px] sm:mb-[40px]">
                    <img src="/Sidebar/logo.svg" alt="" />
                    <h4 className="text-[20px] font-[700] text-[#FFFFFF]">Забронировать столик</h4>
                </div>

                <div className="flex flex-wrap sm:gap-[24px] gap-x-[24px] gap-y-[16px] max-w-[296px] mb-[20px] sm:mb-[40px]">
                    <input className="max-w-[296px] w-full bg-[#333333] sm:px-[20px] px-[10px] sm:py-[15px] py-[10px] text-[#FFFFFF] border-[1px] border-[#FFFFFF33] outline-none" type="text" placeholder="Имя" required />
                    <input className="max-w-[296px] w-full bg-[#333333] sm:px-[20px] px-[10px] sm:py-[15px] py-[10px] text-[#FFFFFF] border-[1px] border-[#FFFFFF33] outline-none" type="text" placeholder="Телефон" required />
                    <input className="max-w-[136px] bg-[#333333] sm:px-[20px] px-[10px] sm:py-[15px] py-[10px] text-[#FFFFFF] border-[1px] border-[#FFFFFF33] outline-none" type='text' placeholder="Гостей" required />
                    <input className="max-w-[136px] bg-[#333333] sm:px-[20px] px-[10px] sm:py-[15px] py-[10px] text-[#FFFFFF] border-[1px] border-[#FFFFFF33] outline-none" type="text" placeholder="Время" required />
                </div>

                <button type="submit" className={`text-[#FFFFFF] font-[400] xl:text-[16px] text-[14px] py-[15px] text-center duration-300 min-w-[130px] xl:min-w-[160px] hover:bg-[#B59571] hover:font-[700]`}>Забронировать</button>

            </form>
        </div>) : null
    )
}

