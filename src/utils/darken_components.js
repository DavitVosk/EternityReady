import darkenComponent from '../hoc/darken_component';

export default (components) => {
    Object.keys(components).forEach((componentName) => {
        components[componentName] = darkenComponent(components[componentName]);
    });

    return components;
};
