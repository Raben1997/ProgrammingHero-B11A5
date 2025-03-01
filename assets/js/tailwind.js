tailwind.config = {
  theme: {
    screens: {
      "max-3xl": { max: "1599px" },
      "max-xxl": { max: "1399px" },
      "max-xl": { max: "1199px" },
      "max-lg": { max: "991px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "575px" },
      "max-xs": { max: "400px" },
    },
    extend: {
      colors: {
        primary: "#00303C",
        secondary: "#00000080",
        acent: "#3752FD",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
