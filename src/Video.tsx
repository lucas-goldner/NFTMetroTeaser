import {Composition} from 'remotion';
import {BGTheme} from './BGTheme';
import {MainVideo} from './MainVideo';
import {Logo} from './MainVideo/Logo';
import {Subtitle} from './MainVideo/Subtitle';
import {Title} from './MainVideo/Title';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MainVideo"
				component={MainVideo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
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
				id="Subtitle"
				component={Subtitle}
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
