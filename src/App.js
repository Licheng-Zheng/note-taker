import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route} from 'react-router-dom';
//since we want to use the router we need to import the BrowserRouter, Routes, and Route from react-router-dom
//and since all the pages are also part of the router dom,  we gotta import that too.
import Home from './pages/home';
import About from './pages/about'; 
import NotFound from './pages/notfound';
import Notes from './pages/notes';
import Actual from './pages/actualdocument';
import NavBar from './components/Navbar'; 
export default function App() {
  return (

    //routes is a component that will contain all the routes that we want to use in our app
    //it should have the component which will render when the given path matches the current URL
    //the Route component will have two props, path and element
    //The browserROuter uses the HTML5 history API to keep your UI in sync with the URL.
    //They must work in tandem to provide a full  Single Page Application ( SPA )experience.
    // The path with a star indicates all the paths that are not defined in the routes..
    //Grouping them together as Routes also only let the url match one of routes in them.
    //On github pages, note that it cannot store browser history like our local server.  Everytime you click a url, it will try to find the page in the repository.
    //and if not it will return a 404.   Front-end routing ( the action of syncing the UI with the URL ) does not work for this case, because of the different links that host gh-pages.
    //The solution is to use HashRouter instead of BrowserRouter.  The code will look for the Hash of the URL instead of the URL, which stays constant for both local servers and github pages, unlike the urls.
    <>
    <HashRouter>
    <Routes>
      <Route path = '/notes' element = {<Notes/>}/>
      <Route path = '/notes/:id' element = {<Actual/>}/>
      <Route index element ={<Home />}/>
      <Route path = "/home" element = {<Home />}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/actual" element = {<Actual/>}/>
      <Route path ="*" element = {<NotFound/>}/>
    </Routes>
    </HashRouter>
    </>
  );
}
// export default App;
