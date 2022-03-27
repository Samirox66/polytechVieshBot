const ID = {
  STUDY: 'STUDY',
  TRANSFERS: 'TRANSFERS',
  PRACTICE: 'PRACTICE',
  S__BACHELOR: 'BACHELOR',
  S__MASTER: 'S__MASTER',
  S__SPECIALIST: 'S__SPECIALIST',
  P__BACHELOR: 'P__BACHELOR',
  P__MASTER: 'P__MASTER',
  P__SPECIALIST: 'P__SPECIALIST',
  S__B__FULL: 'S__B__FULL',
  S__B__PART: 'S__B__PART',
  S__B__EVENING: 'S__B__EVENING',
  P__B__FULL: 'P__B__FULL',
  P__B__PART: 'P__B__PART',
  P__B__EVENING: 'P__B__EVENING',
  S__M__FULL: 'S__M__FULL',
  S__M__PART: 'S__M__PART',
  S__M__EVENING: 'S__M__EVENING',
  P__M__FULL: 'P__M__FULL',
  P__M__PART: 'P__M__PART',
  P__M__EVENING: 'P__M__EVENING',
  S__S__FULL: 'S__S__FULL',
  S__S__PART: 'S__S__PART',
  S__S__EVENING: 'S__S__EVENING',
  P__S__FULL: 'P__S__FULL',
  P__S__PART: 'P__S__PART',
  P__S__EVENING: 'P__S__EVENING',
  S__B__F__APPLICATIONS: 'S__B__F__APPLICATIONS',
  S__B__F__PROFESSORS: 'S__B__F__PROFESSORS',
  S__B__F__DEBTS: 'S__B__F__DEBTS',
  S__B__F__PAYMENT: 'S__B__F__PAYMENT',
  S__B__F__SCHOLARSHIP: 'S__B__F__SCHOLARSHIP',
  S__B__F__SESSION: 'S__B__F__SESSION',
  S__B__F__GIA: 'S__B__F__GIA',
  S__B__F__VKR: 'S__B__F__VKR',
  S__B__F__OTHER: 'S__B__F__OTHER',
  S__B__P__APPLICATIONS: 'S__B__P__APPLICATIONS',
  S__B__P__PROFESSORS: 'S__B__P__PROFESSORS',
  S__B__P__DEBTS: 'S__B__P__DEBTS',
  S__B__P__PAYMENT: 'S__B__P__PAYMENT',
  S__B__P__SCHOLARSHIP: 'S__B__P__SCHOLARSHIP',
  S__B__P__SESSION: 'S__B__P__SESSION',
  S__B__P__GIA: 'S__B__P__GIA',
  S__B__P__VKR: 'S__B__P__VKR',
  S__B__P__OTHER: 'S__B__P__OTHER',
  S__B__E__APPLICATIONS: 'S__B__E__APPLICATIONS',
  S__B__E__PROFESSORS: 'S__B__E__PROFESSORS',
  S__B__E__DEBTS: 'S__B__E__DEBTS',
  S__B__E__PAYMENT: 'S__B__E__PAYMENT',
  S__B__E__SCHOLARSHIP: 'S__B__E__SCHOLARSHIP',
  S__B__E__SESSION: 'S__B__E__SESSION',
  S__B__E__GIA: 'S__B__E__GIA',
  S__B__E__VKR: 'S__B__E__VKR',
  S__B__E__OTHER: 'S__B__E__OTHER',
  S__M__F__APPLICATIONS: 'S__M__F__APPLICATIONS',
  S__M__F__PROFESSORS: 'S__M__F__PROFESSORS',
  S__M__F__DEBTS: 'S__M__F__DEBTS',
  S__M__F__PAYMENT: 'S__M__F__PAYMENT',
  S__M__F__SCHOLARSHIP: 'S__M__F__SCHOLARSHIP',
  S__M__F__SESSION: 'S__M__F__SESSION',
  S__M__F__GIA: 'S__M__F__GIA',
  S__M__F__VKR: 'S__M__F__VKR',
  S__M__F__OTHER: 'S__M__F__OTHER',
  S__M__P__APPLICATIONS: 'S__M__P__APPLICATIONS',
  S__M__P__PROFESSORS: 'S__M__P__PROFESSORS',
  S__M__P__DEBTS: 'S__M__P__DEBTS',
  S__M__P__PAYMENT: 'S__M__P__PAYMENT',
  S__M__P__SCHOLARSHIP: 'S__M__P__SCHOLARSHIP',
  S__M__P__SESSION: 'S__M__P__SESSION',
  S__M__P__GIA: 'S__M__P__GIA',
  S__M__P__VKR: 'S__M__P__VKR',
  S__M__P__OTHER: 'S__M__P__OTHER',
  S__M__E__APPLICATIONS: 'S__M__E__APPLICATIONS',
  S__M__E__PROFESSORS: 'S__M__E__PROFESSORS',
  S__M__E__DEBTS: 'S__M__E__DEBTS',
  S__M__E__PAYMENT: 'S__M__E__PAYMENT',
  S__M__E__SCHOLARSHIP: 'S__M__E__SCHOLARSHIP',
  S__M__E__SESSION: 'S__M__E__SESSION',
  S__M__E__GIA: 'S__M__E__GIA',
  S__M__E__VKR: 'S__M__E__VKR',
  S__M__E__OTHER: 'S__M__E__OTHER',
  S__S__F__APPLICATIONS: 'S__S__F__APPLICATIONS',
  S__S__F__PROFESSORS: 'S__S__F__PROFESSORS',
  S__S__F__DEBTS: 'S__S__F__DEBTS',
  S__S__F__PAYMENT: 'S__S__F__PAYMENT',
  S__S__F__SCHOLARSHIP: 'S__S__F__SCHOLARSHIP',
  S__S__F__SESSION: 'S__S__F__SESSION',
  S__S__F__GIA: 'S__S__F__GIA',
  S__S__F__VKR: 'S__S__F__VKR',
  S__S__F__OTHER: 'S__S__F__OTHER',
  S__S__P__APPLICATIONS: 'S__S__P__APPLICATIONS',
  S__S__P__PROFESSORS: 'S__S__P__PROFESSORS',
  S__S__P__DEBTS: 'S__S__P__DEBTS',
  S__S__P__PAYMENT: 'S__S__P__PAYMENT',
  S__S__P__SCHOLARSHIP: 'S__S__P__SCHOLARSHIP',
  S__S__P__SESSION: 'S__S__P__SESSION',
  S__S__P__GIA: 'S__S__P__GIA',
  S__S__P__VKR: 'S__S__P__VKR',
  S__S__P__OTHER: 'S__S__P__OTHER',
  S__S__E__APPLICATIONS: 'S__S__E__APPLICATIONS',
  S__S__E__PROFESSORS: 'S__S__E__PROFESSORS',
  S__S__E__DEBTS: 'S__S__E__DEBTS',
  S__S__E__PAYMENT: 'S__S__E__PAYMENT',
  S__S__E__SCHOLARSHIP: 'S__S__E__SCHOLARSHIP',
  S__S__E__SESSION: 'S__S__E__SESSION',
  S__S__E__GIA: 'S__S__E__GIA',
  S__S__E__VKR: 'S__S__E__VKR',
  S__S__E__OTHER: 'S__S__E__OTHER',
  PAPERWORK: 'PAPERWORK',
  DATES: 'DATES',
  TUTOR: 'TUTOR',
  PRACTICE_EXAM: 'PRACTICE_EXAM',
  P__OTHER: 'P__OTHER',
  B__CHOOSE_PROFILE: 'B__CHOOSE_PROFILE',
  B__MOBILITY_MODULE: 'B__MOBILITY_MODULE',
  B__DISCIPLINE_OF_CHOICE: 'B__DISCIPLINE_OF_CHOICE',
  B__ELECTIVE: 'B__ELECTIVE',
  S__CHOOSE_PROFILE: 'S__CHOOSE_PROFILE',
  S__MOBILITY_MODULE: 'S__MOBILITY_MODULE',
  S__DISCIPLINE_OF_CHOICE: 'S__DISCIPLINE_OF_CHOICE',
  S__ELECTIVE: 'S__ELECTIVE',
  M__MOBILITY_MODULE: 'M__MOBILITY_MODULE',
  M__DISCIPLINE_OF_CHOICE: 'M__DISCIPLINE_OF_CHOICE',
  ADDITIONAL_SESSION: 'ADDITIONAL_SESSION',
  COMMISSION: 'COMMISSION',
  NUMBER_OF_DEBTS: 'NUMBER_OF_DEBTS',
  MAIN: 'MAIN',
}

module.exports = ID;