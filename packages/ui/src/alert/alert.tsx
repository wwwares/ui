import { styled } from "../styled";
import {
	alertRecipe,
	alertHeaderRecipe,
	alertDescriptionRecipe,
	type AlertVariants,
} from "@wwwares/ui-system";
import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";
import { Box } from "../box";

const AlertDiv = styled("div");

export type AlertProps = AlertVariants & {
	className?: string;
	title: ReactNode;
	description?: ReactNode;
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
	({ variant, className, title, description, ...props }, ref) => {
		const cls = clsx(alertRecipe({ variant }), className);
		const headerCls = alertHeaderRecipe({ variant });
		const descriptionCls = alertDescriptionRecipe({ variant });

		return (
			<AlertDiv ref={ref} {...props} className={cls}>
				{description ? (
					<>
						<Box className={headerCls}>{title}</Box>
						<Box className={descriptionCls}>{description}</Box>
					</>
				) : (
					<Box css={{ padding: "$3" }}>{title}</Box>
				)}
			</AlertDiv>
		);
	},
);
