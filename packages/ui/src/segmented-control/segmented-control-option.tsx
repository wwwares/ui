import { segmentedControlSlotRecipe } from "@wwwares/ui-system/recipes";
import {
	Radio as RACRadio,
	type RadioProps as RACRadioProps,
} from "react-aria-components";

type SegmentedControlOptionProps = RACRadioProps & {
	title: string;
};

function SegmentedControlOption({ value, title }: SegmentedControlOptionProps) {
	const cls = segmentedControlSlotRecipe();
	return (
		<RACRadio value={value} className={cls["sc-item"]}>
			{title}
		</RACRadio>
	);
}

export { SegmentedControlOption, type SegmentedControlOptionProps };
