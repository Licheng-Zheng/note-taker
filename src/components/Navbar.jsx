
import {Link} from 'react-router-dom';
import '../pages/styles/navbar.css';
export default function NavBar() {
  return (
    <>
  <nav>
    <div className="navcontainer">
     <div className= "containtitle">
     <Link to="/" className = "link"> <h3>Notetaker</h3></Link>
     </div>
     <div className= "linkcontainer">
     <Link to="/about" className = "link">About</Link>
     </div>
     <div className= "linkcontainer">
     <Link to="/notes" className = "link">Your Notes</Link>
     </div>
    </div>
  </nav>
  </>
  );
}