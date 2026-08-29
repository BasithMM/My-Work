 (function(){
           // ---------- EXTENDED PIN DATA (includes unique IDs for download) ----------
const pinData = [
    { id: 39, imageUrl: './image/7.jpg', title: 'Travel Vibes' },
    { id: 38, imageUrl: './image/q.jpg', title: 'Quote Graphic' },
    { id: 37, imageUrl: './image/1.jpg', title: 'New Year Mockup' },
    { id: 36, imageUrl: './image/nexus.jpeg', title: 'Nexus Event' },
    { id: 35, imageUrl: './image/pppppp copy.jpg', title: 'Modern Poster' },
    { id: 34, imageUrl: './image/ifff.jpeg', title: 'Ifthar Feast' },
    { id: 33, imageUrl: './image/bazzzzz copy.jpg', title: 'Banner design' },
    { id: 32, imageUrl: './image/instagram profile copy.jpg', title: 'IG Profile UI' },
    { id: 31, imageUrl: './image/maradona.jpeg', title: 'Maradona Legend' },
    { id: 30, imageUrl: './image/huda.jpg', title: 'Huda Beauty' },
    { id: 29, imageUrl: './image/quiz copy.jpg', title: 'Program Quiz' },
    { id: 28, imageUrl: './image/haaland.jpg', title: 'Haaland Edge' },
    { id: 27, imageUrl: './image/thooki.jpg', title: 'Cinematic Poster' },
    { id: 26, imageUrl: './image/ro.jpg', title: 'Ronaldo CR7' },
    { id: 25, imageUrl: './image/g.jpg', title: 'Anime Story' },
    { id: 24, imageUrl: './image/n.jpg', title: 'Abstract N' },
    { id: 23, imageUrl: './image/tea talk.jpg', title: 'Tea Talk Event' },
    { id: 22, imageUrl: './image/kerala copy.jpg', title: 'Kerala Piravi' },
    { id: 21, imageUrl: './image/KAVI copy.jpg', title: 'Kavi Poetry' },
    { id: 20, imageUrl: './image/vagamon copy.jpg', title: 'Vagamon Tour' },
    { id: 19, imageUrl: './image/rfifa.webp', title: 'FIFA poster' },
    { id: 18, imageUrl: './image/r.jpg', title: 'Chory Story' },
    { id: 17, imageUrl: './image/moody.jpg', title: 'Moody Logo' },
    { id: 16, imageUrl: './image/poter.jpg', title: 'Movie Poster' },
    { id: 15, imageUrl: './image/kodaikanal.jpg', title: 'Kodaikanal Type' },
    { id: 14, imageUrl: './image/speech.jpg', title: 'Inspirational Speech' },
    { id: 13, imageUrl: './image/picnic.jpg', title: 'Summer Picnic' },
    { id: 12, imageUrl: './image/father.jpg', title: 'Father\'s Legacy' },
    { id: 11, imageUrl: './image/child.jpg', title: 'Childhood Dreams' },
    { id: 10, imageUrl: './image/tea.jpg', title: 'Tea Talk Poster' },
    { id: 9, imageUrl: './image/GreenGlass.png', title: 'Green Glass Mockup' },
    { id: 8, imageUrl: './image/Paper Logo.jpg', title: 'Paper Identity' },
    { id: 7, imageUrl: './image/logo for copy.jpg', title: 'Minimal Logo' },
    { id: 6, imageUrl: './image/jazora (1).jpg', title: 'Jazora Brand' },
    { id: 5, imageUrl: './image/epoch zero.png', title: 'Epoch Zero Logo' },
    { id: 4, imageUrl: './image/basith.jpeg', title: 'Abstract Design' },
    { id: 3, imageUrl: './image/ILM KHURASAN-1.png', title: 'Epic Poster' },
    { id: 2, imageUrl: './image/sh.jpg', title: 'Thomas Shelby' },
    { id: 1, imageUrl: './image/joker.jpg', title: 'Joker · Cinematic' },
    { id: 40, imageUrl: './image/union summit.jpg', title: 'Poster' },
    { id: 41, imageUrl: './image/campaign.jpg', title: 'Campaign poster' },
    { id: 42, imageUrl: './image/Round Table .jpeg', title: 'program poster' },
    { id: 43, imageUrl: './image/Foundation Day.jpeg', title: 'foundation day' },
    { id: 44, imageUrl: './image/independence day.jpg', title: 'independence day' },
    { id: 45, imageUrl: './image/Portfolio.jpeg', title: 'portfolio' },
    { id: 46, imageUrl: './image/Checkmate.jpeg', title: 'Sports' }
];

            let currentTheme = localStorage.getItem('zentrixTheme') || 'light';
            const pinsContainer = document.getElementById('pinsContainer');
            const searchInput = document.querySelector('.search-bar input');
            const toastEl = document.getElementById('toastMessage');

            // Helper toast
            function showToast(message, duration = 2200) {
                toastEl.innerText = message;
                toastEl.style.opacity = '1';
                setTimeout(() => {
                    toastEl.style.opacity = '0';
                }, duration);
            }

            // download single image from url (fetch + blob)
            async function downloadImage(url, filename) {
                try {
                    const response = await fetch(url, { mode: 'cors' });
                    if (!response.ok) throw new Error('Network error');
                    const blob = await response.blob();
                    const blobUrl = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = filename.endsWith('.png') || filename.endsWith('.jpg') ? filename : `${filename}.jpg`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(blobUrl);
                    showToast(`✅ Downloaded: ${filename}`);
                } catch (err) {
                    console.warn(err);
                    showToast(`⚠️ Couldn't download ${filename}, try right-click save.`);
                }
            }

            // generate pin HTML elements (with individual download)
            function createPinElement(pin) {
                const pinDiv = document.createElement('div');
                pinDiv.className = 'pin';
                const safeTitle = pin.title.replace(/[^a-z0-9]/gi, '_').substring(0, 40);
                const fileName = `${safeTitle || 'zentrix'}_${pin.id}.jpg`;
                pinDiv.innerHTML = `
                    <img src="${pin.imageUrl}" alt="${pin.title}" class="pin-image" loading="lazy" onerror="this.src='https://placehold.co/400x500?text=Zentrix'">
                    <div class="pin-actions">
                        <button class="pin-action-btn download-single" data-url="${pin.imageUrl}" data-filename="${fileName}" title="Download image">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="pin-action-btn pin-save-btn" title="Save inspiration">
                            <i class="fas fa-thumbtack"></i>
                        </button>
                        <button class="pin-action-btn pin-more" title="More">
                            <i class="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                    <div class="pin-details">
                        <div class="pin-title">${escapeHtml(pin.title)}</div>
                    </div>
                `;
                // attach download event after DOM insert
                const downloadBtn = pinDiv.querySelector('.download-single');
                if (downloadBtn) {
                    downloadBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const url = downloadBtn.dataset.url;
                        const filename = downloadBtn.dataset.filename;
                        downloadImage(url, filename);
                    });
                }
                // pin save toast (just fun action)
                const saveBtn = pinDiv.querySelector('.pin-save-btn');
                if (saveBtn) {
                    saveBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        showToast(`📌 "${pin.title}" saved to your board!`);
                    });
                }
                const moreBtn = pinDiv.querySelector('.pin-more');
                if (moreBtn) {
                    moreBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        showToast(`✨ More options for "${pin.title}" soon`);
                    });
                }
                return pinDiv;
            }

            function escapeHtml(str) {
                return str.replace(/[&<>]/g, function(m) {
                    if (m === '&') return '&amp;';
                    if (m === '<') return '&lt;';
                    if (m === '>') return '&gt;';
                    return m;
                });
            }

            // render pins with filter (search)
            function renderPins(filterText = '') {
                pinsContainer.innerHTML = '';
                const lowerFilter = filterText.toLowerCase().trim();
                const filtered = lowerFilter ? pinData.filter(p => p.title.toLowerCase().includes(lowerFilter)) : [...pinData];
                
                if (filtered.length === 0) {
                    const noResultDiv = document.createElement('div');
                    noResultDiv.className = 'no-results';
                    noResultDiv.innerHTML = '<i class="fas fa-search" style="font-size:2rem; opacity:0.5;"></i><p style="margin-top:12px;">No designs found — try another keyword 🎨</p>';
                    pinsContainer.appendChild(noResultDiv);
                    return;
                }
                
                filtered.forEach(pin => {
                    pinsContainer.appendChild(createPinElement(pin));
                });
            }

            // ----- NEW FUNCTION: Download all visible pins (batch download) -----
            async function downloadAllVisiblePins() {
                const currentFilter = searchInput.value.trim().toLowerCase();
                const visiblePins = currentFilter ? pinData.filter(p => p.title.toLowerCase().includes(currentFilter)) : [...pinData];
                if (visiblePins.length === 0) {
                    showToast("No images to download. Adjust search.");
                    return;
                }
                showToast(`⏳ Preparing ${visiblePins.length} downloads...`, 1500);
                for (let i = 0; i < visiblePins.length; i++) {
                    const pin = visiblePins[i];
                    const safeTitle = pin.title.replace(/[^a-z0-9]/gi, '_').substring(0, 35);
                    const filename = `${safeTitle || 'zentrix'}_${pin.id}.jpg`;
                    // delay to avoid browser flood and respect rate
                    await new Promise(resolve => setTimeout(resolve, 280));
                    try {
                        await downloadImage(pin.imageUrl, filename);
                    } catch(e) { console.warn(e); }
                }
                showToast(`📦 Completed! Downloaded ${visiblePins.length} items.`);
            }

            // --- THEME TOGGLE with icon update ---
            function setTheme(theme) {
                if (theme === 'dark') {
                    document.body.classList.add('dark');
                    localStorage.setItem('zentrixTheme', 'dark');
                    const toggleIcon = document.querySelector('#themeToggleBtn i');
                    if(toggleIcon) toggleIcon.className = 'fas fa-sun';
                } else {
                    document.body.classList.remove('dark');
                    localStorage.setItem('zentrixTheme', 'light');
                    const toggleIcon = document.querySelector('#themeToggleBtn i');
                    if(toggleIcon) toggleIcon.className = 'fas fa-moon';
                }
                currentTheme = theme;
            }
            
            function toggleTheme() {
                if (currentTheme === 'light') {
                    setTheme('dark');
                } else {
                    setTheme('light');
                }
            }

            // --- extra interactive features: explore / create buttons (just simulation)---
            function setupNavActions() {
                const homeBtn = document.getElementById('navHome');
                const exploreBtn = document.getElementById('navExplore');
                const createBtn = document.getElementById('navCreate');
                if(homeBtn) homeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    searchInput.value = '';
                    renderPins('');
                    setActiveNav(homeBtn);
                    showToast('🏠 Back to home gallery');
                });
                if(exploreBtn) exploreBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showToast('🌍 Explore trending designs — coming soon!');
                    setActiveNav(exploreBtn);
                });
                if(createBtn) createBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showToast('✨ Create studio will open soon. Share your vision!');
                    setActiveNav(createBtn);
                });
            }
            function setActiveNav(activeLink) {
                document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }

            // initial load & search event
            function init() {
                // set saved theme
                const savedTheme = localStorage.getItem('zentrixTheme');
                if (savedTheme === 'dark') setTheme('dark');
                else setTheme('light');
                
                renderPins('');
                setupNavActions();
                
                // live search
                searchInput.addEventListener('input', (e) => {
                    renderPins(e.target.value);
                });
                
                // theme toggle
                const themeBtn = document.getElementById('themeToggleBtn');
                if(themeBtn) themeBtn.addEventListener('click', toggleTheme);
                
                // DOWNLOAD ALL button
                const downloadAllBtn = document.getElementById('downloadAllBtn');
                if(downloadAllBtn) {
                    downloadAllBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        downloadAllVisiblePins();
                    });
                }
                
                // Additional fallback for user avatar & logo error placeholders
                const imgs = document.querySelectorAll('img');
                imgs.forEach(img => {
                    img.addEventListener('error', function() {
                        if(!this.dataset.fallbackSet) {
                            this.src = 'https://placehold.co/500x600?text=Zentrix';
                            this.dataset.fallbackSet = true;
                        }
                    });
                });
            }
            
            init();
        })();