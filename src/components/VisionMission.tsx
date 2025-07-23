// components/VisionMission.tsx
"use client";
import React from "react";


export default function VisionMission() {
  const styles = {
    section: {
      padding: "80px 16px",
      backgroundColor: "#F9F8FA",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "64px",
      alignItems: "start",
      justifyContent: "center",
      textAlign: "left" as const,
    },
    item: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "flex-start" as const,
    },
    icon: {
      width: "32px",
      height: "32px",
      color: "#facc15", // Tailwind yellow-400
      marginBottom: "16px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#facc15", // Tailwind yellow-400
      marginBottom: "16px",
    },
    description: {
      fontSize: "1rem",
      color: "#1f2937", // Tailwind gray-800
      lineHeight: 1.6,
      maxWidth: "500px",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Vision */}
          <div style={styles.item}>
            <img src="icon/idea.png" />
            <h3 style={styles.title}>Vision</h3>
            <p style={styles.description}>
              To empower businesses of all sizes with a secure and accessible
              digital payment infrastructure that simplifies transactions and
              supports long-term growth.
            </p>
          </div>

          {/* Mission */}
          <div style={styles.item}>
                  <img src="icon/arrow.png" />
            <h3 style={styles.title}>Mission</h3>
            <p style={styles.description}>
              To develop and continuously enhance Lean.x as a trusted,
              efficient, and future-ready payment gateway that meets the
              evolving needs of merchants and end-users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
