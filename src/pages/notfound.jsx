import NavBar from '../components/Navbar'
import './styles/notfound.css';
export default function notfound(){
    return(
        <>
        <NavBar/>
        <h1 className = "title404">404 Page not Found.</h1>
        <h2>Please go somewhere else.</h2>
        </>
    );

}