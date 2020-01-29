import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import './App.css';

const API = 'https://acme-users-api-rev.herokuapp.com/';

const Users = () => {
	return <hr />;
};

function App() {
	const getHash = () => {
		return window.location.hash.slice(1);
	};
	const [ params, setParams ] = useState(qs.parse(getHash()));
	const [ users, setUsers ] = useState([]);

	useEffect(() => {
		window.addEventListener('hashchange', () => {
			setParams(qs.parse(getHash()));
		});
		setParams(qs.parse(getHash()));
	}, []);

	const view = params.view;
	return (
		<div className="App">
			<nav>
				<a href="#" className={!view ? 'selected' : ''}>
					Home
				</a>
				<a href="#view=users" className={view === 'users' ? 'selected' : ''}>
					Users
				</a>
			</nav>
			{view === 'users' && <Users users={users} />}
		</div>
	);
}

export default App;
