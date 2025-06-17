import React from "react";

const EmployeeDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-4">👨‍💼 Employee Dashboard</h1>
      <p>Welcome, <strong>{user?.name}</strong>!</p>
      <p>Your role: <strong>{user?.role}</strong></p>
    </div>
  );
};

export default EmployeeDashboard;
