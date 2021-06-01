import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./card.module.css";
import "../utils/fonts/fontStyle.css";

function Card() {
	let [data, setData] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:8000/").then((response) => {
			let data = response.data;
			let ar = [];
			for (let x in data) {
				ar.push(x);
			}
			// console.log(ar);
			let firstTenData = [];
			for (let i = 0; i < 10; i++) {
				firstTenData.push(data[ar[i]]);
			}
			console.log(firstTenData);
			setData(firstTenData);
		});
	}, []);
	const formingTable = data.map((obj, idx) => {
		return (
			<tr key={idx} className={styles.tableRow}>
				<td className={styles.tableColumn}>{idx + 1}</td>
				<td className={styles.tableColumn}>{obj.name}</td>
				<td className={styles.tableColumn}>{obj.last}</td>
				<td className={styles.tableColumn}>{`${new Intl.NumberFormat("en-IN", {
					style: "currency",
					currency: "INR",
					minimumFractionDigits: 0,
				}).format(obj.buy)}/ ${new Intl.NumberFormat("en-IN", {
					style: "currency",
					currency: "INR",
					minimumFractionDigits: 0,
				}).format(obj.sell)}`}</td>
				<td className={styles.tableColumn}>{obj.volume}</td>
				<td className={styles.tableColumn}>{obj.base_unit}</td>
			</tr>
		);
	});
	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr className={styles.tableRowHeading}>
						<th className={styles.tableColumnHeading}>#</th>
						<th className={styles.tableColumnHeading}>Name</th>
						<th className={styles.tableColumnHeading}>Last</th>
						<th className={styles.tableColumnHeading}>Buy/Sell Price</th>
						<th className={styles.tableColumnHeading}>Volume</th>
						<th className={styles.tableColumnHeading}>base_unit</th>
					</tr>
				</thead>
				<tbody>{formingTable}</tbody>
			</table>
		</div>
	);
}

export default Card;
