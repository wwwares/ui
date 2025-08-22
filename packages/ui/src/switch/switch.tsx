import { IconCheck, IconDots, IconX } from "@tabler/icons-react";
import {
	type SwitchProps as RACSwitchProps,
	Switch as RACSwitch,
} from "react-aria-components";
import { Label, type LabelProps } from "../label";
import { switchSlots } from "@wwwares/ui-system";
import { styled } from "../styled";

interface SwitchProps extends Omit<RACSwitchProps, "children"> {
	label: string;
	labelPosition?: LabelProps["labelPosition"];
}

const Box = styled("div");

function Switch(props: SwitchProps) {
	const { label, labelPosition = "beside" } = props;

	return (
		<RACSwitch {...props} className="group">
			{({ isSelected }) => (
				<>
					<Label
						labelPosition={labelPosition}
						content={label}
						elementType="div"
					>
						<Box className={switchSlots.switchRoot}>
							<Box className={switchSlots.switchThumb}>
								<Box
									css={{
										color: "$stone400",
										justifySelf: "center",
										alignSelf: "center",
										display: "inline-grid",
									}}
								>
									<IconDots size="8" />
								</Box>
							</Box>
							<span className={switchSlots.switchIcon}>
								{isSelected ? <IconCheck size="16px" /> : <IconX size="16px" />}
							</span>
						</Box>
					</Label>
				</>
			)}
		</RACSwitch>
	);
}

export { Switch, type SwitchProps };
