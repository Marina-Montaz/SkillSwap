import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
    const { createNewUser, updateUserProfile, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        // Password Validations [cite: 112, 113, 114]
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters.");
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error("Password must have an uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            return toast.error("Password must have a lowercase letter.");
        }

        createNewUser(email, password)
            .then((result) => {
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...result.user, displayName: name, photoURL: photo });
                        toast.success("Account Created Successfully!");
                        navigate("/");
                    });
            })
            .catch(err => toast.error(err.message));
    };

    return (
        <div className="flex justify-center my-10 px-4">
            <div className="card w-full max-w-md shadow-2xl bg-base-100 p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full" required />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                    
                    <div className="relative">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            placeholder="Password" 
                            className="input input-bordered w-full" 
                            required 
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button className="btn btn-primary w-full">Register</button>
                </form>
                <p className="mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;