import { GYM_INFO } from './utils';

export function generateWhatsAppLink(message?: string): string {
  const number = GYM_INFO.whatsapp.replace(/[^0-9]/g, '');
  const text =
    message ||
    'Hi! I want to join UGRAMM FITNESS. Please share the membership details.';
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_TEMPLATES = {
  membership_expiry_7days: (name: string, date: string) =>
    `Hello ${name}! 🦁\n\nYour UGRAMM FITNESS membership expires on *${date}*.\n\nRenew now and continue your fitness journey! 💪\n\nCall/WhatsApp: ${GYM_INFO.phone}`,

  membership_expiry_1day: (name: string) =>
    `Hello ${name}! ⚠️\n\nYour UGRAMM FITNESS membership expires *TOMORROW*.\n\nDon't break your streak! Renew today.\n\nCall: ${GYM_INFO.phone}`,

  membership_expired: (name: string) =>
    `Hello ${name}! 🦁\n\nYour UGRAMM FITNESS membership has *expired*.\n\nCome back stronger! Renew your membership today.\n\nCall: ${GYM_INFO.phone}`,

  birthday: (name: string) =>
    `Happy Birthday ${name}! 🎂🦁\n\nWishing you strength, health, and success!\n\nWith love from the UGRAMM FITNESS family. 💪`,

  welcome: (name: string, memberId: string) =>
    `Welcome to UGRAMM FITNESS ${name}! 🦁\n\nYour Member ID: *${memberId}*\n\n*RISE. ROAR. RULE.*\n\nFor any queries: ${GYM_INFO.phone}`,

  enquiry_followup: (name: string) =>
    `Hello ${name}! 👋\n\nThank you for your interest in UGRAMM FITNESS.\n\nWe'd love to give you a *FREE trial session*!\n\nWhen would you like to visit?\n\n📍 ${GYM_INFO.address}`,
};
