import { Container } from "./styles"
import { BiTransfer, BiMoneyWithdraw} from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import ReactTextareaAutosize from "react-textarea-autosize";
import { MdEmojiEmotions } from "react-icons/md";

export const Messages: React.FC = () => {

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
						<p className="textMessage">aoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaosk</p>
						<p className="timeMessage">12/02/2021 - 10:00</p>
					</div>
					<div className="message client">
						<p className="textMessage">aoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaoskaosk</p>
						<p className="timeMessage">10:00</p>
					</div>
				</div>
				
				<div className="inputMessage">
				<MdEmojiEmotions />
				<ReactTextareaAutosize
					minRows={1}
					maxRows={3}
				/>
				</div>
			</div>
    </Container>
  )
}