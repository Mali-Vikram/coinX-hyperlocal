import React, { useState } from "react"

const SessionSelector = () => {
	const [session, setSession] = useState("")

	return (
		<div className="bg-white rounded-lg p-4 shadow-lg">
			<label className="text-lg font-semibold mb-2">Select Session Name</label>
			<input
				type="text"
				value={session}
				onChange={(e) => setSession(e.target.value)}
				placeholder="Enter Session Name"
				className="mt-2 p-2 border border-gray-300 rounded w-full"
			/>
		</div>
	)
}

export default SessionSelector
