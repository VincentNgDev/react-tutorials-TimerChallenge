/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "4.5xl": "60rem",
        "50rem": "50rem",
      },
      width: {
        "22rem": "22rem",
      },
      fontFamily: {
        "handjet-mono": ["Handjet", "monospace"],
      },
      fontSize: {
        "size-i": "1rem",
        "size-i-d2": "1.2rem",
        "size-i-d25": "1.25rem",
        "size-i-d5": "1.5rem",
        "size-i-d75": "1.75rem",
  
        "size-ii": "2rem",
  
        "size-iii": "3rem",
        "size-iii-d5": "3.5rem",
  
        "size-iv": "4rem",
        "size-v": "5rem",
        "size-vi": "6rem",
        "size-vii": "7rem",
        "size-viii": "8rem",
        "size-ix": "9rem",
        "size-x": "10rem",
      },
      colors: {
        "hp-h1-txt-color": "#c1e2dd",
        "hp-h1-txt-em-color": "#00eeff",
        "hp-p-txt-color": "#c6f4f2",
        "hp-h2-txt-color": "#54a399",
        "hp-setname-btn-bg-color": "#54a399",
        "hp-setname-btn-txt-color": "#061e1a",
        "hp-setname-btn-hover-bg-color": "#3c8379",
        "hp-setname-btn-hover-border-color": "#3c8379",
        "hp-setname-border-color": "#54a399",
        "hp-setname-input-bg-color": "#192f2b",
        "hp-setname-input-txt-color": "#d1f0ec",
        "hp-content-bg-from-color": "#0b201d",
        "hp-content-bg-to-color": "#021619",

        "challenge-bg-from-color": "#4df8df",
        "challenge-bg-to-color": "#4df0f8",
        "challenge-txt-color": "#221c18",
        "challenge-time-border-color": "#46cebe",
        "challenge-btn-bg-color": "#12352f",
        "challenge-btn-txt-color": "#edfcfa",
        "challenge-btn-hover-bg-color": "#051715",
        "result-dialog-bg-color": "#d7fcf8",
        "result-dialog-txt-strong-color": "#10655b",
        "result-dialog-btn-bg-color": "#10655b",
        "result-dialog-btn-txt-color": "#edfcfa",
        "result-dialog-btn-hover-bg-color": "#051715",
        "result-dialog-btn-disabled-bg-color": "#cccccc",
      },
      boxShadow: {
        "hp-h1-txt-shadow": "0 0 4px rgba(35, 34, 34, 0.4)",
        "hp-content-box-shadow": "0 2px 8px rgba(0, 0, 0, 0.8)",

        "challenge-box-shadow": "0 2px 8px rgba(35, 34, 34, 0.6)",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
      },
      padding: {
        "0.4": "0.4rem",
        "0.3": "0.3rem"
      },
      borderRadius: {
        "0.25": "0.25rem",
        "4px": "4px",
      },
      animation: {
        "result-dialog-open-animation": "slide-in-from-top 0.35s ease-out",
      },
      keyframes: {
        "slide-in-from-top": {
          "0%": { transform: "translateY(-15%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1},
        },
      },
    },
  },
  plugins: [],
};
