import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SkillCard from "../components/SkillCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("/skills.json")
            .then(res => res.json())
            .then(data => setSkills(data));
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="overflow-hidden">
            {/* Hero Slider */}
            <Swiper className="h-[400px] rounded-2xl my-6">
                <SwiperSlide className="bg-blue-100 flex items-center justify-center text-3xl font-bold">
                    Learn New Skills Locally
                </SwiperSlide>
                <SwiperSlide className="bg-green-100 flex items-center justify-center text-3xl font-bold">
                    Trade Your Expertise
                </SwiperSlide>
            </Swiper>

            {/* Popular Skills Section */}
            <section className="my-12">
                <h2 className="text-3xl font-bold text-center mb-8">Popular Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {skills.slice(0, 6).map(skill => (
                        <SkillCard key={skill.skillId} skill={skill} />
                    ))}
                </div>
            </section>

            {/* Extra Section: How It Works */}
            <section className="bg-base-200 py-12 px-4 rounded-xl" data-aos="fade-up">
                <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
                <div className="flex flex-col md:flex-row justify-around gap-4 text-center">
                    <div><h3 className="font-bold">1. Browse</h3><p>Find a skill you want to learn.</p></div>
                    <div><h3 className="font-bold">2. Connect</h3><p>Message local providers.</p></div>
                    <div><h3 className="font-bold">3. Swap</h3><p>Trade skills or pay small fees.</p></div>
                </div>
            </section>
        </div>
    );
};

export default Home;