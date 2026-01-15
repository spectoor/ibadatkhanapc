import { getSunset } from 'sunrise-sunset-js';
export const telephonePresident = '+262 692 78 78 13';
export const telephoneImame = '+262 692 51 52 39';

export const email = 'ibadatkhanapc@gmail.com';

export const facebookUrl = 'https://www.facebook.com/IbadatKhanaPlateauCaillou/?locale=fr_FR';
export const helloAssoUrl = 'https://www.helloasso.com/associations/association-musulmane-sunnite-de-plateau-caillou';
export const prayerTimes = [
  {
    prayer: 'Fadjr',
    time: '05:10'
  },
  {
    prayer: 'Zohr',
    time: '13:00'
  },
  {
    prayer: 'Djoummah',
    time: '12:50'
  },
  {
    prayer: 'Asr',
    time: '18:00'
  },
  {
    prayer: 'Mahgrib',
    time: getSunset(-21.0094, 55.2708, new Date())?.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false })
  },
  {
    prayer: 'Isha',
    time: '20:40'
  },
];

export const madressahTimes = [
  {
    days: 'Lundi - Mardi - Jeudi - Vendredi',
    time : '16h15 - 18h00'
  },
  {
    days: 'Mercredi - Samedi',
    time : '14h00 - 16h00'
  }
]
