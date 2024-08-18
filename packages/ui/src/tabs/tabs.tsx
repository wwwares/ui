import type { ReactNode } from "react";
import {
	Tabs as RACTabs,
	TabList as RACTabList,
	TabPanel as RACTabPanel,
	type TabPanelProps as RACTabPanelProps,
	Tab as RACTab,
	type TabProps as RACTabProps,
} from "react-aria-components";
import { tabsSlotRecipe } from "@wwwares/ui-system/recipes";

type TabsProps = {
	label: string;
	tabs: Array<{ content: string } & Pick<RACTabProps, "isDisabled" | "id">>;
	children: ReactNode;
};

function Tabs(props: TabsProps) {
	const cls = tabsSlotRecipe({});
	return (
		<RACTabs
			style={{
				width: "100%",
				display: "flex",
				gap: "20px",
				flexDirection: "column",
			}}
		>
			<RACTabList className={cls["tabs-container"]}>
				{props.tabs.map(({ content, ...tab }) => (
					<RACTab {...tab} key={tab.id} className={cls.tab}>
						{content}
					</RACTab>
				))}
			</RACTabList>
			{props.children}
		</RACTabs>
	);
}

type TabPanelProps = {
	children: ReactNode;
	id: string;
} & RACTabPanelProps;
function TabPanel(props: TabPanelProps) {
	return <RACTabPanel {...props} />;
}

export { type TabPanelProps, TabPanel, type TabsProps, Tabs };
