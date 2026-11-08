import { IconX } from "@tabler/icons-react";
import { modalStyles } from "@wwwares/ui-system";
import type { ReactNode } from "react";
import { Dialog } from "react-aria-components";

type ModalFrameProps = {
	children(renderProps: { close(): void }): ReactNode;
	title: string;
	titleHidden?: boolean;
	footer?: ReactNode;
	primaryAction?: ReactNode;
	secondaryAction?: ReactNode;
	// tertiaryAction?: ReactNode;
};

function ModalFrame(props: ModalFrameProps & { header?: ReactNode }) {
	const {
		children,
		title,
		titleHidden = false,
		primaryAction,
		secondaryAction,
		footer,
		header,
	} = props;

	const hasFooter = !!primaryAction || !!secondaryAction || !!footer;

	return (
		<Dialog aria-label={title} className={modalStyles.frameStyles}>
			{(renderProps) => (
				<>
					{header ?? (
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
					)}

					<div className={modalStyles.contentStyles}>{children(renderProps)}</div>
					{hasFooter && (
						<div className={modalStyles.footerStyles}>
							{footer}
							<div>
								{secondaryAction}
								{primaryAction}
							</div>
						</div>
					)}
				</>
			)}
		</Dialog>
	);
}

export { ModalFrame, type ModalFrameProps };
