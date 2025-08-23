import { forwardRef } from "react";
import { Box } from "../box";
import type { StyledProps } from "../styled";

type FlexProps = StyledProps<"div">;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
	({ css, ...props }, ref) => {
		return <Box ref={ref} css={{ display: "flex", ...css }} {...props} />;
	},
);
