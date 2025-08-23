import { createElement, forwardRef } from "react";
import { sprinkles, type Sprinkles } from "@wwwares/ui-system";
import clsx from "clsx";

export type StyledProps<T extends keyof JSX.IntrinsicElements> = {
	css?: Sprinkles;
	className?: string;
} & JSX.IntrinsicElements[T];

export type StyledComponent<T extends keyof JSX.IntrinsicElements> =
	React.ForwardRefExoticComponent<
		StyledProps<T> &
			React.RefAttributes<
				T extends keyof HTMLElementTagNameMap
					? HTMLElementTagNameMap[T]
					: T extends keyof SVGElementTagNameMap
						? SVGElementTagNameMap[T]
						: HTMLElement
			>
	>;

export function styled<T extends keyof JSX.IntrinsicElements>(
	element: T,
	$className?: string,
): StyledComponent<T> {
	const StyledComponent = forwardRef<
		T extends keyof HTMLElementTagNameMap
			? HTMLElementTagNameMap[T]
			: T extends keyof SVGElementTagNameMap
				? SVGElementTagNameMap[T]
				: HTMLElement,
		StyledProps<T>
	>(({ css, className, ...props }, ref) => {
		const { className: sprinklesClassName, style } = sprinkles(css || {});

		const combinedClassName = clsx(className, $className, sprinklesClassName);

		return createElement(element, {
			...props,
			ref,
			className: combinedClassName,
			style,
		});
	});

	// Set display name for better debugging
	StyledComponent.displayName = `Styled(${element})`;

	return StyledComponent as StyledComponent<T>;
}
