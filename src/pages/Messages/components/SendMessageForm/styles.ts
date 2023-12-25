import styled from "styled-components";


export const Container = styled.div`
	padding:  ${({theme}) => theme.margins.small};
	background-color: ${({theme}) => theme.colors.light};
	svg{
		font-size: ${({theme}) => theme.fontSizes.large};
		margin: 0 ${({theme}) => theme.margins.extraSmall};
		color: ${({theme}) => theme.colors.primary};
		cursor: pointer;
	}
	form{
		display: flex;
		width: 100%;	
		align-items: center;
		button{
			svg{
				font-size: ${({theme}) => theme.fontSizes.medium};
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
`;