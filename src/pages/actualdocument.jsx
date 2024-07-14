import NavBar from '../components/Navbar'
import './styles/actual.css';
import {useParams} from 'react-router-dom';

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
const params = useParams();
console.log(params);
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