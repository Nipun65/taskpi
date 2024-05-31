import { useState } from "react";

import Input from "./components/Input";
import Card from "./components/Card";
import { getAnswer } from "../services";
import Coversatation from "./components/Coversation";

function App() {
  const [inputField, setInputField] = useState("");
  const handleChange = (e) => {
    console.log(e);
    setInputField(e.target.value);
  };
  const handleInputFill = (value) => {
    setInputField("");
    setInputField(value);
  };

  const [convo, setConvo] = useState([]);
  return (
    <div className="text-3xl h-screen flex flex-col">
      <div className="text-4xl py-3 px-4">Chatbot</div>
      <Card handleInputFill={handleInputFill} />
      <Coversatation convo={convo} />
      <div className="flex justify-center mt-auto">
        <Input
          // className="mt-auto mb-4 mx-4 w-full"
          inputClass="border border-black rounded-md outline"
          onChange={handleChange}
          setInputField={setInputField}
          value={inputField}
          convo={convo}
          setConvo={setConvo}
        />
      </div>
    </div>
  );
}

export default App;
