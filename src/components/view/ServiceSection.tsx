import { AppstoreOutlined } from "@ant-design/icons";

const servicesData = [
  "Sourcing all kinds of seafood products from Bangladesh and South-East Asia",
  "Negotiate the price on behalf of the clients",
  "Confirming assortments according to the client's demand",
  "Strictly supervise and monitor all the process until shipment on behalf of the clients",
  "Pre-shipment inspection",
  "Confirming on-time shipment",
  "Maintaining correspondence and feedback about market behaviour and provide transparent information to clients and packers",
  "Provide all kind of supports to our valued customers and exporters as well",
  "We take all responsibilities on behalf of our customers to ensure long-lasting business relationship",
];
const ServiceSection = () => {
  return (
    <section className="bg-slate-50  text-justify">
      <div className=" mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-btn text-primary font-bold text-base uppercase tracking-widest mb-4">
          <AppstoreOutlined />
          Our Services
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-black mb-18 max-w-4xl mx-auto leading-tight">
          Explore the Full Range of Services We Offer to Meet Your Needs
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {servicesData.map((service, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(20%-16px)] p-8 rounded-xl text-center transition-all duration-300 text-white flex justify-center items-center bg-primary"
              >
                <p className="text-xl leading-relaxed">{service}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
