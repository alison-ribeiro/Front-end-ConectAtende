import { Container } from "./styles";
import { BiTransfer, BiMoneyWithdraw} from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import ReactTextareaAutosize from "react-textarea-autosize";
import { MdEmojiEmotions } from "react-icons/md";
import Picker from "@emoji-mart/react";
import i18n from "@emoji-mart/data/i18n/pt.json";
import data from "@emoji-mart/data/sets/1/apple.json";
import { useState, useRef, useEffect } from "react";
import { IoSendOutline } from "react-icons/io5";


interface Emoji {
	
	native: string;

}


export const Messages: React.FC = () => {
	const [messages, setMessages] = useState<string[]>([]);
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
			setMessages(prevMessages => [...prevMessages, text]);
			setText("");
		}
		
	};
	
	const handleEmojiSelect = (emoji:Emoji) => {
		console.log(emoji);
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

		// Limpeza na desmontagem
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
		<Container>
			<div className="headerMessage">
				<div className="profileClient">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasjiwttlOD2dLPHnZxQVIIveondD6WTq2l68G9flJNyWAIarTgUJp0K2KB1V30P0Z0H0&usqp=CAU" alt="Foto Cliente" />
					<p className="nameClient">Fulano - 51986168178</p>
				</div>
				<div className="actionsIcons">
					<div className="icon">
						<BiMoneyWithdraw />
					</div>
					<div className="icon">
						<BiTransfer/>
					</div>
					<div className="icon">
						<FaCheck />
					</div>
				</div>
			</div>
			<div className="messages">
				<div className="scrollableContent">
					
					<div className="message my">
						<p className="textMessage">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi debitis optio labore odio laborum, dicta illum libero? Numquam, accusantium? Ipsum nihil corporis, voluptates omnis quas obcaecati porro reprehenderit? Qui, inventore!</p>
						<p className="timeMessage">12/02/2021 - 10:00</p>
					</div>
					<div className="message client">
						<p className="textMessage">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi debitis optio labore odio laborum, dicta illum libero? Numquam, accusantium? Ipsum nihil corporis, voluptates omnis quas obcaecati porro reprehenderit? Qui, inventore!.</p>
						<p className="timeMessage">10:00</p>
					</div>
					{messages.map((message, index) => (
						<div key={index} className="message my">
							<p className="textMessage">{message}</p>
							<p className="timeMessage">12/02/2021 - 10:00</p>
						</div>
					)
					)}
					<div ref={endOfMessagesRef} />
				</div>

			
				<div className="inputMessage">
					{open && (
						<Picker set='apple' data={data} i18n={i18n} onEmojiSelect={handleEmojiSelect} />
					)}
					<form >
						<MdEmojiEmotions onClick={visibleModalEmoji}/>
						<ReactTextareaAutosize	
							value={text} 
							ref={textAreaRef}
							onChange={handleTextChange} 
							minRows={1}
							maxRows={3}
							onKeyPress={handleKeyPress}
						/>
						<button onClick={sendMessage}><IoSendOutline /></button>
						
					</form>
					
				</div>
			</div>
			
		</Container>
	);
};