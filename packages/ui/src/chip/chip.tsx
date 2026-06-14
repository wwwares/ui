import { chipRecipe } from "@wwwares/ui-system";
import { Box } from "../box";

function Chip({ children }) {
	const cls = chipRecipe();

	return <Box className={cls}>{children}</Box>;
}

export { Chip };
