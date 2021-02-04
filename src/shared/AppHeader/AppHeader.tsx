import { Layout } from 'antd';

export const AppHeader = () => {
	const { Header } = Layout;
	return (
		<Header>
			<h1 style={{ color: '#fff' }}>React Repos</h1>
		</Header>
	);
};
