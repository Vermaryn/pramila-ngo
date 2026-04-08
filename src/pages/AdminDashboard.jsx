import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login", { replace: true });
  };
  return (
    <div className="p-6">
      <h1>Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-sm mb-6"
      >
        Logout
      </button>
      <div className="space-x-4">
        <Link
          to="/admin/messages"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Messages
        </Link>
        <Link
          to="/admin/upload"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Upload Content
        </Link>
        <Link
          to="/admin/trash"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Trash
        </Link>
      </div>
    </div>
  );
}
