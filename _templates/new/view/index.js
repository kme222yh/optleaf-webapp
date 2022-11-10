module.exports = {
    prompt: ({ prompter, args }) =>
        prompter
            .prompt([
                {
                    type: 'input',
                    name: 'feature',
                    message: 'What is feature ?',
                    initial: ''
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is view\'s name ?',
                    initial: 'Unknown'
                },
            ])
            .then((answers) => {
                const { feature } = answers;
                const { join } = require('node:path');
                const name = `${feature[0].toUpperCase()}${feature.slice(1)}${answers.name}View`;
                const path = join(
                    'src/',
                    feature ? `features/${feature}` : '',
                    'views',
                    name
                );
                answers.name = name;
                const style_file_name = `${name}.scss`;
                return { ...answers, path, style_file_name };
            })
};
