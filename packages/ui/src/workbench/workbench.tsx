import { IconChevronUp, IconCircleX } from "@tabler/icons-react";
import { drawerStyles, modalStyles, workbenchStyles } from "@wwwares/ui-system";
import clsx from "clsx";
import type { CSSProperties, ReactNode } from "react";
import { Modal as RACModal, ModalOverlay as RACModalOverlay } from "react-aria-components";
import { ModalFrame, type ModalFrameProps } from "../modal/modal-frame";

type WorkbenchProps = ModalFrameProps & {
	start?: ReactNode;
	end?: ReactNode;
	height?: CSSProperties["height"];
	isOpen: boolean;
	onOpenChange(isOpen: boolean): void;
};

function Workbench(props: WorkbenchProps) {
	const { start, end, height, isOpen, onOpenChange, ...frameProps } = props;
	const { title, titleHidden = false } = frameProps;

	const bodyRecipeClass = drawerStyles.bodyRecipe({ placement: "bottom" });

	const bar = (
		<div className={clsx(modalStyles.headerStyles, workbenchStyles.headerStyles)}>
			<div className={workbenchStyles.groupStyles}>
				{!titleHidden && <span>{title}</span>}
				<div className={workbenchStyles.slotStyles}>{start}</div>
			</div>
			<div className={workbenchStyles.groupStyles}>
				<div className={workbenchStyles.slotStyles}>{end}</div>
				<button
					aria-label={isOpen ? "Collapse" : "Expand"}
					className={clsx(!isOpen && workbenchStyles.stretchedToggleStyles)}
					style={{
						appearance: "none",
						cursor: "pointer",
					}}
					onClick={() => onOpenChange(!isOpen)}
					type="button"
				>
					{isOpen ? <IconCircleX size={16} /> : <IconChevronUp size={16} />}
				</button>
			</div>
		</div>
	);

	return (
		<>
			<div className={clsx(bodyRecipeClass, workbenchStyles.barStyles)}>{bar}</div>
			<RACModalOverlay
				className={drawerStyles.overlayRecipe({ placement: "bottom" })}
				isDismissable
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<RACModal className={clsx(bodyRecipeClass, workbenchStyles.panelStyles)} style={{ height }}>
					<ModalFrame {...frameProps} header={bar} />
				</RACModal>
			</RACModalOverlay>
		</>
	);
}

export { Workbench, type WorkbenchProps };
