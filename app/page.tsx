import Earning from "./components/Earning";
import NavBar from "./components/Navbar";
import Product from "./components/Product";
import SideBar from "./components/SideMenu";
import Stats from "./components/Stats";


export default function Home() {
  return (
    <main className="fw-[1440px] h-[1198px] relative bg-slate-50 flex">
      <SideBar />
      <div>
        <NavBar />
        <Earning />
        <Stats />
        <Product />
      </div>
    </main>
  )
}
