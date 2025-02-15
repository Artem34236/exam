

export default function LineAndText({ children, css }) {
    return (
        <p className={`${css} xl:ml-[60px] 2xl:ml-[0] ml-[0] w-max xl:mx-[0] xl:text-[20px] text-[14px] text-[#333333] font-[700] xl:mb-[100px] mb-[10px] items-center flex uppercase after:contant-[''] after:w-[60px] after:h-[1px] after:border-[#B59571] after:border-[1px] after:ml-[10px] xl:after:ml-[30px]`}>{children}</p>
    )
}
