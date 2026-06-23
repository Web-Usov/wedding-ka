export const WEDDING_DATE = '2026-07-13T16:00:00';

export const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzcKxPlGW4mp0hezyNT4EirZeecAoVVWT0Z-wREJoE2bQPqbsxjCj6Yn_LQ6QB8lCY9/exec';

export const PHOTO_UPLOAD_URL = 'https://app.tamadoba.tech/public/gallery/cCjvU3GX';

export const content = {
  hero: {
    subtitle: 'ПРИГЛАШЕНИЕ НА СВАДЬБУ',
    name1: 'Алексей',
    name2: 'Екатерина',
    date: '13 июля 2026',
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
      { name: 'Розовый', value: '#F5D5D0' },
      { name: 'Жёлтый', value: '#F3E5BC' },
      { name: 'Бежевый', value: '#D1BFA3' },
      { name: 'Зелёный', value: '#B5C7A5' },
      { name: 'Голубой', value: '#C0D6E4' },
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
        // contact: 'Анастасия +7 922 254 66 50',
      },
      {
        icon: 'microphone',
        heading: 'ВЕДУЩИЙ',
        text: 'Вы можете связаться с нашим ведущим для пожеланий, конкурсов, розыгрышей и любых идей, которые сделают наш праздник незабываемым!',
        contact: 'Марк +7 937 068 9793',
      },
    ],
  },
  timing: {
    title: 'Тайминг',
    events: [
      { time: '16:00', label: 'ВЕЛКОМ ЗОНА', offset: 'right' as const },
      { time: '16:30', label: 'ТОРЖЕСТВЕННАЯ ЦЕРЕМОНИЯ', offset: 'left' as const },
      { time: '17:00', label: 'ПРАЗДНИЧНЫЙ УЖИН', offset: 'right' as const },
    ],
  },
  location: {
    title: 'Локация',
    venue: 'Эко отель «Маяк», малый зал',
    address: 'г. Самара',
    mapLink: 'https://yandex.ru/maps/-/CTE1FXKn',
    mapImage: 'https://static-maps.yandex.ru/1.x/?ll=49.939119,53.470268&z=15&l=map&pt=49.939119,53.470268,pm2rdl&size=600,400',
  },
  rsvp: {
    title: 'Мы ждём именно вас!',
    dateInfo: '13 июля | Понедельник | 16:00',
    form: {
      namePlaceholder: 'Имя Фамилия',
      phonePlaceholder: 'Ваш телефон',
      attendanceLabel: 'Сможете ли присутствовать?',
      attendanceOptions: ['С радостью приду!', 'К сожалению, не смогу'],
      drinksLabel: 'Буду пить',
      drinksOptions: ['Вино красное', 'Вино белое', 'Виски', 'Водка', 'Не буду пить алкоголь'],
      submitButton: 'Отправить',
      successMessage: 'Спасибо! Мы получили ваш ответ ❤️',
    },
  },
  photoUpload: {
    title: 'Делимся моментами',
    text: 'Загружайте фотографии с нашей свадьбы в общий альбом. Отсканируйте QR-код или перейдите по ссылке.',
    buttonText: 'Загрузить фото',
  },
  music: {
    title: 'All of Me — John Legend',
    audioUrl: '', // Замените на прямую ссылку к аудиофайлу
  },
};
