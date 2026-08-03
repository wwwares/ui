import {
	Menu,
	MenuTrigger,
	Popover,
	type MenuProps as RACMenuProps,
	type MenuTriggerProps as RACMenuTriggerProps,
} from "react-aria-components";
import { Button } from "../button";
import { MenuItem, type MenuItemType } from "./menu-item";
import { popoverStyles } from "@wwwares/ui-system";

interface RACMenuButtonProps<T>
	extends Omit<RACMenuProps<T>, "items">, Omit<RACMenuTriggerProps, "children"> {
	label?: string;
}

interface MenuButtonProps<T> extends RACMenuButtonProps<T> {
	items: MenuItemType[];
}

function MenuButton<T extends object>({ label, children, items, ...props }: MenuButtonProps<T>) {
	return (
		<MenuTrigger {...props}>
			<Button>{label}</Button>
			<Popover className={popoverStyles.popover}>
				<Menu {...props} className={popoverStyles.list}>
					{items.map((item) => (
						<MenuItem key={item.id} item={item} />
					))}
				</Menu>
			</Popover>
		</MenuTrigger>
	);
}

export { MenuButton };
