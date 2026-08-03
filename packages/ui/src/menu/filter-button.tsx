import { IconCheck, IconCirclePlus, IconCircleX } from "@tabler/icons-react";
import { filterButtonStyles, popoverStyles } from "@wwwares/ui-system";
import clsx from "clsx";
import { useMemo, useRef, useState } from "react";
import {
	Dialog,
	type Key,
	ListBox,
	ListBoxItem,
	Popover,
	Button as RACButton,
	type Selection,
} from "react-aria-components";
import { Button } from "../button";
import type { MenuItemType } from "./menu-item";

interface FilterButtonProps {
	label?: string;
	items: MenuItemType[];
	defaultSelectedKeys?: Iterable<Key>;
	onApply?: (keys: Set<Key>) => void;
}

const s = filterButtonStyles;

const toSet = (keys: Selection, items: MenuItemType[]): Set<Key> =>
	keys === "all" ? new Set(items.map((i) => i.id)) : new Set(keys);

function FilterButton({
	label = "Filter",
	items,
	defaultSelectedKeys,
	onApply,
}: FilterButtonProps) {
	const triggerRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	// `committed` is what the trigger reflects; `staged` is the in-popover draft.
	const [committed, setCommitted] = useState<Set<Key>>(() => new Set(defaultSelectedKeys ?? []));
	const [staged, setStaged] = useState<Set<Key>>(committed);

	const selected = committed.size > 0;

	const valueLabel = useMemo(() => {
		if (committed.size === 0) return null;
		if (committed.size === 1) {
			const [only] = committed;
			return items.find((i) => i.id === only)?.content ?? "1 selected";
		}
		return `${committed.size} selected`;
	}, [committed, items]);

	function open() {
		setStaged(new Set(committed)); // re-stage from committed on every open
		setIsOpen(true);
	}

	function apply() {
		const next = new Set(staged);
		setCommitted(next);
		onApply?.(next);
		setIsOpen(false);
	}

	function clear() {
		const next = new Set<Key>();
		setCommitted(next);
		setStaged(next);
		onApply?.(next);
	}

	return (
		<>
			<div ref={triggerRef} className={s.filterButton({ selected })}>
				{selected && (
					<RACButton
						className={s.filterButtonClear}
						aria-label={`Clear ${label} filter`}
						onPress={clear}
					>
						<IconCircleX size={16} />
					</RACButton>
				)}

				<RACButton
					className={s.filterButtonLabel}
					aria-label={selected ? `${label}: ${valueLabel}` : label}
					onPress={open}
				>
					{!selected && (
						<span className={s.filterButtonIcon} aria-hidden>
							<IconCirclePlus size={16} />
						</span>
					)}
					{label}
					{selected && (
						<>
							<span className={popoverStyles.divider()} aria-hidden />
							<span className={s.filterButtonValue}>{valueLabel}</span>
						</>
					)}
				</RACButton>
			</div>

			<Popover
				triggerRef={triggerRef}
				isOpen={isOpen}
				onOpenChange={setIsOpen}
				placement="bottom start"
			>
				<Dialog className={popoverStyles.popover} aria-label={`${label} options`}>
					<ListBox
						className={popoverStyles.list}
						selectionMode="multiple"
						selectedKeys={staged}
						onSelectionChange={(keys) => setStaged(toSet(keys, items))}
						items={items}
						aria-label={`${label} options`}
					>
						{(item) => (
							<ListBoxItem
								id={item.id}
								textValue={item.content}
								isDisabled={item.isDisabled}
								className={popoverStyles.item}
							>
								{({ isSelected }) => (
									<>
										<span className={clsx(s.filterCheck, isSelected && s.filterCheckChecked)}>
											{isSelected && <IconCheck size={12} className={s.filterCheckIcon} />}
										</span>
										{item.icon && <span>{item.icon}</span>}
										{item.content}
									</>
								)}
							</ListBoxItem>
						)}
					</ListBox>

					<div className={popoverStyles.divider({ orientation: "horizontal" })} />
					<div className={s.filterFooter}>
						<Button intent="primary" onPress={apply}>
							Apply
						</Button>
					</div>
				</Dialog>
			</Popover>
		</>
	);
}

export { FilterButton, type FilterButtonProps };
