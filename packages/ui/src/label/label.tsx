import clsx from "clsx";
import { type ForwardedRef, forwardRef, type ReactNode } from "react";
import {
	LabelContext,
	Label as RACLabel,
	useContextProps,
	type LabelProps as RACLabelProps,
} from "react-aria-components";
import { styled } from "../styled";

import { labelTextStyles } from "@wwwares/ui-system";

const Box = styled("div");
const Span = styled("span");

type LabelProps = Omit<RACLabelProps, "children"> & {
	/** The element that is labelled */
	children?: ReactNode;
	/** The value of the label */
	content: string;
	isRequired?: boolean;
	isPeer?: boolean;
	labelPosition?: "above" | "beside" | "apart";
	/** Secondary value shown alongside the label */
	altContent?: string | ReactNode;
};

const Label = forwardRef(function Label(
	props: LabelProps,
	ref: ForwardedRef<HTMLLabelElement>,
) {
	const {
		children,
		isRequired,
		className,
		isPeer,
		labelPosition = "above",
		content,
		altContent,
		...rest
	} = props;
	const [$props, $ref] = useContextProps(rest, ref, LabelContext);
	const clsn = clsx(className, labelTextStyles, isPeer && "peer");

	let flexDirection = "";

	if (labelPosition === "above") {
		flexDirection = "column";
	} else if (labelPosition === "beside") {
		flexDirection = "row";
	}

	return (
		<RACLabel {...$props} className={clsn} ref={$ref}>
			<Box
				css={{
					flexDirection: flexDirection as any,
					justifyContent:
						labelPosition === "apart" ? "space-between" : undefined,
					gap: labelPosition === "above" ? "$1" : "$2",
					alignItems: "end",
					display: "flex",
				}}
			>
				<Box
					css={{
						order: labelPosition === "beside" ? 1 : undefined,
						lineHeight: "$none",
						width: "100%",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<span>
						{content}
						{isRequired && (
							<Span css={{ color: "$red700", marginLeft: "$1" }}>*</Span>
						)}
					</span>

					{altContent && <span>{altContent}</span>}
				</Box>
				{children}
			</Box>
		</RACLabel>
	);
});

export { Label, type LabelProps };
