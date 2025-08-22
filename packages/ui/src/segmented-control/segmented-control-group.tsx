import { segmentedControlStyles } from "@wwwares/ui-system";
import {
	RadioGroup as RACRadioGroup,
	type RadioGroupProps as RACRadioGroupProps,
} from "react-aria-components";

type SegmentedControlGroupProps = RACRadioGroupProps;

function SegmentedControlGroup({
	children,
	...props
}: SegmentedControlGroupProps) {
	return (
		<RACRadioGroup className={segmentedControlStyles.container} {...props}>
			{children}
		</RACRadioGroup>
	);
}

export { SegmentedControlGroup, type SegmentedControlGroupProps };
