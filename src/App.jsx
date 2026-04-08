import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import AdminContacts from "./pages/AdminContacts";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUpload from "./pages/AdminUpload";
import AdminTrash from "./pages/AdminTrash";
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Route>
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/messages"
        element={
          <ProtectedRoute>
            <AdminContacts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/messages"
        element={
          <ProtectedRoute>
            <AdminContacts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/upload"
        element={
          <ProtectedRoute>
            <AdminUpload />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/trash"
        element={
          <ProtectedRoute>
            <AdminTrash />
          </ProtectedRoute>
        }
      />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
}
