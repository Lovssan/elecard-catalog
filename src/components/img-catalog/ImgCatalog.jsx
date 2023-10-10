import { Button, Pagination } from 'antd'
import { useQuery } from 'react-query'

import useLocalStorage from '../../hooks/useLocalStorage'
import { usePagination } from '../../hooks/usePaginations'

import CardsService from '../../service/cards.service'
import { sortData } from '../../utils/toSorted'
import CardlList from '../Cards/CardlList'
import Error from '../error/Error'
import Loader from '../loader/Loader'
import TreeView from '../tree-view/TreeView'

const ImgCatalog = ({ sortBy, view }) => {
	const [closedCards, setClosedCards] = useLocalStorage('closedCards', [])
	const { currentPage, onPageChange, startIndex, endIndex } = usePagination()
	const { data, isLoading, isError } = useQuery(
		['catalogData'],
		() => CardsService.getData(),
		{
			select: data => data.filter(item => !closedCards.includes(item.timestamp))
		}
	)

	const filteredData = sortData(data, sortBy)

	const handleCloseCard = cardId => {
		setClosedCards(prevClosedCards => [...prevClosedCards, cardId])
	}
	const handleReset = () => {
		setClosedCards([])
	}

	return (
		<>
			<Button style={{ margin: '20px 20px 10px 20px' }} onClick={handleReset}>
				Сбросить
			</Button>
			{isLoading && <Loader size='large' />}
			{isError && <Error title='Error' />}
			{view === 'cards' ? (
				<CardlList
					data={filteredData}
					startIndex={startIndex}
					endIndex={endIndex}
					handleCloseCard={handleCloseCard}
				/>
			) : (
				<TreeView
					data={filteredData}
					startIndex={startIndex}
					endIndex={endIndex}
				/>
			)}

			<Pagination
				current={currentPage}
				total={filteredData.length}
				onChange={onPageChange}
				style={{ textAlign: 'center', marginTop: 20 }}
				showSizeChanger={false}
			/>
		</>
	)
}
export default ImgCatalog
