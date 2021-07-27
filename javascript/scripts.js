const TaskList = function() {
    let overlay = document.getElementById('overlay'),
        buttonFirstTask = document.querySelector('.widget__task-1_button'),
        buttonSecondTask = document.querySelector('.widget__task-2_button'),
        buttonThirdTask = document.querySelector('.widget__task-3_button'),
        buttons = document.querySelector('.button-done'),
        closeButton = document.querySelectorAll('.modal__button-close');

    const taskFirst = function() {
        let inputNumber = document.getElementById('input-number').value,
            message = document.querySelector('.modal__message');

        if (inputNumber <= 7 || isNaN(inputNumber)) {
            document.getElementById('input-number').value = '';
            document.getElementById('input-number').placeholder='Укажите число больше 7';
            document.getElementById('input-number').classList.add('placeholder_red');
            return
        } else {
            message.innerHTML = `Привет`;
        }

        modalPage();    
    };

    const taskSecond = function() {
        let inputName = document.getElementById('input-name').value,
                message = document.querySelector('.modal__message'),
                name = 'Вячеслав';

        if (inputName.trim() == '') {
            document.getElementById('input-name').value = '';
            document.getElementById('input-name').placeholder='Необходимо ввести имя';
            document.getElementById('input-name').classList.add('placeholder_red');
            return
        } else if (inputName.toLowerCase() !== name.toLowerCase()) {
            message.innerHTML = `Нет такого имени`;
        } else {
            message.innerHTML = `Привет, ${inputName[0].toUpperCase() + inputName.slice(1).toLowerCase()}`;
        }

        modalPage();    
    };

    const taskThird = function() {
        let numberList = document.getElementById('input-numbers').value,
            message = document.querySelector('.modal__message'),
            inputArray = numberList.split(`,`).map(Number),
            newArray = inputArray.filter(number => number % 3 === 0),
            regexpNumber = /^[\d\s,-]*$/;

        if (numberList.trim() == '' || regexpNumber.test(numberList) == false) {
            document.getElementById("input-numbers").value = '';
            document.getElementById('input-numbers').placeholder='Введите числа через запятую';
            document.getElementById('input-numbers').classList.add('placeholder_red');
            return
        } else if (newArray.length === 0) {
            message.innerHTML = `Совпадений нет`;
        } else {
            message.innerHTML = newArray.join(`, `);
        }

        modalPage();    
    };

    const modalPage = function () {
        let contentId = buttons.dataset.content,
            content = document.querySelector('#' + contentId),
            contents = document.querySelectorAll('.modal');

        contents.forEach(function(content) {
            overlay.classList.add('active');
            content.classList.add('hide');
        })

        content.classList.remove('hide');
    }

    const modalClose = function() {
        overlay.classList.remove('active');
        document.getElementById('input-number').placeholder='Введите число';
        document.getElementById('input-name').placeholder='Введите имя';

        document.getElementById("input-number").value = '';
        document.getElementById("input-name").value = '';
        document.getElementById("input-numbers").value = '';

        document.getElementById("input-number").classList.remove('placeholder_red');
        document.getElementById("input-name").classList.remove('placeholder_red');
        document.getElementById("input-numbers").classList.remove('placeholder_red');
    }

    buttonFirstTask.addEventListener('click', (e) => {
        e.preventDefault();
        taskFirst();
    }); 

    buttonSecondTask.addEventListener('click', (e) => {
        e.preventDefault();
        taskSecond();
    }); 

    buttonThirdTask.addEventListener('click', (e) => {
        e.preventDefault();
        taskThird();
    }); 

    closeButton.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            modalClose()
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target == overlay) {
            modalClose()
        }    
    });
}

TaskList();