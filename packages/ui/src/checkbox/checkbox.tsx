import {
	Checkbox as RACCheckbox,
	type CheckboxProps as RACCheckboxProps,
} from "react-aria-components";
import { styled } from "../styled";
import { Label } from "../label";
import { checkIconStyles } from "@wwwares/ui-system";

const CheckIcon = styled("div");

type CheckboxProps = RACCheckboxProps &
	({ label: string; noLabel?: never } | { label?: never; noLabel: true });

const Checkbox = (props: CheckboxProps) => {
	const { label = "", isRequired } = props;

	return (
		// `.group` sits on the RAC root so its data-* state attributes drive every
		// visual state of the CheckIcon in CSS (see checkbox.styles.css.ts).
		<RACCheckbox {...props} className="group">
			<Label isRequired={isRequired} content={label} labelPosition="beside">
				{/* the <input /> is hidden and CheckIcon takes its place; hover/press
				    react to the whole label because the state lives on the group */}
				<CheckIcon className={checkIconStyles} />
			</Label>
		</RACCheckbox>
	);
};

export { Checkbox };
