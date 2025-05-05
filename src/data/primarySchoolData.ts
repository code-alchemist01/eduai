interface Subject {
  id: string;
  title: string;
  units: {
    id: string;
    title: string;
    topics?: string[];
  }[];
}

interface GradeData {
  id: string;
  title: string;
  subjects: Subject[];
}

export const primarySchoolData: GradeData[] = [
  {
    id: '1',
    title: '1. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türkçe',
        units: [
          { id: 'theme1', title: 'Güzel Davranışlarımız' },
          { id: 'theme2', title: 'Mustafa Kemal\'den Atatürk\'e' },
          { id: 'theme3', title: 'Çevremizdeki Yaşam' },
          { id: 'theme4', title: 'Yol Arkadaşımız Kitaplar' },
          { id: 'theme5', title: 'Yeteneklerimizi Keşfediyoruz' },
          { id: 'theme6', title: 'Minik Kaşifler' },
          { id: 'theme7', title: 'Atalarımızın İzleri' },
          { id: 'theme8', title: 'Sorumluluklarımızın Farkındayız' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { id: 'unit1', title: 'Uzamsal İlişkiler & Tartma' },
          { id: 'unit2', title: 'Doğal Sayılar' },
          { id: 'unit3', title: 'Toplama ve Çıkarma' },
          { id: 'unit4', title: 'Paralarımız' },
          { id: 'unit5', title: 'Kesirler | Zaman Ölçme | Geometrik Çizimler ve Örüntüler' },
          { id: 'unit6', title: 'Veri Toplama ve Değerlendirme | Uzunluk Ölçme | Sıvı Ölçme' }
        ]
      },
      {
        id: 'life',
        title: 'Hayat Bilgisi',
        units: [
          { id: 'unit1', title: 'Okulumuzda Hayat' },
          { id: 'unit2', title: 'Evimizde Hayat' },
          { id: 'unit3', title: 'Sağlıklı Hayat' },
          { id: 'unit4', title: 'Güvenli Hayat' },
          { id: 'unit5', title: 'Ülkemizde Hayat' },
          { id: 'unit6', title: 'Doğada Hayat' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: '2. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türkçe',
        units: [
          { id: 'theme1', title: 'Değerlerimizle Varız' },
          { id: 'theme2', title: 'Atatürk ve Çocuk' },
          { id: 'theme3', title: 'Doğada Neler Oluyor?' },
          { id: 'theme4', title: 'Okuma Serüvenimiz' },
          { id: 'theme5', title: 'Yeteneklerimizi Tanıyoruz' },
          { id: 'theme6', title: 'Mucit Çocuk' },
          { id: 'theme7', title: 'Kültür Hazinemiz' },
          { id: 'theme8', title: 'Haklarımızı Biliyoruz' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { id: 'unit1', title: 'Doğal Sayılar' },
          { id: 'unit2', title: 'Doğal Sayılarla Toplama ve Çıkarma' },
          { id: 'unit3', title: 'Sıvı Ölçme' },
          { id: 'unit4', title: 'Geometrik Cisimler ve Şekiller' },
          { id: 'unit5', title: 'Uzamsal İlişkiler | Geometrik Örüntüler' },
          { id: 'unit6', title: 'Çarpma ve Bölme | Kesirler | Zaman Ölçme | Paralarımız | Veri Toplama ve Tartma' }
        ]
      },
      {
        id: 'life',
        title: 'Hayat Bilgisi',
        units: [
          { id: 'unit1', title: 'Okulumuzda Hayat' },
          { id: 'unit2', title: 'Evimizde Hayat' },
          { id: 'unit3', title: 'Sağlıklı Hayat' },
          { id: 'unit4', title: 'Güvenli Hayat' },
          { id: 'unit5', title: 'Ülkemizde Hayat' },
          { id: 'unit6', title: 'Doğada Hayat' }
        ]
      }
    ]
  },
  {
    id: '3',
    title: '3. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türkçe',
        units: [
          { id: 'theme1', title: 'Değerlerimizle Yaşıyoruz' },
          { id: 'theme2', title: 'Atatürk ve Kahramanlarımız' },
          { id: 'theme3', title: 'Doğayı Tanıyoruz' },
          { id: 'theme4', title: 'Bilgi Hazinemiz' },
          { id: 'theme5', title: 'Yeteneklerimizi Kullanıyoruz' },
          { id: 'theme6', title: 'Bilim Yolculuğu' },
          { id: 'theme7', title: 'Millî Kültürümüz' },
          { id: 'theme8', title: 'Hak ve Sorumluluklarımız' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { id: 'unit1', title: 'Doğal Sayılar & İşlemler' },
          { id: 'unit2', title: 'Toplama/Çıkarma Stratejileri' },
          { id: 'unit3', title: 'Çarpma ve Bölme' },
          { id: 'unit4', title: 'Kesirler, Zaman Ölçme, Paralarımız, Tartma' },
          { id: 'unit5', title: 'Geometrik Cisimler, Şekiller, Örüntüler, Nokta‑Doğru‑Açı, Simetri' },
          { id: 'unit6', title: 'Uzunluk/Çevre/Alan Ölçme, Sıvı Ölçme, Veri Toplama ve Değerlendirme' }
        ]
      },
      {
        id: 'life',
        title: 'Hayat Bilgisi',
        units: [
          { id: 'unit1', title: 'Okulumuzda Hayat' },
          { id: 'unit2', title: 'Evimizde Hayat' },
          { id: 'unit3', title: 'Sağlıklı Hayat' },
          { id: 'unit4', title: 'Güvenli Hayat' },
          { id: 'unit5', title: 'Ülkemizde Hayat' },
          { id: 'unit6', title: 'Doğada Hayat' }
        ]
      },
      {
        id: 'science',
        title: 'Fen Bilimleri',
        units: [
          { id: 'unit1', title: 'Gezegenimizi Tanıyalım / Dünya ve Evren' },
          { id: 'unit2', title: 'Beş Duyumuz / Canlılar ve Yaşam' },
          { id: 'unit3', title: 'Kuvveti Tanıyalım / Fiziksel Olaylar' },
          { id: 'unit4', title: 'Maddenin Hâlleri / Maddeyi Tanıyalım' },
          { id: 'unit5', title: 'Çevremizdeki Işık ve Sesler' },
          { id: 'unit6', title: 'Canlılar Dünyasına Yolculuk' },
          { id: 'unit7', title: 'Elektrikli Araçlar & Güvenlik' }
        ]
      }
    ]
  },
  {
    id: '4',
    title: '4. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türkçe',
        units: [
          { id: 'theme1', title: 'Erdemler' },
          { id: 'theme2', title: 'Millî Mücadele ve Atatürk' },
          { id: 'theme3', title: 'Doğa ve İnsan' },
          { id: 'theme4', title: 'Kütüphanemiz' },
          { id: 'theme5', title: 'Kendimizi Geliştiriyoruz' },
          { id: 'theme6', title: 'Bilim ve Teknoloji' },
          { id: 'theme7', title: 'Geçmişten Geleceğe Mirasımız' },
          { id: 'theme8', title: 'Demokratik Yaşam' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { id: 'unit1', title: 'Doğal Sayılar & Temel İşlemler' },
          { id: 'unit2', title: 'Toplama/Çıkarma Problemleri' },
          { id: 'unit3', title: 'Çarpma/Bölme İşlemleri' },
          { id: 'unit4', title: 'Kesirler, Zaman Ölçme, Veri Toplama ve Değerlendirme' },
          { id: 'unit5', title: 'Geometrik Cisimler ve Kavramlar, Uzamsal İlişkiler, Uzunluk Ölçme' },
          { id: 'unit6', title: 'Çevre Ölçme, Alan Ölçme, Tartma, Sıvı Ölçme' }
        ]
      },
      {
        id: 'social',
        title: 'Sosyal Bilgiler',
        units: [
          { id: 'unit1', title: 'Birey ve Toplum' },
          { id: 'unit2', title: 'Kültür ve Miras' },
          { id: 'unit3', title: 'İnsanlar, Yerler ve Çevre' },
          { id: 'unit4', title: 'Bilim, Teknoloji ve Toplum' },
          { id: 'unit5', title: 'Üretim, Dağıtım ve Tüketim' },
          { id: 'unit6', title: 'Etkin Vatandaşlık' }
        ]
      },
      {
        id: 'science',
        title: 'Fen Bilimleri',
        units: [
          { id: 'unit1', title: 'Bilime Yolculuk' },
          { id: 'unit2', title: 'Sağlıklı Besleniyorum' },
          { id: 'unit3', title: 'Dünyamızı Keşfedelim' },
          { id: 'unit4', title: 'Maddenin Değişimi' },
          { id: 'unit5', title: 'Mıknatısı Keşfediyorum' },
          { id: 'unit6', title: 'Enerji Dedektifleri' },
          { id: 'unit7', title: 'Işığın Peşinde' },
          { id: 'unit8', title: 'Sürdürülebilir Şehirler ve Topluluklar' }
        ]
      }
    ]
  }
];