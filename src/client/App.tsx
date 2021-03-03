import React, { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 1000);
        return () => clearTimeout(timer);
    }, [count, setCount]);

    return (
        <div className="app">
            <h1>Welcome to FIT3161!</h1>
            <p>
                Page has been opened for <code>{count}</code> seconds.
            </p>
            <p>Angus was here!</p>
            <p>Chris was here too</p>
        </div>
    );
}

export default App;
