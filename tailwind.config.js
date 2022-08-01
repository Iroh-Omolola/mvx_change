module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        banner: "#FF8A00",
        bannerLight: "rgba(255, 138, 0, .04)",
        bannerBlueLight: "rgba(0,94,205, .03)",
        blue: "#005ECD",
        text_primary: "#333333",
        // black: "#000000",
        navWhite:"rgba(255, 255, 255, 0.8)",
        grey: "#767676",
        grade_color: "rgba(0, 0, 0, 0)",
        blueLight: "rgba(0, 94, 205, 0.15)",
        orangeLight: "rgba(255, 138, 0, 0.15)",
        orangeLightNav: "rgba(255, 195, 129, 0.2)",
        blueLightNav: "rgba(217, 231, 248, 0.3)",
        altGrey: "rgba(84, 84, 84, .4)",
      },
      screens: {
        md: "941px",
        mmd: "1308px",
        xd: "1039px",
        xs: "519px",
      },
      fontFamily: {
        mon: ["Montserrat"],
        catalina: ["Catalina Rayden"],
      },
      backgroundImage: {
        video: "url('src/assets/Group 3106.svg')",
      },
    
    },
  },
  plugins: [],
};
