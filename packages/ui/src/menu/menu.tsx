// import {
// 	Menu,
// 	MenuTrigger,
// 	Popover,
// 	type MenuProps as RACMenuProps,
// 	type MenuTriggerProps as RACMenuTriggerProps,
// } from "react-aria-components";
// import { Button } from "../button";
// import { MenuItem, type MenuItemType } from "./menu-item";
// import { menuSlotRecipe } from "@wwwares/ui-system/recipes";

// interface RACMenuButtonProps<T>
// 	extends Omit<RACMenuProps<T>, "items">,
// 		Omit<RACMenuTriggerProps, "children"> {
// 	label?: string;
// }

// interface MenuButtonProps<T> extends RACMenuButtonProps<T> {
// 	items: MenuItemType[];
// }

// function MenuButton<T extends object>({
// 	label,
// 	children,
// 	items,
// 	...props
// }: MenuButtonProps<T>) {
// 	const recipeClass = menuSlotRecipe()["menu-container"];
// 	return (
// 		<MenuTrigger {...props}>
// 			<Button>{label}</Button>
// 			<Popover>
// 				<Menu {...props} className={recipeClass}>
// 					{items.map((item) => (
// 						<MenuItem key={item.id} item={item} />
// 					))}
// 				</Menu>
// 			</Popover>
// 		</MenuTrigger>
// 	);
// }

// export { MenuButton };
