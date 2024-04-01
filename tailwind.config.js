// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        width: "1280px"
      },
      colors:{
        primary:"#5B5CE2",
        secondary:"#1BC58D",
        bg1:"#EEEEF5",
        loginBg: 'rgb(102, 74, 234)',
        active:"#6C6DE5", 
        inputIn:"#F6F6FB",
      },
      backgroundImage: {
        'admin-gradient': 'linear-gradient(#664aea 1.16%, #5340ad 30.31%, #44397e 53.45%, #3b3461 74.6%, #333046 96.08%)',
      },
    },
  },
  plugins: [],
};
