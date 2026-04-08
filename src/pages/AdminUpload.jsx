import { useState } from "react";

export default function AdminUpload() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !file) {
      alert("Title aur PDF dono required hai");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await fetch(
  `${import.meta.env.VITE_API_URL}/api/magazine/upload`,
  {
    method: "POST",
    body: formData,
  }
);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      console.log(data);

      alert("Upload successful ✅");

      // reset form
      setTitle("");
      setFile(null);
      e.target.reset();

    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Upload Magazine</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Title */}
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />

        {/* File */}
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

      </form>
    </div>
  );
}