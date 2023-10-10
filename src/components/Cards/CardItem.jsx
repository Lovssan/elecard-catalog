import { CloseOutlined } from '@ant-design/icons'
import { Card, Popconfirm } from 'antd'

import { API_URL } from '../../app.constance'
import { toDate, toSize } from '../../utils/textFormat.utils'
import styles from './Card.module.scss'

const CardItem = ({ item, handleCloseCard }) => {
	return (
		<Card
			className={styles.card}
			cover={
				<div>
					<Popconfirm
						title='Вы уверены, что хотите удалить эту карточку?'
						onConfirm={() => handleCloseCard(item.timestamp)}
						okText='удалить'
						cancelText='отмена'
					>
						<CloseOutlined className={styles.close} />
					</Popconfirm>
					<img alt='example' src={API_URL + item.image} />
				</div>
			}
		>
			<p>
				<span>Name:</span> {item.image.split('/')[1]}
			</p>
			<p>
				<span>Category:</span> {item.category}
			</p>
			<p>
				<span>Filesize:</span> {toSize(item.filesize)}
			</p>
			<p>
				<span>Time:</span> {toDate(item.timestamp)}
			</p>
		</Card>
	)
}
export default CardItem
