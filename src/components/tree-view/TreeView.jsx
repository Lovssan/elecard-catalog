import { Modal, Tree } from 'antd'
import { useState } from 'react'

import { toDate, toSize } from '../../utils/textFormat.utils'
import TreeTitle from './TreeTitle'

export const ImageTree = ({ data, startIndex, endIndex }) => {
	const [visibleModal, setVisibleModal] = useState(false)
	const [currentImage, setCurrentImage] = useState(null)

	const handleThumbnailClick = img => {
		setCurrentImage(img)
		setVisibleModal(true)
	}

	const treeData = data.slice(startIndex, endIndex).map((item, index) => ({
		title: (
			<TreeTitle item={item} handleThumbnailClick={handleThumbnailClick} />
		),
		key: index,

		children: [
			{
				title: 'Размер файла: ' + toSize(item.filesize),
				key: index + '-1'
			},
			{
				title: 'Метка времени: ' + toDate(item.timestamp),
				key: index + '-2'
			},
			{ title: 'Категория: ' + item.category, key: index + '-3' }
		]
	}))

	const handleModalCancel = () => setVisibleModal(false)

	return (
		<>
			<Tree treeData={treeData} showLine defaultExpandAll />
			<Modal
				open={visibleModal}
				onCancel={handleModalCancel}
				footer={null}
				width={'80%'}
			>
				<img alt='animal' src={currentImage} style={{ width: '100%' }} />
			</Modal>
		</>
	)
}

export default ImageTree
