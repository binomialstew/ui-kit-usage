import Button from '@media-platforms/ui-kit/button';
import IconButton from '@media-platforms/ui-kit/icon-button';
import Popover, { PopoverActivator, PopoverContent, PopoverHeading, PopoverBodyText } from '@media-platforms/ui-kit/popover';
import StarRating from '@media-platforms/ui-kit/star-rating';

export function Components() {
	return (
		<>
			<h1>Hearst Magazines Design System components in a simple, non-nextFRE React app</h1>
			<h3 className="component-heading">UI Kit Button</h3>
			<Button>UI Kit button</Button>
			<h3 className="component-heading">UI Kit StarRating</h3>
			<StarRating	rating={4} />
			<h3 className="component-heading">UI Kit Popover</h3>
			<Popover>
				<PopoverActivator>Open me</PopoverActivator>
				<PopoverContent>
					<PopoverHeading>This is popover content!</PopoverHeading>
					<PopoverBodyText>
						Description for the popover component. Description for the popover component. Description
						for the popover component
					</PopoverBodyText>
				</PopoverContent>
			</Popover>
			<h3 className="component-heading">UI Kit IconButton</h3>
			<IconButton
				iconAlt="Close"
				iconLabel="Close"
				onClick={() => console.log('button clicked')}
				className="icon-button"
			/>
		</>
	);
}
