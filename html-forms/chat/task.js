const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = chatWidget.querySelector('#chat-widget__input');
const chatWidgetMessages = chatWidget.querySelector('.chat-widget__messages');

const answers = [
    'Возьмите свои слова обратно!',
    'Займитесь чем-нибудь полезным',
    'И что я могу на это ответить?',
    'До свидания! Не пишите нам больше',
    'Все операторы заняты',
    'Вау.. Как я сам не догадался',
    'Попробуйте ещё раз, но через пару лет',
];

const getAnswer = () => answers[Math.floor(Math.random() * answers.length)];

const decorateMessage = (answer, toClient = false) => {
    function addInsignZero(number, digitCount = 2) {
        let string = `${number}`;
        if (string.length < digitCount) {
            string = '0' + addInsignZero(string, digitCount - 1);
        }
        return string;
    }

    const styleMessageClass = (toClient) ? 'message_client' : '';
    const time = `${addInsignZero(new Date().getHours())}:${addInsignZero(new Date().getMinutes())}`;

    return `
		<div class="message ${styleMessageClass}">
			<div class="message__time"> ${time} </div>
			<div class="message__text">
			  ${answer}
			</div>
		</div>`;
}

chatWidget.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'));

chatWidget.addEventListener('keydown', (event) => {
    const messageClient = chatWidgetInput.value;
    if (event.key === "Enter" && messageClient !== '') {
        chatWidgetInput.value = '';
        chatWidgetMessages.innerHTML += decorateMessage(messageClient, true);
        chatWidgetMessages.innerHTML += decorateMessage(getAnswer(), false);
    }
});
