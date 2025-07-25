import React, { ReactNode } from "react";

const Process = ({
  dm = false,
  cus,
  title,
}: {
  dm?: boolean;
  cus?: { title: string; desc: string }[];
  title?: ReactNode;
}) => {
  return (
    <section
      className={`${
        dm ? "md:mt-52 mt-36" : "md:mt-52 mt-80"
      } md:w-11/12 mx-auto w-full md:px-0 px-3`}
    >
      <h2 className="md:text-4xl text-2xl font-bold text-center b-red">
        {title ? (
          <>{title}</>
        ) : (
          <>
            What Is Our <br className="md:hidden" /> Moving Process?
          </>
        )}
      </h2>
      <div
        className={`grid ${
          cus ? "lg:grid-cols-3" : "lg:grid-cols-4"
        } md:grid-cols-2 grid-cols-1 gap-5 mt-10`}
      >
        {cus ? (
          <>
            {cus.map((step, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-col gap-y-3"
              >
                <div className="w-16 h-16 b-white text-3xl border-[6px] border-[#e7e6e6] font-bold rounded-full b-red-bg flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="text-lg">{step.title}</h3>
                <p className="text-sm/4.5 b-text text-center">{step.desc}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="flex items-center justify-center flex-col gap-y-3">
              <div className="w-16 h-16 b-white text-3xl border-[6px] border-[#e7e6e6] font-bold rounded-full b-red-bg flex items-center justify-center">
                1
              </div>
              <h3 className="text-lg">Request a Quote</h3>
              <p className="text-sm/4.5 b-text text-center">
                Fill out our free online moving form or call us. Our team will
                reach out with an initial estimate and discuss your needs.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col gap-y-3">
              <div className="w-16 h-16 b-white text-3xl border-[6px] border-[#e7e6e6] font-bold rounded-full b-red-bg flex items-center justify-center">
                2
              </div>
              <h3 className="text-lg">Plan & Survey</h3>
              <p className="text-sm/4.5 b-text text-center">
                We schedule a home survey to finalize details. This ensures we
                understand the size, distance and any special requirements of
                your move.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col gap-y-3">
              <div className="w-16 h-16 b-white text-3xl border-[6px] border-[#e7e6e6] font-bold rounded-full b-red-bg flex items-center justify-center">
                3
              </div>
              <h3 className="text-lg">Confirm & Book</h3>
              <p className="text-sm/4.5 b-text text-center">
                Review the tailored quote and choose the services you want.Then
                we reserve your moving date and our crew is assigned.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col gap-y-3">
              <div className="w-16 h-16 b-white text-3xl border-[6px] border-[#e7e6e6] font-bold rounded-full b-red-bg flex items-center justify-center">
                4
              </div>
              <h3 className="text-lg">Moving Day</h3>
              <p className="text-sm/4.5 b-text text-center">
                Our expert movers will handle everything from protecting your
                home during the move to precisely placing your furniture in new
                space.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Process;
