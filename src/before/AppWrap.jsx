import React from 'react';
import Navbar from '../layout/Navbar';
import { Profile } from './Profile';

function AppWrap(props) {
    return (
        <div>
            <Navbar>
                <Profile
                    image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
                    name="James Kim"
                    size={200}
                />
                <p>Hello</p>
            </Navbar>
        </div>
    );
}

export default AppWrap;