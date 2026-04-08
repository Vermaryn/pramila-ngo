import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { whatWeDo } from "../data/whatWeDoData";
import ReadMoreText from "../components/ReadMore";

export default function Services() {
const introText ="At Pramilaekasha, we work at the grassroots level to empower persons affected by leprosy and other marginalized communities by addressing social, educational, legal, and human rights challenges."

const fullText = "Leprosy Rights & Social Inclusion\nWe advocate for the rights of persons affected by leprosy, work to eliminate stigma and discrimination, and promote their social inclusion and dignity."

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-[Poppins]">
      {/* === Hero Section === */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-pacifico mb-3">What We Do</h1>
        <ReadMoreText intro={introText} fullText={fullText} />
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {whatWeDo.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <div
              className="relative w-full h-60 overflow-hidden"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              {/* BLUR LAYER */}
              <div
                className="absolute inset-0 bg-center bg-cover blur-sm scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* MAIN IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="relative z-10 w-full h-full object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-pacifico text-green-700 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
