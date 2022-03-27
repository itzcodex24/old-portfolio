//* packages
import "tailwindcss/tailwind.css";
import { useRef, useEffect, useState } from "react";

//* Public
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "../public/scrollbar.css";

function MyApp({ Component, pageProps }) {
    library.add(fas, fab);
    return <Component {...pageProps} />;
}

export default MyApp;
