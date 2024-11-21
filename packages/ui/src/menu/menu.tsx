import {
	Menu,
	MenuTrigger,
	Popover,
	type MenuProps as RACMenuProps,
	type MenuTriggerProps as RACMenuTriggerProps,
} from "react-aria-components";
import { Button } from "../button";
import { MenuItem } from "./menu-item";
import { css } from "@wwwares/ui-system/css";
import type { ReactNode } from "react";

interface RACMenuButtonProps<T>
	extends Omit<RACMenuProps<T>, "items">,
		Omit<RACMenuTriggerProps, "children"> {
	label?: string;
}

interface MenuButtonProps<T> extends RACMenuButtonProps<T> {
	items: MenuItemType[];
}

interface MenuItemType {
	content: string;
	key: string;
	isDisabled?: boolean;
	icon?: ReactNode;
}

function MenuButton<T extends object>({
	label,
	children,
	items,
	...props
}: MenuButtonProps<T>) {
	return (
		<MenuTrigger {...props}>
			<Button>{label}</Button>
			<Popover>
				<Menu
					{...props}
					className={css({
						background: "bg.surface.1",
						borderRadius: "md",
						minWidth: "150px",
						padding: "{spacing.1.5} {spacing.2}",
						maxWidth: "250px",
						border: "1px solid {colors.zinc.300}",
						boxShadow: "0rem 0.25rem 0.375rem -0.125rem rgba(26,26,26,.2)",
						display: "flex",
						gap: "1px",
						flexDirection: "column",
						outline: "none",
					})}
				>
					{items.map((item) => (
						<MenuItem key={item.key}>
							{item?.icon}
							{item.content}
						</MenuItem>
					))}
				</Menu>
			</Popover>
		</MenuTrigger>
	);
}

export { MenuButton };
