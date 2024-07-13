import NavBar from '../components/Navbar'; 
import '../pages/styles/notes.css';
function Documents({NameNotes, Content}){
    return(
    <>
<div className = "container">
    <h3>{NameNotes}</h3>
    <button className='average'>Edit</button>
    <button className ='average'>Delete</button>
    <button className ='average'>Share URL</button>
    </div>    </>
    );
}
 function Templates({Name}){

    return(
    <>
    <div className = "container">
    <h3>{Name}</h3>
    <button className = 'average'>Use Template</button>
    </div>
    </>
    );
 }
function  ContainerDocument(){
    return(
        <>
        <h2 class = 'notetitles'>Templates to use:</h2>
        <div className = 'containdocs'>
    <Templates Name="Cornell-Notes"/>
    <Templates Name="Outline-Notes"/>       
    <Templates Name="Free-Notes"/>
        </div>
        <hr/>
        <h2 class = 'notetitles'>Your saved work.</h2>
        <div className='containdocs'>
    <Documents NameNotes="Note 1" Content="Content 1"/>
    <Documents NameNotes="Note 2" Content="Content 2"/>
    <Documents NameNotes="Note 3" Content="Content 3"/>
    <Documents NameNotes="Note 4" Content="Content 4"/>
    <Documents NameNotes="Note 5" Content="Content 5"/>
    <Documents NameNotes="Note 6" Content="Content 5"/>
    </div>
    
        </>
    
    );

}
export default function Notes(){

return(
<>
<NavBar/>
<ContainerDocument/>
</>
);
}