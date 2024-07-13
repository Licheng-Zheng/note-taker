import NavBar from '../components/Navbar'


export default function ActualDocument(){
return (
    <div>
        <NavBar />
        <h1>Note Taker</h1>
        <textarea rows="10" cols="50" placeholder="Start taking notes..."></textarea>
    </div>
);

}