import { Spin } from 'antd'

import styles from './Loader.module.scss'

const Loader = ({ size }) => {
	return (
		<div className={styles.loader}>
			<Spin size={size} />
		</div>
	)
}
export default Loader
