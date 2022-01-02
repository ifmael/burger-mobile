import { ExpoConfig } from "@expo/config-types";
import "dotenv/config";

// const config: ExpoConfig = {
//   name: "my-app",
// };

// export default config;
export default ({ config }: { config: ExpoConfig }) => {
    return {
        ...config,
        // hooks: {
        //   postPublish: [
        //     {
        //       file: "sentry-expo/upload-sourcemaps",
        //       config: {
        //         organization: process.env.SENTRY_ORG,
        //         project: process.env.SENTRY_PROJECT,
        //         authToken: process.env.SENTRY_AUTH_TOKEN,
        //         setCommits: true,
        //       },
        //     },
        //   ],
        // },
        // All values in extra will be passed to your app.

        extra: {
            releaseChannel: process.env.RELEASE_CHANNEL,
            server: {
                local: process.env.EXPO_LOCAL_SERVER,
                production: process.env.EXPO_PRODUCTION_SERVER,
            },
            secret: {
                local: process.env.EXPO_API_TOKEN,
                production: process.env.EXPO_API_TOKEN,
            },
            // mapsToken: process.env.GOOGLE_MAPS_KEY,
            // placesToken: process.env.PLACES_API,
        },
        plugins: ["expo-updates"],
    };
};
