import { Result } from 'antd'

const Error = ({ status = '', title = '', subTitle = '' }) => {
	return <Result status={status} title={title} subTitle={subTitle} />
}
export default Error
