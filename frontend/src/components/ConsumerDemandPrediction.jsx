import React from "react"

const ConsumerDemandPrediction = () => {
	return (
		<div className="bg-[#e0e5ec] rounded-xl p-6 shadow-neumorphic transition-all duration-200 ease-in-out hover:shadow-neumorphic-hover w-full max-w-sm mx-auto mt-8">
			<h2 className="text-xl font-semibold text-gray-600 mb-4 select-none">
				Consumer Demand Prediction
			</h2>

			<div className="space-y-4">
				<div className="flex justify-between items-center p-4 bg-[#e0e5ec] rounded-lg shadow-inner-neumorphic">
					<span className="text-gray-600 font-medium">Electronics</span>
					<span className="text-blue-600 font-semibold animate-rise">+15%</span>
				</div>

				<div className="flex justify-between items-center p-4 bg-[#e0e5ec] rounded-lg shadow-inner-neumorphic">
					<span className="text-gray-600 font-medium">Fashion</span>
					<span className="text-green-600 font-semibold animate-rise">+8%</span>
				</div>

				<div className="flex justify-between items-center p-4 bg-[#e0e5ec] rounded-lg shadow-inner-neumorphic">
					<span className="text-gray-600 font-medium">Home Appliances</span>
					<span className="text-red-600 font-semibold animate-rise">-5%</span>
				</div>

				<div className="flex justify-between items-center p-4 bg-[#e0e5ec] rounded-lg shadow-inner-neumorphic">
					<span className="text-gray-600 font-medium">Groceries</span>
					<span className="text-purple-600 font-semibold animate-rise">
						+12%
					</span>
				</div>
			</div>
		</div>
	)
}

export default ConsumerDemandPrediction
