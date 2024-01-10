import { Container } from "./styles";
import { HeaderMessage } from "./components/HeaderMessage";
import { SendMessageForm } from "./components/SendMessageForm";
import { ChatWindow } from "./components/ChatWindow";


export const Messages: React.FC = () => {
	
	return (
		<Container>
			<HeaderMessage/>
			<ChatWindow /> 
			<SendMessageForm />
		</Container>
	);
};