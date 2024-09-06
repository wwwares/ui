import { segmentedControlSlotRecipe } from "@wwwares/ui-system/recipes";
import {
	RadioGroup as RACRadioGroup,
	type RadioGroupProps as RACRadioGroupProps,
} from "react-aria-components";

type SegmentedControlGroupProps = RACRadioGroupProps;

function SegmentedControlGroup({
	children,
	...props
}: SegmentedControlGroupProps) {
	const cls = segmentedControlSlotRecipe();
	return (
		<RACRadioGroup className={cls["sc-container"]} {...props}>
			{children}
		</RACRadioGroup>
	);
}

export { SegmentedControlGroup, type SegmentedControlGroupProps };
