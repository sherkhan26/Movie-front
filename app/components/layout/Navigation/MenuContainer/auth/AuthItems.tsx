import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/configs/url.config'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

interface AuthItemsProps {
	closeMobileMenu: () => void
}

const AuthItems: FC<AuthItemsProps> = ({ closeMobileMenu }) => {
	const { user } = useAuth()

	return (
		<>
			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Админ панель',
					}}
				/>
			)}
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Профиль',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'MdLogin',
						link: '/auth',
						title: 'Войти'
					}}
					closeMobileMenu={closeMobileMenu}
				/>
			)}


		</>
	)
}

export default AuthItems
