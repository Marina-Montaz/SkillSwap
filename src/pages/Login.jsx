import { useContext, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
    const { userLogin, googleSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(); // Captures email for the Forget Password challenge [cite: 138]
    const navigate = useNavigate();
    const location = useLocation();
    
    // Ensures user returns to the page they were trying to access [cite: 77, 95]
    const from = location.state || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then(() => {
                toast.success("Welcome back!");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                toast.error("Invalid email or password."); // Error message anywhere in form [cite: 96]
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                toast.success("Google Login Successful!");
                navigate(from, { replace: true }); // Navigate to desired route [cite: 101]
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card w-full max-w-md shadow-2xl bg-base-100 my-10">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className="text-3xl font-bold text-center mb-4">Login [cite: 88]</h2>
                    
                    <div className="form-control">
                        <label className="label font-semibold">Email [cite: 90]</label>
                        <input 
                            type="email" 
                            name="email" 
                            ref={emailRef} 
                            placeholder="email@example.com" 
                            className="input input-bordered" 
                            required 
                        />
                    </div>

                    <div className="form-control relative">
                        <label className="label font-semibold">Password [cite: 91]</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            placeholder="password" 
                            className="input input-bordered" 
                            required 
                        />
                        {/* Password Toggle Eye Button  */}
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[52px] text-xl text-gray-500"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        
                        <label className="label">
                            <Link 
                                to="/forgot-password" 
                                state={{ email: emailRef.current?.value }} 
                                className="label-text-alt link link-hover text-primary font-medium"
                            >
                                Forgot password? [cite: 92, 136]
                            </Link>
                        </label>
                    </div>

                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Login [cite: 93]</button>
                    </div>

                    <div className="divider">OR</div>

                    <button 
                        type="button" 
                        onClick={handleGoogleLogin} 
                        className="btn btn-outline btn-secondary w-full"
                    >
                        <FaGoogle className="mr-2" /> Login with Google 
                    </button>

                    <p className="text-center mt-6 text-sm">
                        Don't have an account? 
                        <Link to="/register" className="text-primary font-bold ml-1">Sign Up [cite: 98]</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;