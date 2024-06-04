
import './App.css';
import {useState} from 'react';
import {Uc,LC,NC,SC} from './data/passchar.jsx';

function App() {
  let [uppercase ,setUppercase]=useState(false)
  let [lowercase ,setLowercase]=useState(false)
  let [number ,setnumber]=useState(false)
  let [symbol ,setsymbol]=useState(false)
  let [passwordlen,setpasswordlen]=useState(10)
  let [fpass , setpass]=useState('')



  let createPassword=()=>{

    let finalPass=''
    let charSet=''
    if(uppercase||lowercase||number||symbol){
      if(uppercase) charSet+=Uc;
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbol) charSet+=SC;
      for(let i=0;i<passwordlen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))


      }
      setpass(finalPass)

      


    }
    else{
      alert("Please Select atleaste one")
    }
  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }
  return (
    <>
      <div className='passwordBox'>
        <h2>PASSWORD GENERATOR</h2>
        <div className='passwordBoxin' >
          <input type='text' value={fpass} readOnly /><button onClick={copyPass}>copy</button>
        </div>
        <div className='passlength'>
          <label>Password length</label>
          <input type='number' max={20} min={10} value={passwordlen}  onChange={(event)=>setpasswordlen(event.target.value)}/>
        </div>
        <div className='passlength'>
          <label>Include Uppercase letters</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>
        <div className='passlength'>
          <label>Include lowercase letters</label>
          <input type='checkbox'  checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
        </div>
        <div className='passlength'>
          <label>include numbers</label>
          <input type='checkbox'  checked={number} onChange={()=>setnumber(!number)}/>
        </div>
        <div className='passlength'>
          <label>include symbols</label>
          <input type='checkbox' checked={symbol} onChange={()=>setsymbol(!symbol)} />
        </div>
        <button className='btn' onClick={createPassword}>Generate Password</button>

      </div>
    
    </>
  );
}

export default App;
