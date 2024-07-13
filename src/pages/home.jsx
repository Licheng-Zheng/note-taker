import Navbar from '../components/Navbar'
import './styles/home.css';


function Steps({step, description}){

    return (
<>
        <h2>{step}</h2>
        <p>{description}</p>

</>

);




}

export default function Home(){
    return (
        <>
              <div className = 'background'>
              <Navbar />
              <div className = 'typewriter'>
                <h1 id ='title'>Create.    Collaborate.    Win.</h1>
                </div>
                  <p>Note taker oriented towards easy collaboration between students-to-students and students-to-teachers.</p>
                <button id='start'>Get Started</button>
            </div>
            <div className='body'>
            <div className ='problem'>
            <h2>The Problem</h2>
            <p>Students often have trouble keeping up with the pace of lectures and taking notes.</p>
            <p> As a result they make what we like to call: <strong>defective</strong> notes. </p>
            <p> They are inefficient, hard to understand so that it would be much better to just read the text-book.</p>
            </div>



            <h2>Our <strong>3 </strong> step solution: </h2>
            <div className = 'triadcontain'>
            <div className='section'>
            <Steps step ="1. Organization" description="Keep your notes organized by subject, date, or any other way that makes sense to you. Explore templates that organize your notes for you."/>
                </div>
            <div className = 'section'>
            <Steps step = "2. Engagment" description ="Engage yourself with sections available for questions, summaries, and general tips to help you to study!"/>
            </div>
            <div className = 'section'>
            <Steps step = "3. Collaboration" description = " 2 Brains, 3 Brains, 4... are all better than 1.  Get your teacher, your close friends, to easily check over your notes with just the click of a link !"/>
                </div>
            </div>
      
            </div>
        </>
      
    );
}