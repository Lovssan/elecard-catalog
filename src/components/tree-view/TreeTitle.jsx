import { API_URL } from '../../app.constance'
import styles from './TreeView.module.scss'

const TreeTitle = ({ item, handleThumbnailClick }) => {
	return (
		<span
			className={styles.title}
			onClick={() => handleThumbnailClick(API_URL + item.image)}
		>
			<span>{item.image.split('/')[1]}</span>
			<img src={API_URL + item.image} alt={item.image} />
		</span>
	)
}
export default TreeTitle
