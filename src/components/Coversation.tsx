import React from "react";
const Coversatation = ({ convo }) => {
  console.log(convo, "convo component");
  return (
    <div className="h-[20rem] overflow-auto flex flex-col gap-2">
      {convo.map((value) => {
        return (
          <div
            className={`${
              value.type === "user" ? "float-right" : "float-left"
            }`}
            key={Math.random()}
          >
            {value?.value}
          </div>
        );
      })}
    </div>
  );
};
export default Coversatation;
