import { Outlet } from "react-router-dom";
import AboutCard from "../AboutCard/AboutCard";
import Nav from "../Nav/Nav";

export default function CategoryPageWrapper() {
    return (
        <main>

            <Outlet />

            <Nav />

            <AboutCard />

        </main>
    )
}