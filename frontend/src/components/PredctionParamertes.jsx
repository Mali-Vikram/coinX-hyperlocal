import { useState } from "react"
import "../styles/ParameterPredection.css"

const PredictionParameters = () => {
	const [seasonality, setSeasonality] = useState(false)
	const [includeHolidays, setIncludeHolidays] = useState(false)
	const [promoEffect, setPromoEffect] = useState(false)

	return (
		<div className="neumorphic-bg rounded-lg shadow-neumorphism p-6 max-w-md mx-auto">
			<label className="text-xl font-semibold mb-4 block neumorphic-text text-center">
				Prediction Parameters
			</label>
			<div className="flex flex-col gap-4 mt-4">
				<div className="flex items-center gap-3 neumorphic-item p-3">
					<input
						type="checkbox"
						checked={seasonality}
						onChange={(e) => setSeasonality(e.target.checked)}
						className="neumorphic-checkbox"
					/>
					<label className="neumorphic-text">Include Seasonality</label>
				</div>
				<div className="flex items-center gap-3 neumorphic-item p-3">
					<input
						type="checkbox"
						checked={includeHolidays}
						onChange={(e) => setIncludeHolidays(e.target.checked)}
						className="neumorphic-checkbox"
					/>
					<label className="neumorphic-text">Include Holidays</label>
				</div>
				<div className="flex items-center gap-3 neumorphic-item p-3">
					<input
						type="checkbox"
						checked={promoEffect}
						onChange={(e) => setPromoEffect(e.target.checked)}
						className="neumorphic-checkbox"
					/>
					<label className="neumorphic-text">Include Promotional Effects</label>
				</div>
			</div>
		</div>
	)
}

export default PredictionParameters
