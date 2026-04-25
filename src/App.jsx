import { useState } from "react";

function App() {
  let [color , setColor] = useState("olive");
  return (
    <>
      <div className= "w-full h-screen transition duration-500" style={{backgroundColor: color}}>
      <div className="fixed flex w-full left-0 bottom-12 justify-center">
        <div className="flex justify-center bg-white p-2 rounded-3xl gap-3 px-3 py-3 shadow-lg">
          <button className="outline-none bg-red-600 text-white px-2 rounded-2xl hover:scale-110 transition duration-200" onClick={()=>{setColor("red")}}>Red</button>
          <button className="bg-green-600 text-white p-2 rounded-2xl hover:scale-110 transition duration-200" onClick={()=>{setColor("green")}}>Green</button>
          <button className="bg-blue-600 text-white p-2 rounded-2xl hover:scale-110 transition duration-200" onClick={()=>{setColor("blue")}}>Blue</button>
          <button className="bg-orange-600 text-white p-2 rounded-2xl hover:scale-110 transition duration-200" onClick={()=>{setColor("orange")}}>Orange</button>
          <button className="bg-pink-600 text-white p-2 rounded-2xl hover:scale-110 transition duration-200" onClick={()=>{setColor("pink")}}>Pink</button>
          <button className="bg-yellow-600 text-white p-2 rounded-2xl hover:scale-110 transition duration-200" onClick={()=>{setColor("yellow")}}>Yellow</button>
        </div>

      </div>
      </div>
    </>
  );
}

export default App;
