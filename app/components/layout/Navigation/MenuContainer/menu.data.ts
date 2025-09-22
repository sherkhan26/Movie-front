import { IMenu } from './menu.types'

const firstMenu: IMenu = {
	title: 'Fullstack app by Shera',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Главная',
		},
		// {
		// 	icon: 'MdExplore',
		// 	link: '/genres',
		// 	title: 'Discovery',
		// },
		// {
		// 	icon: 'MdRefresh',
		// 	link: '/fresh',
		// 	title: 'Fresh movies',
		// },
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'В тренде сейчас',
		},
	],
}

const userMenu: IMenu = {
	title: 'Общий',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
