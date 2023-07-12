import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { path: '/', name: 'Home' },
  { path: '/calculator', name: 'Calculator' },
  { path: '/quotes', name: 'Quote' },
];

const logos = {
  textDecoration: 'none',
  color: 'black',
  fontSize: 25,
  letterSpacing: 5,
  marginLeft: 20,
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

function Navbar() {
  return (
    <>
      <div className="navbar" style={{ backgroundColor: '#f2f3f2', padding: '8px' }}>
        <Link to="/" style={logos}>Math Magicians</Link>
        <ul className="nav-items">
          {
            links.map((link) => (
              <li key={link.name}>
                <Link to={link.path} style={{ textDecoration: 'none', color: 'black', margin: '0 10px' }}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default Navbar;
