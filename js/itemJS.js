document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { name: 'pen', image: '/images/pen.jpeg' },
        { name: 'pencil', image: '/images/pencil.jpeg' },
        { name: 'eraser', image: '/images/eraser.jpeg' },
        // ... add more items as needed
    ];

    const itemsContainer = document.getElementById('items-container');

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const itemName = document.createElement('p');
        itemName.textContent = item.name;

        itemDiv.appendChild(img);
        itemDiv.appendChild(itemName);

        itemsContainer.appendChild(itemDiv);
    });
});
