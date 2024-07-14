import NavBar from '../components/Navbar'; 
import '../pages/styles/notes.css';
import '../config/firebase.js'; // Add this line prevent firebase not loading error
import { getFirestore, addDoc, collection, getDocs, doc, getDoc,updateDoc} from "firebase/firestore"; 


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
    const db = getFirestore();
const handleClick = async () => {
    if(Name === "Cornell-Notes"){
        console.log('Cornell Notes Template');
        const docRef = await addDoc(collection(db,"document"),{
            type: "cornell"
        })
        window.open('#/notes/'+docRef.id,'_self');
        //1st parameter is the URL, 2nd parameter is the url it will start with in the new tab.
    }
    if(Name==="Outline-Notes"){
        console.log('Outline Notes Template');
        const docRef = await addDoc(collection(db,"document"),{
            type: "outline"
        })
        window.open('#/notes/'+docRef.id,'_self');
        //1st parameter is the URL, 2nd parameter is the url it will start with in the new tab.
    }
    if(Name==="Free-Notes"){
        console.log('Free Notes');
        const docRef = await addDoc(collection(db,"document"),{
            type: "free"
        })
        window.open('#/notes/'+docRef.id,'_self');
        //1st parameter is the URL, 2nd parameter is the url it will start with in the new tab.
        }
}
    return(
    <>
    <div className = "container">
    <h3>{Name}</h3>
        <TemplateButton Press = {handleClick}/>
</div>
    </>
    );
 }

 function TemplateButton({Press}){
    return(
        <button className='average' onClick = {Press}>Use Template</button>
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
    {/* <Documents NameNotes="Note 1" Content="Content 1"/>
    <Documents NameNotes="Note 2" Content="Content 2"/>
    <Documents NameNotes="Note 3" Content="Content 3"/>
    <Documents NameNotes="Note 4" Content="Content 4"/>
    <Documents NameNotes="Note 5" Content="Content 5"/>
    <Documents NameNotes="Note 6" Content="Content 5"/> */}
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