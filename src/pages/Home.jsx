import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SkillCard from "../components/SkillCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // Fetching the 6+ skills from your public/skills.json [cite: 35]
        fetch("/skills.json")
            .then(res => res.json())
            .then(data => setSkills(data));
        
        // Initializing AOS for subtle animations [cite: 16, 143]
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="space-y-16 pb-12">
            {/* Hero Slider Section [cite: 66] */}
            <section className="mt-6">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className="h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl"
                >
                    <SwiperSlide className="relative">
                        <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070" className="w-full h-full object-cover" alt="Guitar" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center p-4">
                            <h2 className="text-4xl md:text-6xl font-bold">Master New Skills Today</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" className="w-full h-full object-cover" alt="Coding" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center p-4">
                            <h2 className="text-4xl md:text-6xl font-bold">Trade Your Expertise</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* Popular Skills Section [cite: 67] */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-down">Popular Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.slice(0, 6).map(skill => (
                        <SkillCard key={skill.skillId} skill={skill} />
                    ))}
                </div>
            </section>

            {/* How It Works Section [cite: 75] */}
            <section className="bg-base-200 p-10 rounded-3xl" data-aos="zoom-in">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-4">
                        <div className="text-5xl">🔍</div>
                        <h3 className="text-xl font-semibold">1. Find a Skill</h3>
                        <p className="text-gray-600">Browse hundreds of local listings near you.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl">🤝</div>
                        <h3 className="text-xl font-semibold">2. Connect</h3>
                        <p className="text-gray-600">Chat with providers and schedule a swap.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl">🚀</div>
                        <h3 className="text-xl font-semibold">3. Learn & Grow</h3>
                        <p className="text-gray-600">Gain new knowledge and build community.</p>
                    </div>
                </div>
            </section>

            {/* Top Rated Providers (Extra Section) [cite: 74] */}
            <section className="text-center" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-8">Our Top Rated Providers</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {['Alex Martin', 'Sara Hossain', 'John Doe'].map((name, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border">
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-12"><span>{name[0]}</span></div>
                            </div>
                            <div className="text-left">
                                <p className="font-bold">{name}</p>
                                <p className="text-sm text-yellow-500">★★★★★ (4.9)</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;