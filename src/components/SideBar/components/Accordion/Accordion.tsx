import { useState } from 'react';
import { Container, StyledArrowDown} from './styles';
import AccordionItemContent from './components/AccordionItemContent';
import { ContentItem } from '../..';


interface ContentItemProps  {
	title: string;
	items:ContentItem[];
}

const Accordion = ( {items, title} :ContentItemProps) => {
const [openItemIndex, setOpenItemIndex] = useState<boolean>(false);

const toggleItem = () => {
	setOpenItemIndex(!openItemIndex);
};

  return (
    <Container>
      <div 
				className="accordion-item" 
				onClick={() => toggleItem()}
			>
				<span className='square'>{items.length}</span>
				<p className='title'>{title}</p>
				<StyledArrowDown openItemIndex={openItemIndex}/>
			</div>
			<AccordionItemContent
				openItemIndex={openItemIndex}
				items={items}
			/>
		</Container> 
  );
};

export default Accordion;
