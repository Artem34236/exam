import { Link } from 'react-router'
import LineAndText from '../components/LineAndText'
import LinkWithstyles from '../components/LinkWithstyles'
import Dilivery from "./Dilivery"
import { useState } from "react"

export default function Footer() {

    const [wiew, setWiew] = useState(false)

    function activeModal() {
        setWiew(prew => {
            return !prew
        })
    }

    const h2 = 'text-[#B59571] md:text-[32px] text-[20px] font-[700]'
    const span = 'md:text-[64px] text-[30px]'
    const p = 'text-[#333333] md:text-[18px] text-[14px]'


    return (

        <footer className='bg-[#FFFFFF] xl:pt-[150px] pt-[70px]'>

            <Dilivery active={wiew} setActive={setWiew} />


            <div className='max-w-max mx-auto mb-[30px] xl:mb-[100px] px-[10px] md:p-[0]'>

                <LineAndText css={'xl:!ml-[220px] !mx-auto mb-[30px] lg:!mb-[80px]'}>Контакты</LineAndText>

                <div className='flex xl:flex-row flex-col flex-wrap gap-[80px] xl:gap-[160px] xl:ml-[220px] items-center justify-center'>

                    <div className='flex flex-wrap justify-between max-w-[350px] gap-[50px]'>

                        <div>
                            <h2 className={h2}><span className={span}>2</span> мин</h2>
                            <p className={p}>из центра <br /> Санкт-Петербурга</p>
                        </div>

                        <div>
                            <h2 className={h2}><span className={span}>12</span> мин</h2>
                            <p className={p}>из города <br /> Зеленогорск</p>
                        </div>

                        <div>
                            <h2 className={h2}><span className={span}>42</span> мин</h2>
                            <p className={p}>из аэропорта <br /> Пулково</p>
                        </div>

                        <div>
                            <h2 className={h2}><span className={span}>52</span> мин</h2>
                            <p className={p}>из города <br /> Павловск</p>
                        </div>

                    </div>

                    <div className='relative'>

                        <img className='w-[746px] hidden sm:block min-h-[334px]' src="/Footer/Map.png" alt="" />

                        <div className='sm:absolute block bg-[#5B5B5B] xl:top-[34px] xl:left-[-110px] sm:top-[15px] top-[0] left-[0] sm:left-[24%] lg:left-[22%] p-[20px] lg:p-[40px]'>

                            <div className='flex gap-[20px] mb-[20px]'>
                                <img src="/Footer/Point.svg" alt="Point" />
                                <p className='text-[#FFFFFF] text-[16px]'>Санкт-Петербург,Северная дорога, 11 </p>
                            </div>

                            <div className='flex gap-[20px] mb-[25px]'>
                                <img src="/Footer/Phone.svg" alt="Phone" />
                                <p className='text-[#FFFFFF] text-[16px]'>+7 (921) 777-77-77 </p>
                            </div>

                            <div>
                                <h5 className='text-[20px] font-[700] text-[#FFFFFF] mb-[15px]'>Время работы</h5>
                                <h5 className='text-[#FFFFFF] text-[18px] font-[700] mb-[15px]'>Вск-Чт<span className='text-[#FFFFFF] text-[18px] font-[400]'>с 12:00 до 23:00</span></h5>
                                <h5 className='text-[#FFFFFF] text-[18px] font-[700] mb-[40px]'>Пт-Сб<span className='text-[#FFFFFF] text-[18px] font-[400]'>с 12:00 до 03:00</span></h5>
                            </div>

                            <div className='flex gap-[20px] justify-center flex-wrap'>
                                <button onClick={ev => activeModal()} className="text-[#FFFFFF] text-[16px] xl:text-[20px] font-[700] py-[10px] px-[20px] text-center duration-300 min-w-[130px] xl:min-w-[160px] border border-[#fff] hover:border-[#5B5B5B] hover:bg-[#B59571]">Бронь столика</button>
                                <LinkWithstyles text={'Задать вопрос'} to={'/support'} css={'px-[20px] !py-[10px] border-[1px] border-[#fff] hover:border-[#5B5B5B] font-[700] !text-[16px] xl:!text-[20px]'} />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className='bg-[#333333] py-[36px]'>
                <div className='max-w-[1470px] mx-auto flex items-center justify-between px-[10px] lg:pl-[220px] gap-[10px]'>

                    <Link to={'/'}>
                        <img src="/Sidebar/logo.svg" alt="logo" />
                    </Link>
                    <Link className='text-[#FFFFFF] text-[12px]' to={'/privat_politik'}>
                        Политика Конфиденциальности
                    </Link>
                    <h5 className='text-[#FFFFFF] font-[700] hidden sm:block'>Дизайн d-e-n.ru</h5>

                </div>
            </div>

        </footer>
    )
}
