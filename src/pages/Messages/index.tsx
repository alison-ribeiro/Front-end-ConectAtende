import { Container } from "./styles";
import { HeaderMessage } from "./components/HeaderMessage";
import { ChatWindow } from "./components/ChatWindow";
import { SendMessageForm } from "./components/SendMessageForm";
import { useMessages } from "../../__mocks__/messages";

export const Messages: React.FC = () => {

	const { messages, addMessage} = useMessages();
	return (
		<Container>
			<HeaderMessage/>
			<ChatWindow messages={messages} />
			<SendMessageForm addMessage={addMessage} messages={messages}/>
		</Container>
	);
};