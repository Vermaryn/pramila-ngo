import React from "react";
import { whoWeAre } from "../data/aboutData";
import ReadMore from "../components/ReadMore";
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

        {/* <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={img("about/our mission.jpg")}
              alt="Mission"
              className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-pacifico text-green-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To eradicate the stigma associated with leprosy and to empower
              individuals and families through education, medical care, and
              social inclusion. We believe in restoring dignity and hope for
              every affected life.
            </p>

            <h2 className="text-2xl font-pacifico text-green-700 mt-8 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A world free from leprosy-related discrimination, where every
              person lives with equal opportunities, self-respect, and social
              acceptance.
            </p>
          </div>
        </section>

    
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-pacifico text-green-700 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2015, Healing Lives NGO began as a small volunteer
                group dedicated to spreading awareness about leprosy in rural
                India. Over time, we expanded our outreach programs, health
                camps, and rehabilitation centers, touching the lives of
                thousands.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we collaborate with healthcare professionals, local
                communities, and government initiatives to create long-lasting
                social impact and transform lives.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={img("about/our vision.jpg")}
                alt="Our Story"
                className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
              />
            </div>
          </div>
        </section> */}
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
