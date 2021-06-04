import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Logo: React.FC<{
	transitionStart: number;
}> = ({transitionStart}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scaleIn = spring({
		frame,
		config: {
			mass: 1,
		},
		fps: videoConfig.fps,
	});

	const translation = interpolate(
		spring({
			frame: frame - transitionStart,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 0.5,
			},
		}),
		[0, 1],
		[0, -150]
	);

	const scale = frame < 50 ? scaleIn : 1;

	return (
		<img
			src={require('../../assets/images/Logo.png')}
			width={500}
			height={500}
		/>
	);
};
