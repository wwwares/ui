import { css, cx } from "@ui-ware/system/css";
import {
	Label as RACLabel,
	type LabelProps as RACLabelProps,
} from "react-aria-components";

const labelClass = css({
	color: "zinc.900",
	fontSize: "sm",
});

type LabelProps = RACLabelProps & {
	isRequired?: boolean;
};

function Label(props: LabelProps) {
	const { children, isRequired, className, ...rest } = props;
	const clsn = cx(className, labelClass);

	return (
		<RACLabel {...rest} className={clsn}>
			{children}
			{isRequired && (
				<span className={css({ color: "red.700", ml: "0.5" })}>*</span>
			)}
		</RACLabel>
	);
}

export { Label, type LabelProps };
