import { Route, Routes } from "react-router";
import Home from "./components/Pages/Home";
import SidebarAndFooter from "./components/Pages/SidebarAndFooter";
import Navigation from "./components/Pages/Navigation";
import NotFound from "./components/Pages/NotFound";
import Menu from "./components/Pages/Menu";
import TovarPage from "./components/Pages/TovarPage";
import Cart from "./components/Pages/Cart";

export default function App() {
  return (
    <div className="max-w-[1920px] mx-auto">

      <Routes>

        <Route path="/" element={<SidebarAndFooter />}>
        
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/menu/:id" element={<TovarPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>

        </Route>

        <Route path="/navigation_page" element={<Navigation />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  )
}
