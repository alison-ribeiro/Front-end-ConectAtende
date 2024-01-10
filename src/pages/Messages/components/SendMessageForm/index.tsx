import { useEffect,useState,useRef } from "react";
import { Container } from "./styles";
import ReactTextareaAutosize from "react-textarea-autosize";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSendOutline } from "react-icons/io5";
import Picker from "@emoji-mart/react";
import i18n from "@emoji-mart/data/i18n/pt.json";
import data from "@emoji-mart/data/sets/1/apple.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { setMessage } from "../../../../redux/reducers/userReducer";

interface Emoji {
	native: string;
}
export interface Message {
	index: number;
	sender: "client" | "attendant";
	content: string;
	time: string;
}


export const SendMessageForm: React.FC = () => {
	const messages = useSelector((state:RootState) => state.chat);
	const dispatch = useDispatch();

	const [text, setText] = useState("");
	const [open, setOpen] = useState(false);
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null); 

	const sendMessage = (event: React.FormEvent) => {
		event?.preventDefault();
		if(text){
			const messagem: Message = {
				index: messages.length,
				sender: "attendant",
				content: text,
				time: "10:05"
			};
			dispatch(setMessage(messagem));
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
		const message = event.target.value;
		setText(message);
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
			sendMessage(event);
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