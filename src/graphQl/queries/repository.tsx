import { gql } from '@apollo/client';

export const GET_REACT_REPOS = gql`
	query {
		search(query: "react", type: REPOSITORY, first: 50) {
			edges {
				node {
					... on Repository {
						id
						name
						url
						forkCount
						stargazerCount
					}
				}
			}
		}
	}
`;
