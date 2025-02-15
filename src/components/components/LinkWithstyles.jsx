import { Link } from "react-router";

export default function LinkWithstyles({ to, text, css }) {
    return (
        <Link
            className={`text-[#FFFFFF] font-[400] xl:text-[16px] text-[14px] py-[15px] text-center duration-300 min-w-[130px] xl:min-w-[160px] hover:bg-[#B59571] hover:font-[700] ${css}`}
            to={to}
        >
            {text}
        </Link>
    )
}
