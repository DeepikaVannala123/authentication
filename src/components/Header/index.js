// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <ul className="nav-menu">
        <Link to="/">
          {' '}
          <li className="menu">Home</li>
        </Link>
        <Link to="/about">
          {' '}
          <li className="menu">About</li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
