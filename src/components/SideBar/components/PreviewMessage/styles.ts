import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	margin: ${({theme}) => theme.margins.small} 0 0 0;
	align-items: center;
	justify-content: space-between;
	
	.profile{
		display: flex;
		align-items: center;
		img{
			width: 24px !important;
			height: 24px !important;
			margin-left: ${({theme}) => theme.margins.small};
		}
	}
	p{
		
	}
	svg{
		color: green;
		margin: 0 ${({theme}) => theme.margins.extraSmall};
	}
	.pending-message{
		border: 1px solid black;
		border-radius: 15px;
		padding: 2px 8px;
		font-size: 10px;
		font-weight: bold;
		color: white;
		background-color: blue;
		margin-right: ${({theme}) => theme.margins.small};

	}
`;
