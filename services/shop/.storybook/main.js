import {storyConfig} from "@packages/build-config";
import path from "path";

export default {
    webpackFinal: async (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src');

        return config;
    },
    ...storyConfig
}
