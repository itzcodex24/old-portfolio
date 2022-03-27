module.exports = {
     jit: true,
     content: [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
     ],
     darkMode: false, // or 'media' or 'class'
     theme: {
          extend: {
               backgroundColor: {
                    topbar: "#273549",
                    background: "#273549",
                    bar: "",
               },
               colors: {
                    custom: "#10b981",
               },
               borderColor: {
                    topBorder: "#10b981",
               },
               fontFamily: {
                    tennis: ["'Rampart One', cursive;"],
                    tennis2: ["'Monoton', cursive;"],
                    aboutme: ["'Bungee', cursive;"],
                    text: ["'Fredoka', sans-serif;"],
               },
               boxShadow: {
                    custom: "0 5px .2rem currentColor",
               },
               fontSize: {
                    exs: ".4rem",
               },
               height: {
                    "min-content": "min-content",
               },
          },
     },
     variants: {
          extend: {},
     },
     plugins: [],
};
