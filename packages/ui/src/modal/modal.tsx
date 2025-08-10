import type { ReactElement, ReactNode } from "react";
import { IconX } from "@tabler/icons-react";
import {
	Dialog,
	DialogTrigger,
	type DialogTriggerProps,
	Modal as RACModal,
	ModalOverlay as RACModalOverlay,
} from "react-aria-components";
import { modalStyles, type ModalBodyVariants } from "@wwwares/ui-system";

type ModalProps = {
	activator: ReactElement;
	children(renderProps: { close(): void }): ReactNode;
	title: string;
	titleHidden?: boolean;
	footer?: ReactNode;
	primaryAction?: ReactNode;
	secondaryAction?: ReactNode;
	// tertiaryAction?: ReactNode;
} & ModalBodyVariants &
	Omit<DialogTriggerProps, "children">;

function Modal(props: ModalProps) {
	const {
		activator,
		children,
		title,
		titleHidden = false,
		primaryAction,
		secondaryAction,
		footer,
		size,
		defaultOpen,
		isOpen,
		onOpenChange,
		...styledProps
	} = props;

	const bodyRecipeClass = modalStyles.bodyRecipe({ size });

	const hasFooter = !!primaryAction || !!secondaryAction || !!footer;

	return (
		<DialogTrigger
			defaultOpen={defaultOpen}
			isOpen={isOpen}
			onOpenChange={onOpenChange}
		>
			{activator}
			<RACModalOverlay className={modalStyles.overlayStyles}>
				<RACModal
					className={bodyRecipeClass}
					isDismissable
					shouldCloseOnInteractOutside={() => true}
				>
					<Dialog aria-label={title} style={{ outline: "none" }}>
						{(renderProps) => (
							<div flexDirection="column" {...styledProps}>
								<div className={modalStyles.headerStyles}>
									{!titleHidden && <span>{title}</span>}
									<button
										style={{
											appearance: "none",
											cursor: "pointer",
										}}
										onClick={renderProps.close}
										type="button"
									>
										<IconX size={16} />
									</button>
								</div>

								<div className={modalStyles.contentStyles}>
									{children(renderProps)}
								</div>
								{hasFooter && (
									<div className={modalStyles.footerStyles}>
										{footer}
										<div gap="4">
											{secondaryAction}
											{primaryAction}
										</div>
									</div>
								)}
							</div>
						)}
					</Dialog>
				</RACModal>
			</RACModalOverlay>
		</DialogTrigger>
	);
}

export { Modal, type ModalProps };
