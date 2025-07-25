document.addEventListener('DOMContentLoaded', function() {
    const pinsContainer = document.getElementById('pinsContainer');
    const pinData = [
        {
            id: 1,
            imageUrl: './image/ILM KHURASAN-1.png',
            title: 'Poster'
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