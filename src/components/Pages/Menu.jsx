import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { API } from '../axios'
import Skeletron, { SkeletronSmoll } from '../components/Skeletron'

export default function Menu() {


    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [food, setFood] = useState([])
    const [search, setSerch] = useSearchParams()
    let currentSearch = new URLSearchParams(search)
    const navigate = useNavigate()


    function setCategories(item) {
        currentSearch.set('category', item.id)
        currentSearch.delete('page')
        setSerch(currentSearch)
    }

    function onClickToCard(item) {
        navigate(`/menu/${item.id}`)
    }

    function setPaginationLink(url) {
        const newCurrentSearch = new URLSearchParams(new URL(url).search)

        newCurrentSearch.get('page') ?
            currentSearch.set('page', newCurrentSearch.get('page')) :
            currentSearch.delete('page')

        setSerch(currentSearch)
    }

    useEffect(() => {
        async function getCategoris() {

            setIsLoading(true)

            await API.get('/categories/')
                .then(i => {
                    setCategory(i.data)
                })
                .catch(err => console.log(err))

            await API.get(`/food${search.toString() ? `?${search.toString()}` : ''}`)
                .then(i => {
                    setFood(i.data)
                })
                .catch(err => console.log(err))

            setIsLoading(false)

        }

        getCategoris()
    }, [search])



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


                <div className='grid gap-[24px] mt-10 lg:ml-[150px] xl:ml-[0] mb-[40px]' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))" }}>

                    {isLoading ? <Skeletron count={8} /> : (food?.results || food || []).map((item, index) => {
                        return <div onClick={() => onClickToCard(item)} key={index} className='cursor-pointer w-full border-[1px] border-[#33333333]'>
                            <div>
                                <img loading="lazy" className='h-[220px] w-full object-cover' src={item.image || `/image.png`} alt="" />
                            </div>
                            <div className='p-[30px] text-center'>
                                <div>
                                    <p className='text-[20px] mb-[25px] font-[700] text-[#333333]'>{item.name}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className={item.sizes.length > 1 ? `text-[26px] font-[600] text-[#333333]` : `text-[32px] font-[700] text-[#333333]`}>{item.sizes.length > 1 ? `От: ${Math.round(+item.sizes[0].price)}` : Math.round(+item.sizes[0].price)} ₽</p>
                                    <button className="text-[#333333] hover:text-[#FFFFFF] px-[10px] border border-[#33333377] font-[700] text-[16px] py-[10px] text-center duration-300 hover:border-[#B59571] hover:bg-[#B59571]">
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    })}

                </div>

                <div className='flex justify-center gap-[20px]'>
                    <button className='cursor-pointer' onClick={() => {
                        food.previous ? setPaginationLink(food.previous) : null
                    }}>
                        <img className='w-[40px]' src={food.previous ? "/pagination/left1.svg" : "/pagination/left2.svg"} alt="" />
                    </button>
                    <button className='cursor-pointer' onClick={() => {
                        food.next ? setPaginationLink(food.next) : null
                    }}>
                        <img className='w-[40px]' src={food.next ? "/pagination/right1.svg" : "/pagination/right2.svg"} alt="" />
                    </button>
                </div>

            </div>
        </div >
    )
}
