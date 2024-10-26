import "../styles/Setting.css"

const Settings = () => {
	return (
		<div className="neumorphic-bg rounded-lg p-6 shadow-neumorphism">
			<h3 className="text-xl font-semibold mb-6 neumorphic-text">Settings</h3>
			<div className="space-y-4">
				<button className="neumorphic-button w-full">Account Settings</button>
				<button className="neumorphic-button w-full">
					Notification Preferences
				</button>
				<button className="neumorphic-button w-full">Data Privacy</button>
				<button className="neumorphic-button w-full">Reset to Defaults</button>
			</div>
		</div>
	)
}

export default Settings
