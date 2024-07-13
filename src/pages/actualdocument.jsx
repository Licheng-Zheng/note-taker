import NavBar from '../components/Navbar'
import './styles/actual.css';
function Save(){
    return (
        <button className='special'>Save</button>
    );
}
function ShareUrl(){
    return (
        <button className='special'>Share URL</button>
    );

}
export default function ActualDocument({NameDoc, Content}){
return (
    <div>
        <NavBar />
        <h1>Note Taker</h1>

        <div className = 'container'>
        <Save/>
        <ShareUrl/>
        </div>
       
        <textarea className = 'free' placeholder="Start taking notes..."></textarea>
    </div>
);

}