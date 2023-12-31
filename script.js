const menuKnowledge = [
    {
        question: "Яка основна відмінність між Бріошем та хлібом на заквасці?",
        answer: "дріжджі та мед",
        comment: "Відповідь: Дріжджі та мед - вірно!"
    },
    {
        question: "Масло вершкове, борошно пшеничне, яйця, дріжджі, закваска пшенична, мед, сіль та цукор - це",
        answer: "бріош",
        comment: "Відповідь: Бріош - вірно!"
    },
    {
        question: "Борошно пшенчне, закваска пшенична, масло вершкове, цукор, сіль,вода - це",
        answer: "хліб на заквасці",
        comment: "Відповідь: Хліб на заквасці - вірно!"
    },
    {
        question: "Нут, тахіні, батат печений, сіль, цукор, часник, лимонний фреш, олія соняшникова - це",
        answer: "хумус бататовий",
        comment: "Відповідь: Хумус бататовий - вірно!"
    },
    {
        question: "З чого складається страва із стартерів ХУМУС БАТАТОВИЙ",
        answer: "хумус бабатовий, вялені томати, зелена олія, карі кешью, паприка",
        comment: "Відповідь: Хумус бабатовий, вялені томати, зелена олія, карі кешью, паприка - вірно!"
    },
    {
        question: "Який алерген міститься у вялених томатах?",
        answer: "часник",
        comment: "Відповідь: Часник - вірно!"
    },
    {
        question: "З чого складаються карі кешью?",
        answer: "кешью, мед, карі-паста",
        comment: "Відповідь: Кешью, мед, карі-паста - вірно!"
    },
    {
        question: "Перечисли інгрідієнти паштету (з чого він гутується)",
        answer: "печінка куряча, морква, цибуля, вершки, масло, вино біле, мускатний горіх",
        comment: "Відповідь: Печінка куряча, морква, цибуля, вершки, масло, вино біле, мускатний горіх - вірно!"
    },
    {
        question: "Які алергени має паштет?",
        answer: "вершки, масло, мускатний горіх",
        comment: "Відповідь: Вершки, масло, мускатний горіх - вірно!"
    },
    {
        question: "З чого складається страва із стартерів ПАШТЕТ ПЕЧІНКОВИЙ",
        answer: "паштет, цибулевий джем, зелена олія, мікрогрін",
        comment: "Відповідь: Паштет, цибулевий джем, зелена олія, мікрогрін - вірно!"
    },
    {
        question: "З чого готується цибулевий джем?",
        answer: "цибуля біла, червоне вино, оцет бальзамічний, цукор",
        comment: "Відповідь: Цибуля біла, червоне вино, оцет бальзамічний, цукор - вірно!"
    },
    {
        question: "Що таке зелена олія?",
        answer: "соняшникова олія, кріп, петрушка",
        comment: "Відповідь: Соняшникова олія, кріп, петрушка - вірно!"
    },
    {
        question: "З чим подаються запечені перці?",
        answer: "сир фета, зелена олія",
        comment: "Відповідь: Сир фета, зелена олія - вірно!"
    },
    {
        question: "Які оливки входять до міксу оливок?",
        answer: "зелені, вялені, каламата",
        comment: "Відповідь: Зелені, вялені, каламата - вірно!"
    },
    {
        question: "У чому обсмажуються оливки у страві мікс оливок?",
        answer: "часник, цедра апельсину",
        comment: "Відповідь: Часник, цедра апельсину - вірно!"
    },
    {
        question: "Кокосове молоко, гірчиця, цукор, соняшникова олія, оцет білий бальзамічний, сіль - це",
        answer: "домашній майонез",
        comment: "Відповідь: Домашній майонез - вірно!"
    },
    {
        question: "З чого складається медово гірчичний соус?",
        answer: "домашній майонез, мед, гірчиця",
        comment: "Відповідь: Домашній майонез, мед, гірчиця - вірно!"
    },
    {
        question: "Який соус подається до найпростішого Батату фрі?",
        answer: "медово гірчичний",
        comment: "Відповідь: Медово гірчичний - вірно!"
    },
    {
        question: "Який сосу подається до батату фрі із червоною ікрою?",
        answer: "сирний",
        comment: "Відповідь: Сирний - вірно!"
    },
    {
        question: "З чого складається сирний соус?",
        answer: "сир чедер, молоко, вершки, крохмал",
        comment: "Відповідь: Сир чедер, молоко, вершки, крохмал - вірно!"
    },
    {
        question: "Назвіть складові стартеру БАТАТ ФРІ З КУРОЧКОЮ ТА СИРОМ",
        answer: "батат фрі, соус медово гірчичний, соус пеппер айолі, куряче філе, пармезан",
        comment: "Відповідь: Батат фрі, соус медово гірчичний, соус пеппер айолі, куряче філе, пармезан - вірно!"
    },
    {
        question: "Назви чотири головних інгрідієнта соуса пеппер айолі",
        answer: "домашній майонез, печені перці, паприка, мята",
        comment: "Відповідь: Домашній майонез, печені перці, паприка, мята - вірно!"
    },
    {
        question: "Назвіть складові стартеру ХУМУС БАТАТОВИЙ З КРЕВЕТКАМИ",
        answer: "хумус бататовий, креветки, томати чері, карі кешю, олія з часником та цедрою, лайм, мікрогрін",
        comment: "Відповідь: Хумус бататовий, креветки, томати чері, карі кешю, олія з часником та цедрою, лайм, мікрогрін - вірно!"
    },
    {
        question: "Який хліб входить за замовчуванням до хумусу бататового з креветками?",
        answer: "хліб не входить",
        comment: "Відповідь: Хліб не входить - вірно!"
    },
    {
        question: "Які круасани можуть вбити людину з алергією на горіхи?",
        answer: "мигдалевий, маковий, нутеллою, вишнево-мигдалевий",
        comment: "Відповідь: Мигдалевий, маковий, нутеллою, вишнево-мигдалевий - вірно!"
    },
    {
        question: "З чого складається франжепан?",
        answer: "мигдалеве борошно, цукор, яйця, масло вершкове",
        comment: "Відповідь: Мигдалеве борошно, цукор, яйця, масло вершкове - вірно!"
    },
    {
        question: "До яких круасанів входить франжепан?",
        answer: "мигдалевий, маковий, вишнево-мигдалевий",
        comment: "Відповідь: Мигдалевий, маковий, вишнево-мигдалевий - вірно!"
    },
    {
        question: "З чого готується абрикосовий джем?",
        answer: "абрикос, апельсиновий сік, цукор, крохмал кукурузний, цедра апельсина, кориця",
        comment: "Відповідь: Абрикос, апельсиновий сік, цукор, крохмал кукурузний, цедра апельсина, кориця - вірно!"
    },
    {
        question: "З чого складається крамбл шоколадний?",
        answer: "борошно, вершкове масло, цукор, какао",
        comment: "Відповідь: Борошно, вершкове масло, цукор, какао - вірно!"
    },
    {
        question: "У яких круасанах є шоколадний крамбл?",
        answer: "з мусом, з нутелою",
        comment: "Відповідь: З мусом, з нутелою - вірно!"
    },
    {
        question: "Назви складові нутели",
        answer: "цукор, молоко, лісові горіхи, какао, ванілін",
        comment: "Відповідь: Цукор, молоко, лісові горіхи, какао, ванілін - вірно!"
    },
    {
        question: "Які круасани пропітуються сиропм з корицею?",
        answer: "мигдалевий, маковий, вишнево-мигдалевий",
        comment: "Відповідь: Мигдалевий, маковий, вишнево-мигдалевий - вірно!"
    },
    {
        question: "Чим посипається круасан вишнево-мигдалевий?",
        answer: "цукрова пудра, вишнева пудра",
        comment: "Відповідь: Цукрова та вишнева пудри - вірно!"
    },
    {
        question: "Які круасани подаються із соусами у соусниках (а не в середені круасана)?",
        answer: "з абрикосовим джемом, з мусом, з нутелою",
        comment: "Відповідь: З абрикосовим джемом, з мусом, з нутелою - вірно!"
    },
    {
        question: "Який сир входить до солоних круасанів?",
        answer: "гауда",
        comment: "Відповідь: Гауда - вірно!"
    },
    {
        question: "Яке мясо входить до солоних круасанів?",
        answer: "індичка сувід",
        comment: "Відповідь: Індичка сувід - вірно!"
    },
    {
        question: "Суп томатний з нутом та крем- фетою, гаспачо, борщ, сирний суп з креветкою, курячий бульйон, суп із індичим фрекадельками, чернівецький банош - які з названих супів дійсно є у нашому меню??",
        answer: "суп томатний з нутом та крем- фетою, сирний суп з креветкою",
        comment: "Відповідь: Суп томатний з нутом та крем- фетою, сирний суп з креветкою - вірно!"
    },
    {
        question: "З чого складається основа для томатного супа (бульйон)?",
        answer: "морква, цибуля, часник, томати пелатті, карі паста, перець болгарський, нут",
        comment: "Відповідь: Морква, цибуля, часник, томати пелатті, карі паста, перець болгарський, нут - вірно!"
    },
    {
        question: "Що таке крем фета?",
        answer: "сир фета, вершки",
        comment: "Відповідь: Сир фета, вершки - вірно!"
    },
    {
        question: "У чому обсмажується відварний нут який подається на томатному супі?",
        answer: "песто",
        comment: "Відповідь: Песто - вірно!"
    },
    {
        question: "На чому варитись бульйон для сирного супу з креветками?",
        answer: "цибуля, морква, часник, соняшникова олія, панцир креветки, сіль",
        comment: "Відповідь: Цибуля, морква, часник, соняшникова олія, панцир креветки, сіль - вірно!"
    },
    {
        question: "Що ми додаємо до бульйону з креветок, аби суп вважався сирним?",
        answer: "сирний соус",
        comment: "Відповідь: Сирний соус - вірно!"
    },
    {
        question: "Що викладається у сирний суп з креветкою?",
        answer: "креветки, кукурудза консервована, батат печений, соус песто",
        comment: "Відповідь: Креветки, кукурудза консервована, батат печений, соус песто - вірно!"
    },
    {
        question: "На якому хлібі гутуються усі наші мелти?",
        answer: "хліб на заквасці",
        comment: "Відповідь: Хліб на заквасці - вірно!"
    },
    {
        question: "Який соус входить до кожного нашого мелта?",
        answer: "сирний соус",
        comment: "Відповідь: Сирний соус - вірно!"
    },
    {
        question: "До складу яких мелтів входять вялені томати?",
        answer: "мелт-сендвіч з куркою, мелт-сендвіч овочевий",
        comment: "Відповідь: Мелт-сендвіч з куркою, мелт-сендвіч овочевий - вірно!"
    },
    {
        question: "Який сир входить до усін наших мелтів?",
        answer: "моцарела",
        comment: "Відповідь: Моцарела - вірно!"
    },
    {
        question: "Цибуля біла, червоне вино, оцет бальзамічний, цукор, мед - який інгрідієнт НЕ входить до цибулевого джему?",
        answer: "мед",
        comment: "Відповідь: Мед - вірно!"
    },
    {
        question: "До яких мелтів входить цибулевий мелт?",
        answer: "мелт-сендвіч з беконом",
        comment: "Відповідь: Мелт-сендвіч з беконом - вірно!"
    },
    {
        question: "Який ще інгрідієнт окрім бекону та цибулевого джему входить ЛИШЕ до мелт-сендвічу з беконом?",
        answer: "яйце",
        comment: "Відповідь: Яйце - вірно!"
    },
    {
        question: "Я мусульманин (або іудей(єврей)), який мелт ти точно мені НЕ ЗАПРОПОНУЄШ",
        answer: "мелт-сендвіч з беконом, мелт-сендвіч з салями",
        comment: "Відповідь: Мелт-сендвіч з беконом, мелт-сендвіч з салями - вірно!"
    },
    {
        question: "Який соус входить до гарніру у мел-сендвіч сирний?",
        answer: "малиновий дресінг",
        comment: "Відповідь: Малиновий дресінг - вірно!"
    },
    {
        question: "З чого складається соус малиновий дресінг?",
        answer: "олія соняшникова, гірчиця, малиновий оцет, мед",
        comment: "Відповідь: Олія соняшникова, гірчиця, малиновий оцет, мед - вірно!"
    },
    {
        question: "Які спільні інгрідієнти є у мелт-сендвіч з тунцем та мелт-сендвіч овочевий?",
        answer: "хліб на заквасці, сирний соус, консервована кукрудза, цибуля маринована, сир моцарела",
        comment: "Відповідь: Хліб на заквасці, сирний соус, консервована кукрудза, цибуля маринована, сир моцарела - вірно!"
    },
    {
        question: "Які спільні інгрідієнти є у мелт-сендвіч з салямі та мелт-сендвіч овочевий?",
        answer: "хліб на заквасці, сирний соус, печені перці, сир моцарела, крем фета",
        comment: "Відповідь: Хліб на заквасці, сирний соус, печені перці, сир моцарела, крем фета - вірно!"
    },
    {
        question: "Який соус подається до гарніру разом із мелт-сендвіч з тунцем?",
        answer: "соус манго-чілі",
        comment: "Відповідь: Соус манго-чілі - вірно!"
    },
    {
        question: "Назви усі овочі що входять до мелт-сендвіч овочевий?",
        answer: "консервована кукурудза, цибуля маринована, печені перці, вялені томати",
        comment: "Відповідь: Консервована кукурудза, цибуля маринована, печені перці, вялені томати - вірно!"
    },
    {
        question: "Який соус входить до гарніру у мелт-сендвіч овочевий?",
        answer: "соус песто",
        comment: "Відповідь: Соус песто - вірно!"
    },
    {
        question: "З чого складається наш соус песто?",
        answer: "базилік, петрушка, олія соняшникова, горіх грецький, лимоний фреш, часник",
        comment: "Відповідь: Базилік, петрушка, олія соняшникова, горіх грецький, лимоний фреш, часник - вірно!"
    },
    {
        question: "У мене алергія на цибулю, ти прибрав з печінкового паштету цибулевий джем, але я раптом дозамовив мелт-сендвіч з тунцем - твої дії?",
        answer: "прибрати мариновану цибулю",
        comment: "Відповідь: Прибрати мариновану цибулю - вірно!"
    },
    {
        question: "З яких трьох основних інгрідієнтів складається соус манго-чилі?",
        answer: "пюре манго, гірчиця, чоус солодкий чілі",
        comment: "Відповідь: Пюре манго, гірчиця, чоус солодкий чілі - вірно!"
    },
    {
        question: "У мене найсильніша непереносимість лактози, хочу мелт, який порадиш?",
        answer: "жоден",
        comment: "Відповідь: Жоден. Хліб на заквасці містить вершкове масло - вірно!"
    },
    {
        question: "Я веган/вегетеріянець/сироїд/пощу який салат мені порадиш?",
        answer: "салат овочевий з гуакамоле без крем фета",
        comment: "Відповідь: Салат овочевий з гуакамоле без крем фета - вірно!"
    },
    {
        question: "З чого складається гуакамоле?",
        answer: "авокадо, олія оливкова, лимонний фреш, сіль",
        comment: "Відповідь: Авокадо, олія оливкова, лимонний фреш, сіль - вірно!"
    },
    {
        question: "Які томати входять до салату овечеого з гуакамоле?",
        answer: "томати чері та вялені томати",
        comment: "Відповідь: Томати чері та вялені томати - вірно!"
    },
    {
        question: "Чим поливається салат овочевий з гуакамоле?",
        answer: "малиновий дресінг",
        comment: "Відповідь: Малиновий дресінг - вірно!"
    },
    {
        question: "До якого мелту подається малиновий дресінг?",
        answer: "мелт-сендвіч сирний",
        comment: "Відповідь: Мелт-сендвіч сирний - вірно!"
    },
    {
        question: "Чим прикрашається салат овочевий з гуакамоле?",
        answer: "мікрогрін, попкорн з амаранту",
        comment: "Відповідь: Мікрогрін, попкорн з амаранту!"
    },
    {
        question: "У який салат НЕ входить крем фета?",
        answer: "салат з курочкою та картоплею",
        comment: "Відповідь: Салат з курочкою та картоплею!"
    },
    {
        question: "Що входить до салату з лососем та авакадо?",
        answer: "крем фета, мікс салату, авокадо, батат печений, соус песто, лосось слабосолений, томати чері, насіння гарбуза, попкорн з амаранту, мікрогрін",
        comment: "Відповідь: Крем фета, мікс салату, авокадо, батат печений, соус песто, лосось слабосолений, томати чері, насіння гарбуза, попкорн з амаранту, мікрогрін - вірно!"
    },
    {
        question: "Який салат входить до салату з кревткою та бататом?",
        answer: "айсберг",
        comment: "Відповідь: Айсберг - вірно!"
    },
    {
        question: "У чому обсмажуються креветки та запечений батат до салату з креветкою та бататом?",
        answer: "соус теріякі",
        comment: "Відповідь: Соус теріякі - вірно!"
    },
    {
        question: "Які салати поливаються малиновим дресінгом?",
        answer: "салат овочевий з гуакамоле, салат з креветкою та бататом",
        comment: "Відповідь: Салат овочевий з гуакамоле, салат з креветкою та бататом - вірно!"
    },
    {
        question: "В мене алергія на часник, які салати мені НЕ можна (у класичній подачі)?",
        answer: "салат овочевий з гуакамоле, салат з лососем та авокадо",
        comment: "Відповідь: Салат овочевий з гуакамоле, салат з лососем та авокадо - вірно!"
    },
    {
        question: "Які сирники є у меню?",
        answer: "сирники класичні, сирники з солодким мусом та попкорном, сирники солоні",
        comment: "Відповідь: Сирники класичні, сирники з солодким мусом та попкорном, сирники солоні - вірно!"
    },
    {
        question: "Які соуси йдуть до класичних сирників?",
        answer: "грецький йогурт, абрикосовий джем",
        comment: "Відповідь: Грецький йогурт, абрикосовий джем - вірно!"
    },
    {
        question: "Які алергени містить абрикосовий джем?",
        answer: "апельсиновий сік, цедра апельсину, кориця",
        comment: "Відповідь: Апельсиновий сік, цедра апельсину, кориця - вірно!"
    }
    
    // Додайте інші запитання тут
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = document.getElementById('question');
    question.innerText = menuKnowledge[currentQuestion].question;

    const answers = document.getElementById('answers');
    answers.innerHTML = '<input type="text" id="userAnswer" placeholder="Ваша відповідь">' +
        '<button onclick="checkAnswer()">Перевірити</button>';
}

function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value;
    const correctAnswer = menuKnowledge[currentQuestion].answer;
    const comment = menuKnowledge[currentQuestion].comment;

    const commentDiv = document.getElementById('comment');
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        commentDiv.innerText = comment;
        score++;
    } else {
        commentDiv.innerText = `Неправильно. Правильна відповідь: ${correctAnswer}`;
    }

    currentQuestion++;

    if (currentQuestion < menuKnowledge.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const results = document.getElementById('results');
    results.innerHTML = `<p>Тест завершено. Правильних відповідей: ${score} з ${menuKnowledge.length}</p>`;
}

showQuestion();
