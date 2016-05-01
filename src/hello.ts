const hello = () => {
    const element: HTMLHeadingElement = document.createElement('h1');
    element.innerHTML = 'Hello World';
    return element;
};

export default hello;
