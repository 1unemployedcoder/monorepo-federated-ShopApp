import type { Config } from 'jest'
import {pathsToModuleNameMapper} from "ts-jest";
const paths = {
    "@/*": ["src/*"]
};

export const JestConfig: Config = {
        transform: {},
        preset: 'ts-jest',
        testEnvironment: 'node',
        moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' } )
};
