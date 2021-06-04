import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {BGTheme} from './BGTheme';
import {Logo} from './MainVideo/Logo';
import {Subtitle} from './MainVideo/Subtitle';
import {Title} from './MainVideo/Title';

export const MainVideo: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<Logo transitionStart={transitionStart} />
				</Sequence>
				<Sequence from={transitionStart + 500} durationInFrames={Infinity}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={transitionStart + 500} durationInFrames={Infinity}>
					<Subtitle />
				</Sequence>
				<Sequence from={0} durationInFrames={Infinity}>
					<BGTheme />
				</Sequence>
			</div>
		</div>
	);
};
