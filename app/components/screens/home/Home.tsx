import { FC } from 'react'

import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import Slider from '@/ui/slider/Slider'

import { Meta } from '@/utils/meta'

import { IHome } from './home.types'

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Meta
			title="Смотреть фильмы онлайн"
			description="Смотрите фильмы и телепередачи онлайн в браузере."
		>
			{/* Адаптивные заголовки */}
			<Heading
				title="Смотреть фильмы онлайн"
				className="text-gray-500 mb-6 text-lg md:text-xl lg:mb-8 lg:text-2xl"
			/>

			{slides.length && (
				<div className="mb-6 md:mb-10">
					<Slider slides={slides} />
				</div>
			)}

			<div className="mb-8 md:my-10">
				<SubHeading title="В тренде сейчас" />
				{trendingMovies.length && (
					<div className="mt-4">
						<Gallery items={trendingMovies} />
					</div>
				)}
			</div>

			<div>
				<SubHeading title="Лучшие актеры" />
				{actors.length && (
					<div className="mt-4">
						<Gallery items={actors} />
					</div>
				)}
			</div>
		</Meta>
	)
}

export default Home
