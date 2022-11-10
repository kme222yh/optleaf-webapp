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
                    message: "What is component's name ?",
                    initial: 'Unknown'
                },
                {
                    type: 'confirm',
                    name: 'use_scoped_style',
                    message: 'Is the style scoped ?',
                    choices: ['Yes', 'No'],
                    initial: 'Yes'
                }
            ])
            .then((answers) => {
                const { feature, name, use_scoped_style } = answers;
                const { join } = require('node:path');

                const path = join(
                    'src/',
                    feature ? `features/${feature}` : '',
                    'organisms',
                    name
                );
                const style_file_name = `${name}.${
                    use_scoped_style ? 'scoped.' : ''
                }scss`;
                return { ...answers, path, style_file_name };
            })
};
