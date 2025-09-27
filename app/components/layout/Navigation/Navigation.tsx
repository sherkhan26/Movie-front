import { FC } from 'react'
import MenuContainer from './MenuContainer/MenuContainer'

import styles from './Navigation.module.scss'

interface NavigationProps {
	isMobileMenuOpen: boolean
	setMobileMenuOpen: (value: boolean) => void
	className?: string
	closeMobileMenu: () => void
}

const Navigation: FC<NavigationProps> = ({
	isMobileMenuOpen,
	setMobileMenuOpen,
	className = '',
	closeMobileMenu
}) => {
	return (
		<div className={`${styles.navigation} ${className}`}>
			<MenuContainer closeMobileMenu={closeMobileMenu} />
		</div>
	)
}

export default Navigation
