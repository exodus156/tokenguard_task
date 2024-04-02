export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
	},
	moduleNameMapper: {},
	setupFilesAfterEnv: ['./setupTests.ts'],
	moduleFileExtensions: [
		'tsx',
		'ts',
		'web.js',
		'js',
		'web.ts',
		'web.tsx',
		'json',
		'web.jsx',
		'jsx',
		'node',
	],
	modulePaths: ['<rootDir>/src'],
	testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
}
