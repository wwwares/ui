import { IconCheck, IconDots, IconX } from "@tabler/icons-react";
import {
	type SwitchProps as RACSwitchProps,
	Switch as RACSwitch,
} from "react-aria-components";
import { Label } from "../label";
import { Flex } from "@wwwares/ui-system/jsx";
import { switchSlotRecipe } from "@wwwares/ui-system/recipes";
import { css } from "@wwwares/ui-system/css";

interface SwitchProps extends Omit<RACSwitchProps, "children"> {
	label: string;
}

function Switch(props: SwitchProps) {
	const { label } = props;

	const cls = switchSlotRecipe();
	return (
		<RACSwitch {...props}>
			{({ isSelected }) => (
				<>
					<Flex className={cls.root}>
						<Flex className={cls.thumb}>
							<IconDots
								size="8"
								className={css({
									color: "zinc.400",
									justifySelf: "center",
									alignSelf: "center",
									display: "inline-grid",
								})}
							/>
						</Flex>
						<span className={cls.icon}>
							{isSelected ? <IconCheck size="18px" /> : <IconX size="18px" />}
						</span>
					</Flex>
					<Label isPlain>{label}</Label>
				</>
			)}
		</RACSwitch>
	);
}

export { Switch, type SwitchProps };
