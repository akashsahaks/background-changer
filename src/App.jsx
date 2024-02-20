import { useState } from "react";
import Button from "./components/Button";

function App() {
   const [color, setColor] = useState("olive");

   const onClick = (bgColor) => {
      setColor(bgColor);
   };

   return (
      <>
         <div
            className="w-full h-screen duration-200"
            style={{ backgroundColor: `${color}` }}
         >
            <h1 className="text-3xl text-white font-bold text-center pt-48">
               I'm {color} backgroundColor!
            </h1>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
               <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                  <Button
                     bgColor={"red"}
                     btnText={"Red"}
                     btnColor={"red"}
                     onClick={onClick}
                  />
                  <Button
                     bgColor={"green"}
                     btnText={"Green"}
                     btnColor={"green"}
                     onClick={onClick}
                  />
                  <Button
                     bgColor={"blue"}
                     btnText={"Blue"}
                     btnColor={"blue"}
                     onClick={onClick}
                  />
                  <Button
                     bgColor={"teal"}
                     btnText={"Teal"}
                     btnColor={"teal"}
                     onClick={onClick}
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
