import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Container } from "./styles";


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

  return (
    <Container>
      <div className="profile">
        <img src={profileImage} alt="imagem de perfil" />
				{<IconComponent />}
      	<p>{name}</p>
      </div>
      
			<span className='pending-message'>10</span>
    </Container>
  );
};

export default PreviewMessage;
