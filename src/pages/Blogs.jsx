import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/magazine`)
    .then((res) => res.json())
    .then((data) => setMagazines(data));
}, []);

  return (
    <section id="blogs" className="py-16 bg-gray-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-pacifico text-green-700 text-center mb-12">
          Magazines
        </h2>

        {/* Cards */}
        <div className="grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] text-center">
          {magazines.map((mag) => (
            <div
              key={mag._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col p-6"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                {mag.title}
              </h3>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mt-2">
                <iframe
                  src={mag.pdfUrl}
                  className="w-full h-96 rounded mb-4"
                  title="PDF Preview"
                ></iframe>
                <button
                  onClick={() =>
                    window.open(
                      `https://docs.google.com/gview?url=${mag.pdfUrl}&embedded=true`,
                      "_blank",
                    )
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  View PDF
                </button>

                <a
                  href={mag.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
