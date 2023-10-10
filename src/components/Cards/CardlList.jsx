import { CSSTransition, TransitionGroup } from 'react-transition-group'

import styles from './Card.module.scss'
import CardItem from './CardItem'

const CardlList = ({ data, startIndex, endIndex, handleCloseCard }) => {
	return (
		<TransitionGroup className={styles.cardlist}>
			{data.slice(startIndex, endIndex).map(item => (
				<CSSTransition key={item.timestamp} timeout={500} classNames='fade'>
					<CardItem item={item} handleCloseCard={handleCloseCard} />
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}
export default CardlList
