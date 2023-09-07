// import logo from './logo.svg';
import { useCallback, useState, useEffect, useRef} from "react";
import "./App.css";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumerAlw] = useState(true);
  const [characterAllowed, setCharAlw] = useState(true);
  const [password, setPassword] = useState(" ");
  const passwordRef = useRef(null);
  const passwordGenereator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0987654321";
    }
    if (characterAllowed) {
      str += "`!@#$%^&*(){}";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, password]);
  // passwordGenereator();
  const copyToClipBoard = useCallback(()=>
  { 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password); 
  },[password])
  useEffect(
    ()=>{passwordGenereator()}, [length, numberAllowed, characterAllowed]
  )
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyToClipBoard} >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setnumerAlw((pre) => !pre);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
             id="characterInput"
             defaultChecked = {characterAllowed}
             onChange={()=>
            {
              setCharAlw((preVal)=>!preVal)
            }}
             />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;