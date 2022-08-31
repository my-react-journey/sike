import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion"

import "../styles/accordion.css"

export default function Faq() {
	return (
		<div className="wrapper">

            <div className="freeSpace5vh">
                <span className="heading">Frequently Asked Questions</span>
            </div>


			<Accordion>
				<AccordionItem aria-expanded="true">
					<AccordionItemHeading>
						<AccordionItemButton>
                            Why does Meow require Location?
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<span>
							Exercitation in fugiat est ut ad ea cupidatat ut in
							cupidatat occaecat ut occaecat consequat est minim
							minim esse tempor laborum consequat esse adipisicing
							eu reprehenderit enim.
						</span>
					</AccordionItemPanel>
				</AccordionItem>
				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							Is free will real or just an illusion?
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<span>
							In ad velit in ex nostrud dolore cupidatat
							consectetur ea in ut nostrud velit in irure cillum
							tempor laboris sed adipisicing eu esse duis nulla
							non.
						</span>
					</AccordionItemPanel>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
