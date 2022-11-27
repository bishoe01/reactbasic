import React from 'react';

function Navbar({children}) {
    return (
        <header style={{backgroundColor:'yellow'}}>
            {children}
        </header>
    );
}

export default Navbar;

