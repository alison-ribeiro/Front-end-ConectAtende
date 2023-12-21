import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	margin-top: ${({theme}) => theme.margins.small};
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	border-radius: 5px;
	padding: ${({theme}) => theme.margins.extraSmall};
	&:hover{
		background-color: ${({theme}) => theme.colors.primary};
		opacity:.8;
		.pending-message{
			background-color: ${({theme}) => theme.colors.black};
		}
	}
	
	&:last-child{
		margin-bottom: ${({theme}) => theme.margins.small};
	}
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
		border-radius: 15px;
		padding: 3px 8px;
		font-size: 10px;
		font-weight: bold;
		color: white;
		background-color: blue;
		margin-right: ${({theme}) => theme.margins.small};
		background-color: ${({theme}) => theme.colors.primary};

	}
`;
