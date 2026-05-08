document.addEventListener('DOMContentLoaded', function () {

    // ==================== МОБИЛЬНОЕ МЕНЮ ====================
    const menuButton = document.getElementById('mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (menuButton && mainNav) {
        menuButton.addEventListener('click', function () {
            mainNav.classList.toggle('active');
        });
    }

    // Закрытие мобильного меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    // ==================== АКТИВНАЯ ССЫЛКА ПРИ СКРОЛЛЕ ====================
    const sections = document.querySelectorAll('section[id]');

    function setActiveLink() {
        let scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    // ==================== ДАННЫЕ (12 постановок) ====================
    const performances = [
        // ПЬЕСЫ (4)
        {
            id: 1,
            title: 'Гамлет',
            category: 'play',
            categoryName: 'Пьеса',
            date: '25, 26 мая 2026, 19:00',
            descriptionShort: 'Трагедия Уильяма Шекспира в современном прочтении. Вечный вопрос бытия на фоне мрачных декораций.',
            descriptionFull: '«Гамлет» — одна из самых известных трагедий в мировой драматургии. Принц датский ищет ответ на вопрос: быть или не быть? В постановке театра «Геликон» классический сюжет раскрывается через призму современности. Мрачные декорации, игра света и тени, глубокие монологи создают атмосферу, в которой каждый зритель найдёт отражение собственных сомнений.',
            image: 'гамлет.jpg'
        },
        {
            id: 2,
            title: 'Вишнёвый сад',
            category: 'play',
            categoryName: 'Пьеса',
            date: '1, 2 июня 2026, 18:00',
            descriptionShort: 'Классическая постановка по пьесе А.П. Чехова. История о прощании с прошлым.',
            descriptionFull: '«Вишнёвый сад» Антона Павловича Чехова — тонкая и пронзительная история о дворянской семье, теряющей родовое имение. В нашем театре спектакль обретает новое звучание: минималистичные декорации, выразительная актёрская игра и бережное отношение к тексту погружают зрителя в мир уходящей эпохи.',
            image: 'вишневый сад.jpg'
        },
        {
            id: 3,
            title: 'Мастер и Маргарита',
            category: 'play',
            categoryName: 'Пьеса',
            date: '10, 11 июня 2026, 19:00',
            descriptionShort: 'Мистический роман Булгакова на сцене. Любовь и дьявольские проделки в Москве.',
            descriptionFull: 'Сценическое воплощение великого романа Михаила Булгакова. История любви Мастера и Маргариты, визит Воланда в Москву 1930-х годов, библейские сюжеты — всё это сплетается в яркое театральное действо с элементами мистики и философской притчи. Спектакль насыщен визуальными эффектами и живой музыкой.',
            image: 'мастер и маргарита.webp'
        },
        {
            id: 4,
            title: 'Ревизор',
            category: 'play',
            categoryName: 'Пьеса',
            date: '15, 16 июня 2026, 18:00',
            descriptionShort: 'Бессмертная комедия Н.В. Гоголя о чиновничьем страхе и глупости.',
            descriptionFull: 'Николай Васильевич Гоголь и его «Ревизор» не теряют актуальности спустя два столетия. В постановке театра «Геликон» комедия превращается в острую сатиру на современное общество. Яркие костюмы, гротескная игра актёров и динамичный темп делают этот спектакль одним из самых популярных в репертуаре.',
            image: 'ревизор.webp'
        },
        // ОПЕРА (4)
        {
            id: 5,
            title: 'Евгений Онегин',
            category: 'opera',
            categoryName: 'Опера',
            date: '20, 21 мая 2026, 19:00',
            descriptionShort: 'Лирические сцены П.И. Чайковского по роману А.С. Пушкина.',
            descriptionFull: 'Опера Петра Ильича Чайковского «Евгений Онегин» — жемчужина русского оперного искусства. История любви, отвергнутой и запоздалой, рассказана языком проникновенной музыки. Солисты театра, хор и оркестр создают на сцене подлинное лирическое переживание.',
            image: 'евгений онегин.webp'
        },
        {
            id: 6,
            title: 'Кармен',
            category: 'opera',
            categoryName: 'Опера',
            date: '5, 6 июня 2026, 19:30',
            descriptionShort: 'Страстная опера Жоржа Бизе о любви и свободе.',
            descriptionFull: '«Кармен» — одна из самых исполняемых опер в мире. История цыганки Кармен и солдата Хозе, полная страсти, ревности и трагизма, покоряет сердца зрителей. В постановке театра «Геликон» испанские мотивы сочетаются с оригинальной сценографией.',
            image: 'кармен.jpeg'
        },
        {
            id: 7,
            title: 'Травиата',
            category: 'opera',
            categoryName: 'Опера',
            date: '12, 13 июня 2026, 19:00',
            descriptionShort: 'Опера Джузеппе Верди о трагической любви Виолетты.',
            descriptionFull: '«Травиата» Джузеппе Верди повествует о судьбе куртизанки Виолетты, пожертвовавшей любовью ради чести возлюбленного. Пронзительные арии, великолепные костюмы и эмоциональная игра солистов не оставят равнодушным никого.',
            image: 'травиата.jpg'
        },
        {
            id: 8,
            title: 'Свадьба Фигаро',
            category: 'opera',
            categoryName: 'Опера',
            date: '18, 19 июня 2026, 18:30',
            descriptionShort: 'Комическая опера В.А. Моцарта, полная интриг.',
            descriptionFull: '«Свадьба Фигаро» Вольфганга Амадея Моцарта — искромётная комедия с переодеваниями, интригами и неожиданными поворотами. Лёгкая музыка, живость сюжета и безупречное вокальное исполнение делают этот спектакль праздником для зрителя.',
            image: 'свадьба фигаро.jpg'
        },
        // ОПЕРЕТТА (4)
        {
            id: 9,
            title: 'Летучая мышь',
            category: 'operetta',
            categoryName: 'Оперетта',
            date: '22, 23 мая 2026, 19:00',
            descriptionShort: 'Король оперетты Иоганна Штрауса. Искромётный юмор.',
            descriptionFull: '«Летучая мышь» Иоганна Штрауса — воплощение венского духа. Балы, розыгрыши, шампанское и, конечно, знаменитые вальсы. Блестящая музыка и лёгкий сюжет делают оперетту идеальным выбором для вечернего выхода.',
            image: 'летучая мышь.jpg'
        },
        {
            id: 10,
            title: 'Весёлая вдова',
            category: 'operetta',
            categoryName: 'Оперетта',
            date: '29, 30 мая 2026, 19:00',
            descriptionShort: 'Оперетта Ф. Легара о миллионах, любви и парижском шике.',
            descriptionFull: '«Весёлая вдова» Франца Легара — классика жанра. Графиня Ганна Главари, обладательница многомиллионного состояния, ищет настоящую любовь. Парижские салоны, остроумные диалоги и прекрасная музыка ждут вас в театре «Геликон».',
            image: 'веселая вдова.jpg'
        },
        {
            id: 11,
            title: 'Сильва',
            category: 'operetta',
            categoryName: 'Оперетта',
            date: '7, 8 июня 2026, 18:00',
            descriptionShort: 'Оперетта И. Кальмана. Звёзды эстрады, любовь и тайны.',
            descriptionFull: '«Сильва» (или «Королева чардаша») Имре Кальмана — история любви артистки варьете и аристократа. Зажигательные танцы, прекрасные арии и трогательный сюжет уже более ста лет покоряют публику по всему миру.',
            image: 'сильва.jpg'
        },
        {
            id: 12,
            title: 'Принцесса цирка',
            category: 'operetta',
            categoryName: 'Оперетта',
            date: '14, 15 июня 2026, 19:00',
            descriptionShort: 'Оперетта И. Кальмана. Цирк, тайна и любовь.',
            descriptionFull: '«Принцесса цирка» Имре Кальмана — захватывающая история о таинственном мистере Икс, цирковой артистке и запретной любви. Арена цирка на театральной сцене, яркие костюмы и волнующая музыка создают атмосферу настоящего праздника.',
            image: 'принцесса цирка.webp'
        }
    ];

    // ==================== ОТРИСОВКА АФИШИ ====================
    const posterContainer = document.getElementById('poster-container');

    function renderPerformances(filter = 'all') {
        if (!posterContainer) return;

        posterContainer.innerHTML = '';

        const filtered = filter === 'all'
            ? performances
            : performances.filter(p => p.category === filter);

        filtered.forEach(perf => {
            const card = document.createElement('div');
            card.className = 'poster-card';
            card.setAttribute('data-id', perf.id);

            card.innerHTML = `
                <img src="${perf.image}" alt="${perf.title}">
                <div class="card-content">
                    <span class="category">${perf.categoryName}</span>
                    <h3>${perf.title}</h3>
                    <p class="date">${perf.date}</p>
                    <p class="description-preview">${perf.descriptionShort}</p>
                </div>
            `;

            card.addEventListener('click', function () {
                openModal(perf);
            });

            posterContainer.appendChild(card);
        });
    }

    // ==================== МОДАЛЬНОЕ ОКНО ====================
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');
    const modalBuyBtn = document.getElementById('modal-buy-btn');
    const modalClose = document.querySelector('.modal-close');

    function openModal(perf) {
        modalImg.src = perf.image;
        modalImg.alt = perf.title;
        modalTitle.textContent = perf.title;
        modalCategory.textContent = perf.categoryName;
        modalDate.textContent = perf.date;
        modalDescription.textContent = perf.descriptionFull;
        modalBuyBtn.textContent = 'Купить билет';
        
        // Скрываем блок выбора билета и очищаем поля
        const ticketSelection = document.getElementById('ticket-selection');
        if (ticketSelection) ticketSelection.style.display = 'none';
        const ticketDate = document.getElementById('ticket-date');
        const ticketSeat = document.getElementById('ticket-seat');
        const ticketMsg = document.getElementById('ticket-message');
        const seatMap = document.getElementById('seat-map');
        if (ticketDate) ticketDate.value = '';
        if (ticketSeat) ticketSeat.value = '';
        if (ticketMsg) ticketMsg.innerHTML = '';
        if (seatMap) seatMap.style.display = 'none';

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ==================== КУПИТЬ БИЛЕТ ====================
    const ticketSelection = document.getElementById('ticket-selection');
    const ticketDateInput = document.getElementById('ticket-date');
    const ticketSeatInput = document.getElementById('ticket-seat');
    const confirmTicketBtn = document.getElementById('confirm-ticket-btn');
    const ticketMessage = document.getElementById('ticket-message');
    const seatMapDiv = document.getElementById('seat-map');
    const seatsGrid = document.getElementById('seats-grid');
    const showSeatMapBtn = document.getElementById('show-seat-map-btn');

    // Генерация схемы зала (6 рядов × 10 мест = 60)
    function generateSeatMap() {
        if (!seatsGrid) return;
        seatsGrid.innerHTML = '';
        
        for (let row = 1; row <= 6; row++) {
            for (let seatInRow = 1; seatInRow <= 10; seatInRow++) {
                const seatNumber = (row - 1) * 10 + seatInRow;
                const seatBtn = document.createElement('button');
                seatBtn.textContent = seatNumber;
                seatBtn.style.padding = '8px 0';
                seatBtn.style.backgroundColor = '#444';
                seatBtn.style.border = '1px solid #666';
                seatBtn.style.borderRadius = '4px';
                seatBtn.style.color = '#ddd';
                seatBtn.style.cursor = 'pointer';
                seatBtn.style.fontSize = '12px';
                seatBtn.style.transition = 'all 0.2s';
                
                seatBtn.addEventListener('mouseenter', () => {
                    seatBtn.style.backgroundColor = '#2e7d32';
                });
                seatBtn.addEventListener('mouseleave', () => {
                    if (seatBtn.textContent !== ticketSeatInput.value) {
                        seatBtn.style.backgroundColor = '#444';
                    }
                });
                
                seatBtn.addEventListener('click', () => {
                    ticketSeatInput.value = seatNumber;
                    document.querySelectorAll('#seats-grid button').forEach(btn => {
                        btn.style.backgroundColor = '#444';
                        btn.style.border = '1px solid #666';
                    });
                    seatBtn.style.backgroundColor = '#4caf50';
                    seatBtn.style.border = '2px solid #ffd700';
                });
                
                seatsGrid.appendChild(seatBtn);
            }
        }
    }

    // При нажатии на "Купить билет" показываем блок выбора
    if (modalBuyBtn) {
        modalBuyBtn.addEventListener('click', function () {
            ticketSelection.style.display = 'block';
            const today = new Date().toISOString().split('T')[0];
            ticketDateInput.min = today;
            ticketDateInput.value = '';
            ticketSeatInput.value = '';
            ticketMessage.innerHTML = '';
            seatMapDiv.style.display = 'none';
            generateSeatMap();
        });
    }

    // Показать/скрыть схему зала
    if (showSeatMapBtn) {
        showSeatMapBtn.addEventListener('click', () => {
            if (seatMapDiv.style.display === 'none') {
                seatMapDiv.style.display = 'block';
                showSeatMapBtn.textContent = 'Скрыть схему';
            } else {
                seatMapDiv.style.display = 'none';
                showSeatMapBtn.textContent = 'Схема зала';
            }
        });
    }

    // Подтверждение билета
    if (confirmTicketBtn) {
        confirmTicketBtn.addEventListener('click', function () {
            const selectedDate = ticketDateInput.value;
            const selectedSeat = parseInt(ticketSeatInput.value);
            
            if (!selectedDate) {
                ticketMessage.innerHTML = '<span style="color: #ff6b6b;">❌ Пожалуйста, выберите дату</span>';
                return;
            }
            
            if (isNaN(selectedSeat) || selectedSeat < 1 || selectedSeat > 60) {
                ticketMessage.innerHTML = '<span style="color: #ff6b6b;">❌ Выберите место от 1 до 60</span>';
                return;
            }
            
            const performanceTitle = modalTitle.textContent;
            ticketMessage.innerHTML = `<span style="color: #4caf50;">✅ Билет успешно оформлен!<br>🎭 ${performanceTitle}<br>📅 ${selectedDate}<br>💺 Место: ${selectedSeat}</span>`;
            
            setTimeout(() => {
                closeModal();
                ticketMessage.innerHTML = '';
                ticketSelection.style.display = 'none';
            }, 2000);
        });
    }

    // ==================== ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК ====================
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            renderPerformances(category);
        });
    });

    // ==================== ПЕРВИЧНАЯ ОТРИСОВКА ====================
    renderPerformances('all');

});