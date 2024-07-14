import NavBar from '../components/Navbar';
import '../config/firebase.js';
import './styles/actual.css';
import React, { useState} from 'react';
import { getFirestore, addDoc, collection, getDocs, doc, getDoc,updateDoc} from "firebase/firestore"; 
import {useParams} from 'react-router-dom';
function Entry({title, questions, content, summary,id, onSave}){
    const [inputTitle, setTitle] = useState(title);
     const [inputQuestion, setQuestion] = useState(questions);
     const [inputContent, setContent] = useState(content);
     const [inputSummary, setSummary] = useState(summary);
  
  
      return(
        <><Save onClick = {()=>onSave(id,inputTitle, inputQuestion,inputContent,inputSummary)} id = {id}/>
  <div className = 'containertitle'>
  <textarea id='title' onChange={(e)=>setTitle(e.target.value)}>
    {inputTitle}
    </textarea>
  </div>
      <div className='entry'>
    <textarea id ='questions'  onChange={(e)=>setQuestion(e.target.value)}>
      {inputQuestion}
     </textarea>
      <textarea id='main'  onChange={(e)=>setContent(e.target.value)}>
      {inputContent}
      </textarea>
      </div>
      <div className='containersum'>
      <textarea id ='summary'  onChange={(e)=>setSummary(e.target.value)}>
        {inputSummary}
      </textarea>
      </div>
    
   </>
      );
  
  }
  function Plus({onplusclick}){
    return(
      <div className='plus'>
      <button className = 'useful' id='plus' onClick={onplusclick} >+</button>
      </div>
    );
  }
  function Save({onClick}){
    return (
      <div className='save'>
      <button className = 'useful'id ='save' onClick={onClick}>Save</button>
      </div>
    )
    
    }
  

export default function ActualDocument(){
const temp= useParams();
const params = temp.id;
const typeDoc='';

let [storedValues, setStoredValues] = useState([]);
const[currentArray, setCurrentArray] = useState(storedValues);  

const db = getFirestore();
const addBlankEntry = async () => {
  const docRef = await addDoc(collection(db, "document",params,"entries"), {
    title: "Add a date and/or an unique title.",
    questions: "Add your questions here.",
    content: "Add your main notes here.",
    summary: "Summarize here."
  });
  fetchDataFromFirestore();
  //console.log("Document written with ID: ", docRef.id);
}

// const getDataType = async () => {
//   const docRef = doc(db, "document", params);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//      console.log("Document data:", docSnap.data().type);
//       return docSnap.data().type;
//   } else {
//       // doc.data() will be undefined in this case
//       // console.log("No such document!");
//   }
// }

const fetchDataFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, "document",params,"entries"));
  const temporaryArr = [];
  querySnapshot.forEach((doc) => {
      temporaryArr.push({...doc.data(),id:doc.id});
  });
  setStoredValues(temporaryArr);
 //typeDoc =  getDataType();
  console.log("success");
  // temporaryArr.forEach((item) => {
  //   console.log(item.order);
  // });
setCurrentArray(temporaryArr);
  currentArray.map( (item, index) => {
 //   console.log(item);
  });
};


function handleClick(){
addBlankEntry();
alert("Created!");
}
const handleSave= async(id, title, questions, content, summary)=>{
const docRef = doc(db,"document",params,"entries",id);
updateDoc(docRef, {
  title: title,
  questions: questions,
  content: content,
  summary: summary
});
alert("Saved!");
}
function handleFetch(){
fetchDataFromFirestore();

}


return (
  <>
<div className = "usefulcontain">
    <button className = 'useful' id = 'fetch'onClick={handleFetch}>Fetch</button>
    <Plus onplusclick={handleClick}/>
    </div>  
  {currentArray.map( (item, index) => (
    <Entry onSave = {handleSave} title ={item.title} questions={item.questions} content={item.content} summary ={item.summary} id={item.id}/>
       )
    )}
  </>
);



}