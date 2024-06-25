import { Card, Col, Row, Select, Typography } from "antd";
import moment from "moment";
import React, { useState } from "react";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const demoImage =
	"https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
	const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
	const { data } = useGetCryptosQuery(100);
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory,
		count: simplified ? 6 : 12,
	});

	if (!cryptoNews?.data) return <Loader />;

	return (
		<Row gutter={[24, 24]}>
			{!simplified && (
				<Col span={24}>
					<Select
						showSearch
						className="select-news"
						placeholder="Select a Crypto"
						optionFilterProp="children"
						onChange={value => setNewsCategory(value)}
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						<Option value="Cryptocurency">Cryptocurrency</Option>
						{data?.data?.coins?.map(currency => (
							<Option value={currency.name}>{currency.name}</Option>
						))}
					</Select>
				</Col>
			)}
			{cryptoNews.data.map((news, i) => (
				<Col xs={24} sm={12} lg={8} key={i}>
					<Card
						hoverable
						className="news-card"
						cover={<img src={news?.thumbnail || demoImage} alt="" />}
					>
						<a href={news.url} target="_blank" rel="noreferrer">
							<div className="news-image-container">
								<Title className="news-title" level={4}>
									{news.title.length > 60
										? `${news.title.substring(0, 60)}...`
										: news.title}
								</Title>
								{/* <img
									src={news?.thumbnail || demoImage}
									alt=""
									width={100}
									height={90}
								/> */}
							</div>
							<p>
								{news.description.length > 100
									? `${news.description.substring(0, 100)}...`
									: news.description}
							</p>
							<div className="provider-container">
								{/* <div>
									<Avatar
										src={
											news.provider[0]?.image?.thumbnail?.contentUrl ||
											demoImage
										}
										alt=""
									/>
									<Text className="provider-name">
										{news.provider[0]?.name}
									</Text>
								</div> */}
								<Text>{moment(news.createdAt).startOf("ss").fromNow()}</Text>
							</div>
						</a>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default News;
