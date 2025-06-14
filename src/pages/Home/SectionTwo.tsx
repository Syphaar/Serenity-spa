import { TbYoga } from "react-icons/tb";
import type { ReactNode } from "react";
import Heading from "../../SharedFiles/Headings";
import { TbMassage } from "react-icons/tb";
import { LuSmile } from "react-icons/lu";
import { Link } from "react-router-dom";

type Services = {
    id: number;
    icon: ReactNode;
    class: string;
    description:  string;
}

const miniServices: Services[] = [
    {
        id: 1,
        icon: <TbYoga />,
        class: "spa massage",
        description: "Our signature spa massage is designed to promote full-body relaxation, ease muscle tension, and calm your mind. Using gentle strokes and soothing aromas, it’s the perfect escape from daily stress.",
    },
    {
        id: 2,
        icon: <TbMassage />,
        class: "Deep Massage",
        description: "For those in need of serious muscle relief, our deep tissue massage targets chronic tension in the deeper layers of muscles and connective tissue. Ideal for athletes or anyone with tightness and soreness.",
    },
    {
        id: 3,
        icon: <LuSmile />,
        class: "Facial massage",
        description: "Refresh your skin and relax your facial muscles with a gentle facial massage. It’s a great way to boost circulation and leave your face looking bright and feeling smooth.",
    },
]


const SectionTwo = () => {
  return (
    <section>
        <div className="py-10 bg-midnight px-4 sm:px-8 lg:px-16 lg:py-14 xl:px-24">
            <div className="mb-9 md:flex items-center justify-between">
                <div className="sm:w-[60%] md:w-[50%]">
                    <Heading>Our Services</Heading>
                    <p>We offer a range of relaxing spa treatments to help you unwind and feel your best.</p>
                </div>
                <Link to={`/services`}>
                    <button className="text-white bg-tahiti py-2 px-4 mt-4 rounded-full transform transition duration-300 hover:scale-110 lg:px-6">
                        Explore services
                    </button>
                </Link> 
            </div>

            <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3">
                {miniServices.map(({ id, icon, class: title, description }) => (
                <div
                    key={id}
                    className="bg-midnight p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-milky transition duration-300"
                >
                    <div className="text-4xl text-black mb-4">{icon}</div>
                    <h3 className="text-xl font-semibold capitalize mb-2">{title}</h3>
                    <p className="text-black text-sm">{description}</p>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default SectionTwo;