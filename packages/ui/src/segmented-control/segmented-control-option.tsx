import { segmentedControlStyles } from "@wwwares/ui-system";
import {
	Radio as RACRadio,
	type RadioProps as RACRadioProps,
} from "react-aria-components";

type SegmentedControlOptionProps = RACRadioProps & {
	title: string;
};

function SegmentedControlOption({ value, title }: SegmentedControlOptionProps) {
	return (
		<RACRadio value={value} className={segmentedControlStyles.item}>
			{title}
		</RACRadio>
	);
}

export { SegmentedControlOption, type SegmentedControlOptionProps };
