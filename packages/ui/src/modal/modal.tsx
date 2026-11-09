import { type ModalBodyVariants, modalStyles } from "@wwwares/ui-system";
import clsx from "clsx";
import type { ReactElement } from "react";
import {
	DialogTrigger,
	type DialogTriggerProps,
	Modal as RACModal,
	ModalOverlay as RACModalOverlay,
} from "react-aria-components";
import { ModalFrame, type ModalFrameProps } from "./modal-frame";

type ModalProps = ModalFrameProps & {
	activator: ReactElement;
	isDismissable?: boolean;
} & ModalBodyVariants &
	Omit<DialogTriggerProps, "children">;

function Modal(props: ModalProps) {
	const { activator, size, defaultOpen, isOpen, onOpenChange, isDismissable, ...frameProps } =
		props;

	const bodyRecipeClass = modalStyles.bodyRecipe({ size });

	return (
		<DialogTrigger defaultOpen={defaultOpen} isOpen={isOpen} onOpenChange={onOpenChange}>
			{activator}
			<RACModalOverlay className={modalStyles.overlayStyles} isDismissable={isDismissable}>
				<RACModal className={clsx(bodyRecipeClass, modalStyles.contentBackgroundBlend)}>
					<ModalFrame {...frameProps} />
				</RACModal>
			</RACModalOverlay>
		</DialogTrigger>
	);
}

export { Modal, type ModalProps };
