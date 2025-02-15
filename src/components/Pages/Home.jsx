import SectionDescription from "../components/SectionDescription"
import LineAndText from "../components/LineAndText"
import LinkWithstyles from "../components/LinkWithstyles"
import Dilivery from "./Dilivery"
import { useState } from "react"

export default function Home() {

  const [wiew, setWiew] = useState(false)

  function activeModal() {
    setWiew(prew => {
      return !prew
    })
  }

  return (<>

    <Dilivery active={wiew} setActive={setWiew}/>


    <section className="Home">
      <div  className='bg-center bg-cover bg-[url("/Home_page/Home_background.png")] bg-no-repeat py-[30px] md:px-[100px] md:min-h-[560px] max-h-[1000px] h-[93.37vh] md:h-[100vh] '>

        <nav className="flex gap-[10px] justify-center lg:justify-end flex-wrap">
          <LinkWithstyles to={'/menu?page=1&page_size=4'} text={'Меню'} />
          <LinkWithstyles to={'/delivery'} text={'Доставка'} />
          <LinkWithstyles to={'/give_me_cash'} text={'Оплата'} />
          <button onClick={ev => activeModal()} className={`text-[#FFFFFF] font-[400] xl:text-[16px] text-[14px] py-[15px] text-center duration-300 min-w-[130px] xl:min-w-[160px] hover:bg-[#B59571] hover:font-[700]`}>Бронь столика</button>
        </nav>

        <div className='ml-[20px] lg:ml-[10%] mt-[60px] md:mt-[50vh] flex justify-center md:block'>
          <h1 className="max-w-[400px] text-[36px] xl:text-[54px] md:text-[36px] md:max-w-[620px] xl:max-w-[889px] text-[#FFFFFF] font-[700]">Видовой ресторан Food Exxe Relo на Крестовском острове</h1>
        </div>

      </div>
    </section>



    <SectionDescription
      categoty={'о ресторане'}
      title={'Food Exxe Relo'}
      text1={'Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.'}
      text2={'Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula. Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in viverra. In adipiscing tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa dictum. Cras at quis in eu, faucibus feugiat vel. At.'}
    />



    <SectionDescription
      categoty={'Меню'}
      title={'Меню'}
      text2={'Nunc cras cras aliquet blandit faucibus massa sagittis semper.'}
      text1={'At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat fermentum pellentesque ac at. Vitae venenatis faucibus urna mi eget vitae quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum dolor, vitae morbi.'}
    >

      <div className="flex flex-col xl:flex-row xl:justify-center items-center gap-[24px] mt-[80px] xl:ml-[220px]">

        <div className="flex flex-col justify-center w-[310px] md:w-[416px]">
          <div className="border-[1px] border-[#33333333] h-[180px]  md:h-[240px] flex justify-center">
            <img className="w-[270px] h-[180px] mt-[20px] xl:mt-[40px] md:w-[336px] md:h-[240px]" src="/Home_page/menuDescription1.png" alt="menuDescriptionImage1" />
          </div>
          <LineAndText css={'xl:!w-full !w-full xl:!ml-[0px] justify-center xl:mb-[0] xl:mt-[64px] mt-[40px] w-full'}>Основное меню</LineAndText>
        </div>

        <div className="flex flex-col justify-center w-[310px] md:w-[416px]">
          <div className="border-[1px] border-[#33333333] h-[180px]  md:h-[240px] flex justify-center">
            <img className="w-[270px] h-[180px] mt-[20px] xl:mt-[40px] md:w-[336px] md:h-[240px]" src="/Home_page/menuDescription2.png" alt="menuDescriptionImage2" />
          </div>
          <LineAndText css={'xl:!w-full !w-full xl:!ml-[0px] justify-center xl:mb-[0] xl:mt-[64px] mt-[40px] w-full'}>Барная карта</LineAndText>
        </div>

      </div>

    </SectionDescription>



    <SectionDescription
      categoty={'доставка'}
      title={'Служба доставки'}
      cssH2={'xl:max-w-[306px] max-w-[310px]'}
      cssDiv={'2xl:gap-[24px] xl:gap-[16px]'}
      cssLine={'xl:ml-[130px]'}
      text1={'Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et in vitae pellentesque non, lectus orci natoque faucibus suspendisse. Semper aliquam id et ultrices velit donec lacus. In odio sit nibh volutpat cras placerat sit feugiat dignissim. Rutrum et suspendisse tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet cursus dui, nulla id massa. Hendrerit nam enim semper porttitor imperdiet diam semper. Nulla sit etiam cras morbi enim elementum euismod sapien.'}
    >
      <div className="xl:mt-[60px] mt-[20px] flex justify-center xl:justify-end xl:gap-[30px] gap-[20px] mx-auto xl:max-w-[960px] 2xl:max-w-[905px] flex-wrap">
        <button onClick={ev => activeModal()} className="xl:ml-[210px] text-[#333333] hover:text-[#FFFFFF] px-[20px] xl:px-[30px] border border-[#33333377] font-[700] text-[16px] xl:text-[20px] py-[15px] text-center duration-300 min-w-[130px] xl:min-w-[160px] hover:bg-[#B59571]">Подробнее</button>
        <LinkWithstyles text={'Условия доставки'} to={'/deliveryInfo'} css={'!text-[#333333] hover:!text-[#FFFFFF] px-[20px] xl:px-[30px] border-[1px] border-[#33333377] font-[700] !text-[16px] xl:!text-[20px]'} />
      </div>
    </SectionDescription>

  </>)
}
