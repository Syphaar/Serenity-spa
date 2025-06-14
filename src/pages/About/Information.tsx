import Heading from "../../SharedFiles/Headings";
import type { ReactNode } from "react";
import { IoMdPricetags } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import image from "../../assets/images/massage.jpg"
import image1 from "../../assets/images/male1.jpg"
import image2 from "../../assets/images/facial-two.jpg"
import image3 from "../../assets/images/facial-one.jpg"
import image4 from "../../assets/images/manicure.jpg"
import image5 from "../../assets/images/jacuzzi.jpg"
import image6 from "../../assets/images/pedicure.jpg"

type Perks = {
    id: number;
    icon: ReactNode;
    text: string;
};

const values: Perks[] = [
    { id: 1, icon: <GrStatusGood />, text: "Experience"},
    { id: 2, icon: <IoMdPricetags />, text: "Affordable Prices"},
    { id: 3, icon: <IoDiamondOutline />, text: "Best Quality"},
];


// GALLERY
type GalleryImage = {
  id: number;
  picture: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  { id: 1, picture: image1, alt: "Spa room 1" },
  { id: 2, picture: image2, alt: "Spa room 2" },
  { id: 3, picture: image3, alt: "Spa room 3" },
  { id: 4, picture: image4, alt: "Spa room 4" },
  { id: 5, picture: image5, alt: "Spa room 5" },
  { id: 6, picture: image6, alt: "Spa room 6" },
];


const Information = () => {
    return (
        <section className="bg-midnight">
            {/* OUR STORY SECTION */}
            <div className="px-4 py-10 sm:px-8 lg:px-16 xl:px-24">
                <Heading>Our Story</Heading>
                <p className="lg:px-16 xl:px-40">
                    At Serenity Spa, we began with a simple goal to create a space where 
                    calm meets care. Over the years, we’ve grown from a small idea into a 
                    trusted retreat for those seeking rest, balance, and well-being. Every 
                    treatment we offer is rooted in mindfulness and delivered with intention. 
                    Our team is passionate about what they do, taking time to understand each 
                    guest’s needs and guiding them toward a more relaxed and grounded self. 
                    Whether it’s your first visit or your tenth, we’re here to help you feel 
                    truly at ease inside and out.
                </p>
            </div>

            {/* EXPERIENCE THE DIFFERENCE (SECTION) */}
            <div className="flex flex-col px-4 pb-10 sm:px-8 md:flex-row md:gap-5 lg:px-16 xl:px-24 lg:gap-10 xl:justify-center xl:items-center">
                <div >
                    <div className="sm:w-[60%] md:w-full">
                        <Heading>Experience the Difference</Heading>
                        <p> We focus on comfort, care, and creating a calming space that helps you feel your best.</p>
                    </div>
                    
                    <div className="flex justify-center items-center flex-col gap-9 py-8 sm:justify-between sm:flex-row lg:gap-12 xl:gap-16">
                        {values.map(({ id, icon, text }) => (
                            <div key={id} className="">
                                <div>
                                    <p className="flex justify-center text-4xl lg:text-5xl">{icon}</p>
                                    <p>{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <img className="rounded-xl md:w-[50%]" src={image} alt="" />
            </div>

            {/* GALLERY */}
            <div className="px-4 pb-10 sm:px-8 lg:px-16 xl:px-24">
                <div className="sm:w-[60%] md:w-[50%]">
                    <Heading>Visual Tour</Heading>
                    <p>This gives you a quick look at some of the services we provide.</p>
                </div>
                <div className="pt-4 grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
                    {galleryImages.map(({ id, picture, alt }) => (
                    <div key={id}>
                        <img
                        src={picture}
                        alt={alt}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                    ))}
                </div>
                </div>
        </section>
    )
}

export default Information;