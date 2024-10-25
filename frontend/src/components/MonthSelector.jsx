import React from "react"

const MonthSelector = () => {
	return (
		<div className="bg-white rounded-lg p-4 shadow-lg">
			<label className="text-lg font-semibold mb-2">Select Month</label>
			<select className="mt-2 p-2 border border-gray-300 rounded w-full">
				<option>January</option>
				<option>February</option>
				<option>March</option>
			</select>
		</div>
	)
}

export default MonthSelector
