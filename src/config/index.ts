import Constants from "expo-constants";
import * as Updates from "expo-updates";

// Types
import { Config } from "../types";

const getConfigEnvironment = (): Config => {
    const releaseChannel = Constants.manifest?.extra?.releaseChannel ?? Updates.releaseChannel;
    let config: Config = {
        server: null,
        apiToken: null,
    };

    if (releaseChannel === "default") {
        config = {
            server: Constants.manifest?.extra?.server.local,
            apiToken: Constants.manifest?.extra?.secret.local,
        };
    } else if (releaseChannel.indexOf("production") !== -1) {
        config = {
            server: Constants.manifest?.extra?.server.production,
            apiToken: Constants.manifest?.extra?.secret.production,
        };
    }

    return config;
};

export default getConfigEnvironment;
