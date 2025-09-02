import { labelTextStyles, tagSlots } from "@wwwares/ui-system";
import {
	type TagGroupProps as RACTagGroupProps,
	type TagListProps as RACTagListProps,
	TagGroup as RACTagGroup,
	TagList,
} from "react-aria-components";
import { Label } from "../label";

interface TagGroupProps<T>
	extends Omit<RACTagGroupProps, "children">,
		Pick<RACTagListProps<T>, "items" | "children" | "renderEmptyState"> {
	label: string;
	description?: string;
	errorMessage?: string;
}

function TagGroup<T extends object>(props: TagGroupProps<T>) {
	const {
		label,
		description,
		errorMessage,
		items,
		children,
		renderEmptyState,
		...rest
	} = props;

	return (
		<RACTagGroup {...rest} className={tagSlots.container}>
			<Label content={label} />
			<TagList
				items={items}
				renderEmptyState={renderEmptyState}
				className={tagSlots.tagWrapper}
			>
				{children}
			</TagList>
		</RACTagGroup>
	);
}

export { TagGroup, type TagGroupProps };
