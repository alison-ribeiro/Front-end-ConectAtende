import styled from "styled-components";
interface MessageProps{
	index:number
}

export const Container = styled.div<MessageProps>`
	display: flex;
	flex-direction: column;
	width: fit-content;
	padding: ${({theme}) => theme.margins.small};
	margin: ${({theme}) => theme.margins.small};
	
	.textMessage{
		max-width: 50ch;
  	word-wrap: break-word;
		line-height: 1.3;
	}
	.timeMessage{
		text-align: right;
		font-size: ${({theme}) => theme.fontSizes.extraSmall};		
	}
			
	&.my{
		margin-left: auto;
		background-color: #D9FDD3;
		border-radius: 10px 0 10px 10px;
	}
	&.client{
		background-color: #F5F5F5;
		border-radius: 0 10px 10px 10px;
	}
`;