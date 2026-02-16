import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
            <h1 className="text-9xl font-extrabold text-primary">404</h1>
            <p className="text-2xl font-semibold mt-4">Oops! Page not found.</p>
            <p className="mt-2 text-gray-500">The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" className="btn btn-primary mt-6">
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;