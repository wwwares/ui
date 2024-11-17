import {
	MenuItem as RACMenuItem,
	type MenuItemProps as RACMenuItemProps,
} from "react-aria-components";
import { css } from "@wwwares/ui-system/css";

interface MenuItemProps extends RACMenuItemProps {}

function MenuItem(props: MenuItemProps) {
	return (
		<RACMenuItem
			className={css({
				padding: "{spacing.1} {spacing.2}",
				cursor: "pointer",
				borderRadius: "sm",
				outline: "none",
				_hover: {
					backgroundColor: "bg.surface.2",
				},
				_focus: {
					backgroundColor: "bg.surface.2",
				},
			})}
		>
			{props.children}
		</RACMenuItem>
	);
}

export { MenuItem };
