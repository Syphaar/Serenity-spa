type props = {
    children: React.ReactNode;
};

const Heading = ({ children }: props) => {
    return (
        <div>
           <h2 className="text-4xl pb-2 text-tahiti capitalize font-semibold">{children}</h2> 
        </div>
    )
}

export default Heading;