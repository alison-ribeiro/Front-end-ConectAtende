import { useEffect,useState,useRef } from "react";
import { Container } from "./styles";
import ReactTextareaAutosize from "react-textarea-autosize";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSendOutline } from "react-icons/io5";
import Picker from "@emoji-mart/react";
import i18n from "@emoji-mart/data/i18n/pt.json";
import data from "@emoji-mart/data/sets/1/apple.json";


interface Emoji {
	
	native: string;

}
export interface Message {
	index: number;
	sender: "client" | "attendant";
	content: string;
	time: string;
}
interface SendMessageFormProps {
	messages: Message[];
	addMessage: (message: Message) => void;
}

export const SendMessageForm: React.FC<SendMessageFormProps> = ({addMessage, messages}) => {

	const [text, setText] = useState("");
	const [open, setOpen] = useState(false);
	const endOfMessagesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const textAreaRef = useRef<HTMLTextAreaElement | null>(null); 

	const sendMessage = () => {
		event?.preventDefault();

		if(text){
			const messagem: Message = {
				index: messages.length,
				sender: "attendant",
				content: text,
				time: "10:05"
			};
			addMessage(messagem);
			setText("");
		}
	};
	
	const handleEmojiSelect = (emoji:Emoji) => {
		setText(prevText => prevText + emoji.native);
		if (textAreaRef.current) {
			textAreaRef.current.focus();
		}
	};

	const handleTextChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value);
		setOpen(false);
	};
	const visibleModalEmoji = ():void=> {
		setOpen(!open);
	};
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent):void => {
			if (event.key === "Escape") {
				setOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault(); 
			sendMessage();
		}
	};

	return (
		<Container >
			{open && (
				<Picker set='apple' data={data} i18n={i18n} onEmojiSelect={handleEmojiSelect} />
			)}
			<form >
				<MdEmojiEmotions onClick={visibleModalEmoji} className="iconEmoji"/>
				<ReactTextareaAutosize	
					value={text} 
					ref={textAreaRef}
					onChange={handleTextChange} 
					minRows={1}
					maxRows={3}
					onKeyDown={handleKeyPress}
				/>
				<button onClick={sendMessage}><IoSendOutline /></button>
			</form>
		</Container>
	);
};