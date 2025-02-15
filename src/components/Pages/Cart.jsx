import React, { useEffect, useState } from 'react'
import { API } from '../axios'

export default function Cart() {

    const [order, setOrder] = useState([])

    useEffect(() => {
        async function getOrder() {
            API.get('/orders/?page_size=8')
                .then((data) => {
                    setOrder(data.data)
                })
                .catch(err => console.log(err))
        }

        getOrder()
    }, [])

    console.log(order);


    return (
        <div className='max-w-[1475px] mx-[auto] pt-[40px] md:pt-[32px] px-[10px]'>
            <div className='md:mb-[60px] mb-[20px]'>
                <h2 className='xl:ml-[220px] lg:ml-[125px] text-[#333333] text-[32px] font-[700]'>
                    Корзина:
                </h2>
            </div>
            <div className='grid gap-[24px] mt-10 lg:ml-[150px] xl:ml-[0] mb-[40px]' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))" }}>

                {true ? null : order.map((item, index) => {
                    return <div onClick={() => onclickToCard(item)} key={index} className='cursor-pointer w-full border-[1px] border-[#33333333]'>
                        <div>
                            <img loading="lazy" className='h-[220px] w-full object-cover' src={item.image || `/image.png`} alt="" />
                        </div>
                        <div className='p-[30px] text-center'>
                            <div>
                                <p className='text-[20px] mb-[25px] font-[700] text-[#333333]'>{item.name}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className={`text-[32px] font-[700] text-[#333333]`}>{Math.round(+item.sizes.price)} ₽</p>
                                <button className="text-[#333333] hover:text-[#FFFFFF] px-[10px] border border-[#33333377] font-[700] text-[16px] py-[10px] text-center duration-300 hover:border-[#B59571] hover:bg-[#B59571]">
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}
