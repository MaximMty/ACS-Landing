// lib/content.ts — Bilingual content. Switch lang with the Language context.

export type Lang = 'ru' | 'en'

export const content = {
  nav: {
    links: {
      ru: ['Форматы', 'Ресторан', 'Цены', 'Галерея', 'Контакты'],
      en: ['Formats', 'Restaurant', 'Pricing', 'Gallery', 'Contact'],
    },
    hrefs: ['#formats', '#restaurant', '#pricing', '#gallery', '#contact'],
    cta: { ru: 'Забронировать', en: 'Book Now' },
    langSwitch: { ru: 'EN', en: 'RU' },
  },

  hero: {
    eyebrow: {
      ru: 'Москва, центр города',
      en: 'Moscow, City Centre',
    },
    headline: {
      ru: 'Приватные игровые комнаты, ресторан и пространство для отдыха\nв центре Москвы',
      en: 'Private gaming rooms, restaurant and a space to relax\nin the heart of Moscow',
    },
    pills: {
      ru: ['Полная приватность', 'Комфорт и атмосфера', 'Центр города'],
      en: ['Complete Privacy', 'Comfort & Atmosphere', 'City Centre'],
    },
    cta1: { ru: 'Забронировать', en: 'Book Now' },
    cta2: { ru: 'Позвонить', en: 'Call Us' },
    scroll: { ru: 'листайте', en: 'scroll' },
  },

  formats: {
    tag: { ru: 'Форматы посещения', en: 'Visit Formats' },
    title: { ru: 'Как вы можете провести время', en: 'How You Can Spend Your Time' },
    items: [
      {
        id: 'club',
        image: '/images/format_club.jpg',
        tag: { ru: 'Клуб', en: 'Club' },
        title: { ru: 'Приватные PC-комнаты', en: 'Private PC Rooms' },
        desc: {
          ru: 'Отдельные комнаты с профессиональными ПК. Никаких посторонних — только ваша компания.',
          en: 'Separate rooms with high-end PCs. No strangers — just your group.',
        },
        for: { ru: 'Для: геймеров, пар, друзей', en: 'For: gamers, couples, friends' },
      },
      {
        id: 'vip',
        image: '/images/format_vip.jpg',
        tag: { ru: 'VIP', en: 'VIP' },
        title: { ru: 'VIP-пространства', en: 'VIP Spaces' },
        desc: {
          ru: 'Просторные комнаты с диванами, большим экраном и расширенным сервисом.',
          en: 'Spacious rooms with sofas, large screen and premium service.',
        },
        for: { ru: 'Для: групп до 8 человек', en: 'For: groups up to 8' },
      },
      {
        id: 'restaurant',
        image: '/images/format_restaurant.jpg',
        tag: { ru: 'Ресторан', en: 'Restaurant' },
        title: { ru: 'Только поесть — тоже можно', en: 'Just Dining — No Gaming Required' },
        desc: {
          ru: 'Полноценный ресторан внутри пространства. Можно прийти без игрового сеанса.',
          en: 'A full restaurant inside the venue. You can visit without booking a gaming session.',
        },
        for: { ru: 'Для: всех гостей', en: 'For: all guests' },
      },
      {
        id: 'bootcamp',
        image: '/images/format_bootcamp.jpg',
        tag: { ru: 'Буткемп', en: 'Bootcamp' },
        title: { ru: 'Тренировки и буткемпы', en: 'Training & Bootcamps' },
        desc: {
          ru: 'Идеальные условия для командных тренировок, турниров и игровых марафонов.',
          en: 'Perfect conditions for team training, tournaments and gaming marathons.',
        },
        for: { ru: 'Для: команд, киберспортсменов', en: 'For: teams, esports players' },
      },
      {
        id: 'events',
        image: '/images/gallery_vip.jpg',
        tag: { ru: 'Мероприятия', en: 'Events' },
        title: { ru: 'Съёмки и корпоративы', en: 'Filming & Brand Events' },
        desc: {
          ru: 'Уникальное пространство для брендовых съёмок, корпоративных мероприятий и презентаций.',
          en: 'A unique venue for brand shoots, corporate events and product launches.',
        },
        for: { ru: 'Для: брендов и команд', en: 'For: brands and companies' },
      },
    ],
  },

  restaurant: {
    tag: { ru: 'Ресторан', en: 'Restaurant' },
    title: { ru: 'Можно прийти\nпросто поесть', en: 'Come Just\nto Eat' },
    desc: {
      ru: 'Неоновый ресторан внутри клуба с полноценным меню — от завтраков до коктейлей. Атмосфера уникальная, кухня — настоящая.',
      en: 'A neon restaurant inside the venue with a full menu — from breakfast to cocktails. Unique atmosphere, real cuisine.',
    },
    note: {
      ru: 'Игровой сеанс не обязателен',
      en: 'No gaming session required',
    },
    cta: { ru: 'Смотреть меню', en: 'View Menu' },
    menuHref: '#', // replace with PDF or IG link
  },

  pricing: {
    tag: { ru: 'Цены', en: 'Pricing' },
    title: { ru: 'Форматы и тарифы', en: 'Formats & Tariffs' },
    note: {
      ru: 'Итоговая стоимость зависит от длительности сеанса и состава группы',
      en: 'Final cost depends on session duration and group size',
    },
    plans: [
      {
        id: 'standard',
        name: { ru: 'Стандарт', en: 'Standard' },
        desc: { ru: 'Приватная PC-комната', en: 'Private PC room' },
        price: { ru: 'от 300 ₽/ч', en: 'from 300 ₽/hr' },
        features: {
          ru: ['1–2 человека', 'Профессиональный ПК', '240 Гц монитор', 'Заказ еды из комнаты'],
          en: ['1–2 people', 'Pro PC setup', '240 Hz monitor', 'In-room food ordering'],
        },
        featured: false,
      },
      {
        id: 'vip',
        name: { ru: 'VIP', en: 'VIP' },
        desc: { ru: 'Просторный приватный зал', en: 'Spacious private suite' },
        price: { ru: 'от 500 ₽/ч', en: 'from 500 ₽/hr' },
        features: {
          ru: ['до 8 человек', 'Диваны и зона отдыха', 'Большой экран', 'Приоритетный сервис'],
          en: ['up to 8 people', 'Sofas and lounge area', 'Large screen', 'Priority service'],
        },
        featured: true,
      },
      {
        id: 'streaming',
        name: { ru: 'Стриминг', en: 'Streaming' },
        desc: { ru: 'Комната для стримов и съёмок', en: 'Room for streams and shoots' },
        price: { ru: 'от 700 ₽/ч', en: 'from 700 ₽/hr' },
        features: {
          ru: ['Профстудийное освещение', 'Зелёный экран', 'Стриминг-оборудование', 'Звукоизоляция'],
          en: ['Pro studio lighting', 'Green screen', 'Streaming equipment', 'Soundproofed'],
        },
        featured: false,
      },
    ],
  },

  howItWorks: {
    tag: { ru: 'Как это работает', en: 'How It Works' },
    title: { ru: 'Четыре шага до\nвашего сеанса', en: 'Four Steps to\nYour Session' },
    steps: [
      {
        n: '01',
        title: { ru: 'Выберите формат', en: 'Choose a Format' },
        desc: { ru: 'Клуб, VIP или ресторан — решайте, что вам нужно сегодня.', en: 'Club, VIP or restaurant — decide what you need today.' },
      },
      {
        n: '02',
        title: { ru: 'Напишите или позвоните', en: 'Message or Call' },
        desc: { ru: 'Свяжитесь с нами в Telegram или по телефону — ответим быстро.', en: 'Contact us via Telegram or phone — we respond quickly.' },
      },
      {
        n: '03',
        title: { ru: 'Выберите дату и время', en: 'Pick Date & Time' },
        desc: { ru: 'Зафиксируем бронь в удобное для вас время.', en: "We'll confirm your booking at a time that works for you." },
      },
      {
        n: '04',
        title: { ru: 'Приходите и отдыхайте', en: 'Arrive & Enjoy' },
        desc: { ru: 'Администратор встретит вас и поможет со всем. Остальное — на нас.', en: 'Our team welcomes you and takes care of everything else.' },
      },
    ],
  },

  gallery: {
    tag: { ru: 'Галерея', en: 'Gallery' },
    title: { ru: 'Пространство ACS', en: 'The ACS Space' },
  },

  offers: {
    tag: { ru: 'Актуальные предложения', en: 'Current Offers' },
    title: { ru: 'Специальные условия', en: 'Special Offers' },
    empty: {
      ru: 'Следите за обновлениями — скоро появятся новые предложения.',
      en: 'Check back soon — new offers coming shortly.',
    },
  },

  contact: {
    tag: { ru: 'Контакты', en: 'Contact' },
    title: { ru: 'Приходите\nв ACS', en: 'Visit\nACS' },
    address: { ru: 'Москва, Тверская ул., 1\n(уточняется)', en: 'Moscow, Tverskaya St., 1\n(to be confirmed)' },
    hours: { ru: 'Ежедневно, 24/7', en: 'Open daily, 24/7' },
    parking: { ru: 'Бесплатная парковка рядом', en: 'Free parking nearby' },
    phone: '+7 (999) 000-00-00',
    telegram: 'https://t.me/ACS_Moscow',
    cta1: { ru: 'Написать в Telegram', en: 'Message on Telegram' },
    cta2: { ru: 'Позвонить', en: 'Call' },
  },

  faq: {
    tag: { ru: 'Частые вопросы', en: 'FAQ' },
    title: { ru: 'Ответы на\nчастые вопросы', en: 'Answers to\nCommon Questions' },
    items: [
      {
        q: { ru: 'Можно ли прийти одному?', en: 'Can I come alone?' },
        a: { ru: 'Да, у нас есть одиночные PC-комнаты. Можно забронировать на любое время.', en: 'Yes, we have single-player PC rooms available for any duration.' },
      },
      {
        q: { ru: 'Нужно ли бронировать заранее?', en: 'Do I need to book in advance?' },
        a: { ru: 'Рекомендуем бронировать заранее — особенно в выходные. Мы постараемся принять и без брони при наличии мест.', en: 'We recommend booking ahead, especially on weekends. Walk-ins are welcome if rooms are available.' },
      },
      {
        q: { ru: 'Можно прийти только в ресторан?', en: 'Can I just visit the restaurant?' },
        a: { ru: 'Да. Ресторан работает независимо от игровых сеансов — просто приходите.', en: 'Absolutely. The restaurant operates independently of gaming sessions — just walk in.' },
      },
      {
        q: { ru: 'Есть ли парковка?', en: 'Is parking available?' },
        a: { ru: 'Рядом с нами есть бесплатная парковка. Точный адрес — на карте ниже.', en: 'Free parking is available nearby. See the map below for exact location.' },
      },
      {
        q: { ru: 'Как проходит визит?', en: 'How does a visit work?' },
        a: { ru: 'Вас встречает администратор, помогает с заселением в комнату. Заказ еды и напитков — с вашего терминала прямо в комнате.', en: 'Our admin team greets you and helps you settle into your room. Order food and drinks from your in-room terminal.' },
      },
      {
        q: { ru: 'Можно ли приносить еду с собой?', en: 'Can I bring outside food?' },
        a: { ru: 'Нет. Это позволяет нам поддерживать качество и стандарты пространства. У нас есть полноценный ресторан — рекомендуем попробовать.', en: 'No. This allows us to maintain our quality standards. We have a full restaurant — we recommend trying it.' },
      },
    ],
  },

  footer: {
    tagline: { ru: 'Пространство нового уровня', en: 'Next-Level Space' },
    socials: [
      { label: 'Instagram', href: 'https://instagram.com/acs_moscow', icon: 'ig' },
      { label: 'Telegram', href: 'https://t.me/ACS_Moscow', icon: 'tg' },
    ],
    copyright: { ru: '© 2026 ACS — Avulus Cyber Space', en: '© 2026 ACS — Avulus Cyber Space' },
    built: { ru: 'Москва', en: 'Moscow' },
  },

  stickyBar: {
    cta1: { ru: 'Telegram', en: 'Telegram' },
    cta2: { ru: 'Позвонить', en: 'Call' },
  },
}
