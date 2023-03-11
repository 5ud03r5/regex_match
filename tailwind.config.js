export default {
  theme: {
    extend: {
      keyframes: {
        show: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        show: "show 1s ease-in-out",
      },
    },
  },
};
