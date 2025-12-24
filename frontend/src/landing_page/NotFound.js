import React from 'react';

function NotFound() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row">
                <h1>404 Not Found</h1>
                <p className="mb-4 text-muted">
                Sorry, the page you are looking for does not exist.
                </p>
            </div>
        </div>
     );
}

export default NotFound;