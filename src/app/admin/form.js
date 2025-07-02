"use client";
import { useState } from "react";
import "../css/shuja.css";

export default function AddUserForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    pass: "",
    displayName: "",
    userRole: "",
    accessToClient: "",
  });

  const [users, setUsers] = useState([
    // Example initial data
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      status: "active",
      client: "Client A",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "user",
      status: "inactive",
      client: "Client B",
    },
  ]);

  const clientOptions = ["Client A", "Client B", "Client C", "Client D"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: form.name,
      email: form.email,
      role: form.userRole,
      status: "active",
      client: form.accessToClient,
    };
    setUsers((prev) => [...prev, newUser]);
    setForm({
      name: "",
      email: "",
      pass: "",
      displayName: "",
      userRole: "",
      accessToClient: "",
    });
  };

  const handleEdit = (id) => {
    // Placeholder for edit logic
    alert("Edit user with id: " + id);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="add-user-form glass_layer theme_box"
      >
        <h2>Add User</h2>
        <div className="add-user-form-row">
          <input
            type="text"
            name="name"
            className="glass_layer"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="glass_layer"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="glass_layer"
            name="pass"
            placeholder="Password"
            value={form.pass}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="glass_layer"
            name="displayName"
            placeholder="Display Name"
            value={form.displayName}
            onChange={handleChange}
          />
          <select
            name="userRole"
            className="glass_layer"
            value={form.userRole}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="manager">Manager</option>
          </select>
          <select
            name="accessToClient"
            value={form.accessToClient}
            onChange={handleChange}
            className="glass_layer"
            required
          >
            <option value="">Select Client</option>
            {clientOptions.map((client) => (
              <option key={client} value={client}>
                {client}
              </option>
            ))}
          </select>
        </div>
        <div className="add-user-form-btn-row">
          <button className="glass_btn" type="submit">
            Add User
          </button>
        </div>
      </form>
      <table className="theme_box glass_layer user-table flex-col">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Client Access</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td data-label="ID">{user.id}</td>
              <td data-label="Name">{user.name}</td>
              <td data-label="Email">{user.email}</td>
              <td data-label="Role">{user.role}</td>
              <td data-label="Status">{user.status}</td>
              <td data-label="Client Access">{user.client}</td>
              <td data-label="Action">
                <button
                  className="glass_btn"
                  type="button"
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
