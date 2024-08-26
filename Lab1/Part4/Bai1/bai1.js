let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//Hàm để hiển thị thông báo
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

//Gắn sự kiện click cho nút "Check"
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //Khi không có giá trị đoán nào
    if (!guess) {
        displayMessage('No number!');

    //Khi người chơi đoán đúng
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    //Khi người chơi đoán sai
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score-value').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score-value').textContent = 0;
        }
    }
});

//Chọn phần tử với lớp `again` và gắn sự kiện click
document.querySelector('.again').addEventListener('click', function () {
    //Khôi phục giá trị ban đầu của biến `score` và `secretNumber`
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //Khôi phục lại điều kiện ban đầu
    displayMessage('Start guessing...');
    document.querySelector('.score-value').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    //Khôi phục lại màu nền và chiều rộng của số bí mật
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});