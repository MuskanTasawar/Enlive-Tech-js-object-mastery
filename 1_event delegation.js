// task1_event_delegation.js

// Event delegation: attach event listener to a parent element
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('button-container');
    
    // Event delegation handler
    container.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            alert(`You clicked on: ${event.target.textContent}`);
        }
    });

    // Dynamically add buttons after page load
    document.getElementById('add-button').addEventListener('click', () => {
        const newButton = document.createElement('button');
        newButton.textContent = `Button ${container.children.length + 1}`;
        container.appendChild(newButton);
    });
});
