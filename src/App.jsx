// import { useState } from 'react'
// import { useState,useEffect,useCallback } from 'react';
// import './App.css'

 
// const App = () => {
//   const [number , setNumber] =useState(true);
//   const [special , setSpecial] = useState(false);
//   const [length , setLength] = useState(6);
//   const [password , setPassword] = useState("SDF#$%&876bgxf&");
 
// useEffect(()=>{
//   function generatepass(){
//   let pass=" "
//  for (let i =0;i<= length; i++){ 
//   let index = Math.floor(Math.random()*15)
//   if(number){
//     let num = "012345678956789"
//     pas += num[index]
//   }
//   if(special){
//     let spec="!@#$%^&*()#$%^&"
//     pas += spec[index]
//   }
// }
// if(!pas){
//   alert("please select the some digites")
// }
  
//  pas = pas.slice(0 , length)
//  setPassword(pas)
// },[number,special,length])


// // useEffect(()=>{
//   function generatepass() {
//    let pas =" "
// return (
//   <div>
//     <div className="w-[500px] h-[300px]">
//       <div>
//         <input type="text" value={password} readOnly />
//         <button>copy</button>
//       </div>
//     <div>
//       <input type="range" value={length} max={5} min={15} onChange={(e) => setLength(e.target.value)} />
//       <span>{length}</span>
//       <label htmlFor="firstcheck">

        
//         {""} number: <input type="checkbox" id="firstcheck" checked={number} onChange={() =>{
//           setnumber(!number);
//         }} />
//       </label>
//       <label htmlFor="secondcheck">
//         {""} special char : <input type="checkbox" id="secondcheck" checked={special} onChange={() =>{
//           setSpecial(!special);
//         }} />
//       </label>
//     </div>

//     </div>
//   </div>
// );
// };
// export default App;
import { useState,useCallback,useEffect} from 'react' 
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg' 
import './App.css' 
 
 
// function App() { 
//   return ( 
//     <div className="App"> 
//       <h1>Hello, React with Vite!</h1> 
//     </div> 
//   ); 
// } 
const App = ()=> { 
    const [number , setnumber] =useState(true); 
    const [special , setSpecial] = useState(false); 
    const [character, setCharacter] = useState(true); 
    const [length , setLength] = useState(6); 
    const [password,setpassword] = useState("!@#$%^&*)(_"); 
   
   useEffect(()=>{ 
  function generatepass() { 
   let pas =" " 
   for (let i =0;i<= length; i++){  
    let index = Math.floor(Math.random()*15) 
    if(number){ 
      let num = "012345678956789" 
      pas +=num[index] 
    } 
    if(special){ 
      let spec="!@#$%^&*()#$%^&" 
      pas += spec[index] 
    } 
    if(character){ 
        let char ="abcdhtABCFDGHH" 
        pas += char[index] 
    } 
  } 
  if(!pas){ 
    alert("please select the some digites") 
  } 
   pas = pas.slice(0 , length) 
   setpassword(pas) 
  } 
  generatepass(); 
  }, [number,length,special,character]) 
  return ( 
    <div> 
     
      <div className= "main"> 
        <div> 
        <h1>𝒫𝒜𝒮𝒮𝒲𝒪𝑅𝒟 𝒢𝐸𝒩𝒯𝑅𝒜𝒯𝒪𝑅</h1>
          <input type="text" value={password} readOnly /> 
          <button>copy</button> 
        </div> 
      <div> 
        <input type="range" value={length} min={5} max={15} onChange={(e) => setLength(e.target.value)} /> 
        <span>{length}</span> 
        <label htmlFor="firstcheck"> 
          {""} number: <input type="checkbox" id="firstcheck" checked={number} onChange={() =>{ 
            setnumber(!number); 
          }} /> 
        </label> 
        <label htmlFor="secondcheck"> 
          {""} special char : <input type="checkbox" id="secondcheck" checked={special} onChange={() =>{ 
            setSpecial(!special); 
          }} /> 
        </label> 
        <label htmlFor="thirdcheck"> 
          {""} Characters: <input type="checkbox" id="thirdcheck" checked={character} onChange={() =>{ 
            setCharacter(!character); 
          }} /> 
          <h1>!@12DF&*$**</h1>
        </label> 
      </div> 
   
      </div> 
    </div> 
  ); 
}; 
 
 
export default App;