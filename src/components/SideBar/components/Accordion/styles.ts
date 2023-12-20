import { FaArrowDown } from "react-icons/fa";
import { styled } from "styled-components";

export const Container = styled.div`
	margin-top: ${({theme}) => theme.margins.medium};
	user-select: none;
	&:last-child {
    margin-bottom: 55px;
  }
	.accordion-item{
		
		cursor: pointer;
	}
	.header{
		display: flex;
		align-items: center;
		.title{
			color: ${({ theme }) => theme.colors.primary};
			font-size: ${({ theme }) => parseInt(theme.fontSizes.medium) - 5 + 'px'};
			font-weight: bold;
			margin: 0 ${({ theme }) => theme.margins.extraSmall};
			
		}
		
	}
	.accordion-item-content{
		display: flex;
		flex-direction: column;
		background-color: ${({ theme }) => theme.colors.white};
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
		border-radius: 5px ;
		margin-top: ${({ theme }) => theme.margins.small};
		overflow: hidden;
		transition: height 0.3s ease-in-out;
		height: 0;
		&.open{
			height: auto;
		}
		
	}
	.square {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
		font-family: bold;
		font-size: ${({ theme }) => theme.fontSizes.medium};
		padding: ${({ theme }) => theme.margins.extraSmall};
		border-radius: 5px;
		width: 15px;
		height: 15px;
		
	}
`;

export const StyledArrowDown = styled(FaArrowDown)`
	color: ${({ theme }) => theme.colors.primary};
`;
interface AccordionContentProps {
	open: boolean;
}
export const AccordionContent = styled.div<AccordionContentProps>`
	overflow: hidden;
	transition: max-height .5s linear;
	max-height: ${({ open }) => (open ? '1000px' : '0')};
`;