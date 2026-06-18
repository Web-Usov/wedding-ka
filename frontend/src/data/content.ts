export const WEDDING_DATE = '2024-06-15T15:00:00';

export const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzcKxPlGW4mp0hezyNT4EirZeecAoVVWT0Z-wREJoE2bQPqbsxjCj6Yn_LQ6QB8lCY9/exec';

export const content = {
  hero: {
    subtitle: 'ПРИГЛАШЕНИЕ НА СВАДЬБУ',
    name1: 'Марк',
    name2: 'Анна',
    date: '15 июня 2024',
  },
  invitation: {
    title: 'Дорогие родные и близкие!',
    paragraphs: [
      'Мы рады сообщить вам, что совсем скоро состоится самое важное событие в нашей жизни — наша свадьба!',
      'Этот день мы хотим разделить с самыми дорогими для нас людьми. Будем счастливы видеть каждого из вас!',
    ],
    timerLabel: 'Наша свадьба состоится через:',
    dressCodeAccent: 'Дресс-код',
  },
  dressCode: {
    title: 'Дресс-код',
    text: 'Для нас главное — ваше присутствие! Но мы будем рады, если в своих нарядах вы поддержите цветовую гамму и стиль нашей свадьбы.',
    colors: [
      { name: 'Таупе', value: '#9C8E82' },
      { name: 'Белый', value: '#FFFFFF', border: true },
      { name: 'Оливковый', value: '#6B6B3C' },
      { name: 'Чёрный', value: '#1A1A1A' },
    ],
  },
  details: {
    title: 'Детали',
    items: [
      {
        icon: 'rose',
        heading: 'ЦВЕТЫ',
        text: 'Наш праздник будет окружён изобилием цветов, поэтому приятным комплиментом для нас вместо букета будет бутылка вашего любимого вина, которую мы откроем на ближайшем совместном празднике.',
      },
      {
        icon: 'gift',
        heading: 'ЧТО ДАРИТЬ?',
        text: 'В качестве подарка будем рады вкладу в бюджет нашей семьи. Он точно поможет воплотить нашу мечту в реальность!',
      },
      {
        icon: 'hands',
        heading: 'МАЛЕНЬКИЕ ГОСТИ',
        text: 'Дорогие гости, мы будем благодарны, если вы посвятите нашему дню всё своё внимание и энергию. Поэтому будем признательны, если наш праздник пройдёт в кругу взрослых.',
      },
      {
        icon: 'firework',
        heading: 'СЮРПРИЗЫ',
        text: 'Возьмите с собой отличное настроение, приветствуются ваши поздравления, активное участие в интерактивах, творческие выступления!',
        contact: 'Анастасия +7 922 254 66 50',
      },
    ],
  },
  timing: {
    title: 'Тайминг',
    events: [
      { time: '15:00', label: 'СБОР ГОСТЕЙ', offset: 'right' as const },
      { time: '15:30', label: 'ТОРЖЕСТВЕННАЯ ЦЕРЕМОНИЯ', offset: 'left' as const },
      { time: '16:00', label: 'ФУРШЕТ', offset: 'right' as const },
      { time: '17:00', label: 'ПРАЗДНИЧНЫЙ УЖИН', offset: 'left' as const },
    ],
  },
  location: {
    title: 'Локация',
    venue: 'Ресторан «Название»',
    address: 'Астраханская улица, 102, к8',
    mapLink: 'https://yandex.ru/maps/?rtext=~61.2574,73.4013',
    mapImage: 'https://static-maps.yandex.ru/1.x/?ll=61.2574,73.4013&z=15&l=map&pt=61.2574,73.4013,pm2rdl&size=600,400',
  },
  rsvp: {
    title: 'Мы ждём именно вас!',
    dateInfo: '15 июня | Суббота | 15:00',
    form: {
      namePlaceholder: 'Имя Фамилия',
      phonePlaceholder: 'Ваш телефон',
      allergyPlaceholder: 'Есть ли у вас аллергия? Если да, укажите на что',
      plusOnePlaceholder: 'Приду с парой (имя, фамилия)',
      vegetarianLabel: 'Необходимо ли вегетарианское меню?',
      vegetarianOptions: ['Нет', 'Да'],
      attendanceLabel: 'Сможете ли присутствовать?',
      attendanceOptions: ['С радостью приду!', 'К сожалению, не смогу'],
      drinksLabel: 'Буду пить',
      drinksOptions: ['Мартини', 'Вино красное', 'Вино белое', 'Виски', 'Водка', 'Не буду пить алкоголь'],
      submitButton: 'Отправить',
      successMessage: 'Спасибо! Мы получили ваш ответ ❤️',
    },
  },
};
