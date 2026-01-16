import AboutSection from "@/components/view/AboutSection";

export default function Page() {
  return (
    <div className="mx-auto mt-9 flex max-w-380 flex-col px-4 sm:px-6 lg:px-8 mb-10">
      <AboutSection />
      <section className="text-black">
        <h2 className="mb-6 text-3xl font-semibold">
          Our Business & Expertise
        </h2>

        <div className="space-y-5 text-muted-foreground leading-relaxed text-justify">
          <p>
            We act as the buyers’ agent for sourcing frozen shrimps from
            Bangladesh. We are in this business since 2019. We have the
            state-of-the-art skills, expertise and rich experience to support
            the buyer in sourcing shrimp products from Bangladesh as per their
            requirements. We have long sustained business relations with
            qualified, reliable and reputed processors approved through US FDA
            Green Ticket and EU Compliances with HACCP, BRC, ISO, IFS, BAP and
            BSCI certification.
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li>
              A buyer/importer generally wants to buy their products through the
              agent to get some extra value that an agent can add and
              practically it is difficult to buy good products from abroad
              directly due to many reasons. So don’t worry, we shall provide you
              market information that will be the power of your business.
            </li>
            <li>
              Above all, we choose the quality packers and also judge the packer
              on the basis of their attitude, business policy, quality standard,
              hygienic standard, to what extent they may cooperate in case of
              any problem etc. etc.
            </li>
          </ul>

          <p>
            Our office is located in Khulna, the center of shrimp zone of
            south-western part of Bangladesh. 85% of the country’s shrimps grow
            in this region and majority of the shrimp processing plants are also
            located in Khulna. We are close to the harvesting and sourcing.
            Khulna is only 45km from Mongla Sea Port which is the major frozen
            shrimp handling port in Bangladesh.
          </p>

          <p>
            Our Quality Assurance Team works continuously and closely with all
            the parties and actors involved in processing and shipment of
            high-quality shrimps from Bangladesh.
          </p>

          <h3 className="pt-4 text-xl font-semibold ">What we offer:</h3>

          <ul className="list-disc pl-5 space-y-3">
            <li>
              We never include our charges in our day to day offers, we charges
              separately and you will pay us upon receipt of the container in
              good condition. We charge as minimum as possible for our services.
            </li>
          </ul>

          <h3 className="pt-4 text-xl font-semibold ">Why choose us:</h3>

          <ul className="list-disc pl-5 space-y-3">
            <li>
              We will provide regular offers and market information and quality
              control prior to shipment. We will guide our buyers when to buy or
              when not to buy. If we feel the market is coming down we ask the
              buyer to wait. If for their own stock then we advise the market
              situation and to take advantage of the falling market. In case if
              we see the market may go up then we ask the buyer to buy soon.
            </li>
          </ul>

          <p className="pt-6 font-semibold ">
            OUR AIM IS NOT TO SELL ONE CONTAINER OUR AIM IS HOW A BUYER CAN GAIN
            FROM THE LOCAL MARKET IS OUR MOTTO.
          </p>
        </div>
      </section>
    </div>
  );
}
