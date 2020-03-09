module.exports = {
    rootDir: '../',
    testRegex: '../src/.*spec\\.js$',
    // setupFiles: ['<rootDir>/src/test.js'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
    ],
    moduleNameMapper: {
        '~(.*)$': '<rootDir>/src/$1',
        '\\.(jpg|png|eot|otf|svg|ttf|woff|woff2|svg)$': '<rootDir>/config/jest.mock.js',
        '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules',
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/config',
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/config',
    ],
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    // The directory where Jest should output its coverage files
    coverageDirectory: 'test_out/unit',
    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ['lcov'],
};
