import { Table } from 'antd';

const columns = [
	{
		title: 'Name 💻',
		dataIndex: 'name',
		key: 'name',
		width: '50%',
		render: (name: string, record: Repo) => (
			<a href={record.url} target="_blank" rel="noreferrer">
				{name}
			</a>
		),
	},
	{
		title: 'Stars ⭐️',
		dataIndex: 'stars',
		key: 'stars',
		width: '25%',
	},
	{
		title: 'Forks 🍴',
		dataIndex: 'forks',
		key: 'forks',
		width: '25%',
	},
];

interface Repo {
	id: string;
	name: string;
	url: string;
	stars: number;
	forks: number;
}

interface Props {
	rows: Repo[];
}

export const MainTable = ({ rows }: Props) => {
	const pagConfig: object = { position: ['bottomCenter'] };

	return (
		<Table
			rowKey="id"
			columns={columns}
			pagination={pagConfig}
			dataSource={rows}
		/>
	);
};
