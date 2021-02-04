import { Layout } from 'antd';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphQl/client';
import { RepoList } from './RepoList/RepoList';
import { AppHeader } from './shared/AppHeader/AppHeader';
import { AppFooter } from './shared/AppFooter/AppFooter';

const App = () => {
	const { Content } = Layout;
	return (
		<ApolloProvider client={client}>
			<Layout data-testid="app-layout">
				<AppHeader />
				<Content>
					<RepoList />
				</Content>
				<AppFooter />
			</Layout>
		</ApolloProvider>
	);
};

export default App;
