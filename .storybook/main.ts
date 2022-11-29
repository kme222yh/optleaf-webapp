const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');

export default {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite'
    },
    features: {
        storyStoreV7: true
    },
    async viteFinal(config: any) {
        // Merge custom configuration into the default config
        const { config: userConfig } = await loadConfigFromFile(
            path.resolve(__dirname, '../vite.config.ts')
        );
        userConfig.plugins = userConfig.plugins.filter((val) => {
            let name = '';
            if (Array.isArray(val)) name = val[0].name;
            else name = val.name;
            return !name.match('vite:');
        });
        return mergeConfig(config, userConfig);
    }
};
