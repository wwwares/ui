import {
	type DatePickerProps,
	type DateValue,
	type ValidationResult,
	Calendar,
	CalendarCell,
	CalendarGrid,
	DateInput,
	DatePicker,
	DateSegment,
	Dialog,
	FieldError,
	Group,
	Heading,
	Popover,
	Text,
	Button as RACButton,
	CalendarGridHeader,
	CalendarHeaderCell,
	CalendarGridBody,
} from "react-aria-components";
import { Label } from "../label";
import { Button } from "../button";
import {
	IconCalendar,
	IconChevronLeft,
	IconChevronRight,
} from "@tabler/icons-react";
import {
	calendarStyles,
	dateFieldStyles,
	textFieldRecipe,
	themeContract,
} from "@wwwares/ui-system";

interface MyDatePickerProps<T extends DateValue> extends DatePickerProps<T> {
	label: string;
	description?: string;
	errorMessage?: string | ((validation: ValidationResult) => string);
}

function MyDatePicker<T extends DateValue>({
	label,
	description,
	errorMessage,
	firstDayOfWeek,
	...props
}: MyDatePickerProps<T>) {
	return (
		<DatePicker
			{...props}
			style={{ display: "flex", gap: "4px", flexDirection: "column" }}
		>
			<Label content={label} />
			<Group
				style={{
					display: "flex",
					width: "100%",
					justifyContent: "space-between",
				}}
				className={textFieldRecipe()}
			>
				{/* don't re-use DateField component based on examples */}
				<DateInput>
					{(segment) => (
						<DateSegment
							segment={segment}
							className={dateFieldStyles.dateSegmentStyles}
						/>
					)}
				</DateInput>
				{/* vanilla button for now */}
				<RACButton style={{ display: "flex" }}>
					<IconCalendar size={20} color={themeContract.colors.blue[700]} />
				</RACButton>
			</Group>
			{description && <Text slot="description">{description}</Text>}
			<FieldError>{errorMessage}</FieldError>
			<Popover>
				<Dialog>
					<Calendar
						firstDayOfWeek={firstDayOfWeek}
						className={calendarStyles.containerStyles}
					>
						<header className={calendarStyles.headerStyles}>
							<Button slot="previous">
								<IconChevronLeft size={20} />
							</Button>
							<Heading style={{ flex: 1, textAlign: "center" }} />
							<Button slot="next">
								<IconChevronRight size={20} />
							</Button>
						</header>
						<CalendarGrid style={{ width: "100%", textAlign: "center" }}>
							<CalendarGridHeader className={calendarStyles.weekdayStyles}>
								{(day) => (
									<CalendarHeaderCell className={calendarStyles.cellStyles}>
										{day}
									</CalendarHeaderCell>
								)}
							</CalendarGridHeader>
							<CalendarGridBody>
								{(date) => (
									<CalendarCell
										className={calendarStyles.cellStyles}
										date={date}
									/>
								)}
							</CalendarGridBody>
						</CalendarGrid>
					</Calendar>
				</Dialog>
			</Popover>
		</DatePicker>
	);
}

export { MyDatePicker as DatePicker };
