// components/Features.tsx
"use client";
import React from 'react';

export default function Features() {
  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: '#FCFBFF',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1px 2fr',
      gap: '32px',
      alignItems: 'center',
      minHeight: '400px',

    },
    titleBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      textAlign: 'center' as const,
    },
    titleText: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#eab308',
    },
    divider: {
      backgroundColor: '#eab308',
      width: '1px',
      height: '100%',
    },
    block: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '32px',
            margin: '0 20px',

    },
    valueTitle: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#eab308',
      margin: 0,
    },
    valueText: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#1f2937',
      margin: 0,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.valuesGrid}>
          {/* Left: Centered Title */}
          <div style={styles.titleBox}>
            <h3 style={styles.titleText}>Company Values</h3>
          </div>

          {/* Middle Divider */}
          <div style={styles.divider}></div>

          {/* Right: Values Content */}
          <div style={styles.block}>
            <div>
              <h4 style={styles.valueTitle}>Professionalism & Integrity</h4>
              <p style={styles.valueText}>
                We uphold the highest standards of professionalism and ethical conduct in all aspects of our work. At Leanis, we view our clients as strategic partners and are committed to delivering value through transparency, accountability, and unwavering integrity.
              </p>
            </div>

            <div>
              <h4 style={styles.valueTitle}>Teamwork & Relationships</h4>
              <p style={styles.valueText}>
                We believe that meaningful outcomes stem from strong collaboration. Our culture emphasizes clear communication, mutual respect, and collective ownership, enabling our teams and partners to work together toward sustainable and impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
