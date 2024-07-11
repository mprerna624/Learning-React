import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const pwdGenerator = useCallback(() => {
    let pwd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNumAllowed) str += "0123456789";
    if(isCharAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for(let i=1; i<=length; i++) {
      let randomCharPosition = Math.floor(Math.random()*str.length + 1);
      pwd += str.charAt(randomCharPosition);
    }

    setPassword(pwd);
  }, [length, isNumAllowed, isCharAllowed, setPassword]);

  useEffect(() => pwdGenerator(), [length, isNumAllowed, isCharAllowed]);

  const copyPwdToClipboard = useCallback(() => {
    // To highlight the copied password
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 24);
    // Copied password to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
        <h1 className='text-center my-3' style={{fontSize: "2.5rem"}}>Random Password Generator</h1>
        <div className="form-controls flex overflow-hidden mt-6 bg-blue-700 rounded-lg">
          <input type="text" value={password} placeholder='Password' readOnly className='outline-none px-2 w-full' ref={passwordRef}/>
          <button className='bg-blue-700 text-white outline-none' onClick={copyPwdToClipboard}>Copy</button>
        </div>
        <div className="form-controls mt-4 flex gap-3">
          <div className="rangeSlider flex gap-1 items-center">
            <input type="range" name="slider" id="slider" min={8} max={24} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)}  />
            <label htmlFor="slider">Length ({length})</label>
          </div>
          <div className="cb-1 flex gap-1 items-center">
            <input type="checkbox" name="cbNum" id="cbNum" defaultChecked={isNumAllowed} onChange={() => setIsNumAllowed((prev) => !prev)} />
            <label htmlFor="cbNum">Numbers</label>
          </div>
          <div className="cb-2 flex gap-1 items-center">
            <input type="checkbox" name="cbChar" id="cbChar" defaultChecked={isCharAllowed} onChange={() => setIsCharAllowed((prev) => !prev)} />
            <label htmlFor="cbChar">Characters</label>
          </div>
        </div>
      </div>
  
  )
}

export default App
