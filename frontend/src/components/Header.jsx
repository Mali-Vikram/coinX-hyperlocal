import "../styles/Header.css" // Ensure you include additional CSS for neumorphic styling

const Header = () => {
	return (
		<header className="bg-cream-100 py-10 text-center shadow-neumorphism rounded-3xl mx-auto max-w-4xl mt-8 p-8 transition-all duration-300">
			<h1 className="text-5xl font-extrabold text-purple-600 neumorphic-text">
				Product Demand Forecasting
			</h1>
			<p className="text-lg mt-3 text-gray-700 neumorphic-text">
				Forecast future product demand with accuracy and ease
			</p>

			{/* Features Section */}
			<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700">
				<div className="bg-white p-6 rounded-2xl shadow-neumorphism transition-all duration-300 transform hover:scale-105 hover:shadow-neumorphic-selected">
					<h2 className="text-xl font-semibold text-purple-500 neumorphic-text">
						Real-Time Insights
					</h2>
					<p className="text-sm mt-2 neumorphic-text">
						Get demand predictions as soon as data is available.
					</p>
				</div>
				<div className="bg-white p-6 rounded-2xl shadow-neumorphism transition-all duration-300 transform hover:scale-105 hover:shadow-neumorphic-selected">
					<h2 className="text-xl font-semibold text-purple-500 neumorphic-text">
						Accurate Predictions
					</h2>
					<p className="text-sm mt-2 neumorphic-text">
						Leverage AI-driven models for precise forecasting.
					</p>
				</div>
				<div className="bg-white p-6 rounded-2xl shadow-neumorphism transition-all duration-300 transform hover:scale-105 hover:shadow-neumorphic-selected">
					<h2 className="text-xl font-semibold text-purple-500 neumorphic-text">
						Scalable Solutions
					</h2>
					<p className="text-sm mt-2 neumorphic-text">
						Designed to handle data at any scale, big or small.
					</p>
				</div>
			</div>

			{/* Call-to-Action Button */}
			<div className="mt-10">
				<a
					href="#"
					className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-full shadow-neumorphism transition-all duration-300 transform hover:bg-purple-600 hover:shadow-neumorphic-selected">
					Learn More
				</a>
			</div>
		</header>
	)
}

export default Header
