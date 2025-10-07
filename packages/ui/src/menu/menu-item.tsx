import {
  type Key,
  MenuItem as RACMenuItem,
  type MenuItemProps as RACMenuItemProps,
} from "react-aria-components";
import { menuStyles } from "@wwwares/ui-system";
import type { ReactNode } from "react";

interface MenuItemType {
  content: string;
  icon?: ReactNode;
  isDisabled?: RACMenuItemProps["isDisabled"];
  onAction?: RACMenuItemProps["onAction"];
  id: Key;
}

interface MenuItemProps extends RACMenuItemProps {
  item: MenuItemType;
}

function MenuItem(props: MenuItemProps) {
  const { item } = props;

  return (
    <RACMenuItem
      className={menuStyles.menuItem}
      isDisabled={item.isDisabled}
      onAction={item.onAction}
    >
      <span>{item.icon}</span>
      {item.content}
    </RACMenuItem>
  );
}

export { MenuItem, type MenuItemType, type MenuItemProps };
