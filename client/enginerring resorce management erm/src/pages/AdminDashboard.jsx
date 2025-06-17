import React from "react";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-4">🛠 Admin Dashboard</h1>
      <p>Welcome, <strong>{user?.name}</strong>!</p>
      <p>Your role: <strong>{user?.role}</strong></p>

      <div className="mt-4">
        {/* Future: Add user management, reporting, etc */}
        <p>This is a protected page only for admins.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
