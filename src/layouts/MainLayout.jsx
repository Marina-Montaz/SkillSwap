import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            <div className="min-h-[calc(100vh-285px)] max-w-7xl mx-auto px-4">
                <Outlet /> {/* This renders Home, Login, etc. based on route */}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;