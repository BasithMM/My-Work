document.addEventListener('DOMContentLoaded', function() {
    const pinsContainer = document.getElementById('pinsContainer');
    const pinData = [
        {
            id: 22,
            imageUrl: './image/q.jpg',
            title: 'Quote'
        },
        {
            id: 21,
            imageUrl: './image/7.jpg',
            title: 'Travel'
        },
        {
            id: 20,
            imageUrl: './image/1.jpg',
            title: 'New year'
        },
        {
            id: 19,
            imageUrl: './image/rfifa.webp',
            title: 'poster'
        },
        {
            id: 18,
            imageUrl: './image/r.jpg',
            title: 'chory story'
        },
        {
            id: 15,
            imageUrl: './image/kodaikanal.jpg',
            title: 'Typography'
        },
        {
            id: 16,
            imageUrl: './image/poter.jpg',
            title: 'Movie poster'
        },
        {
            id: 17,
            imageUrl: './image/moody.jpg',
            title: 'Logo'
        },
        {
            id: 20,
            imageUrl: './image/vagamon copy.jpg',
            title: 'Tour poster'
        },
        {
            id: 21,
            imageUrl: './image/KAVI copy.jpg',
            title: 'poster'
        },
        {
            id: 22,
            imageUrl: './image/kerala copy.jpg',
            title: 'Kerala Piravi'
        },
        {
            id: 1,
            imageUrl: './image/joker.jpg',
            title: 'Joker'
        },
        {
            id: 2,
            imageUrl: './image/sh.jpg',
            title: 'Thomas Shelby'
        },
        {
            id: 3,
            imageUrl: './image/ILM KHURASAN-1.png',
            title: 'Poster'
        },
        {
            id: 4,
            imageUrl: './image/basith.jpeg',
            title: 'Design'
        },
        {
            id: 5,
            imageUrl: './image/epoch zero.png',
            title: 'My site Logo'
        },
        {
            id: 6,
            imageUrl: './image/jazora (1).jpg',
            title: 'business Logo'
        },
        {
            id: 7,
            imageUrl: './image/logo for copy.jpg',
            title: 'Logo'
        },
        {
            id: 8,
            imageUrl: './image/Paper Logo.jpg ',
            title: 'Logo'
        },
        {
            id: 9,
            imageUrl: './image/GreenGlass.png',
            title: 'mockup Logo'
        },
        {
            id: 10,
            imageUrl: './image/tea.jpg',
            title: 'poster'
        },
        {
            id: 11,
            imageUrl: './image/child.jpg',
            title: 'poster'
        },
        {
            id: 12,
            imageUrl: './image/father.jpg',
            title: 'poster'
        },
        {
            id: 13,
            imageUrl: './image/picnic.jpg',
            title: 'poster'
        },{
            id: 14,
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