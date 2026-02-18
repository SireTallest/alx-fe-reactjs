import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ backgroundColor: 'white', color: 'black', width: '100vw', padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px'}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;