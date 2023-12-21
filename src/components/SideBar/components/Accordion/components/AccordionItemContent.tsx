
import { ContentItem } from "../../..";
import useAnimatedUnmount from "../../../../../hook/useAnimatedUnmount";
import PreviewMessage from "../../PreviewMessage/PreviewMessage";
import { Container } from "./styles";

interface AccordionItemContentProps {
  openItemIndex: boolean;
  items: ContentItem[];
}

const AccordionItemContent = ({ openItemIndex, items }: AccordionItemContentProps) => {

	const {animatedElementRef,shouldRender} = useAnimatedUnmount(openItemIndex);
	if(!shouldRender) return null;
  return (
    <Container 
			ref={animatedElementRef}
			isLeaving={!openItemIndex}
		>
		{items.map((item:any, index:any) => (
			<PreviewMessage 
				key={index} 
				name={item.name} 
				profileImage={item.profileImage} 
				iconChannel={item.iconChannel} 
			/>
		))}
    </Container>
  );
};

export default AccordionItemContent;
