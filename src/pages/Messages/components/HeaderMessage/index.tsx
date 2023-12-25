import { ActionsIcons, Container, ProfileClient } from "./styles";
import { BiMoneyWithdraw, BiTransfer } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

export const HeaderMessage: React.FC = () => {

	return (
		<Container>
			<ProfileClient>
				<img 
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasjiwttlOD2dLPHnZxQVIIveondD6WTq2l68G9flJNyWAIarTgUJp0K2KB1V30P0Z0H0&usqp=CAU" 
					alt="Foto Cliente" 
					className="profileImage"
				/>
				<p className="nameClient">Fulano - 51986168178</p>
			</ProfileClient>
			<ActionsIcons>
				<BiMoneyWithdraw />
				<BiTransfer/>
				<FaCheck />
			</ActionsIcons>		
		</Container>
	);
};