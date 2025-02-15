import LineAndText from "./LineAndText";

export default function SectionDescription({ categoty, title, text1, text2, children, cssH2, cssLine, cssDiv }) {
    return (
        <section className="bg-[#FFFFFF]">
            <div className="mx-[auto] max-w-max xl:pt-[150px] pt-[30px] px-[10px]">

                <LineAndText css={cssLine}>{categoty}</LineAndText>

                <div className={`${cssDiv} flex flex-col xl:flex-row xl:gap-[80px] 2xl:gap-[134px] gap-[15px] items-start xl:ml-[220px]`}>
                    <div>
                        <h2 className={`${cssH2} xl:text-[64px] text-[28px] font-[700] xl:max-w-[196px] max-w-[210px] text-[#333333]`}>{title}</h2>
                    </div>
                    <div>
                        <p className="max-w-[526px] text-[#333333] xl:text-[18px] text-[14px] mt-[20px]">
                            {text1}
                            <br />
                            <br />
                            {text2}
                        </p>
                    </div>
                </div>
            </div>
            {children}
        </section>
    )
}
