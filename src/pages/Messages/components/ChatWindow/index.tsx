import { useEffect, useRef } from "react";
import { ListMessages } from "../ListMessages";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";



export const ChatWindow: React.FC = () => {

	const messages = useSelector((state:RootState) => state.chat);
	const endOfMessagesRef = useRef<HTMLDivElement>(null);
	
	useEffect(() => {
		endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	
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