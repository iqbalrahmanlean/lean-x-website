// components/VisionMission.tsx
"use client";
import React from "react";

export default function VisionMission() {
  return (
    <section className="vision-mission-section">
      <div className="container">
        <div className="grid">
          {/* Vision */}
          <div className="item">
            <img src="icon/idea.svg" alt="Vision Icon" className="icon" />
            <h3 className="title">Vision</h3>
            <p className="description">
              To empower businesses of all sizes with a secure and accessible
              digital payment infrastructure that simplifies transactions and
              supports long-term growth.
            </p>
          </div>

          {/* Mission */}
          <div className="item">
            <img src="icon/arrow.svg" alt="Mission Icon" className="icon" />
            <h3 className="title">Mission</h3>
            <p className="description">
              To develop and continuously enhance Lean.x as a trusted,
              efficient, and future-ready payment gateway that meets the
              evolving needs of merchants and end-users.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vision-mission-section {
          padding: 80px 16px;
          background-color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          justify-content: center;
          text-align: left;
        }

        .item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .icon {
          width: 32px;
          height: 32px;
          margin-bottom: 16px;
        }

        .title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffc200;
          margin-bottom: 16px;
        }

        .description {
          font-size: 1rem;
          color: #1f2937;
          line-height: 1.6;
          max-width: 500px;
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          .vision-mission-section {
            padding: 60px 16px;
          }

          .grid {
            gap: 48px;
          }

          .title {
            font-size: 1.75rem;
          }

          .description {
            font-size: 0.95rem;
            max-width: 450px;
          }
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .vision-mission-section {
            padding: 40px 16px;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .item {
            align-items: center;
          }

          .icon {
            width: 40px;
            height: 40px;
            margin-bottom: 20px;
          }

          .title {
            font-size: 1.5rem;
            margin-bottom: 12px;
          }

          .description {
            font-size: 0.9rem;
            max-width: 100%;
            text-align: center;
          }
        }

        /* Small mobile styles */
        @media (max-width: 480px) {
          .vision-mission-section {
            padding: 32px 12px;
          }

          .grid {
            gap: 32px;
          }

          .icon {
            width: 36px;
            height: 36px;
            margin-bottom: 16px;
          }

          .title {
            font-size: 1.25rem;
            margin-bottom: 8px;
          }

          .description {
            font-size: 0.85rem;
            line-height: 1.5;
          }
        }
      `}</style>
    </section>
  );
}