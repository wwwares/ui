import { tableStyles } from "@wwwares/ui-system";
import {
	Table as RACTable,
	TableHeader as RACTableHeader,
	TableBody as RACTableBody,
	Row as RACRow,
	Cell as RACCell,
	Column as RACColumn,
	TableProps as RACTableProps,
	Collection,
	Key,
} from "react-aria-components";
import { Flex } from "../flex";
import { Checkbox } from "../checkbox";
import { Box } from "../box";

type Column<T> = {
	id: keyof T & Key;
	name: string;
	isRowHeader?: boolean;
};

type TableProps<T extends { id: Key }> = {
	items: T[];
	columns: Column<T>[];
	selectionMode?: RACTableProps["selectionMode"];
	selectionBehavior?: RACTableProps["selectionBehavior"];
	onSelectionChange?: RACTableProps["onSelectionChange"];
	selectedKeys?: RACTableProps["selectedKeys"];
	onRowAction?: RACTableProps["onRowAction"];
};
function Table<T extends { id: Key }>(props: TableProps<T>) {
	const {
		items,
		columns,
		selectionMode,
		selectionBehavior,
		onSelectionChange,
		selectedKeys,
		onRowAction,
	} = props;

	return (
		<Flex className={tableStyles.tableContainerStyles}>
			<RACTable
				className={tableStyles.tableStyles}
				selectionMode={selectionMode}
				selectionBehavior={selectionBehavior}
				onSelectionChange={onSelectionChange}
				selectedKeys={selectedKeys}
				onRowAction={onRowAction}
			>
				<RACTableHeader columns={columns}>
					{selectionBehavior === "toggle" && (
						<RACColumn
							width={32}
							minWidth={32}
							style={{ width: 32 }}
							className={tableStyles.tableHeaderStyles}
						>
							<Checkbox slot="selection" noLabel />
							<Box className={tableStyles.tableCheckboxStyles} />
						</RACColumn>
					)}
					{/* use Collection to render dynamic header cols alongside the checkbox */}
					<Collection items={columns}>
						{(column) => (
							<RACColumn {...column} className={tableStyles.tableHeaderStyles}>
								{column.name}
							</RACColumn>
						)}
					</Collection>
				</RACTableHeader>
				<RACTableBody
					items={items}
					dependencies={[columns]}
					renderEmptyState={() => "todo: add me"}
					className={tableStyles.tableBodyStyles}
				>
					{(item) => (
						<RACRow columns={columns} className={tableStyles.tableRowStyles}>
							{selectionBehavior === "toggle" && (
								<RACCell className={tableStyles.tableCellStyles}>
									<Checkbox slot="selection" noLabel />
								</RACCell>
							)}
							{/* use Collection to render dynamic row cells alongside the checkbox */}
							<Collection items={columns}>
								{(column) => (
									<RACCell className={tableStyles.tableCellStyles}>
										{typeof item[column.id] === "function" ? item[column.id]() : item[column.id]}
									</RACCell>
								)}
							</Collection>
						</RACRow>
					)}
				</RACTableBody>
			</RACTable>
		</Flex>
	);
}

export { Table };
