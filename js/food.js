document.addEventListener('DOMContentLoaded', function() {
    // Получаем dishId из URL или используем дефолтный
    const urlParams = new URLSearchParams(window.location.search);
    const dishId = urlParams.get('dish') || 'golubcy';
    
    // Инициализация количества
    if (!localStorage.getItem(dishId)) {
        localStorage.setItem(dishId, 1); // Начинаем с 1, а не с 0
    }
    updatePortionDisplay(dishId);
    
    // Инициализация Swiper
    const dishSlider = new Swiper('.b-page-box-img--slider', {
        pagination: {
            el: '.dish-slider-nav--right',
            clickable: true,
        },
    });
    
    // Добавляем обработчики для кнопок +/-
    document.querySelectorAll('.dish-calc__btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Предотвращаем всплытие события
        });
    });
});

function changePortion(delta, dishId) {
    let count = parseInt(localStorage.getItem(dishId)) || 1;
    count += delta;
    count = Math.max(1, count); // Не меньше 1
    localStorage.setItem(dishId, count);
    updatePortionDisplay(dishId);
}

function updatePortionDisplay(dishId) {
    const count = localStorage.getItem(dishId) || 1;
    document.getElementById('portion-count').textContent = count;
}
