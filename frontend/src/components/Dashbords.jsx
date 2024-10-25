import Header from "./Header"
import SessionSelector from "./SessionSelectors"
import Calendar from "./Calender"
import Analytics from "./Aanltics"
import Settings from "./Setting"
import MonthSelector from "./MonthSelector"

const Dashboard = () => {
	return (
		<div className="bg-gray-100 min-h-screen p-8 flex flex-col space-y-8">
			<Header />
			<div className="grid grid-cols-3 gap-8">
				<SessionSelector />
				<MonthSelector />
				<Settings />
			</div>
			<div className="grid grid-cols-2 gap-8">
				<Calendar />
				<Analytics />
			</div>
		</div>
	)
}

export default Dashboard
