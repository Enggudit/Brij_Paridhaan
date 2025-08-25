module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }, 
        },
      },
      animation: {
        slideUp: 'slideUp 20s linear infinite',
      },
    },
  },
}
