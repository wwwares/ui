import { tagsSlotRecipe } from "@wwwares/ui-system/recipes";
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

	const cls = tagsSlotRecipe();

	return (
		<Label content={label}>
			<RACTagGroup {...rest} className={cls.container}>
				<TagList
					items={items}
					renderEmptyState={renderEmptyState}
					className={cls["tag-wrapper"]}
				>
					{children}
				</TagList>
			</RACTagGroup>
		</Label>
	);
}

export { TagGroup, type TagGroupProps };
