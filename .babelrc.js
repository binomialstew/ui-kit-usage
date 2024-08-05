module.exports = {
	plugins: [
		'@emotion',
	],
	presets: [
		[
			'next/babel',
			{
				'preset-env': {
					bugfixes: true,
				},
			},
		],
	]
};
