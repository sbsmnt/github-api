import { Layout } from 'antd';

export const AppFooter = () => {
	const { Footer } = Layout;
	return (
		<Footer>
			<div style={{ textAlign: 'right' }}>
				<small>Tiago Eira {new Date().getFullYear()}</small>
			</div>
		</Footer>
	);
};
