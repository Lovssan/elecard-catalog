import { useState } from 'react'

export const usePagination = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const PAGE_SIZE = 12

	const onPageChange = page => {
		setCurrentPage(page)
	}

	const startIndex = (currentPage - 1) * PAGE_SIZE
	const endIndex = startIndex + PAGE_SIZE

	return {
		currentPage,
		setCurrentPage,
		onPageChange,
		startIndex,
		endIndex
	}
}
