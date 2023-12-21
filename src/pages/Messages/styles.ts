import { styled } from "styled-components";

export const Container = styled.div`
	position: relative;
	height: 100%;
	width: calc(100% - 300px);
	position: fixed;
	right: 0;
	
	.headerMessage{
		display: flex;
		position: fixed;
		top: 0px;
		width: calc(100% - 300px);
		justify-content: space-between;
		background-color: ${({theme}) => theme.colors.light};
		padding: ${({theme}) => theme.margins.small} 0;
		z-index: 1000;
	}
	.profileClient{
		display: flex;
		align-items: center;

		img{
			width: 64px;
			margin: 0 ${({theme}) => theme.margins.small};
		}
		.nameClient{
			font-size: ${({theme}) => theme.fontSizes.medium};
			font-weight: bold;
		}
	}
	.actionsIcons{
		display: flex;
		align-items: center;
		margin-right: ${({theme}) => theme.margins.small};

		svg{
			font-size: ${({theme}) => theme.fontSizes.large};
			margin: 0 ${({theme}) => theme.margins.extraSmall};

		}
		
	}

	.messages{
		position: fixed;
		padding-top: ${({theme}) => theme.margins.small};
		width: 78%;
		height: calc(100% - 80px);
		bottom: 0;
		overflow-y: scroll;
		
		.scrollableContent {
				height: 1800px; // Ajuste este valor para o desejado
				
		}
		.message{
			display: flex;
			flex-direction: column;
			margin:  ${({theme}) => theme.margins.small};
			width: fit-content;
			padding: ${({theme}) => theme.margins.small};
			
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
				
			
		}
		.inputMessage{
			position: fixed;
			bottom: 0px;
			padding: 10px 5px 5px 5px;
			width: 100%;
			background-color: ${({theme}) => theme.colors.light};
			svg{
				cursor: pointer;
				color: ${({theme}) => theme.colors.primary};
				font-size: ${({theme}) => theme.fontSizes.medium};
			}
			
			textarea{
				position: relative;
				width: 74%;
				border-radius: 10px;
				outline: none;
				border: 1px solid black;
				padding: ${({theme}) => theme.margins.extraSmall};
				resize: none;
				white-space: pre-wrap;
				
				overflow: 'auto'
			}
			
		}
	}

	
`;
