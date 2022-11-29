module.exports = {
    toUpper: (str) => {
        let result = [];
        const toUpper = str => `${str[0].toUpperCase()}${str.slice(1)}`;
        for (const s of str.split('/')) {
            if (s === '') break;
            result = result+=toUpper(s);
        }
        return result;
    },
    createPath: (featureStr, type, name) => {
        const { join } = require('node:path');
        let path = 'src/';
        const features = featureStr.split('/');
        for (const feature of features) {
            path = join(path, 'features', feature);
        }
        path = join(path, `${type}s`, name);
        return path;
    },
};
