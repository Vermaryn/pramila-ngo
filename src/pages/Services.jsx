import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { img } from "../utils/imagePath";
import { whatWeDo } from "../data/whatWeDoData";
import ReadMoreText from "../components/ReadMore";

export default function Services() {
const introText ="At Pramilaekasha, we work at the grassroots level to empower persons affected by leprosy and other marginalized communities by addressing social, educational, legal, and human rights challenges."

const fullText = "Leprosy Rights & Social Inclusion\nWe advocate for the rights of persons affected by leprosy, work to eliminate stigma and discrimination, and promote their social inclusion and dignity."

const services = [
  {
    id: 1,
    title: "Community Awareness Drives",
    description:
      "We organize awareness campaigns to educate communities about leprosy — its causes, early detection, and prevention. These drives help reduce stigma and encourage timely medical help.",
    image: img("services/NGO-holds-awareness-drive.jpg"),
  },
  {
    id: 2,
    title: "Health, Hygiene & Disease Awareness ",
    description:
      "We conduct awareness programs on leprosy, COVID-19, and other public health issues, focusing on prevention, hygiene, and early intervention.",
    image: img("services/Rural health care.jpg"),
  },
  {
    id: 3,
    title: "Education for Marginalized Children ",
    description:
      "We support school education for children living in leprosy colonies and disadvantaged communities, especially during emergencies when access to education is disrupted.",
    image: img("services/Educate-Girls-an-NGO.jpg"),
  },
  {
    id: 4,
    title: "Community Empowerment & Capacity Building ",
    description:
      "We encourage self-reliance by empowering communities through awareness, leadership development, and participation in decision-making processes",
    image: img("services/teamwork.JPG"),
  },
  {
    id: 5,
    title: " Disability Rights & Accessibility  ",
    description:
      "We work for the protection and promotion of disability rights, ensuring access to government schemes, benefits, and inclusive policies.",
    image: img("services/teamwork.JPG"),
  },
  {
    id: 6,
    title: "Legal Awareness & Access to Justice ",
    description:
      "We assist marginalized individuals in understanding their legal rights and advocate for equal access to justice, especially in cases of discrimination and exclusion.",
    image: img("services/teamwork.JPG"),
  },
  {
    id: 7,
    title: "Emergency Relief & Humanitarian Support ",
    description:
      "During crises such as pandemics or natural disasters, we provide food, hygiene kits, and essential supplies to vulnerable families.",
    image: img("services/teamwork.JPG"),
  },
  {
    id: 8,
    title: "Research & Documentation",
    description:
      "We engage in research and documentation related to leprosy, social justice, and human rights to support evidence-based advocacy and policy change.",
    image: img("services/teamwork.JPG"),
  },
];


  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-[Poppins]">
      {/* === Hero Section === */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-pacifico mb-3">What We Do</h1>
        <ReadMoreText intro={introText} fullText={fullText} />
      </section>

      {/* === Services Section === */}
      {/* <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover"
            />
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
      </section> */}
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
  <div className="absolute inset-0 bg-center bg-cover blur-sm scale-110"
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
