import { Container } from "./styles";

interface MessageProps {
	index: number;
	sender: "client" | "attendant";
	content: string;
	time: string;

}

export const ListMessages: React.FC<MessageProps> = ({index,sender,content,time}:MessageProps) => {

	return (
		<Container
			index={index}
			className={`message ${sender === "client" ? "client" : "my"} `}
		>
			<p className="textMessage">{content}</p>
			<p className="timeMessage">{time}</p>
		</Container>
	);
};