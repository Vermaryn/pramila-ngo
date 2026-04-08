import { useEffect, useState } from "react";

export default function AdminTrash() {
  const [contacts, setContacts] = useState([]);

  // fetch trash data
  const fetchTrash = () => {
    fetch("http://localhost:5000/api/contact/trash")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  };

  useEffect(() => {
    fetchTrash();
  }, []);

  // ✅ restore
  const handleRestore = async (id) => {
    await fetch(`http://localhost:5000/api/contact/restore/${id}`, {
      method: "PUT",
    });

    fetchTrash(); // refresh
  };

  // ✅ permanent delete
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/contact/permanent/${id}`, {
      method: "DELETE",
    });

    fetchTrash(); // refresh
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Trash</h1>

      {contacts.length === 0 ? (
        <p className="text-gray-500">No items in trash</p>
      ) : (
        contacts.map((c) => (
          <div
            key={c._id}
            className="border p-4 mb-4 rounded-lg shadow bg-gray-50"
          >
            <h3 className="font-semibold text-lg">{c.name}</h3>
            <p className="text-sm text-gray-600">{c.email}</p>
            <p className="mt-2">{c.message}</p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => handleRestore(c._id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Restore
              </button>

              <button
                onClick={() => handleDelete(c._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}