import { Row, Col } from 'antd';
import { useQuery } from '@apollo/client';
import { GET_REACT_REPOS } from '../graphQl/queries/repository';
import { MainTable } from '../MainTable/MainTable';
import { Loading } from '../shared/Loading/Loading';
import { DefaultError } from '../shared/DefaultError/DefaultError';

interface Repository {
	id: string;
	name: string;
	stargazerCount: number;
	forkCount: number;
	url: string;
}

interface SearchResultItemEdge {
	node: Repository;
}

export const RepoList = () => {
	const { loading, error, data } = useQuery(GET_REACT_REPOS);

	const repos =
		data &&
		data.search.edges.map((repo: SearchResultItemEdge) => {
			return {
				id: repo.node.id,
				name: repo.node.name,
				url: repo.node.url,
				stars: repo.node.stargazerCount,
				forks: repo.node.forkCount,
			};
		});	

	return (
		<Row style={{ padding: '1rem 2rem' }}>
			<Col flex={1}>
				<h2>React Repositories List</h2>
				{error && <DefaultError />}
				{loading && <Loading />}
				{repos && <MainTable rows={repos} />}
			</Col>
		</Row>
	);
};
