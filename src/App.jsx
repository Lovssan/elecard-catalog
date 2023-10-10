import { FloatButton, Layout } from 'antd'
import { useState } from 'react'

import useLocalStorage from './hooks/useLocalStorage'

import Footer from './components/footer/Footer'
import ImgCatalog from './components/img-catalog/ImgCatalog'
import ViewCatalog from './components/sort/ViewData'

const { Header, Content } = Layout

const App = () => {
	const [sortBy, setSortBy] = useState('category')
	const [view, setView] = useLocalStorage('view', 'cards')
	return (
		<div className='app-container'>
			<Header className='app-header'>
				<h1>Cards App</h1>
			</Header>
			<Content style={{ padding: '70px 20px 0' }}>
				<ViewCatalog
					sortBy={sortBy}
					view={view}
					setSortBy={setSortBy}
					setView={setView}
				/>

				<ImgCatalog sortBy={sortBy} view={view} />

				<FloatButton.BackTop type='primary' />
			</Content>

			<Footer />
		</div>
	)
}

export default App
