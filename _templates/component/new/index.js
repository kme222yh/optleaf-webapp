module.exports = {
    prompt: ({ prompter, args }) => {
        const glob = require('glob');
        const path = require('path');

        // list up features
        // pattern: src/features/**/*
        const features = [];
        glob.sync('src/**/features/', glob.GLOB_ONLYDIR).forEach((dir) => {
            glob.sync(path.join(dir, '*'), glob.GLOB_ONLYDIR).forEach((dir) => {
                if (dir.match('scss$')) return;
                const feature = dir
                    .replace('src/', '')
                    .replaceAll('features/', '');
                features.push(feature);
            });
        });

        return prompter
            .prompt([
                {
                    type: 'select',
                    name: 'feature',
                    message: 'What is feature ?',
                    choices: features
                },
                {
                    type: 'select',
                    name: 'type',
                    message: 'What is type ?',
                    choices: ['atom', 'molecule', 'organism', 'view', 'layout']
                },
                {
                    type: 'input',
                    name: 'name',
                    message: "What is component's name ?",
                    initial: 'Unknown'
                }
            ])
            .then((answers) => {
                let { feature, name, type } = answers;
                const { toUpper, createPath } = require('./lib');

                let scss = `${name}.scoped.scss`;

                switch (type) {
                    case 'view':
                    case 'layout':
                        name = toUpper(feature) + toUpper(name) + toUpper(type);
                        scss = `${name}.scss`;
                    default:
                        break;
                }

                const path = createPath(feature, type, name)

                return { feature, name, path, scss, type };
            });
    }
};
