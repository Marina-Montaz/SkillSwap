import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <div className="min-h-[calc(100vh-285px)] container mx-auto px-4">
                {/* Outlet is where Home, Login, etc. will appear */}
                <Outlet /> 
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;