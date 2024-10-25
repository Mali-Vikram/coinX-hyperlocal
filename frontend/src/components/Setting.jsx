import React from "react"

const Settings = () => {
	return (
		<div className="bg-white rounded-lg p-4 shadow-lg">
			<h3 className="text-lg font-semibold mb-4">Settings</h3>
			<div className="space-y-2">
				<button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
					Settings Option 1
				</button>
				<button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
					Settings Option 2
				</button>
			</div>
		</div>
	)
}

export default Settings
