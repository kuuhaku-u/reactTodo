import React from 'react';

const Heading = React.memo(({ label, count = 0 }:any) => {
    console.log("PURE COMP");

    return (
        <div>
            <h6>{label}</h6>
            <span>{count}</span>
        </div>
    );
});

export default Heading;
