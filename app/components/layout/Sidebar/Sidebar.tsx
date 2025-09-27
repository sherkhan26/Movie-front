import { FC } from 'react'
import { HiX } from 'react-icons/hi'

import MoviesContainer from './MoviesContainer/MoviesContainer'
import Search from './Search/Search'

import styles from './Sidebar.module.scss'

interface SidebarProps {
	isMobileMenuOpen: boolean
	setMobileMenuOpen: (value: boolean) => void
}

const Sidebar: FC<SidebarProps> = ({
																		 isMobileMenuOpen,
																		 setMobileMenuOpen
																	 }) => {
	return (
		<div className={`${styles.sidebar} ${isMobileMenuOpen ? 'mobileOpen' : ''}`}>
			<button
				className="md:hidden absolute top-4 left-4 p-2 text-white hover:text-primary transition-colors"
				onClick={() => setMobileMenuOpen(false)}
			>
				<HiX size={24} />
			</button>

			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
