const { mergeConfig } = require('vite');

module.exports = {
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
    async viteFinal(config) {
        // Merge custom configuration into the default config
        // vite.config.tsの読み込み方がわからんので同じ内容を直書き
        return mergeConfig(config, {
            resolve: {
                alias: [{ find: '@', replacement: '/src' }]
            },
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: `
                            @import "@/scss/prepends.scss";
                            @import "/reset.css";
                        `   // storybookの時はcomponent自体にreset.cssを差し込む
                    }
                }
            }
        });
    }
};
