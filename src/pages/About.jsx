import React from "react";
import { whoWeAre } from "../data/aboutData";
import ReadMoreText from "../components/ReadMore";

export default function About() {
  const introText =
    "Pramilaekasha is a self-financed social organization founded by Shri Sunil Kumar, inspired by the lifelong vision and dream of his mother. The Society is committed to serving humanity and becoming the voice of the voiceless, especially marginalized communities.";
  const fullText = `Our primary focus is on persons affected by leprosy and other socially weaker sections, working to uphold their dignity, rights, and access to justice.

The organization operates with complete transparency and dedication. It is largely self-supported, with the founder contributing from his own salary to carry out welfare activities.

Our work spans research, education, social welfare, disability rights, and legal advocacy, with a special emphasis on persons affected by leprosy. Through sustained efforts, we aim to create an inclusive society where every individual is treated with equality, respect, and dignity.`;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-[Poppins]">
      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-pacifico mb-4">
              About Healing Lives NGO
            </h1>
            <ReadMoreText intro={introText} fullText={fullText} />
          </div>
        </section>
        {/* WHO WE ARE (MAP BASED) */}
        {whoWeAre.map((item, index) => (
          <section
            key={index}
            className={`max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className={index % 2 !== 0 ? "md:order-2" : ""}>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
              />
            </div>

            {/* CONTENT */}
            <div className={index % 2 !== 0 ? "md:order-1" : ""}>
              <h2 className="text-3xl font-pacifico text-green-700 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
