import React from "react";
import { twMerge } from "tailwind-merge";
import { getAnswer } from "../../services";
const Input = ({ value, onChange, className, inputClass, setConvo, convo }) => {
  const handleApi = async () => {
    // console.log(value);
    const payload = {
      query: value,
      model_choice: "OPENAI",
    };
    setConvo((preveState) => {
      return [
        ...preveState,
        {
          type: "user",
          value: value,
        },
      ];
    });
    const botResponse = await getAnswer(payload);
    console.log(botResponse, "response");
    console.log(convo);
    setConvo((preveState) => {
      return [...preveState, { type: "bot", value: botResponse.data }];
    });
  };

  return (
    <div className={twMerge("relative w-[80%] mb-3", className)}>
      <input
        className={twMerge("py-2 w-full mt-auto", inputClass)}
        value={value}
        onChange={onChange}
      />
      <button
        className="bg-purple-500 rounded-md px-3 py-1 text-md absolute right-2 top-1"
        onClick={handleApi}
      >
        Send
      </button>
    </div>
  );
};
export default Input;
