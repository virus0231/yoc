"use client";
import React, { useState, useMemo } from "react";
import GCTable from "@/components/table";
import Home from "../page";

// Dummy data for demonstration
const USERS = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "User" },
  { id: 4, name: "David", email: "david@example.com", role: "Manager" },
  { id: 5, name: "Eve", email: "eve@example.com", role: "User" },
];

const PAGE_SIZE = 5;

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("id");
  const [sortDir, setSortDir] = useState("asc");

  // Filtered, sorted, paginated users
  const filtered = useMemo(() => {
    let data = USERS.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()) ||
        u.role.toLowerCase().includes(search.toLowerCase())
    );
    data = data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortDir === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return data;
  }, [search, sortBy, sortDir]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const headers = ["ID", "Name", "Email", "Role"];

  const rows = paginated.map((u) => [u.id, u.name, u.email, u.role]);

  const handleSort = (key) => {
    if (sortBy === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortBy(key);
      setSortDir("asc");
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-[#312e81]">Users</h1>
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="rounded-xl px-4 py-2 border border-[#a5b4fc]/40 bg-white/20 text-[#312e81] focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]/30 shadow"
          />
        </div>
        <div className="overflow-x-auto">
          <GCTable
            headers={headers.map((h, i) => (
              <button
                key={h}
                className="font-semibold text-[#312e81] hover:underline focus:outline-none"
                onClick={() => handleSort(["id", "name", "email", "role"][i])}
              >
                {h}
                {sortBy === ["id", "name", "email", "role"][i] && (
                  <span className="ml-1">{sortDir === "asc" ? "▲" : "▼"}</span>
                )}
              </button>
            ))}
            rows={rows}
          />
        </div>
        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded-lg bg-[#a5b4fc]/20 text-[#312e81] font-semibold disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-[#312e81] font-medium">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded-lg bg-[#a5b4fc]/20 text-[#312e81] font-semibold disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
