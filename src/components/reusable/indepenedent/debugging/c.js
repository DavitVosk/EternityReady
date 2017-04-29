const color_border_styles = (borderColor = 'red', borderWidth = 1) => {
    return { borderColor, borderWidth, };
};

export const c = color_border_styles();

export const green = color_border_styles('green');
export const yellow = color_border_styles('yellow');
export const blue = color_border_styles('blue');

export const colorAll = (styles) => {
    const coloredStyles = {};

    Object.keys(styles).forEach((key) => {
        coloredStyles[key] = { ...styles[key], ...c };
    });

    return coloredStyles;
}

export default color_border_styles;
