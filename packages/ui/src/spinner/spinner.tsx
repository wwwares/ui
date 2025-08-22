import React from "react";
import { styled } from "../styled";
import { spinnerRecipe, type SpinnerVariants } from "@wwwares/ui-system";
import clsx from "clsx";

const SpinnerDiv = styled("div");

export type SpinnerProps = SpinnerVariants & {
	className?: string;
};

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
	({ inverted, className, ...props }, ref) => {
		const cls = clsx(spinnerRecipe({ inverted }), className);
		return <SpinnerDiv ref={ref} {...props} className={cls} />;
	},
);
