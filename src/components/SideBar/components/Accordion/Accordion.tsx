import { useState } from 'react';
import { AccordionContent, Container, StyledArrowDown } from './styles';
import PreviewMessage from '../PreviewMessage/PreviewMessage';
import useAnimatedUnmount from '../../../../hook/useAnimatedUnmount';


interface ContentItem {
	title: string;
	items:{
		name: string;
  	profileImage: string;
  	iconChannel: string;
	}[]
  
}

const Accordion = ( {items, title} :ContentItem) => {
const [openItemIndex, setOpenItemIndex] = useState<boolean>(true);

const {animatedElementRef,shouldRender} = useAnimatedUnmount(openItemIndex);

const toggleItem = () => {
	
	setOpenItemIndex(!openItemIndex);
	
};
  return (
    <Container>
        <div className="accordion-item">
          <div
            className="accordion-item-header"
            onClick={() => toggleItem()}
          >
						<div className="header">
							<span className='square'>{items.length}</span>
							<p className='title'>{title}</p>
							<StyledArrowDown />
						</div>
          </div>
          {shouldRender && (
					<div 
						className={`accordion-item-content ${openItemIndex ? 'open' : ''}`}
						ref={animatedElementRef}
					>
							{items.map((item, index) => (
								<PreviewMessage key={index} name={item.name} profileImage={item.profileImage} iconChannel={item.iconChannel} />
							))}
            </div>
          )}
					{/* <AccordionContent open={openItemIndex}>
						{items.map((item, index) => (
							<PreviewMessage key={index} name={item.name} profileImage={item.profileImage} iconChannel={item.iconChannel} />
						))}
					</AccordionContent> */}
        </div>
      
    </Container>
  );
};

export default Accordion;
