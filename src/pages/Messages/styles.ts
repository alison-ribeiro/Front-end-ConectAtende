import { styled} from "styled-components";



export const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	position: fixed;
	
	margin-left: 300px;

	
	.headerMessage{
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
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
		right: 0;
		bottom: 0;
		width: calc(100% - 300px);
		height: calc(100% - 67px);
		&:last-child{
			margin-bottom: 60px ;
		}
		
		overflow-y: scroll;
		.scrollableContent {
			
			width: 100%;
				
		}
		.message{
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
				
			
		}
		.inputMessage{
			display: flex;
			padding: ${({theme}) => theme.margins.small} 0;
			flex-direction: column;
			position: fixed;
			bottom: 0;
			width: calc(100% - 300px);
			background-color: ${({theme}) => theme.colors.light};
			justify-content: center;
		
			svg{
				cursor: pointer;
				color: ${({theme}) => theme.colors.primary};
				font-size: ${({theme}) => theme.fontSizes.medium};
			}
			form{
				display: flex;
				align-items: center;
				width: 100%;
				button{
					margin-right: 15px;
				}
			}
			
			
			}
			
			textarea{
				border-radius: 10px;
				width: 100%;
				outline: none;
				border: 1px solid black;
				padding: ${({theme}) => theme.margins.extraSmall};
				resize: none;
				white-space: pre-wrap;
				margin: 0 ${({theme}) => theme.margins.extraSmall} ;
				font-size: ${({theme}) => theme.fontSizes.small};
				
			}
			
		}
	

	
`;
