import type { ReactNode } from "react";
import { FaWhatsapp, FaInstagram,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

type Socials = {
    id: number;
    icon: ReactNode;
    platforms: string;
}

const socialMedia: Socials[] = [
    { id: 1, icon: <FaFacebook  />, platforms: "Facebook" },
    { id: 2, icon: <FaInstagram />, platforms: "Instagram" },
    { id: 3, icon: <FaXTwitter  />, platforms: "X" },
    { id: 4, icon: <FaWhatsapp  />, platforms: "Whatsapp" },
];

type Lnks = {
    id: number;
    pages: string;
    path: string;
}

const footerLnks: Lnks[] = [
    { id: 1, pages: "Home", path: "/" },
    { id: 2, pages: "About", path: "/about" },
    { id: 3, pages: "Services", path: "/services" },
    { id: 4, pages: "Contact", path: "/contact" },
]

const Footer = () => {
    return (
        // FOOTER
        <section className="bg-ash py-10 px-4 sm:px-8 md:px-8 lg:px-16 lg:py-14 xl:px-24">
            <div className=" border-b-2 pb-5 lg:flex lg:justify-between">
                <div className="lg:w-[50%] xl:w-[55%]">
                    <div className="border-b-2">
                        <h2 className="text-4xl font-semibold text-tahiti">Serenity</h2>
                        <p className="py-3">
                            Come relax and enjoy spa treatments designed to leave you feeling 
                            refreshed and calm. We focus on your comfort and well-being in every session.
                        </p>
                        <p className="pb-5 font-semibold">serenityspa@gmail.com</p>
                    </div>
                    <div>
                        <p className="pt-5">
                            Our goal is to help you take a break from daily stress and find moments of peace and balance in your busy life.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly gap-7 pt-5 sm:flex-row lg:gap-20">
                    <div>
                        <h5 className="text-xl font-semibold">Our Links</h5>
                        {footerLnks.map(({ id, pages, path }) => (
                            <div key={id} className="pt-2">
                                <ul className="">
                                    <li className="transition duration-300 hover:font-semibold"><Link to={path}>{pages}</Link> </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <h5 className="text-xl font-semibold">Follow Us</h5>
                        {socialMedia.map(({ id, icon, platforms}) => (
                            <div key={id} className="pt-3">
                                <ul>
                                    <li className="flex gap-2 items-center">
                                        <p>{icon}</p>
                                        <p>{ platforms }</p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pt-5 flex flex-col sm:flex-row sm:justify-between">
                <p className="capitalize font-semibold">© 2025 Serenity Spa. All rights reserved.</p>
                <div className="flex flex-col gap-2 pt-3 sm:flex-row sm:gap-5 sm:pt-0">
                    <p className="cursor-pointer transition duration-300 hover:underline">Privacy policy</p>
                    <p className="cursor-pointer transition duration-300 hover:underline">Terms of Service</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;