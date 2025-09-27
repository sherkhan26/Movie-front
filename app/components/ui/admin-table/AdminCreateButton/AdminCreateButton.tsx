import { FC } from 'react'

import Button from '@/ui/form-elements/Button'
import styles from './AdminCreateButton.module.scss'

const AdminCreateButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
	return <Button className={styles.button} onClick={onClick}>Создать новый</Button>
}

export default AdminCreateButton
