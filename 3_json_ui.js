// task3_json_ui.js

// Sample JSON data
let jsonData = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" }
];

// Function to render UI based on jsonData
function renderUI() {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear old content

    jsonData.forEach(item => {
        const div = document.createElement('div');
        div.setAttribute('data-id', item.id);
        div.textContent = item.text;

        // Add remove button
        const btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.addEventListener('click', () => removeItem(item.id));

        div.appendChild(btn);
        container.appendChild(div);
    });
}

// Create new element
function addItem(text) {
    const newId = jsonData.length ? Math.max(...jsonData.map(i => i.id)) + 1 : 1;
    jsonData.push({ id: newId, text });
    renderUI();
}

// Update element text
function updateItem(id, newText) {
    const item = jsonData.find(i => i.id === id);
    if (item) {
        item.text = newText;
        renderUI();
    }
}

// Remove element
function removeItem(id) {
    jsonData = jsonData.filter(i => i.id !== id);
    renderUI();
}

// Example usage after DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderUI();

    // Add new item on button click
    document.getElementById('add-btn').addEventListener('click', () => {
        const text = document.getElementById('input-text').value.trim();
        if (text) addItem(text);
    });

    // Update first item after 3 seconds (demo)
    setTimeout(() => {
        updateItem(1, "Updated Item 1");
    }, 3000);
});
