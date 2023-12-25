import { useEffect, useRef } from "react";
import { ListMessages } from "../ListMessages";
import { Container } from "./styles";
import { Message } from "../../../../__mocks__/messages";


type MessageProps = {
  messages: Message[];
};

export const ChatWindow: React.FC<MessageProps> = ({ messages }) => {
	const endOfMessagesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	console.log(messages);

	return (
		<Container>
			{messages.map(({sender,content, time, index}) => (
				<ListMessages
					key={index} 
					index={index}
					sender={sender}
					content={content}
					time={time}
				/>
			)
			)}
			<div ref={endOfMessagesRef} />
		</Container>
	);
};