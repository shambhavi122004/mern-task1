import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  // Fetch all data
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/all");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Create data
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    setMessage("");
    fetchData();
  };

  // Delete data
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/${id}`, {
      method: "DELETE"
    });

    fetchData();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MERN CRUD App 🚀</h1>

      {/* Input Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Data List */}
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.message}
            <button onClick={() => handleDelete(item._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
