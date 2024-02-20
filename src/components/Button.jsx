const Button = ({ bgColor, btnText, btnColor, onClick }) => {
   return (
      <>
         <button
            onClick={() => {
               onClick(bgColor);
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: `${btnColor}` }}
         >
            {btnText}
         </button>
      </>
   );
};

export default Button;
