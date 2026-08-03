import {
	type RadioProps as RACRadioProps,
	Radio as RACRadio,
	RadioGroup as RACRadioGroup,
	type RadioGroupProps as RACRadioGroupProps,
} from "react-aria-components";
import { Label } from "../label";
import { styled } from "../styled";
import { labelTextStyles, radioCircleStyles } from "@wwwares/ui-system";

const Box = styled("div");

type RadioGroupProps = RACRadioGroupProps & { label: string };
const RadioGroup = (props: RadioGroupProps) => {
	const { children, label, isRequired, ...rest } = props;
	return (
		<RACRadioGroup {...rest} isRequired={isRequired}>
			<Box
				css={{
					display: "flex",
					gap: "$2",
					flexDirection: "column",
					alignItems: "flex-start",
				}}
			>
				<Label isRequired={isRequired} content={label} />
				{typeof children !== "function" && children}
			</Box>
		</RACRadioGroup>
	);
};

type RadioProps = Omit<RACRadioProps, "children"> & { label: string };
const Radio = (props: RadioProps) => {
	const { label, ...rest } = props;
	return (
		// `.group` sits on the RAC root so its data-* state attributes drive every
		// visual state of the circle in CSS (see radio.styles.css.ts).
		<RACRadio {...rest} className="group">
			<Box css={{ display: "flex", gap: "$2", alignItems: "end" }}>
				<Box className={radioCircleStyles} />
				<span className={labelTextStyles}>{label}</span>
			</Box>
		</RACRadio>
	);
};

export { Radio, type RadioProps, RadioGroup, type RadioGroupProps };
