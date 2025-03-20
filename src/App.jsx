import "./App.css";
// import { useContext } from "react";
// import { FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa";
// import { CardContext } from "./CardContext";

// function App() {
//   const { subcard, edit, editingIndex, setEdit, addCard, deleteCard, startEditing, saveEdit } = useContext(CardContext);

//   return (
//     <>
    
//       <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
//         <div className="flex justify-between items-center">
//           <h2 className="text-lg font-semibold">Main Card</h2>
//           <FaPlusCircle className="cursor-pointer text-green-500" onClick={addCard} />
//         </div>

//         {/* Sub-Cards Section */}
//         <div className="mt-4">
//           {subcard.map((card) => (
//             <div key={card.id} className="bg-gray-100 p-3 rounded-md mb-2 flex justify-between items-center">
//               {editingIndex === card.id ? (
//                 <input
//                   type="text"
//                   value={edit}
//                   onChange={(e) => setEdit(e.target.value)}
//                   onBlur={() => saveEdit(card.id)}
//                   className="border p-1 w-full"
//                   autoFocus
//                 />
//               ) : (
//                 <span>{card.text}</span>
//               )}
//               <div className="flex gap-2">
//                 <FaEdit className="cursor-pointer text-blue-500" onClick={() => startEditing(card.id, card.text)} />
//                 <FaTrash className="cursor-pointer text-red-500" onClick={() => deleteCard(card.id)} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;

// import React from 'react';
// import useStore from "./store.jsx"

// function App() {
//   const {count,increment,decrement,reset} = useStore ()
//   return (
//     <>
//     <div className="w-screen h-screen flex justify-center items-center">
//       <div className="max-w-4xl shadow-lg bg-green-200 flex flex-col gap-4 p-3 rounded-lg">
//         <p className="text-center">{count}</p>
//         <div className="flex justify-between">
//           <button className="p-3 rounded-md shadow-sm" onClick={()=>increment()}> add</button>
//           <button className="p-3 rounded-md shadow-sm" onClick={()=>decrement()}> add</button>
//           <button className="p-3 rounded-md shadow-sm" onClick={()=>reset()}> add</button>
//         </div>
//       </div>
//     </div>

//     </>
//   )
// }

// export default App
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import HeroSlider from "./Components/HeroSlider";

function App() {
  return (
    <>
      <Topbar/>
      <HeroSlider/>
    </>
  )
}

export default App