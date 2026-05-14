export type Lang = "uz" | "ru";

export const BOT_URL = "https://t.me/hbs_obuna_bot";
export const SUPPORT_URL = "https://t.me/hbs_support";

// Uzbek is the source. Russian mirrors UZ as a placeholder so the toggle works
// and translations can be filled in later without breaking the UI.
type Dict = Record<string, string>;

const uz: Dict = {
  // Header
  "nav.club": "Klub",
  "nav.inside": "Ichkarida",
  "nav.results": "Natijalar",
  "nav.pricing": "Narxlar",
  "nav.faq": "FAQ",
  "nav.cta": "VIP Clubga qo‘shilish",

  // Hero
  "hero.badge": "Yopiq Telegram hamjamiyat",
  "hero.title.1": "ELMAKON ",
  "hero.title.2": "UZBEKISTONDAGI N.1 TREYDERLAR KLUBI",
  "hero.subtitle":
    "Professional treyderlar bilan birga o‘rganing, signal va tahlillardan foydalaning, kripto va aksiya bozorida tajribali hamjamiyat ichida rivojlaning.",
  "hero.cta.primary": "VIP Clubga qo‘shilish",
  "hero.cta.secondary": "Ichkarida nimalar bor?",
  "hero.trust.1": "Telegram yopiq guruh",
  "hero.trust.2": "Tajribali treyderlar",
  "hero.trust.3": "Kripto va aksiya tahlillari",
  "hero.trust.4": "Jonli savol-javob",
  "hero.trial": "Bepul sinov muddati mavjud",

  // What is
  "what.title": "VIP Club o‘zi nima?",
  "what.subtitle":
    "Bu shunchaki guruh emas — bu treyderlar uchun yopiq, ishonchli va o‘zaro yordam beruvchi muhit.",
  "what.1.title": "Yopiq Telegram hamjamiyat",
  "what.1.desc": "Faqat a’zolar uchun. Spam yo‘q, faqat foydali kontent va jonli muloqot.",
  "what.2.title": "Kripto va aksiya tahlillari",
  "what.2.desc": "Har kuni yangi g‘oyalar, texnik va fundamental tahlillar.",
  "what.3.title": "Tajribali treyderlardan yordam",
  "what.3.desc": "Savollaringizga real treyderlar javob beradi — yolg‘iz qolmaysiz.",
  "what.4.title": "Darslar, natijalar va feedbacklar",
  "what.4.desc": "Tizimli o‘rganish, aniq natijalar va a’zolarning fikrlari bir joyda.",

  // Inside
  "inside.title": "VIP Club ichida nimalar bor?",
  "inside.subtitle": "Bir obuna — barcha bo‘limlar. Alohida to‘lov yo‘q.",
  "inside.1.title": "Darslar va materiallar",
  "inside.1.desc": "Boshlang‘ichdan ilg‘or darajagacha tizimli darslar va PDF qo‘llanmalar.",
  "inside.2.title": "Stock g‘oyalar",
  "inside.2.desc": "Aksiya bozoridagi yangi savdo g‘oyalari va kirish nuqtalari.",
  "inside.3.title": "Crypto g‘oyalar",
  "inside.3.desc": "Spot savdolar bo‘yicha kunlik kripto g‘oyalar.",
  "inside.4.title": "Joiz kripto tekshirish",
  "inside.4.desc": "Loyihaning halol va xavfsiz ekanligini tekshirib beramiz.",
  "inside.5.title": "Treyderlar kommyunitisi",
  "inside.5.desc": "Yuzlab treyderlar bilan tajriba almashish va tarmoq qurish.",
  "inside.6.title": "HODL bo‘limi",
  "inside.6.desc": "Uzoq muddatli investitsion portfellar uchun alohida bo‘lim.",
  "inside.7.title": "10$ lik challenge",
  "inside.7.desc": "Kichik kapital bilan katta natija — birga harakat qilamiz.",
  "inside.8.title": "Treyderlar musobaqasi",
  "inside.8.desc": "Oylik musobaqalar va sovrinlar — eng kuchlilarni aniqlaymiz.",
  "inside.9.title": "Jonli savol-javob",
  "inside.9.desc": "Mentorlar bilan haftalik live efirlar va shaxsiy savollar.",

  // Results
  "results.title": "Natijalar va real ko‘rinish",
  "results.subtitle": "Klubning ichidan jonli kadrlar — signal natijalari, tahlillar va a’zolar fikri.",
  "results.label.1": "Signal natijalari",
  "results.label.2": "Club ichidagi darslar",
  "results.label.3": "Feedbacklar",
  "results.label.4": "Joiz kripto tekshiruv bot",
  "results.tg.title": "ELMAKON",
  "results.tg.subtitle": "Yopiq kanal · 400+ a’zo",

  // Who for
  "who.title": "Bu klub kimlar uchun?",
  "who.subtitle": "Tajribangizdan qat’i nazar — bu yerda har kim o‘zi uchun foydali topadi.",
  "who.1.title": "Boshlang‘ich treyderlar",
  "who.1.desc": "Noldan boshlab, qadam-baqadam o‘rganmoqchi bo‘lganlar uchun.",
  "who.2.title": "Investorlar",
  "who.2.desc": "Uzoq muddatli portfel quruvchi va daromad ko‘paytirmoqchilar uchun.",
  "who.3.title": "Tajribali treyderlar",
  "who.3.desc": "G‘oyalarni almashish va kuchli hamjamiyat izlovchilar uchun.",
  "who.4.title": "Yangi sohaga kirmoqchilar",
  "who.4.desc": "Trading nima ekanini ichidan ko‘rib, sinab ko‘rmoqchi bo‘lganlar uchun.",

  // Requirements
  "req.title": "Sizdan nima talab qilinadi?",
  "req.subtitle": "Trading uchun siz o‘ylagandan ham kamroq narsa kerak.",
  "req.no.title": "Sizdan talab qilinmaydi",
  "req.no.1": "Diplom",
  "req.no.2": "Katta tajriba",
  "req.no.3": "Murakkab bilimlar",
  "req.no.4": "Qimmat kurslar",
  "req.yes.title": "Sizdan talab etiladi",
  "req.yes.1": "Internet",
  "req.yes.2": "Telefon yoki kompyuter",
  "req.yes.3": "O‘rganishga xohish",
  "req.yes.4": "Har kuni ozgina vaqt ajratish",

  // How to join
  "join.title": "VIP Clubga qanday qo‘shilish mumkin?",
  "join.subtitle": "Hammasi Telegram bot orqali — 4 ta sodda qadamda, 2 daqiqada.",
  "join.1.title": "Telegram botni oching",
  "join.1.desc": "Quyidagi tugma orqali rasmiy ELMAKON botiga o‘ting va “Start” tugmasini bosing.",
// ... keep existing code
  "join.final.desc": "Botni oching, tarifni tanlang va ELMAKON hamjamiyatining bir qismi bo‘ling.",

  // Pricing
  "price.title": "Obuna narxlari",
  "price.subtitle": "Barcha bo‘limlar shu narx ichida. Alohida to‘lov talab qilinmaydi.",
  "price.monthly": "Oylik",
  "price.monthly.amount": "88 000 so‘m",
  "price.monthly.unit": "/ oy",
  "price.halfyear": "Yarim Yillik",
  "price.halfyear.amount": "475 000 so‘m",
  "price.halfyear.original": "528 000 so‘m",
  "price.halfyear.unit": "/ 6 oy",
  "price.halfyear.badge": "−10% chegirma",
  "price.yearly": "Yillik",
  "price.yearly.amount": "880 000 so‘m",
  "price.yearly.original": "1 056 000 so‘m",
  "price.yearly.unit": "/ yil",
  "price.yearly.badge": "−16.7% chegirma",
  "price.trial": "Sinov muddati — 0 so‘m",
  "price.cta": "Telegram bot orqali qo‘shilish",
  "price.feature.1": "Barcha darslar va materiallar",
  "price.feature.2": "Crypto va Stock g‘oyalar",
  "price.feature.3": "Jonli savol-javob",
  "price.feature.4": "10$ challenge va musobaqalar",
  "price.feature.5": "Mentorlardan to‘g‘ridan-to‘g‘ri yordam",

  // Mentors
  "mentors.title": "Clubning asosiy qiymati — odamlar",
  "mentors.subtitle": "Sizga real tajribali treyderlar yo‘l ko‘rsatadi.",
  "mentor.1.name": "Mamur Bahromov",
  "mentor.1.role": "Kripto treyder",
  "mentor.2.name": "Abdulloh Shokirov",
  "mentor.2.role": "Aksiyalar bo‘yicha treyder",
  "mentor.3.name": "Baxodir Abdurahimov",
  "mentor.3.role": "Aksiyalar bo‘yicha treyder",
  "mentor.4.name": "Mushlihiddin Hayitbaev",
  "mentor.4.role": "CEO and Founder",
  "mentor.5.name": "Eldorbek Sotvoldiev",
  "mentor.5.role": "Kripto treyder",
  "mentor.6.name": "Amirxon Oripov",
  "mentor.6.role": "Kripto treyder",

  // Values
  "values.eyebrow": "Qadriyatlar",
  "values.title": "ELMAKON’da qadriyatlar birinchi o‘rinda",
  "values.subtitle": "Biz uchun halollik, bilim va hamjamiyat — eng muhim ustunlar.",
  "values.1.title": "Joiz va nojoiz kriptolar tekshirish imkoniyati",
  "values.1.desc": "Har bir loyiha shariat va xavfsizlik nuqtai nazaridan tahlil qilinadi — siz halol va ishonchli aktivlarga sarmoya kiritasiz.",
  "values.2.title": "Hamjamiyat va o‘zaro yordam",
  "values.2.desc": "Tajribali treyderlar va boshlovchilar bir-biriga yordam beradi. Yolg‘iz qolmaysiz, savolingizga javob topasiz.",
  "values.3.title": "Tizimli ta’lim va rivojlanish",
  "values.3.desc": "Boshlang‘ichdan ilg‘or darajagacha bosqichma-bosqich darslar — bilim asosida qaror qabul qilasiz.",
  "values.4.title": "Halol va shaffof yondashuv",
  "values.4.desc": "Hech qanday yashirin to‘lov yoki aldov yo‘q — natijalar, signallar va fikrlar ochiq ko‘rsatiladi.",

  // Founder
  "founder.title": "HBS VIP Club asoschisi",
  "founder.name": "Mushlihiddin Hayitbaev",
  "founder.bio":
    "Tadbirkor, treyder va jamoa rahbari. HBS jamoasini boshqaradi va yangi avlod treyderlarini tarbiyalaydi.",
  "founder.badge.1": "HBS kompaniyasi asoschisi",
  "founder.badge.2": "Elmakon marketplace asoschilaridan biri",
  "founder.badge.3": "Trading orqali HBS jamoasi yillik 60% daromad qildi",
  "founder.badge.4": "BFM Electronics savdo direktori",

  // FAQ
  "faq.title": "Tez-tez so‘raladigan savollar",
  "faq.subtitle": "Eng ko‘p so‘raladigan savollarga qisqa javoblar.",
  "faq.q1": "VIP Club o‘zi nima?",
  "faq.a1":
    "VIP Club — yopiq Telegram hamjamiyat bo‘lib, ichida kripto va aksiya bo‘yicha tahlillar, darslar, signallar, jonli efirlar va treyderlar bilan jonli muloqot mavjud.",
  "faq.q2": "VIP Clubga qanday a’zo bo‘laman?",
  "faq.a2":
    "Telegram bot orqali ro‘yxatdan o‘tasiz, qulay obuna turini tanlaysiz va to‘lovdan so‘ng yopiq guruhga avtomatik qo‘shilasiz.",
  "faq.q3": "VIP Club narxi qancha?",
  "faq.a3": "Oylik obuna 88 000 so‘m, yarim yillik obuna esa 475 000 so‘m, bir yillik 880 000 so‘m. Barcha bo‘limlar shu narx ichida.",
  "faq.q4": "VIP Club obunasini qanday bekor qilish mumkin?",
  "faq.a4":
    "Obunani istalgan vaqtda Telegram bot orqali yoki bizning qo‘llab-quvvatlash xizmatiga yozib bekor qilishingiz mumkin.",
  "faq.q5": "VIP Clubda boshlang‘ich darslar ham bormi?",
  "faq.a5":
    "Ha. Tajriba talab qilinmaydi — noldan boshlovchilar uchun alohida darslar va qo‘llanmalar mavjud.",

  // Final CTA
  "final.title": "Bugunoq VIP Clubga qo‘shiling",
  "final.subtitle":
    "Telegramdagi yopiq hamjamiyatga qo‘shiling va treyderlar bilan birga rivojlanishni boshlang.",
  "final.cta": "VIP Clubga qo‘shilish",

  // Footer
  "footer.tagline": "Treyderlar uchun ishonchli yopiq hamjamiyat.",
  "footer.support": "Qo‘llab-quvvatlash",
  "footer.bot": "Telegram bot",
  "footer.rights": "Barcha huquqlar himoyalangan.",
};

// Russian — placeholder mirror (same content) so the toggle works.
const ru: Dict = { ...uz };

export const dictionaries: Record<Lang, Dict> = { uz, ru };
