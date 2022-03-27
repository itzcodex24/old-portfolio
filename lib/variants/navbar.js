const navbar = {
     open: {
          height: "100vh",
          backdropFilter: "blur(5px)",
          background: "#1B2533",
     },
     closed(height) {
          return { height, backdropFilter: "blur(0px)", background: "#1B2533" };
     },
};

export default navbar;
