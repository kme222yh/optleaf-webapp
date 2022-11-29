const { exit } = require('process');

module.exports = {
    prompt: ({ prompter, args }) => {
        return prompter
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is name ?',
                    initial: 'unknown'
                }
            ])
            .then((answers) => {
                let { name } = answers;
                const { join } = require('node:path');
                const glob = require('glob');

                // list up features
                // pattern: src/features/**/*
                const existsFeatures = [];
                glob.sync('src/**/features/', glob.GLOB_ONLYDIR).forEach(
                    (dir) => {
                        glob.sync(join(dir, '*'), glob.GLOB_ONLYDIR).forEach(
                            (dir) => {
                                if (dir.match('scss$')) return;
                                const feature = dir
                                    .replace('src/', '')
                                    .replaceAll('features/', '');
                                existsFeatures.push(feature);
                            }
                        );
                    }
                );

                if (existsFeatures.includes(name)) {
                    throw new Error(`${name} is already exists.`);
                }

                let path = 'src/';
                const features = name.split('/');
                for (const feature of features) {
                    path = join(path, 'features', feature);
                }

                name = features[features.length - 1];

                return { name, path };
            });
    }
};
