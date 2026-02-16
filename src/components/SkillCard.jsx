import { Link } from "react-router-dom";

const SkillCard = ({ skill }) => {
    const { skillId, skillName, image, price, rating, category } = skill;

    return (
        <div 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-base-200"
            data-aos="fade-up"
        >
            <figure className="px-4 pt-4">
                <img src={image} alt={skillName} className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-lg">{skillName}</h2>
                    <div className="badge badge-secondary">{category}</div>
                </div>
                <p className="text-gray-500 font-medium">Rating: {rating} ⭐</p>
                <p className="text-xl font-bold text-primary">${price} <span className="text-sm font-normal text-gray-400">/ session</span></p>
                
                <div className="card-actions mt-4">
                    <Link to={`/skill/${skillId}`} className="btn btn-primary btn-block">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;