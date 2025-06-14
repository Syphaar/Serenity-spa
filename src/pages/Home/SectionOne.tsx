import { Link } from "react-router-dom";
import image from "../../assets/images/bg-one.jpg"

type TextItem = {
    id: number; 
    head: string;
    description: string;
}

const mainHeading: TextItem[] = [
    { 
        id: 1, 
        head: "Transform your body and mind", 
        description: "Find peace inside yourself. Release tension and restore balance with our tailored treatments in a serene setting.", 
    }
];

// RATINGS
type Ratings = {
    id: number;
    numb: number;
    value: string;
    label: string;
};

const stats: Ratings[] = [
    { id: 1,numb: 3.2, value: "K", label: "Happy returning clients" },
    { id: 2, numb: 1.8, value: "%",label: "Customer satisfaction rate" },
    { id: 3, numb: 4.5, value: "M", label: "Moments of total relaxation"    },
] ;

const SectionOne = () => {
  return (
    <section>
        <div className="min-h-screen bg-midnight px-4 flex items-center ">
            <div className="flex flex-col items-center w-full xs:flex sm:gap-7 md:flex-row md:justify-between sm:px-4 xl:gap-16 lg:px-12 xl:px-20">
                {/* Text Section */}
                <div className="sm:w-[68%] mb-6 sm:mb-0 text-center sm:text-left">
                {mainHeading.map(({ id, head, description }) => (
                    <div key={id}>
                        <h1 className="text-tahiti text-4xl font-bold mb-4 md:text-5xl">{head}</h1>
                        <p className="text-lg pb-3 lg:pb-8 ">{description}</p>
                        <div className="flex justify-center items-center gap-4 xl:gap-8">
                            <Link to={`/services`}>
                                <button className="text-white bg-tahiti py-2 px-4 rounded-full border-2 border-tahiti font-semibold transform transition duration-300 hover:scale-110 hover:bg-cream hover:text-black lg:px-6">
                                    Our services
                                </button>
                            </Link> 
                            <Link to={`/contact`}>
                                <button className="bg-cream py-2 px-4 rounded-full border-2 border-tahiti font-semibold transform transition duration-300 hover:scale-110 hover:bg-tahiti hover:text-white lg:px-6">
                                    Contact Us 
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
                {/* Image Section */}
                <div className="sm:w-[69%] flex justify-center">
                    <img src={image} alt="Fitness" className="rounded-lg shadow-lg max-w-full sm:h-[70%] md:h-auto"/>
                </div>
            </div>
        </div>

        {/* RATINGS */}
        <div className="bg-tahiti px-4 py-10 overflow-hidden sm:px-8 lg:flex lg:gap-12 lg:px-16 xl:gap-20 xl:px-24">
            <div className="flex flex-col gap-9 justify-center items-center sm:flex-row lg:gap-6 xl:gap-10" data-aos="fade-right">
                {stats.map(({ id, numb, value, label }) => (
                    <div key={id} className="sm:border-r-2 sm:border-white sm:pr-4 ">
                        <h3 className="text-4xl text-white font-bold text-center lg:text-5xl">{numb}<span className="text-lg text-gold">{value}</span> </h3>
                        <p className="text-white text-center">{label}</p>
                    </div>
                ))}
            </div>
            <div className="pt-7 sm:pt-6 lg:w-[45%] xl:w-[45%]" data-aos="fade-left">
                <p className="text-white">
                    At Serene Spa, we offer a peaceful escape with soothing massages and skincare designed to melt away stress and leave you feeling your best.
                </p>
            </div>
        </div>
    </section>
  );
};

export default SectionOne;