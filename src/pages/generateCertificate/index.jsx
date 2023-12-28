import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./generateCertificate.css";

function GenerateCertificate() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    affiliation: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    // Add logic for generating the certificate here

    // https://registration.smartsociety.org/CCWC/certificate

    fetch("https://registration.smartsociety.org/CCWC/certificate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          navigate("/certificate-status-page");
        } else {
          // console.log(data);
          alert(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #64B5F6, #2196F3)", // Background gradient
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px", // Limit the form width for better readability
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#2196F3" }}>
          Get Your Certificate
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="affiliation">Affiliation</label>
            <input
              type="text"
              name="affiliation"
              id="affiliation"
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <button
            type="submit"
            className="gcbtn"
          >
            Generate Certificate
          </button>
        </form>
      </div>
    </div>
  );
}

export default GenerateCertificate;
