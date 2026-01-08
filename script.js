// Простые интерактивные функции
document.addEventListener('DOMContentLoaded', function() {
    // Подсветка текущего дня
    highlightCurrentDay();
    
    // Добавление реакции на клик по уроку
    document.querySelectorAll('.lesson-name').forEach(lesson => {
        lesson.addEventListener('click', function() {
            this.style.backgroundColor = '#e8f4ff';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 1000);
        });
    });
    
    // Функция для печати
    window.printSchedule = function() {
        window.print();
    };
    
    // Сохранение как PDF
    window.saveAsPDF = function() {
        alert('Для сохранения как PDF используйте Ctrl+P и выберите "Сохранить как PDF"');
        window.print();
    };
});

function highlightCurrentDay() {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const today = new Date().getDay();
    const dayIndex = today === 0 ? 6 : today - 1;
    
    if (dayIndex >= 0 && dayIndex <= 4) {
        const table = document.querySelector('.schedule-table');
        if (table) {
            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
                const cell = row.cells[dayIndex];
                if (cell) {
                    cell.style.backgroundColor = '#e8f4ff';
                }
            });
        }
    }
}
