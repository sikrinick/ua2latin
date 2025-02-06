module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^src\/.+\\.test\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
