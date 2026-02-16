import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const MyProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                toast.success("Profile Updated!");
            });
    };

    return (
        <div className="flex flex-col items-center py-10">
            <h2 className="text-3xl font-bold mb-6">Welcome, {user?.displayName}</h2>
            <div className="card w-96 bg-base-100 shadow-xl p-6 items-center">
                <img src={user?.photoURL} className="w-32 h-32 rounded-full mb-4 object-cover" alt="User" />
                <p><strong>Name:</strong> {user?.displayName}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                
                <form onSubmit={handleUpdate} className="mt-6 w-full space-y-3">
                    <input type="text" name="name" placeholder="Update Name" className="input input-bordered w-full input-sm" />
                    <input type="text" name="photo" placeholder="Update Photo URL" className="input input-bordered w-full input-sm" />
                    <button className="btn btn-sm btn-primary w-full">Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;