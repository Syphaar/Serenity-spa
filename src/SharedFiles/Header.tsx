import image from "../assets/images/bg-sub.jpg";

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <section className="bg-midnight pt-4 xl:pt-6">
      <div
        className="relative h-[350px] bg-cover bg-center flex items-center mx-4 pt-4 rounded-xl sm:mx-8 lg:mx-16 xl:mx-24 xl:pt-6"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Overlay to reduce brightness */}
        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

        {/* Heading Text */}
        <h1 className="relative text-white text-5xl font-bold pl-6 sm:pl-10 lg:pl-16">
          {children}
        </h1>
      </div>
    </section>
  );
};

export default Header;
