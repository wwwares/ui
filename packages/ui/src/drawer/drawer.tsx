import { type DrawerVariants, drawerStyles } from "@wwwares/ui-system";
import type { ReactElement } from "react";
import {
	DialogTrigger,
	type DialogTriggerProps,
	Modal as RACModal,
	ModalOverlay as RACModalOverlay,
} from "react-aria-components";
import { ModalFrame, type ModalFrameProps } from "../modal/modal-frame";

type DrawerProps = ModalFrameProps & {
	activator: ReactElement;
	isDismissable?: boolean;
} & DrawerVariants &
	Omit<DialogTriggerProps, "children">;

function Drawer(props: DrawerProps) {
	const { activator, placement, defaultOpen, isOpen, onOpenChange, isDismissable, ...frameProps } =
		props;

	return (
		<DialogTrigger defaultOpen={defaultOpen} isOpen={isOpen} onOpenChange={onOpenChange}>
			{activator}
			<RACModalOverlay
				className={drawerStyles.overlayRecipe({ placement })}
				isDismissable={isDismissable}
			>
				<RACModal className={drawerStyles.bodyRecipe({ placement })}>
					<ModalFrame {...frameProps} />
				</RACModal>
			</RACModalOverlay>
		</DialogTrigger>
	);
}

export { Drawer, type DrawerProps };
