export const sortData = (data = [], sortBy) => {
	switch (sortBy) {
		case 'date':
			return data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
		case 'name':
			return data.sort((a, b) =>
				a.image.split('/')[1].localeCompare(b.image.split('/')[1])
			)
		case 'size':
			return data.sort((a, b) => b.filesize - a.filesize)
		default:
			return data.sort((a, b) => a.category.localeCompare(b.category))
	}
}
