
import {Link} from 'react-router-dom';
import '../pages/styles/navbar.css';
export default function NavBar() {
  return (
    <>
  <nav>
    <ul>
    <li>
                 <Link to="/" className = "link">Home</Link>
             </li>
             <li>
                 <Link to="/about" className = "link">About</Link>
             </li>
             <li>
                 <Link to="/notes" className = "link">Your Notes</Link>
             </li>
         </ul>
  </nav>
  </>
  );
}