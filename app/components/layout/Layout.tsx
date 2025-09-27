import { FC, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'
import MobileMenuButton from './MobileMenuButton/MobileMenuButton'

import styles from './Layout.module.scss'

const Layout: FC = ({ children }) => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

	const closeMobileMenu = () => {
		setMobileMenuOpen(false)
	}

	return (
		<div className={styles.layout}>
			<Navigation
				isMobileMenuOpen={isMobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
				closeMobileMenu={closeMobileMenu}
				className={isMobileMenuOpen ? styles.mobileOpen : ''}
			/>

			<div className={`${styles.center} ${isMobileMenuOpen ? styles.contentBlur : ''}`}>
				{children}
			</div>
			<MobileMenuButton
				isOpen={isMobileMenuOpen}
				onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
			/>
			<Sidebar
				isMobileMenuOpen={isMobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>
		</div>
	)
}

export default Layout
