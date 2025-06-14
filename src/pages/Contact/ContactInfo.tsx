import Heading from "../../SharedFiles/Headings"
import type { ReactNode } from "react"
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import image from "../../assets/images/spa-room.jpg"

type ContactDetails = {
  id: number;
  icon: ReactNode;
  details: string;
}

const info: ContactDetails[] = [
  { id: 1, icon: <IoIosCall />, details: "(233) 123 456 789" },
  { id: 2, icon: <MdOutlineEmail />, details: "Fitness@gmail.com" },
  { id: 3, icon: <IoLocationOutline />, details: "124 new york Eye, USA" },
]

const ContactInfo = () => {
  return (
    <section className="bg-midnight">
        <div className="px-4 py-10 sm:px-8 lg:px-16 xl:px-24 xl:py-20">
          <div>
            
          </div>
          <div className="flex flex-col justify-between xl:items-center md:flex-row md:gap-4 xl:gap-10">
            <div>
              <div className="sm:w-[60%] md:w-full">
                <Heading>Get in Touch</Heading>
                <p>Have questions or need assistance? We're here to help, reach out and we’ll get back to you.</p>
              </div>
              <div className="flex flex-col items-center gap-9 py-8 sm:justify-between sm:flex-row md:justify-start sm:gap-3 lg:gap-5 xl:gap-10">
                {info.map(({ id, icon, details }) => (
                  <div key={id}>
                    <p className="flex justify-center text-4xl lg:text-5xl">{icon}</p>
                    <p>{details}</p>
                  </div>
                ))}
              </div>
            </div>
            <img className="rounded-xl md:w-[50%]" src={image} alt="" loading="lazy" />
          </div>
        </div>
    </section>
  )
}

export default ContactInfo;