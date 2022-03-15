import React from 'react'
import Buttons from "../../components/UI/Buttons/Buttons";
import { Wrapper } from './Chat.styles';
import ChatHeader from "./ChatHeader";
import MatchsDisplay from "./MatchsDisplay";
import ChatDisplay from "./ChatDisplay";
import ChatInput from './ChatInput';

export const Chat = () => {
  return (
    <Wrapper>
      <ChatHeader />

      <div>
        <Buttons>Matches</Buttons>
        <Buttons>Chat</Buttons>
      </div>

      <div>
        <MatchsDisplay />

        <ChatDisplay />

        <ChatInput />
      </div>
    </Wrapper>
  )
}

export default Chat