import './navbar.css'
import '../../icon/nasa-logo.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
        <div className="brand-name"> 
        <img src='nasa-logo.svg' alt='nasa logo' style={{width:50}}></img>
        <a href="https://www.nasa.gov/" >NASA</a>
        </div> 
        <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
          {/* icon from heroicons.com */}
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
            
          <ul>
            <li>
              <Link  className='Link' to="/" onClick={() => {
                if (isNavExpanded){
          setIsNavExpanded(!isNavExpanded)};
        }}>Home </Link>
            </li>
            <li>
              <Link className='Link' to="/about" onClick={() => {
          if (isNavExpanded){
            setIsNavExpanded(!isNavExpanded)};
        }}>About</Link>
            </li>
            <li>
              <Link  className='Link' to="/Mars" onClick={() => {
          if (isNavExpanded){
            setIsNavExpanded(!isNavExpanded)};
        }}>Mars photos</Link>
            </li>
          </ul>
        </div>
      </nav>
      )
  }