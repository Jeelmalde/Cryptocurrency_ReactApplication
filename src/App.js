import { Layout, Space, Typography } from "antd";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import {
	CryptoDetails,
	Cryptocurrencies,
	Exchanges,
	Navbar,
	News,
} from "./components";

import Homepage from "./components/Homepage";

const App = () => (
	<div className="app">
		<div className="navbar">
			<Navbar />
		</div>
		<div className="main">
			<Layout>
				<div className="routes">
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/exchanges" element={<Exchanges />} />
						<Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

						<Route path="/crypto/:coinId" element={<CryptoDetails />} />
						<Route path="/news" element={<News />} />
					</Routes>
				</div>
			</Layout>
			<div className="footer">
				<Typography.Title
					level={5}
					style={{ color: "white", textAlign: "center" }}
				>
					Copyright © 2021
					<Link to="/">Cryptoverse Inc.</Link> <br />
					All Rights Reserved.
				</Typography.Title>
				<Space>
					<Link to="/">Home</Link>
					<Link to="/cryptocurrencies">Cryptocurrencies</Link>
					<Link to="/news">News</Link>
				</Space>
			</div>
		</div>
	</div>
);

export default App;
