import React, { useState } from "react";
import { Textarea } from "../../components/UI/Forms/index";
import Button from "../UI/Buttons/Buttons";
import { Wrapper } from "./Chat.styles";

export const ChatInput = () => {
  const [textArea, setTextArea] = useState(null);

  const SubmitMessage = () => {
    setTextArea("");
  };

  return (
    <Wrapper>
      <Textarea
        value={textArea}
        required={true}
        placeholder="Enter the message"
        onChange={(e) => setTextArea(e.target.value)}
      />
      <Button onClick={SubmitMessage}>Submit</Button>
    </Wrapper>
  );
};

export default ChatInput;
