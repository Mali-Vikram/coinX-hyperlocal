import { useState, useEffect } from "react"
import "../styles/Calender.css" // Ensure you add the additional CSS for neumorphic styling

const Calendar = () => {
	const [selectedDay, setSelectedDay] = useState(null)
	const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()) // Default to current month
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()) // Default to current year

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]

	// Function to handle day selection
	const handleDayClick = (day) => {
		setSelectedDay(day)
	}

	// Function to get the number of days in a month
	const getDaysInMonth = (month, year) => {
		return new Date(year, month + 1, 0).getDate() // Returns the last day of the month
	}

	// Calculate the first weekday of the selected month and year
	const getStartDayOfMonth = (month, year) => {
		return new Date(year, month, 1).getDay()
	}

	const daysInMonth = getDaysInMonth(selectedMonth, selectedYear)
	const startDay = getStartDayOfMonth(selectedMonth, selectedYear)

	const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
	const emptyCells = Array.from({ length: startDay }, () => null) // Empty cells for alignment

	return (
		<div className="neumorphic-bg rounded-2xl p-6 shadow-neumorphism transition-all duration-300 max-w-md mx-auto">
			<h3 className="text-xl font-semibold mb-4 text-gray-700 text-center neumorphic-text">
				Session Calendar
			</h3>

			{/* Month and Year Selection */}
			<div className="flex justify-center gap-4 mb-6 neumorphic-select">
				<select
					value={selectedMonth}
					onChange={(e) => setSelectedMonth(Number(e.target.value))}
					className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 transition-all duration-200 ease-in-out hover:shadow-neumorphic-selected">
					{months.map((month, index) => (
						<option key={index} value={index}>
							{month}
						</option>
					))}
				</select>

				<select
					value={selectedYear}
					onChange={(e) => setSelectedYear(Number(e.target.value))}
					className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 transition-all duration-200 ease-in-out hover:shadow-neumorphic-selected">
					{Array.from(
						{ length: 30 },
						(_, i) => new Date().getFullYear() - 15 + i
					).map((year) => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>

			{/* Weekday Labels */}
			<div className="grid grid-cols-7 gap-2 text-center text-gray-500 font-medium">
				<div>Sun</div>
				<div>Mon</div>
				<div>Tue</div>
				<div>Wed</div>
				<div>Thu</div>
				<div>Fri</div>
				<div>Sat</div>
			</div>

			{/* Calendar Grid */}
			<div className="grid grid-cols-7 gap-2 mt-2 text-center text-gray-700 font-medium neumorphic-day-grid">
				{emptyCells.map((_, index) => (
					<div key={`empty-${index}`} className="p-4"></div> // Empty cells for spacing
				))}
				{days.map((day) => (
					<div
						key={day}
						onClick={() => handleDayClick(day)}
						className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 ${
							selectedDay === day
								? "bg-blue-500 text-white shadow-neumorphic-selected scale-110"
								: "bg-gray-100 hover:bg-blue-300 shadow-neumorphism"
						}`}>
						{day}
					</div>
				))}
			</div>
		</div>
	)
}

export default Calendar
