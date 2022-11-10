module.exports = {
    prompt: ({ prompter, args }) =>
        prompter
            .prompt([
                {
                    type: 'input',
                    name: 'feature',
                    message: 'What is feature which fc belongs to?',
                    initial: ''
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'Whta is components name?',
                    initial: 'Unknown'
                },
                {
                    type: 'confirm',
                    name: 'use_scoped_style',
                    message: 'Is style scoped?',
                    choices: ['Yes', 'No'],
                    initial: 'Yes'
                },
            ])
            .then((answers) => {
                const { feature, name, use_scoped_style } = answers;
                const { join } = require('node:path');

                const path = join(
                    'src/',
                    feature ? `features/${feature}` : '',
                    'components',
                    name
                );
                const style_file_name = `${name}.${use_scoped_style?'scoped.':''}scss`;
                return { ...answers, path, style_file_name };
            })
};
