import Navbar from '../components/Navbar'
import './styles/home.css';


export default function Home(){
    return (
        <>
              <div className = 'background'>
              <Navbar />
                  <h1 id ='title'>Create. Collaborate. Win Together.</h1>
                  <p>Note taker oriented towards easy collaboration between students-to-students and students-to-teachers.</p>
                <button id='start'>Get Started</button>
            </div>
            <div className='body'>

            </div>
        </>
      
    );
}