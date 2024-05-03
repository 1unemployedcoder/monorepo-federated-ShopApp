import type {Config} from 'jest'

export const JestConfig: Config = {
    transform: {
        "^.+\\.scss$": ["jest-transform-css", { modules: true }]
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    }
};
