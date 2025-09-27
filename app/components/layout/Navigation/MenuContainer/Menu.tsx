import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.types'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false,
})

interface MenuProps {
	menu: IMenu
	closeMobileMenu: () => void
}

const Menu: FC<MenuProps> = ({ menu: { items, title }, closeMobileMenu  }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem key={item.link} item={item} closeMobileMenu={closeMobileMenu} />
				))}
				{title === 'Общий' ? <DynamicAuthItems closeMobileMenu={closeMobileMenu}/> : null}
			</ul>
		</div>
	)
}

export default Menu
