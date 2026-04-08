import React from "react";
import { news } from "../data/news";
export default function News() {
  return (
    <section id="news" className="py-16 bg-gray-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4">
        {/* === Title === */}
        <h2 className="text-4xl font-pacifico text-center text-green-700 mb-12">
          News & Stories
        </h2>

        {/* === News Grid === */}
        <div className="flex flex-col min-h-screen bg-gray-50 font-[Poppins]">
          <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                  {news.map((service) => (
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
      </div>
    </section>
  );
}
