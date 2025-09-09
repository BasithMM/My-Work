document.addEventListener('DOMContentLoaded', function() {
    const pinsContainer = document.getElementById('pinsContainer');
    const pinData = [
        {
            id: 1,
            imageUrl: './image/ILM KHURASAN-1.png',
            title: 'Poster'
        },
        {
            id: 2,
            imageUrl: './image/basith.jpeg',
            title: 'Design'
        },
        {
            id: 3,
            imageUrl: './image/epoch zero.png',
            title: 'My site Logo'
        },
        {
            id: 4,
            imageUrl: './image/jazora (1).jpg',
            title: 'business Logo'
        },
        {
            id: 5,
            imageUrl: './image/logo for copy.jpg',
            title: 'Logo'
        },
        {
            id: 6,
            imageUrl: './image/Paper Logo.jpg ',
            title: 'Logo'
        },
        {
            id: 7,
            imageUrl: './image/GreenGlass.png',
            title: 'mockup Logo'
        },
        {
            id: 8,
            imageUrl: './image/tea.jpg',
            title: 'poster'
        },
        {
            id: 9,
            imageUrl: './image/child.jpg',
            title: 'poster'
        },
        {
            id: 10,
            imageUrl: './image/father.jpg',
            title: 'poster'
        },
        {
            id: 11,
            imageUrl: './image/picnic.jpg',
            title: 'poster'
        },{
            id: 12,
            imageUrl: './image/speech.jpg',
            title: 'poster'
        },
        

    ];

    // Generate pins
    function generatePins() {
        pinsContainer.innerHTML = '';
        pinData.forEach(pin => {
            const pinElement = document.createElement('div');
            pinElement.className = 'pin';
            pinElement.innerHTML = `
                <img src="${pin.imageUrl}" alt="${pin.title}" class="pin-image">
                <div class="pin-actions">
                    <button class="pin-action-btn">
                        <i class="fas fa-thumbtack"></i>
                    </button>
                    <button class="pin-action-btn">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
                <div class="pin-details">
                    <div class="pin-title">${pin.title}</div>
                </div>
            `;
            pinsContainer.appendChild(pinElement);
        });
    }

    // Initialize
    generatePins();

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredPins = pinData.filter(pin => 
            pin.title.toLowerCase().includes(searchTerm)
        );
        
        if (filteredPins.length === 0) {
            pinsContainer.innerHTML = '<p class="no-results">No pins found matching your search.</p>';
        } else {
            pinsContainer.innerHTML = '';
            filteredPins.forEach(pin => {
                const pinElement = document.createElement('div');
                pinElement.className = 'pin';
                pinElement.innerHTML = `
                    <img src="${pin.imageUrl}" alt="${pin.title}" class="pin-image">
                    <div class="pin-actions">
                        <button class="pin-action-btn">
                            <i class="fas fa-thumbtack"></i>
                        </button>
                        <button class="pin-action-btn">
                            <i class="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                    <div class="pin-details">
                        <div class="pin-title">${pin.title}</div>
                    </div>
                `;
                pinsContainer.appendChild(pinElement);
            });
        }
    });
});