import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";
import { Container } from "./styles";
import { useSelected } from "../../../../hook/useSelected";


interface Props {
  profileImage: string;
  name: string;
	iconChannel: string;
}

const iconMapping: Record<string, IconType> = {
	wp: FaWhatsapp,
	insta: FaInstagram,
};

const PreviewMessage = ({ profileImage, name, iconChannel }: Props) => {
	const IconComponent = iconMapping[iconChannel];
	const {setClient} = useSelected();

	const handleClick = () => {
		if(setClient) {
			setClient({
				id: 1,
				name: "alison",
				image: "https://s2.glbimg.com/2YzI6Y5Mn8ZtJXZa9Y8k5mIz3cE=/0x0:695x390/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2015/06/22/whatsapp-android.jpg",
				office: "Desenvolvedor",
				locality: "Gravatai",
			});
		}
		else {
			console.log("setClient is not defined");
		}
	};

	return (
		<Container>
			<button 
				className="profile"
				onClick={handleClick}
			>
				<img src={profileImage} alt="imagem de perfil" />
				{<IconComponent />}
				<p>{name}</p>
			</button>
			<span className='pending-message'>10</span>
		</Container>
	);
};

export default PreviewMessage;
