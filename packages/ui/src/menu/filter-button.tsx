import {
  Menu,
  MenuTrigger,
  Popover,
  Button as RACButton,
  type MenuProps as RACMenuProps,
  type MenuTriggerProps as RACMenuTriggerProps,
} from "react-aria-components";
import { IconFilter } from "@tabler/icons-react";
import { MenuItem, type MenuItemType } from "./menu-item";
import { filterButtonStyles, menuStyles, tagSlots } from "@wwwares/ui-system";

interface RACFilterButtonProps<T>
  extends Omit<RACMenuProps<T>, "items">,
    Omit<RACMenuTriggerProps, "children"> {
  label?: string;
}

interface FilterButtonProps<T> extends RACFilterButtonProps<T> {
  items: MenuItemType[];
}

function FilterButton<T extends object>({
  label = "Filter",
  children,
  items,
  ...props
}: FilterButtonProps<T>) {
  const cls = tagSlots.tag({ selected: !!props.selectedKeys });
  return (
    <MenuTrigger {...props}>
      <RACButton className={cls}>
        <span className={filterButtonStyles.filterButtonIcon}>
          <IconFilter size={16} />
        </span>
        {label}
      </RACButton>
      <Popover>
        <Menu {...props} className={menuStyles.menuContainer}>
          {items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export { FilterButton };
