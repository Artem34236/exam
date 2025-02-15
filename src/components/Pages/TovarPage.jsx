import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router'
import { API } from '../axios'
import { SkeletonBigCard, SkeletronSmoll } from '../components/Skeletron'

export default function TovarPage() {

    const [category, setCategory] = useState([])
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSerch] = useSearchParams()
    let currentSearch = new URLSearchParams(search)
    const { id } = useParams();
    const navigate = useNavigate()


    function setCategories(item) {
        currentSearch.set('category', item.id)
        navigate(`/menu?${currentSearch.toString()}`)
    }


    useEffect(() => {
        async function getCategoris() {

            setIsLoading(true)

            await API.get('/categories/')
                .then(i => {
                    setCategory(i.data)
                })
                .catch(err => console.log(err))

            await API.get(`/food/${id}`)
                .then(i => {
                    setFood(i.data)
                })
                .catch(err => console.log(err))

            setIsLoading(false)

        }

        getCategoris()
    }, [])



    return (
        <div className='max-w-[1475px] mx-[auto] pt-[40px] md:pt-[32px] px-[10px]'>

            <div className='xl:ml-[220px]'>

                <div className='flex w-full justify-end gap-[34px] items-center mb-[56px]'>
                    <Link className='text-[#333333] text-[16px]' to={'/user_home'}>
                        Личный кабинет
                    </Link>
                    <Link to={'/user'}>
                        <img src="/Menu/User.svg" alt="" />
                    </Link>
                    <Link to={'/cart'}>
                        <img src="/Menu/Cart.svg" alt="" />
                    </Link>
                </div>

                <div className='lg:ml-[120px] xl:ml-[0] flex gap-[20px] xl:gap-[40px] xl:justify-start justify-center flex-wrap mb-[60px]'>

                    {category.length <= 0 ? <SkeletronSmoll count={6} /> : category.map((item, index) => {
                        return (<button onClick={ev => setCategories(item)} key={index} className={`text-[16px] text-[#333333] ${search.get('category') == item.id ? 'active' : null}`}>{item.name}</button>)
                    })}

                </div>



                {isLoading ? <SkeletonBigCard /> : (

                    <div key={food.id} className='flex xl:flex-row flex-col items-center xl:items-start xl:justify-between'>
                        <div className='max-w-max mb-[30px]'>
                            <img className='max-w-full sm:max-w-[608px] w-auto object-cover sm:min-w-[600px]' src={`${food.image}` || `/image.png`} alt="imageFood" />
                        </div>

                        <div className='flex flex-col md:gap-[34px] gap-[26px] xl:w-max'>

                            <div className='pb-[34px] xl:text-left text-center border-[#33333333] border-b-[1px] xl:max-w-[306px]'>
                                <h2 className='md:text-[32px] text-[22px] font-[700] text-[#333333]'>{food.name}</h2>
                            </div>

                            <div className='flex flex-col xl:gap-[30px] gap-[20px]'>

                                {food.sizes?.map((item, index) => {
                                    return (
                                        <div key={index} className='pb-[34px] border-[#33333333] border-b-[1px] flex flex-col xl:items-start items-center gap-[28px]'>
                                            <div className='flex gap-[26px] items-end'>
                                                <h3 className='md:text-[32px] text-[22px] font-[700] text-[#333333]'>{Math.round(+item.price)} ₽</h3>
                                                <p className='relative md:text-[16px] text-[12px] font-[700] text-[#33333366] mb-[5px] before:content-[""] before:h-[0] before:border-[1px] before:border-[#33333366] before:rotate-[110deg] before:bg-[#33333366] before:w-[32px] before:absolute before:block before:top-[10px] before:left-[-30px]'>{item.name}</p>
                                            </div>

                                            <p className='md:text-[16px] text-[12px] font-[700] text-[#333333]'>Количество порций:</p>

                                            <div>
                                                <form className='flex w-full gap-[20px]'>
                                                    <input className='px-[25px] py-[15px] border-[1px] bordert-[#33333333] outline-none max-w-[84px]' type="number" min={1} max={30} defaultValue={1} />
                                                    <button className="text-[#333333] max-w-[151px] hover:text-[#FFFFFF] px-[10px] border border-[#33333377] font-[700] text-[16px] py-[10px] text-center duration-300 hover:border-[#B59571] hover:bg-[#B59571]">
                                                        В корзину
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>

                            <div className='flex flex-col md:gap-[30px] gap-[12px]'>
                                <h4 className='md:text-[32px] text-[22px] font-[700] text-[#333333] xl:text-left text-center'>Описание</h4>
                                <p className='md:text-[20px] text-[14px] font-[700] text-[#333333]  max-w-[306px]'>{food.description}</p>
                            </div>

                        </div>
                    </div>

                )}


            </div>
        </div>
    )
}
