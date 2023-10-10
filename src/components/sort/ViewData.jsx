import { Radio } from 'antd'

import styles from './ViewData.module.scss'

const ViewCatalog = ({ sortBy, setSortBy, view, setView }) => {
	return (
		<div className={styles.sort}>
			<Radio.Group value={view} onChange={e => setView(e.target.value)}>
				<Radio.Button value='cards'>Карточки</Radio.Button>
				<Radio.Button value='tree'>Список</Radio.Button>
			</Radio.Group>
			<Radio.Group value={sortBy} onChange={e => setSortBy(e.target.value)}>
				<Radio.Button value='category'>По категории</Radio.Button>
				<Radio.Button value='date'>По дате</Radio.Button>
				<Radio.Button value='name'>По названию</Radio.Button>
				<Radio.Button value='size'>По размеру</Radio.Button>
			</Radio.Group>
		</div>
	)
}
export default ViewCatalog
