import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
		max-height: 0;
  }
  to {
    opacity: 1;
		max-height: 1000px;
  
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
		max-height: 1000px;
  }
  to {
    opacity: 0;
		max-height: 0;
  }
`;
interface AccordionContentProps {
	isLeaving: boolean;
}


export const Container = styled.div<AccordionContentProps>`
		display: flex;
		flex-direction: column;
		background-color: ${({ theme }) => theme.colors.white};
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
		border-radius: 5px ;
		margin-top: ${({ theme }) => theme.margins.small};
		animation: ${fadeIn} 1s ease forwards;
		${({ isLeaving }) => isLeaving && css`
			animation: ${fadeOut} 1s ease forwards;
			overflow-y: hidden;
		`}
	 
`;