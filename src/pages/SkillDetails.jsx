import { useLoaderData, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const SkillDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const skill = data.find(item => item.skillId == id);

    const handleBooking = (e) => {
        e.preventDefault();
        toast.success("Session Booked Successfully!");
        e.target.reset(); // Clear form [cite: 84]
    };

    return (
        <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
                <img src={skill.image} alt={skill.skillName} className="rounded-xl w-full h-[300px] object-cover" />
                <h1 className="text-3xl font-bold mt-4">{skill.skillName}</h1>
                <p className="text-gray-600 mt-2">{skill.description}</p>
                <div className="badge badge-outline mt-2">{skill.category}</div>
                <p className="mt-4 font-bold">Price: ${skill.price} | Rating: {skill.rating}⭐</p>
                <p className="text-sm">Provider: {skill.providerName} ({skill.providerEmail})</p>
            </div>

            <div className="card w-full max-w-sm shadow-xl bg-base-100 p-6 h-fit">
                <h2 className="text-xl font-bold mb-4">Book a Session</h2>
                <form onSubmit={handleBooking} className="space-y-4">
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
                    <button className="btn btn-primary w-full">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SkillDetails;