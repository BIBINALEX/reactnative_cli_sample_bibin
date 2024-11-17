
const { getDefaultConfig } = require('metro-config');
module.exports = (async () => {
    const defaultConfig = await getDefaultConfig();
    return {
        ...defaultConfig,
        watchFolders: [], // Add any specific folders you want to watch
        transformer: {
            ...defaultConfig.transformer,
        },
        resolver: {
            sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'],
        },
        server: {
            enhanceMiddleware: (middleware) => {
                return (req, res, next) => {
                    res.setHeader('Connection', 'keep-alive'); // Fix for file watcher issues
                    middleware(req, res, next);
                };
            },
        },
    };
})();