import dynamic from 'next/dynamic'
import { FC } from 'react'

import Menu from './Menu'
import { menus } from './menu.data'

const DynamicGenreMenu = dynamic(() => import('./genres/GenreMenu'), {
	ssr: false,
})

interface MenuContainerProps {
	closeMobileMenu: () => void
}

const MenuContainer: FC<MenuContainerProps> = ({ closeMobileMenu }) => {
	return (
		<div>
			<Menu menu={menus[0]} closeMobileMenu={closeMobileMenu}/>
			{/*<DynamicGenreMenu />*/}
			<Menu menu={{ title: 'Общий', items: [] }} closeMobileMenu={closeMobileMenu}/>
		</div>
	)
}

export default MenuContainer
