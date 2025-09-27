import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { MaterialIcon } from '@/ui/icons/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.types'

interface MenuItemProps {
	item: IMenuItem
	closeMobileMenu?: () => void
}

const MenuItem: FC<MenuItemProps> = ({ item, closeMobileMenu }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<a onClick={closeMobileMenu}>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
