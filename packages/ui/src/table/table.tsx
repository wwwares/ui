import { tableStyles } from "@wwwares/ui-system";
import { useMemo } from "react";
import {
	Table as RACTable,
	TableHeader as RACTableHeader,
	TableBody as RACTableBody,
	Row as RACRow,
	Cell as RACCell,
	ColumnProps,
	Column as RACColumn,
	TableProps as RACTableProps,
	Collection,
} from "react-aria-components";
import { Flex } from "../flex";
import { Checkbox } from "../checkbox";
import { Box } from "../box";

type Column = {
	id: ColumnProps["id"];
	name: string;
};

type TableProps = {
	items: unknown[];
	columns: Column[];
	selectionMode?: RACTableProps["selectionMode"];
	selectionBehavior?: RACTableProps["selectionBehavior"];
	onSelectionChange?: RACTableProps["onSelectionChange"];
	selectedKeys?: RACTableProps["selectedKeys"];
};
function Table(props: TableProps) {
	const { items, columns, selectionMode, selectionBehavior, onSelectionChange, selectedKeys } =
		props;

	const cols = useMemo(() => columns, []);

	return (
		<Flex className={tableStyles.tableContainerStyles}>
			<RACTable
				className={tableStyles.tableStyles}
				selectionMode={selectionMode}
				selectionBehavior={selectionBehavior}
				onSelectionChange={onSelectionChange}
				selectedKeys={selectedKeys}
				onRowAction={() => alert("yo")}
			>
				<RACTableHeader columns={cols}>
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
					<Collection items={cols}>
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
