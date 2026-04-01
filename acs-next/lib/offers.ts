// lib/offers.ts — CMS-ready offers data. Edit this file to update promotions.

export interface Offer {
  id: string
  tag: { ru: string; en: string }
  title: { ru: string; en: string }
  desc: { ru: string; en: string }
  badge?: { ru: string; en: string }
  validUntil?: string // ISO date string
}

const offers: Offer[] = [
  // Uncomment and edit to activate offers:
  // {
  //   id: 'student',
  //   tag: { ru: 'Студентам', en: 'Students' },
  //   title: { ru: 'Скидка 20% по студенческому', en: '20% off with student ID' },
  //   desc: {
  //     ru: 'Предъявите студенческий билет при заселении.',
  //     en: 'Show your student ID at check-in.',
  //   },
  //   badge: { ru: '−20%', en: '−20%' },
  //   validUntil: '2026-06-30',
  // },
  // {
  //   id: 'combo',
  //   tag: { ru: 'Комбо', en: 'Combo' },
  //   title: { ru: 'Игра + обед = выгода', en: 'Gaming + Lunch = Value' },
  //   desc: {
  //     ru: '2 часа игры и бизнес-ланч по специальной цене.',
  //     en: '2 hours gaming plus a business lunch at a special rate.',
  //   },
  //   badge: { ru: 'Комбо', en: 'Combo' },
  // },
]

export default offers
