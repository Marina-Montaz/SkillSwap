import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const location = useLocation();
    // Retrieves email passed from the login page 
    const emailFromLogin = location.state?.email || "";

    const handleReset = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        if (!email) {
            toast.error("Please provide a valid email.");
            return;
        }

        toast.success("Redirecting to your inbox...");
        
        // Requirement: Redirect the user to Gmail 
        setTimeout(() => {
            window.location.href = "https://mail.google.com";
        }, 1500);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
            <div className="card w-full max-w-sm shadow-xl bg-base-100 p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Your Password</h2>
                <form onSubmit={handleReset} className="space-y-4">
                    <div className="form-control">
                        <label className="label text-sm font-medium">Email Address</label>
                        <input 
                            type="email" 
                            name="email"
                            defaultValue={emailFromLogin} 
                            className="input input-bordered w-full" 
                            placeholder="Enter your email" 
                            required 
                        />
                    </div>
                    <button className="btn btn-primary w-full">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;