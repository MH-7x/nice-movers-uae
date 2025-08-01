import React, { ReactNode } from "react";

const SerWhyChooseUs = ({
  content,
}: {
  content: { title: string; desc: ReactNode }[];
}) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 md:w-11/12 mx-auto">
      {content.map((box, index) => (
        <div
          key={index}
          className="p-5 rounded-2xl bg-gradient-to-b from-white via-white to-[#00000009] flex flex-col items-start justify-start gap-3"
        >
          <h3 className="text-lg font-medium b-red">{box.title}</h3>
          <div className="b-text text-sm flex flex-col gap-y-1">{box.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default SerWhyChooseUs;
