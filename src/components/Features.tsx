// components/Features.tsx
"use client";
import React from 'react';

export default function Features() {
  return (
    <section className="features-section bg-gray-50">
      <div className="features-container">
        <div className="values-grid">
          {/* Title */}
          <div className="title-box">
            <h3 className="title-text">Company Values</h3>
          </div>

          {/* Divider - Desktop Only */}
          <div className="divider"></div>

          {/* Values Content */}
          <div className="values-block">
            <div>
              <h4 className="value-title">Professionalism & Integrity</h4>
              <p className="value-text">
                We uphold the highest standards of professionalism and ethical conduct in all aspects of our work. At Leanis, we view our clients as strategic partners and are committed to delivering value through transparency, accountability, and unwavering integrity.
              </p>
            </div>

            <div>
              <h4 className="value-title">Teamwork & Relationships</h4>
              <p className="value-text">
                We believe that meaningful outcomes stem from strong collaboration. Our culture emphasizes clear communication, mutual respect, and collective ownership, enabling our teams and partners to work together toward sustainable and impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}