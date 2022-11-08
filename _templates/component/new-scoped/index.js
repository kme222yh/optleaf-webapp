module.exports = {
    prompt: ({ prompter, args }) =>
        prompter
            .prompt([
                {
                    type: 'input',
                    name: 'feature',
                    message: 'What is feature which fc belongs ?',
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
                    name: 'have_props',
                    message: 'Is it have props?',
                    choices: ['Yes', 'No'],
                    initial: 'Yes'
                }
            ])
            .then((answers) => {
                const { feature, name, have_props } = answers;
                const { join } = require('node:path');

                const timestamp = Date.now();

                const path = join(
                    'src/',
                    feature ? `features/${feature}` : '',
                    'components',
                    name
                );
                const type_annotate = have_props ? `FC<${name}Props>` : 'FC';
                const props = have_props ? '(props)' : '()';
                return { ...answers, path, type_annotate, props, timestamp };
            })
};
