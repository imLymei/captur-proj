import Hero from './Hero';
import Instagram from './Instagram';
import Slider from './Slider';
import { SliderData } from './SliderData';

export default function Home() {
	return (
		<div>
			<Hero
				heading='Captur Photography'
				message='I capture moments in the night of the city and keep them alive.'
			/>
			<Slider id='gallery' slides={SliderData} />
			<Instagram />
		</div>
	);
}
