import { Link } from "react-router";

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] text-white text-center px-6">
        <h1 className="text-[80px] md:text-[120px] font-bold">404</h1>
        <h2 className="text-[24px] md:text-[32px] font-semibold mb-4">Страница не найдена</h2>
        <p className="text-[16px] md:text-[18px] max-w-[500px] mb-6">
          К сожалению, запрашиваемая вами страница не существует или была перемещена.
        </p>
        <Link to="/" className="px-6 py-3 bg-[#B59571] text-white text-[16px] font-bold rounded-lg hover:bg-[#a07d5c] transition duration-300">
          На главную
        </Link>
      </div>
    );
  }
  