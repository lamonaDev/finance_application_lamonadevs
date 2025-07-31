import { Outlet } from "react-router-dom";
import Footer from "../components/ui/footer"
import Header from "../components/ui/navbar";
const MainLayout = () => {
    return (
    <div className="flex flex-col min-h-screen bg-emerald-100">
        <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
        <Footer />
    </div>
    );
};
export default MainLayout;