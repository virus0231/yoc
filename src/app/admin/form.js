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

  const [nextId, setNextId] = useState(3);

  const [modal, setModal] = useState({ open: false, content: null });
  const [editUser, setEditUser] = useState(null);
  const [editClients, setEditClients] = useState([]);

  const [addClientModal, setAddClientModal] = useState(false);
  const [addSelectedClients, setAddSelectedClients] = useState([]);

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
      id: nextId,
      name: form.name,
      email: form.email,
      role: form.userRole,
      status: "active",
      client: form.accessToClient,
    };
    setUsers((prev) => [...prev, newUser]);
    setNextId((prev) => prev + 1);
    setForm({
      name: "",
      email: "",
      pass: "",
      displayName: "",
      userRole: "",
      accessToClient: "",
    });
  };

  const handleViewClient = (user) => {
    setEditClients(Array.isArray(user.client) ? user.client : [user.client]);
    setEditUser({ ...user });
    setModal({ open: true, type: "viewClient" });
  };

  const handleEdit = (id) => {
    const user = users.find((u) => u.id === id);
    setEditUser({ ...user });
    setModal({ open: true, type: "edit" });
  };

  const handleAddClientModalOpen = () => {
    setAddSelectedClients(
      form.accessToClient
        ? Array.isArray(form.accessToClient)
          ? form.accessToClient
          : [form.accessToClient]
        : []
    );
    setAddClientModal(true);
  };

  const handleAddClientModalSave = () => {
    setForm((prev) => ({ ...prev, accessToClient: addSelectedClients }));
    setAddClientModal(false);
  };

  return (
    <div>
      {modal.open && modal.type === "edit" && editUser && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit User</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setUsers((prev) =>
                  prev.map((u) =>
                    u.id === editUser.id
                      ? {
                          ...editUser,
                          client: Array.isArray(editUser.client)
                            ? editUser.client
                            : [editUser.client],
                        }
                      : u
                  )
                );
                setModal({ open: false, type: null });
              }}
            >
              <input
                className="glass_layer modal-field"
                type="text"
                value={editUser.name}
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
                placeholder="Name"
                required
              />
              <input
                className="glass_layer modal-field"
                type="email"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
                placeholder="Email"
                required
              />
              <input
                className="glass_layer modal-field"
                type="password"
                value={editUser.pass || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, pass: e.target.value })
                }
                placeholder="Password"
              />
              <input
                className="glass_layer modal-field"
                type="text"
                value={editUser.displayName || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, displayName: e.target.value })
                }
                placeholder="Display Name"
              />
              <select
                className="glass_layer modal-field"
                value={editUser.role}
                onChange={(e) =>
                  setEditUser({ ...editUser, role: e.target.value })
                }
                required
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="manager">Manager</option>
              </select>
              <select
                className="glass_layer modal-field"
                value={editUser.status}
                onChange={(e) =>
                  setEditUser({ ...editUser, status: e.target.value })
                }
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button className="glass_btn" type="submit">
                Save
              </button>
              <button
                className="glass_btn"
                type="button"
                onClick={() => setModal({ open: false, type: null })}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      {modal.open && modal.type === "viewClient" && editUser && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Client Access</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setUsers((prev) =>
                  prev.map((u) =>
                    u.id === editUser.id ? { ...u, client: editClients } : u
                  )
                );
                setModal({ open: false, type: null });
              }}
            >
              <label className="modal-label">Select Clients</label>
              <div className="modal-checkbox-list">
                {clientOptions.map((client) => (
                  <label key={client} className="modal-checkbox-item">
                    <input
                      type="checkbox"
                      checked={editClients.includes(client)}
                      onChange={() => {
                        setEditClients((prev) =>
                          prev.includes(client)
                            ? prev.filter((c) => c !== client)
                            : [...prev, client]
                        );
                      }}
                    />
                    <span>{client}</span>
                  </label>
                ))}
              </div>
              <button className="glass_btn" type="submit">
                Save
              </button>
              <button
                className="glass_btn"
                type="button"
                onClick={() => setModal({ open: false, type: null })}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      {addClientModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Select Clients</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddClientModalSave();
              }}
            >
              <label className="modal-label">Select Clients</label>
              <div className="modal-checkbox-list">
                {clientOptions.map((client) => (
                  <label key={client} className="modal-checkbox-item">
                    <input
                      type="checkbox"
                      checked={addSelectedClients.includes(client)}
                      onChange={() => {
                        setAddSelectedClients((prev) =>
                          prev.includes(client)
                            ? prev.filter((c) => c !== client)
                            : [...prev, client]
                        );
                      }}
                    />
                    <span>{client}</span>
                  </label>
                ))}
              </div>
              <button className="glass_btn" type="submit">
                Save
              </button>
              <button
                className="glass_btn"
                type="button"
                onClick={() => setAddClientModal(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      {modal.open && !modal.type && (
        <div className="modal-overlay">{modal.content}</div>
      )}
      <form
        onSubmit={handleSubmit}
        className="add-user-form glass_layer theme_box"
      >
        <h2>Add User</h2>
        <div className="add-user-form-row">
          <input
            type="text"
            name="name"
            className="glass_layer theme_box"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="glass_layer theme_box"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="glass_layer theme_box"
            name="pass"
            placeholder="Password"
            value={form.pass}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="glass_layer theme_box"
            name="displayName"
            placeholder="Display Name"
            value={form.displayName}
            onChange={handleChange}
          />
          <select
            name="userRole"
            className="glass_layer theme_box"
            value={form.userRole}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="manager">Manager</option>
          </select>
          <div
            className="glass_layer modal-field add-client-select-field theme_box"
            tabIndex={0}
            onClick={handleAddClientModalOpen}
          >
            {Array.isArray(form.accessToClient) &&
            form.accessToClient.length > 0 ? (
              form.accessToClient.join(", ")
            ) : typeof form.accessToClient === "string" &&
              form.accessToClient ? (
              form.accessToClient
            ) : (
              <span style={{ color: "#bbb" }}>Select Client(s)</span>
            )}
          </div>
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
              <td data-label="Client Access">
                <button
                  className="glass_btn"
                  type="button"
                  onClick={() => handleViewClient(user)}
                >
                  View Client
                </button>
              </td>
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
