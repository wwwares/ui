// import type { ReactElement, ReactNode } from "react";
// import { IconX } from "@tabler/icons-react";
// import {
// 	Dialog,
// 	DialogTrigger,
// 	type DialogTriggerProps,
// 	Modal as RACModal,
// 	ModalOverlay as RACModalOverlay,
// } from "react-aria-components";
// import {
// 	modalSlotRecipe,
// 	type ModalSlotRecipeVariantProps,
// } from "@wwwares/ui-system/recipes";
// import { Box, Flex } from "@wwwares/ui-system/jsx";

// type ModalProps = {
// 	activator: ReactElement;
// 	children(renderProps: { close(): void }): ReactNode;
// 	title: string;
// 	titleHidden?: boolean;
// 	footer?: ReactNode;
// 	primaryAction?: ReactNode;
// 	secondaryAction?: ReactNode;
// 	// tertiaryAction?: ReactNode;
// } & ModalSlotRecipeVariantProps &
// 	Omit<DialogTriggerProps, "children">;

// function Modal(props: ModalProps) {
// 	const {
// 		activator,
// 		children,
// 		title,
// 		titleHidden = false,
// 		primaryAction,
// 		secondaryAction,
// 		footer,
// 		size,
// 		defaultOpen,
// 		isOpen,
// 		onOpenChange,
// 		...styledProps
// 	} = props;

// 	const cls = modalSlotRecipe({ size });

// 	const hasFooter = !!primaryAction || !!secondaryAction || !!footer;

// 	return (
// 		<DialogTrigger
// 			defaultOpen={defaultOpen}
// 			isOpen={isOpen}
// 			onOpenChange={onOpenChange}
// 		>
// 			{activator}
// 			<RACModalOverlay className={cls["modal-overlay"]}>
// 				<RACModal
// 					className={cls["modal-body"]}
// 					isDismissable
// 					shouldCloseOnInteractOutside={() => true}
// 				>
// 					<Dialog aria-label={title} style={{ outline: "none" }}>
// 						{(renderProps) => (
// 							<Flex flexDirection="column" {...styledProps}>
// 								<div className={cls["modal-header"]}>
// 									{!titleHidden && <span>{title}</span>}
// 									<button
// 										style={{
// 											appearance: "none",
// 											cursor: "pointer",
// 										}}
// 										onClick={renderProps.close}
// 										type="button"
// 									>
// 										<IconX size={16} />
// 									</button>
// 								</div>

// 								<Box className={cls["modal-content"]}>
// 									{children(renderProps)}
// 								</Box>
// 								{hasFooter && (
// 									<Box className={cls["modal-footer"]}>
// 										{footer}
// 										<Flex gap="4">
// 											{secondaryAction}
// 											{primaryAction}
// 										</Flex>
// 									</Box>
// 								)}
// 							</Flex>
// 						)}
// 					</Dialog>
// 				</RACModal>
// 			</RACModalOverlay>
// 		</DialogTrigger>
// 	);
// }

// export { Modal, type ModalProps };
