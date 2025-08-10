// task2_virtual_dom.js

// Function to create a virtual DOM representation
function createVirtualDOM(element) {
    return {
        tagName: element.tagName,
        attributes: getAttributes(element),
        children: Array.from(element.childNodes).map(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                return { textContent: child.textContent };
            } else {
                return createVirtualDOM(child);
            }
        })
    };
}

// Helper: get attributes as object
function getAttributes(element) {
    let attrs = {};
    for (let attr of element.attributes) {
        attrs[attr.name] = attr.value;
    }
    return attrs;
}

// Function to compare and update DOM
function updateDOM(realElement, oldVDOM, newVDOM) {
    // If text node changed
    if (newVDOM.textContent !== undefined && oldVDOM.textContent !== newVDOM.textContent) {
        realElement.textContent = newVDOM.textContent;
        return;
    }

    // Update attributes
    for (let key in newVDOM.attributes) {
        if (oldVDOM.attributes[key] !== newVDOM.attributes[key]) {
            realElement.setAttribute(key, newVDOM.attributes[key]);
        }
    }

    // Remove old attributes
    for (let key in oldVDOM.attributes) {
        if (!(key in newVDOM.attributes)) {
            realElement.removeAttribute(key);
        }
    }

    // Recursively update children
    newVDOM.children.forEach((newChild, i) => {
        updateDOM(realElement.childNodes[i], oldVDOM.children[i], newChild);
    });
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // Initial virtual DOM
    let oldVDOM = createVirtualDOM(root);

    // Simulate changes after 2 seconds
    setTimeout(() => {
        root.querySelector('h1').textContent = 'Hello Updated World!';
        root.querySelector('p').setAttribute('style', 'color:red');

        // New virtual DOM
        let newVDOM = createVirtualDOM(root);

        // Update only changed nodes
        updateDOM(root, oldVDOM, newVDOM);

        // Save newVDOM as oldVDOM for next updates
        oldVDOM = newVDOM;
    }, 2000);
});
s