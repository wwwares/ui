import {
	type DateFieldProps,
	type DateValue,
	type ValidationResult,
	DateField,
	DateInput,
	DateSegment,
} from "react-aria-components";
import { textFieldRecipe, dateFieldStyles } from "@wwwares/ui-system";
import { Label } from "../label";

interface MyDateFieldProps<T extends DateValue> extends DateFieldProps<T> {
	label: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

function MyDateField<T extends DateValue>({
	label,
	description,
	errorMessage,
	...props
}: MyDateFieldProps<T>) {
	const cls = textFieldRecipe();
	return (
		<DateField {...props}>
			<Label content={label}>
				<DateInput className={cls}>
					{(segment) => (
						<DateSegment
							segment={segment}
							className={dateFieldStyles.dateSegmentStyles}
						/>
					)}
				</DateInput>
			</Label>
			{/* {description && <Text slot="description">{description}</Text>} */}
			{/* <FieldError>{errorMessage}</FieldError> */}
		</DateField>
	);
}

export { MyDateField as DateField };
