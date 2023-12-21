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

   
`;
export const ContainerProfile = styled.div`
	display: flex;
	width: 80%;
	align-items: center;
	
	margin-top: ${({ theme }) => theme.margins.extraSmall};
  img{
		max-width: 35px;
		border-radius: 5px;
		
	}
	p{
		margin-left: ${({ theme }) => theme.margins.extraSmall};
		color: ${({ theme }) => theme.colors.primary};
		font-weight: bold;
	}  
`;
export const ContainerPages = styled.div`
	width: 80%;
    
`;

