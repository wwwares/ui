// import {
// 	type Key,
// 	MenuItem as RACMenuItem,
// 	type MenuItemProps as RACMenuItemProps,
// } from "react-aria-components";
// import { menuSlotRecipe } from "@wwwares/ui-system/recipes";
// import type { ReactNode } from "react";

// interface MenuItemType {
// 	content: string;
// 	icon?: ReactNode;
// 	isDisabled?: RACMenuItemProps["isDisabled"];
// 	onAction?: RACMenuItemProps["onAction"];
// 	id: Key;
// }

// interface MenuItemProps extends RACMenuItemProps {
// 	item: MenuItemType;
// }

// function MenuItem(props: MenuItemProps) {
// 	const { item } = props;

// 	const recipeClass = menuSlotRecipe()["menu-item"];
// 	return (
// 		<RACMenuItem
// 			className={recipeClass}
// 			isDisabled={item.isDisabled}
// 			onAction={item.onAction}
// 		>
// 			<span>{item.icon}</span>
// 			{item.content}
// 		</RACMenuItem>
// 	);
// }

// export { MenuItem, type MenuItemType, type MenuItemProps };
