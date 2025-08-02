// import { IconCheck, IconDots, IconX } from "@tabler/icons-react";
// import {
// 	type SwitchProps as RACSwitchProps,
// 	Switch as RACSwitch,
// } from "react-aria-components";
// import { Label, type LabelProps } from "../label";
// import { Flex } from "@wwwares/ui-system/jsx";
// import { switchSlotRecipe } from "@wwwares/ui-system/recipes";
// import { css } from "@wwwares/ui-system/css";

// interface SwitchProps extends Omit<RACSwitchProps, "children"> {
// 	label: string;
// 	labelPosition?: LabelProps["labelPosition"];
// }

// function Switch(props: SwitchProps) {
// 	const { label, labelPosition = "beside" } = props;

// 	const cls = switchSlotRecipe();
// 	return (
// 		<RACSwitch {...props}>
// 			{({ isSelected }) => (
// 				<Label labelPosition={labelPosition} content={label}>
// 					<Flex className={cls.root}>
// 						<Flex className={cls.thumb}>
// 							<IconDots
// 								size="8"
// 								className={css({
// 									color: "stone.400",
// 									justifySelf: "center",
// 									alignSelf: "center",
// 									display: "inline-grid",
// 								})}
// 							/>
// 						</Flex>
// 						<span className={cls.icon}>
// 							{isSelected ? <IconCheck size="18px" /> : <IconX size="18px" />}
// 						</span>
// 					</Flex>
// 				</Label>
// 			)}
// 		</RACSwitch>
// 	);
// }

// export { Switch, type SwitchProps };
