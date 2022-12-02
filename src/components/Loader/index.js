import React from "react";

function Loader() {
    return (
        <div className="spinner-border position-relative top-50 start-50 mt-9 " role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
}

export default Loader;