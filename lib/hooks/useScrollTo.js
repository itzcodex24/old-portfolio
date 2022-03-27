import { useEffect, useRef } from "react";

const useScrollTo = (
    options = { behavior: "smooth", block: "center", inline: "nearest" }
) => {
    //elemRef = {current: null}
    const elemRef = useRef(null);

    useEffect(() => {
        if (elemRef.current) {
            //elemRef.current = DomElement (from javascript Dom APi)
            elemRef.current.scrollIntoView(options);
        }
    }, []);

    return elemRef;
};

export default useScrollTo;
