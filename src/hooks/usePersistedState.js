import { useState, useEffect } from "react";

const usePersistedState = (value, key) => {
    const [state, setstate] = useState(
        () => JSON.parse(localStorage.getItem(key)) || value
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setstate];
};

export default usePersistedState;
