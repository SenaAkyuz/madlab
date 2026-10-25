import type { Service } from "@/lib/types";

export const services: Service[] = [
  { name: "Jel Manikür", price: 450, duration: 70, description: "Kalıcı jel oje ile 3–4 hafta çatlamayan, parlak bir manikür." },
  { name: "Klasik Manikür", price: 300, duration: 45, description: "Şekillendirme, kütikül bakımı ve klasik oje; kısa sürede bakımlı eller." },
  { name: "Pedikür", price: 550, duration: 75, description: "Ayak bakımı, nasır temizliği, peeling ve kalıcı oje seçeneğiyle." },
  { name: "Protez Tırnak (tam set)", price: 850, duration: 130, description: "Akrilik, polygel veya Gel-X ile istediğin şekil ve uzunlukta tam set." },
  { name: "Dolgu (Fill)", price: 600, duration: 90, description: "Uzayan tırnak diplerinin yenilenmesi, form ve renk tazelenir." },
  { name: "Nail Art (parmak başı)", price: 40, plus: true, duration: 10, description: "Çizim, taş, folyo ya da sticker; detay seviyesine göre fiyat artar." },
  { name: "Tırnak Bakımı & Onarım", price: 250, duration: 40, description: "Kırık veya zayıflamış tırnakların onarımı ve besleyici bakım." },
  { name: "Gelin Seti", price: 1200, plus: true, duration: 150, description: "Deneme randevusu dahil, düğün gününe özel tasarlanan set." },
  { name: "Kaldırma (Removal)", price: 150, duration: 30, description: "Jel veya protezin tırnağa zarar vermeden güvenle çıkarılması." },
];
