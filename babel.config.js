module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo", "@babel/preset-react"],
		plugins: [
			// Required for expo-router
			
			'react-native-reanimated/plugin'
		]
	};
};