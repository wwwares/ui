import { css, cx } from "@ui-ware/system/css";
import {
	Label as RACLabel,
	type LabelProps as RACLabelProps,
} from "react-aria-components";

const labelClass = css({
	color: "text.label",
	fontSize: "sm",
});

type LabelProps = RACLabelProps & {
	isRequired?: boolean;
	isPlain?: boolean;
	isPeer?: boolean;
};

function Label(props: LabelProps) {
	const { children, isRequired, className, isPlain, isPeer, ...rest } = props;
	const clsn = cx(className, labelClass, isPeer && "peer");

	if (isPlain) {
		return (
			<span {...rest} className={clsn}>
				{children}
				{isRequired && (
					<span
						className={css({
							color: "red.700",
							ml: "0.5",
						})}
					>
						*
					</span>
				)}
			</span>
		);
	}

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
