const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="w-11/12 mt-36 mx-auto">
      <h2 className="md:text-4xl text-2xl font-bold b-red text-center ">
        Why Choose Nice Movers?
      </h2>
      <p className="md:text-lg text-center b-text max-w-2xl mx-auto mt-3">
        Our teams will treat your possessions like they would their own,
        ensuring that the greatest care and diligence is taken.
      </p>
      <div className="md:w-11/12 w-full mt-10 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="p-8 bg-white rounded-2xl">
          <h3 className="text-xl">Licensed & Insured</h3>
          <p className="b-text mt-3">
            We hold all required UAE licenses (MoE) for moving services , and
            every job includes full insurance for your belongings
          </p>
        </div>
        <div className="p-8 bg-white rounded-2xl">
          <h3 className="text-xl">Certified Quality</h3>
          <p className="b-text mt-3">
            Our processes meet international standards – we’re ISO 9001:2015
            certified and FAIM-accredited (the industry’s gold standard).
          </p>
        </div>
        <div className="p-8 bg-white rounded-2xl">
          <h3 className="text-xl">Nationwide Coverage</h3>
          <div className="b-text mt-3">
            <p>
              We operate branches across all emirates (Dubai, Abu Dhabi,
              Sharjah, Ajman, Fujairah, etc.), so we cover anywhere in the UAE.
            </p>{" "}
            <p>
              {" "}
              As one provider notes, movers like us serve anywhere in Dubai, Abu
              Dhabi, Sharjah… or anywhere in between Ajman and all over the UAE.
              In fact, our network reaches – no location is out of reach.
            </p>
          </div>
        </div>
        <div className="p-8 bg-white rounded-2xl">
          <h3 className="text-xl">Trusted Experience</h3>
          <div className="b-text mt-3">
            <p>
              Backed by years of experience since 2015, our moving crews are
              rigorously trained and equipped.
            </p>{" "}
            <p>
              We use premium materials and proven methods to ensure your family
              relocation is efficient, timely, and hassle-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
