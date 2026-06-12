export const CONTACT_PHONES = ['9405754107']

export const CONTACT_EMAIL = 'growwcodeit@gmail.com'

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/growwcode-com/',
  instagram: 'https://www.instagram.com/growwcode.com_?igsh=Z3R1cXlmMm96bGF2',
  facebook: 'https://www.facebook.com/share/1Bg4m8eWBA/',
  whatsapp: `https://wa.me/91${CONTACT_PHONES[0]}`,
}

export const SOCIAL_PROFILES = [
  SOCIAL_LINKS.linkedin,
  SOCIAL_LINKS.instagram,
  SOCIAL_LINKS.facebook,
]

export function formatPhone(phone) {
  return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`
}
