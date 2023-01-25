import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color: 'white',
        background: 'pink'
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/" style={({ isActive }) => ({ 
                color: isActive ? 'greenyellow' : 'white' })}>
                Home</NavLink>
            
                {/* // to="/"
                // exact
                // style={link}
                // activeStyle={{ */}
                {/* //     background: 'blue'
                // }} */}

          <NavLink
                to="/artists"
                exact
                style={link}
                activeStyle={{
                    background: 'blue'
                }}
            >Artists</NavLink>

           <NavLink
                to="/paintings"
                exact
                style={link}
                activeStyle={{
                    background: 'blue'
                }}
            >Paintings</NavLink>        
        </div>

    )
}

export default Navigation;