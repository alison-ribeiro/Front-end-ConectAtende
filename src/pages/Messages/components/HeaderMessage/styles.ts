import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${({theme}) => theme.colors.light};
	padding: ${({theme}) => theme.margins.small} 0;

`;
export const ProfileClient = styled.div`
	display: flex;
	align-items: center;
	.profileImage{
		width: 64px;
		margin: 0 ${({theme}) => theme.margins.small};
		cursor: pointer;
	}
	.nameClient{
		font-size: ${({theme}) => theme.fontSizes.medium};
		font-weight: bold;
	}
`;

export const ActionsIcons = styled.div`
	display: flex;
	align-items: center;
	margin-right: ${({theme}) => theme.margins.small};
	svg{
		font-size: ${({theme}) => theme.fontSizes.large};
		margin: 0 ${({theme}) => theme.margins.extraSmall};
		cursor: pointer;
	}
`;
