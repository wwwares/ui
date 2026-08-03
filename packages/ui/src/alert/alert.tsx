import { styled } from "../styled";
import { type AlertVariants, alertStyles } from "@wwwares/ui-system";
import clsx from "clsx";
import { forwardRef, type ReactNode } from "react";
import { Box } from "../box";

const { alertHeaderRecipe, alertDescriptionRecipe, alertRecipe, alertStripe } = alertStyles;

const AlertDiv = styled("div");

export type AlertProps = AlertVariants & {
	className?: string;
	title: ReactNode;
	description?: ReactNode;
	striped?: boolean;
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
	({ variant, className, title, description, striped, ...props }, ref) => {
		const cls = clsx(alertRecipe({ variant }), className);
		const headerCls = alertHeaderRecipe({ variant });
		const descriptionCls = alertDescriptionRecipe({ variant });

		return (
			<AlertDiv ref={ref} {...props} className={cls}>
				{description ? (
					<>
						<Box className={headerCls}>{title}</Box>
						<Box className={descriptionCls}>
							{striped && <div className={alertStripe} />}
							{description}
						</Box>
					</>
				) : (
					<Box css={{ padding: "$3" }}>{title}</Box>
				)}
			</AlertDiv>
		);
	},
);
