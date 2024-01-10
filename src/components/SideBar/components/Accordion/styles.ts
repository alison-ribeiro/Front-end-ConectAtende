import { FaArrowDown } from "react-icons/fa";
import { css, keyframes, styled } from "styled-components";


const rotation = keyframes`
   from {
        transform: rotate(-90deg);
    }
  to {
    transform: rotate(0deg);
  }
`;
const rotationReverse = keyframes`
	from {
    	transform: rotate(0deg);
  }
  to {
    transform: rotate(-90deg);
  }
`;




export const Container = styled.div`
	margin-top: ${({theme}) => theme.margins.medium};
	user-select: none;
	&:last-child {
    margin-bottom: 55px;
  }
	.accordion-item{
		display: flex;
		align-items: center;
		
		.title{
			color: ${({ theme }) => theme.colors.primary};
			font-size: ${({ theme }) => parseInt(theme.fontSizes.small) };
			font-weight: bold;
			margin: 0 ${({ theme }) => theme.margins.extraSmall};
		};
		.square {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: ${({ theme }) => theme.colors.primary};
			color: ${({ theme }) => theme.colors.white};
			font-size: ${({ theme }) => theme.fontSizes.small};
			font-weight: bolder;
			padding: ${({ theme }) => theme.margins.extraSmall};
			border-radius: 5px;
			width: 15px;
			height: 15px;
		}
	}
	
`;
export const StyledArrowDown = styled(FaArrowDown)<{ openItemIndex: boolean }>`
  color: ${({ theme }) => theme.colors.primary};
	
  ${({ openItemIndex }) => openItemIndex ? css`
    animation: ${rotation} .5s ease forwards;
  ` : css`
    animation: ${rotationReverse} .5s ease forwards;
  `}
`;