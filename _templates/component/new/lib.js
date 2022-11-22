module.exports = {
    createUniqueName: (featureStr, name, prefix) => {
        const { join } = require('node:path');
        let uniqueName = '';
        const features = featureStr.split('/');
        for (const feature of features) {
            uniqueName = `${uniqueName}${feature[0].toUpperCase()}${feature.slice(
                1
            )}`;
        }
        prefix = `${prefix[0].toUpperCase()}${prefix.slice(1)}`;
        uniqueName = `${uniqueName}${name}${prefix}`;
        return uniqueName;
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
    genStyleFileName: (isScoped, name) => {
        return `${name}.${isScoped ? 'scoped.' : ''}scss`;
    }
};
