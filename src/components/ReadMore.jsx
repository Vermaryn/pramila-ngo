import { useState } from "react";

export default function ReadMoreText({ intro, fullText }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-blue-100 max-w-3xl mx-auto text-center">
      {/* INTRO */}
      <p className="text-lg leading-relaxed mb-6">
        {intro}
      </p>

      {/* SMOOTH EXPAND CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-lg leading-relaxed mb-4 whitespace-pre-line">
          {fullText}
        </p>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-yellow-300 font-semibold hover:underline transition-colors duration-300"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
