class Game {
    constructor(container) {
        this.container = container;
        this.wordElement = container.querySelector('.word');
        this.winsElement = container.querySelector('.status__wins');
        this.lossElement = container.querySelector('.status__loss');
        this.timerOutput = container.querySelector('.timer');

        this.reset();
        this.registerEvents();
    }

    reset() {
        this.setNewWord();
        this.winsElement.textContent = 0;
        this.lossElement.textContent = 0;
    }

    finish(success = false) {
        const message = (success) ? 'Победа!' : 'Вы проиграли!';
        alert(message);
        this.reset();
    }

    registerEvents() {
        const matchSymbol = (event) => {
            let symbolEntered = event.key.toLowerCase();
            let symbolCurrent = this.currentSymbol.textContent.toLowerCase();
            if (symbolEntered === symbolCurrent) {
                this.success();
            } else {
                this.fail();
            }
        }

        document.addEventListener("keydown", matchSymbol);
    }

    success() {
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;
        if (this.currentSymbol !== null) {
            return;
        }
        if (++this.winsElement.textContent === 10) {
            this.finish(true);
        }
        setTimeout(() => {
            this.setNewWord();
        }, 500)
    }

    fail() {
        this.currentSymbol.classList.add('word_incorrect');
        if (++this.lossElement.textContent === 5) {
            this.finish(false);
        }
        setTimeout(() => {
            this.setNewWord();
        }, 500)
    }

    setNewWord() {
        const word = this.getWord();
        this.renderWord(word);
        if (this.timer !== null) {
            clearTimeout(this.timer);
        }
        this.setTimer(word);
    }

    getWord() {
        const words = {
            entities: [
                'your mom',
                'my friend',
                'boss',
                'mr president',
                'little pony',
            ],
            verbs: [
                'like',
                'wanna',
                'see',
                'thinks about',
            ],
            things: [
                'money',
                'rock',
                'kitty',
                'popcorn',
                'new computer',
            ],
        };
        const entityIndex = Math.floor(Math.random() * words.entities.length);
        const verbIndex = Math.floor(Math.random() * words.verbs.length);
        const thingIndex = Math.floor(Math.random() * words.things.length);

        return words.entities[entityIndex] + ' ' + words.verbs[verbIndex] + ' ' + words.things[thingIndex];
    }

    renderWord(word) {
        const html = [...word]
            .map(
                (s, i) =>
                    `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
            )
            .join('');
        this.wordElement.innerHTML = html;

        this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }

    setTimer(word) {
        const time = word.length;
        this.runTimer(time);
    }

    runTimer = (time) => {
        this.timerOutput.textContent = time;
        if (time === 0) {
            this.fail();
        } else {
            this.timer = setTimeout(this.runTimer, 1000, time - 1);
        }
    }
}

new Game(document.querySelector('#game'))

