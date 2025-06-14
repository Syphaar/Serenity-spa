import React from "react";

type Services = {
  packages: string;
  price: string;
};

type Category = {
  title: string;
  services: Services[];
};

const spaMenu: Category[] = [
  {
    title: "Massage Therapy",
    services: [
      { packages: "Swedish Massage", price: "$85" },
      { packages: "Deep Tissue Massage", price: "$100" },
      { packages: "Aromatherapy Massage", price: "$95" },
      { packages: "Hot Stone Massage", price: "$115" },
      { packages: "Couple's Massage", price: "$170" },
    ],
  },
  {
    title: "Facials & Skin Care",
    services: [
      { packages: "Classic Facial", price: "$80" },
      { packages: "Anti-Aging Facial", price: "$110" },
      { packages: "Acne Treatment Facial", price: "$95" },
      { packages: "Hydrafacial", price: "$200" },
      { packages: "Microdermabrasion Facial", price: "$125" },
    ],
  },
  {
    title: "Nail Care",
    services: [
      { packages: "Basic Manicure", price: "$30" },
      { packages: "Gel Manicure", price: "$42" },
      { packages: "Spa Pedicure", price: "$52" },
      { packages: "Deluxe Mani-Pedi", price: "$85" },
    ],
  },
  {
    title: "Body Treatments",
    services: [
      { packages: "Body Scrub", price: "$75" },
      { packages: "Body Wrap", price: "$100" },
      { packages: "Cellulite Treatment", price: "$110" },
    ],
  },
  {
    title: "Hair Removal",
    services: [
      { packages: "Waxing - Eyebrows", price: "$20" },
      { packages: "Waxing - Full Legs", price: "$75" },
      { packages: "Waxing - Brazilian", price: "$65" },
      { packages: "Threading (Eyebrows/Lip)", price: "$15" },
      { packages: "Laser Hair Removal", price: "$200" },
    ],
  },
  {
    title: "Hair Services",
    services: [
      { packages: "Haircut & Blow-dry", price: "$60" },
      { packages: "Hair Spa Treatment", price: "$75" },
      { packages: "Scalp Massage", price: "$40" },
      { packages: "Hair Coloring", price: "$105" },
    ],
  },
  {
    title: "Wellness & Add-ons",
    services: [
      { packages: "Steam Room Access", price: "$22" },
      { packages: "Sauna Session", price: "$30" },
      { packages: "Reiki / Energy Healing", price: "$85" },
      { packages: "CBD Add-on", price: "$30" },
      { packages: "Foot Reflexology", price: "$50" },
    ],
  },
];

const SMenu: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>

      {spaMenu.map(({ title, services }) => (
        <section key={title} className="mb-12 max-w-2xl px-4">
          <h2 className="text-2xl font-semibold mb-6">{title}</h2>
          <div className="space-y-6">
            {services.map(({ packages, price }, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between pb-3"
              >
                <span className="text-lg font-medium">{packages}</span>
                <div className="hidden sm:block flex-grow border-t mx-4 border-gray-300" />
                <span className="text-lg font-semibold text-yellow-600">{price}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SMenu;
