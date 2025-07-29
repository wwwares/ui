import { css, cx } from "@wwwares/ui-system/css";
import { Flex } from "@wwwares/ui-system/jsx";
import type { ReactNode } from "react";
import {
	Label as RACLabel,
	type LabelProps as RACLabelProps,
} from "react-aria-components";

const labelClass = css({
	color: "text.label",
	fontSize: "sm",
	fontWeight: "semibold",
});

type LabelProps = Omit<RACLabelProps, "children"> & {
	/** The element that is labelled */
	children: ReactNode;
	/** The value of the label */
	content: string;
	isRequired?: boolean;
	isPeer?: boolean;
	labelPosition?: "above" | "beside" | "apart";
	/** Secondary value shown alongside the label */
	altContent?: string | ReactNode;
};

function Label(props: LabelProps) {
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
	const clsn = cx(className, labelClass, isPeer && "peer");

	let flexDirection = "";

	if (labelPosition === "above") {
		flexDirection = "column";
	} else if (labelPosition === "beside") {
		flexDirection = "row-reverse";
	}

	return (
		<RACLabel {...rest} className={clsn}>
			<Flex
				flexDirection={flexDirection}
				justifyContent={labelPosition === "apart" ? "space-between" : undefined}
				gap={labelPosition === "above" ? "1" : "2"}
				alignItems="baseline"
			>
				<div
					style={{
						order: labelPosition === "beside" ? 1 : undefined,
						lineHeight: 1,
						width: "100%",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					{/* <div> */}
					<span>
						{content}
						{isRequired && (
							<span className={css({ color: "red.700", ml: "0.5" })}>*</span>
						)}
					</span>

					<span>{altContent}</span>

					{/* </div> */}
				</div>
				{children}
			</Flex>
		</RACLabel>
	);
}

export { Label, type LabelProps, labelClass as labelTextClass };
