import React from "react";
const Card = ({ handleInputFill }) => {
  const randomPromt = [
    "what is slack",
    "what is api",
    "who is most active on slack",
  ];
  return (
    <div
      className="px-4 py-2 h-72 w-72 flex justify-center items-center border border-[#121212] text-center font-semibold"
      onClick={(value) => handleInputFill(randomPromt[2])}
    >
      Generate random promt
    </div>
  );
};
export default Card;
