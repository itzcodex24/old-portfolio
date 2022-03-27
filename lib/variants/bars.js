const bars = [
    {
        variants: {
            hoverOn: {
                backgroundColor: "#1bfaad",
                transition: {
                    duration: 1,
                },
            },
            hoverOff: {
                backgroundColor: "#1bfaac21",
                transition: {
                    duration: 1,
                },
            },
            open: {
                rotateZ: 225,
                position: "absolute",
                margin: 0,
            },
            closed: {
                rotateZ: 0,
                margin: "2px",

                position: "relative",
            },
        },
    },
    {
        variants: {
            hoverOn: {
                backgroundColor: "#1bfaad",
                transition: {
                    duration: 1,
                },
            },
            hoverOff: {
                backgroundColor: "#1bfaac21",
                transition: {
                    duration: 1,
                },
            },
            open: {
                width: "0%",
                position: "absolute",
                margin: 0,
                opacity: 0,
            },
            closed: {
                margin: "2px",

                width: "100%",
                position: "relative",
                opacity: 1,
            },
        },
    },
    {
        variants: {
            hoverOn: {
                backgroundColor: "#1bfaad",
                transition: {
                    duration: 1,
                },
            },
            hoverOff: {
                backgroundColor: "#1bfaac21",
                transition: {
                    duration: 1,
                },
            },
            open: {
                rotateZ: -225,
                position: "absolute",
                margin: 0,
            },
            closed: {
                margin: "2px",
                rotateZ: 0,
                position: "relative",
            },
        },
    },
];

export default bars;
