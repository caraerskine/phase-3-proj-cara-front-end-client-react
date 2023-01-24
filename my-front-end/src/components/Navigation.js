import React from 'react'
import { NavLink } from 'react-router-dom'


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
                to="/"
                exact
                style={link}
                activestyle={{
                    background: 'cyan'
                }}
            >Home</NavLink>

          <NavLink
                to="/artists"
                exact
                style={link}
                activestyle={{
                    background: 'cyan'
                }}
            >Artists</NavLink>

           <NavLink
                to="/paintings"
                exact
                style={link}
                activestyle={{
                    background: 'cyan'
                }}
            >Paintings</NavLink>        
        </div>

    )
}

export default Navigation;