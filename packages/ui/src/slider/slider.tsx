import {
	type SliderProps as RACSliderProps,
	Slider as RACSlider,
	SliderOutput as RACSliderOutput,
	SliderTrack as RACSliderTrack,
	SliderThumb as RACSliderThumb,
} from "react-aria-components";
import { Label } from "../label";
import { useRef, useState, useLayoutEffect } from "react";
import { sliderStyles as cls } from "@wwwares/ui-system";
import clsx from "clsx";
import { styled } from "../styled";

const Flex = styled("div");

interface SliderProps extends Omit<RACSliderProps, "children"> {
	label: string;
}

function Slider({ label, ...props }: SliderProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [sliderWidth, setSliderWidth] = useState(0); // fallback width

	useLayoutEffect(() => {
		if (containerRef.current) {
			setSliderWidth(containerRef.current.offsetWidth);
		}
	}, []);

	return (
		<RACSlider {...props}>
			{({ state }) => {
				const thumbPercent = state.getThumbPercent(0);
				const { minValue = 0, maxValue = 100, step = 1 } = props;
				const totalSteps = (maxValue - minValue) / step;
				const deadZonePercent = (1 / (totalSteps + 1)) * 100;

				// Calculate minimum width percentage based on actual slider width
				// 15px min width
				const minWidthPercent = (15 / sliderWidth) * 100;
				const effectiveDeadZone = Math.max(deadZonePercent, minWidthPercent);

				const trackFillWidth =
					effectiveDeadZone + thumbPercent * (100 - effectiveDeadZone);

				return (
					<Label content={label} altContent={<RACSliderOutput />}>
						<div ref={containerRef} className={clsx(cls.container, "group")}>
							<div className={cls.track} />
							<div
								className={cls.trackFill}
								style={{
									width: `${trackFillWidth}%`,
								}}
							/>
							<RACSliderTrack
								style={{
									width: `${100 - effectiveDeadZone}%`,
									marginLeft: `${effectiveDeadZone}%`,
								}}
							>
								<RACSliderThumb
									className={cls.thumb}
									style={{
										left: `${state.getThumbPercent(0) * 100}%`,
									}}
								>
									<Flex className={cls.thumbBar} />
								</RACSliderThumb>
							</RACSliderTrack>
						</div>
					</Label>
				);
			}}
		</RACSlider>
	);
}

export { Slider, type SliderProps };
