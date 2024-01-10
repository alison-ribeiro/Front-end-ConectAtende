
import { io } from "socket.io-client";
import { useUser } from "../../hook/useUser";
import Accordion from "./components/Accordion/Accordion";
import { Container, ContainerPages, ContainerProfile } from "./styles";
import { store } from "../../redux/store";
import { useEffect } from "react";

export interface ContentItem {
  name: string;
  profileImage: string;
  iconChannel: string;
}

export const SideBar: React.FC = () => {
	
	const content:ContentItem[] = [ 
		{ name: "alison", profileImage: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png", iconChannel: "wp" },
		{ name: "Pedro", profileImage: "https://www.ufmt.br/ocs/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png", iconChannel: "wp" },
		{ name: "alison", profileImage: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png", iconChannel: "wp" },
		{ name: "alison", profileImage: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png", iconChannel: "wp" },
		{ name: "alison", profileImage: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png", iconChannel: "wp" },{ name: "alison", profileImage: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png", iconChannel: "wp" },{ name: "alison", profileImage: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png", iconChannel: "wp" },
		{ name: "alison", profileImage: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png", iconChannel: "insta" },
		{ name: "alison", profileImage: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png", iconChannel: "insta" },
		{ name: "alison", profileImage: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png", iconChannel: "insta" },
		{ name: "alison", profileImage: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png", iconChannel: "insta" },
	];
	const { user } = useUser();
	const socket = io("http://localhost:4000");

	useEffect(() => {
		socket.on("connect", () => {
			console.log("Conexão estabelecida com o servidor Socket.io", socket.id);
    
			// Agora que a conexão está estabelecida, inscreva-se no evento forceApiCall
			socket.on("apiCall", () => {
				console.log("Recebeu o sinal para chamar a API");
				// Faça sua chamada à API aqui
			});
		});

		
	}, [socket]);
	
	

	return (
		<Container>
			<ContainerProfile>
				<img src={user?.image} alt="Imagem de perfil" />
				<p className="nameProfile">{user?.name} - {user?.office}</p>
			</ContainerProfile>
			<ContainerPages>
				<Accordion items={content} title="Pendente"/>
				<Accordion items={content} title="Em atendimento"/>
			</ContainerPages>
		</Container>
	);
};