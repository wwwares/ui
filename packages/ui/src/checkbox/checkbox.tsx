import {
	Checkbox as RACCheckbox,
	type CheckboxProps as RACCheckboxProps,
} from "react-aria-components";
import { styled } from "../styled";
import { Label } from "../label";
import { checkIconRecipe } from "@wwwares/ui-system";

const CheckIcon = styled("div");

type CheckboxProps = RACCheckboxProps & { label: string };

const Checkbox = (props: CheckboxProps) => {
	const { label, isRequired } = props;

	return (
		<RACCheckbox {...props} isRequired={isRequired}>
			{({ isSelected, isDisabled, isPressed, isFocused }) => {
				const cls = checkIconRecipe({
					checked: isSelected,
					disabled: isDisabled,
					pressed: isPressed,
					focused: isFocused,
				});
				return (
					<Label
						isRequired={isRequired}
						content={label}
						labelPosition="beside"
						className="group"
					>
						{/* reverse and align to the end (start when reversed) to work around peer needing to be first in dom */}
						{/* the <input /> is hidden and CheckIcon takes it's place so the checkbox obtains hover when the label is hovered */}
						<CheckIcon className={cls} />
					</Label>
				);
			}}
		</RACCheckbox>
	);
};

export { Checkbox };
