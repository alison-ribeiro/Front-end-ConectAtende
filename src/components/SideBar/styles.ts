import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
	align-items: center;
	overflow-y: scroll;
	position: fixed;
  height: 100%;
  width: 300px;
	background-color: ${({ theme }) => theme.colors.light} ;
	::-webkit-scrollbar {
    width: 0px;
}
	
::-webkit-scrollbar {
  display: none;
}
   
`;
export const ContainerPerfil = styled.div`
  
    
`;
export const ContainerPages = styled.div`
	width: 80%;
    
`;

export const ContainerChannels = styled.div`
   
    
`;