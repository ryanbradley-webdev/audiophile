import { Outlet, useLocation } from "react-router-dom";
import AboutCard from "../AboutCard/AboutCard";
import Nav from "../Nav/Nav";

export default function CategoryPageWrapper() {
    const location = useLocation()
    const pathname = location.pathname.slice(1)
    
    console.log(pathname)

    return (
        <main>

            <Outlet />

            <Nav />

            <AboutCard />

        </main>
    )
}