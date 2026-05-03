import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [magazines, setMagazines] = useState([]);
  const [loadingMap, setLoadingMap] = useState({});

  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/magazine`)
    .then((res) => res.json())
    .then((data) => {
      setMagazines(data);

      // initial loading true
      const initialLoadingMap = {};
      data.forEach((item) => {
        initialLoadingMap[item._id] = true;
      });
      setLoadingMap(initialLoadingMap);
    });

    
    
}, [])
const handleLoad = (id) => {
      setLoadingMap((prev) => ({ ...prev, [id]: false }));
};
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
              {/* loader */}
              <div className="relative w-full h-96">
                {loadingMap[mag._id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-green-500 border-t-transparent">

                    </div>
                  </div>
                )}
                <iframe
                  src={mag.pdfUrl}
                  className="w-full h-96 rounded mb-4"
                  title="PDF Preview"
                  onLoad={() => handleLoad(mag._id)}
                ></iframe>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mt-2">
                
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
