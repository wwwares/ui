import type { ReactNode } from "react";
import { modalStyles } from "@wwwares/ui-system";

type ModalMarkerProps = {
	content: ReactNode;
};

function ModalMarker(props: ModalMarkerProps) {
	const cls = modalStyles.markerStyles;

	return <div className={cls}>{props.content}</div>;
}

export { ModalMarker };
