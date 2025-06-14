import Heading from "../../SharedFiles/Headings"
import type { ReactNode } from "react";
import { TbYoga } from "react-icons/tb";
import { TbMassage } from "react-icons/tb";
import { LuSmile } from "react-icons/lu";
import { TbPhysotherapist } from "react-icons/tb";
import image from "../../assets/images/man.jpg"
import { Link } from "react-router-dom";

// WHY CHOOSE US GRID
type Reasons = {
    id: number;
    icon: ReactNode;
    title: string;
    description:  string;
}

const chooseUs: Reasons[] = [
  {
    id: 1,
    icon: <TbPhysotherapist />,
    title: "Personalized Spa Experience",
    description:
      "We customize each session just for you, creating a peaceful space to truly relax. From gentle techniques to calming scents, everything is made to help you feel at ease.",
  },
  {
    id: 2,
    icon: <TbMassage />,
    title: "Targeted Deep Relief",
    description:
      "Our deep tissue massages focus on easing muscle tension and stress where you need it most. Whether after a workout or a long day, we help you feel lighter and more comfortable.",
  },
  {
    id: 3,
    icon: <LuSmile />,
    title: "Radiant Skin Therapy",
    description:
      "Refresh your skin and ease facial tension with treatments that boost circulation and bring out your natural glow. You’ll leave feeling renewed and refreshed.",
  },
  {
    id: 4,
    icon: <TbYoga />,
    title: "Mindful Movement & Calm",
    description:
      "Find balance through gentle, guided yoga sessions suitable for all levels. We blend mindful breathing with easy movements to help you relax and recharge.",
  },
];

// FOR THE DISCOUNT 
type TextItem = {
    id: number; 
    head: string;
    description: string;
};

const mainHeading: TextItem[] = [
    { 
        id: 1, 
        head: "5% percent discount services this summer", 
        description: "Enjoy a 5% discount on all services this summer. Take time to relax and improve your well-being with our expert-led sessions.", 
    }
];

const SectionThree = () => {
    return (
        <section className="bg-midnight">
            {/* WHY CHOOSE US SECTION */}
            <div className="px-4 sm:px-8 lg:px-16 xl:px-24">
                <div className="mb-9 md:flex items-center justify-between">
                    <div className="sm:w-[60%] md:w-[50%]">
                        <Heading>Why Choose Us?</Heading>
                        <p className="">We focus on quality care and personalized treatments to ensure you leave feeling refreshed and valued.</p>
                    </div>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
                    {chooseUs.map(({ id, icon, title, description }) => (
                        <div key={id} className={`{ py-8 px-6 rounded-lg xl:py-6 ${ id === 1 ? 'bg-tahiti text-white' : 'bg-milky text-black'}`}>
                            <div className="text-4xl text- mb-1 lg:mb-2">{icon}</div>
                            <h3 className="text-2xl font-semibold capitalize mb-2 xl:mb-4">{title}</h3>
                            <p className="text-sm">{description}</p>
                        </div>
                    ))}
                </div> 
            </div>

            {/* DISCOUNT SECTION */}
            <div className="bg-tahiti px-4 md:px-2 lg:px-10 xl:px-8">
                <div className="mt-10 py-10 flex flex-col items-center w-full xs:flex sm:mt-8 sm:px-6 sm:gap-7 md:flex-row md:justify-between lg:mt-10 xl:gap-16 xl:px-16">
                    {/* Text Section */}
                    <div className="mb-6 sm:mb-0 text-center sm:text-left">
                        {mainHeading.map(({ id, head, description }) => (
                            <div key={id}>
                                <h1 className="text-white text-4xl font-bold mb-4 md:text-5xl">{head}</h1>
                                <p className="text-white text-lg pb-3">{description}</p>
                                <div className="">
                                    <Link to={`/contact`}>
                                        <button className="bg-cream text-black py-2 px-4 border-2 border-cream font-semibold transform transition duration-300 hover:scale-110 rounded-full lg:px6">Reach out</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Image Section */}
                    <div className="flex justify-center md:w-[80%]">
                        <img src={image} alt="Fitness"
                            className="rounded-lg shadow-lg max-w-full sm:h-[70%] md:h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionThree;