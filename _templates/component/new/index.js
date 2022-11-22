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
                },
                {
                    type: 'confirm',
                    name: 'isScoped',
                    message: 'Is the style scoped ?',
                    choices: ['Yes', 'No'],
                    initial: 'Yes'
                }
            ])
            .then((answers) => {
                const { feature, isScoped, type } = answers;
                const {
                    createUniqueName,
                    createPath,
                    genStyleFileName
                } = require('./lib');

                const name = isScoped
                    ? answers.name
                    : createUniqueName(feature, answers.name, type);
                const path = createPath(feature, type, name);
                const style_file_name = genStyleFileName(isScoped, name);
                answers.name = name;
                return { ...answers, path, style_file_name };
            })
};
