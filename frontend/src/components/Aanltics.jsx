import React from "react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = () => {
	const data = {
		labels: ["Transactions", "Payouts", "Sales", "Reports"],
		datasets: [
			{
				data: [410, 142, 340, 590],
				backgroundColor: [
					"#4E79A7", // Blue for Transactions
					"#F28E2C", // Orange for Payouts
					"#E15759", // Red for Sales
					"#76B7B2", // Teal for Reports
				],
				hoverBackgroundColor: [
					"#4E79A7AA",
					"#F28E2CAA",
					"#E15759AA",
					"#76B7B2AA",
				],
				borderWidth: 0,
			},
		],
	}

	const options = {
		cutout: "70%", // Creates the hole in the center
		plugins: {
			legend: {
				display: false, // Hide default legend
			},
			tooltip: {
				enabled: true,
			},
		},
		animation: {
			animateScale: true, // Animate scaling
			animateRotate: true, // Animate rotation
		},
	}

	return (
		<div
			style={{
				width: "300px",
				padding: "20px",
				backgroundColor: "#f1f5f9",
				borderRadius: "20px",
				boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
				textAlign: "center",
			}}>
			<h4 style={{ marginBottom: "10px" }}>Pie Chart</h4>
			<div style={{ position: "relative", width: "200px", margin: "0 auto" }}>
				<Doughnut data={data} options={options} />
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						fontSize: "20px",
						color: "#333",
						fontWeight: "bold",
					}}>
					1.05 <br />
					<span style={{ fontSize: "12px", color: "#666" }}>average range</span>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "15px",
					marginTop: "10px",
				}}>
				{["Transactions", "Payouts", "Sales", "Reports"].map((label, index) => (
					<div key={index} style={{ textAlign: "center", fontSize: "12px" }}>
						<div
							style={{
								width: "10px",
								height: "10px",
								backgroundColor: data.datasets[0].backgroundColor[index],
								display: "inline-block",
								borderRadius: "50%",
								marginRight: "5px",
							}}></div>
						{label}
					</div>
				))}
			</div>
		</div>
	)
}

export default PieChart
