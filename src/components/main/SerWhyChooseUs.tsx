import React, { ReactNode } from "react";

const SerWhyChooseUs = ({
  content,
}: {
  content: { title: string; desc: ReactNode }[];
}) => {
  return (
    <div className="flex flex-wrap mt-16">
      {content.map((feat, i) => (
        <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="md:mb-9 mb-0 rounded-xl py-8 px-0 sm:p-9 lg:px-6 xl:px-9">
            <div>
              <h3 className="mb-4 text-lg font-medium b-red sm:text-lg">
                {feat.title}
              </h3>
              <div className="text-sm b-text"> {feat.desc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SerWhyChooseUs;
