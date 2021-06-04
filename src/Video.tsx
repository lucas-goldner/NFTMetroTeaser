import {Composition} from 'remotion';
import {MainVideo} from './MainVideo';
import {BGTheme} from './MainVideo/BGTheme';
import {ConfettiEffect} from './MainVideo/ConfettiEffect';
import {Logo} from './MainVideo/Logo';
import {Title} from './MainVideo/Title';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MainVideo"
				component={MainVideo}
				durationInFrames={805}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'New NFT-Metro update',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={500}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="ConfettiEffect"
				component={ConfettiEffect}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="BGTheme"
				component={BGTheme}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
