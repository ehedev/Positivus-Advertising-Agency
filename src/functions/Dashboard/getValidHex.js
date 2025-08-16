const getValidHex = (color) => {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = color;
    return ctx.fillStyle;
};
  
export default getValidHex;