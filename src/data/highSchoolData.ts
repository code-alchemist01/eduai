interface Unit {
  id: string;
  title: string;
  topics?: string[];
}

interface Subject {
  id: string;
  title: string;
  units: Unit[];
}

interface GradeData {
  id: string;
  title: string;
  subjects: Subject[];
}

export const highSchoolData: GradeData[] = [
  {
    id: '9',
    title: '9. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türk Dili ve Edebiyatı',
        units: [
          { id: 'unit1', title: 'Yazılı-Anlatım Etkinlikleri' },
          { id: 'unit2', title: 'Şiir' },
          { id: 'unit3', title: 'Hikâye' },
          { id: 'unit4', title: 'Roman I. Dönem' },
          { id: 'unit5', title: 'Roman II. Dönem' },
          { id: 'unit6', title: 'Tiyatro' },
          { id: 'unit7', title: 'Biyografi/Otobiyografi' },
          { id: 'unit8', title: 'Mektup/E-Posta' },
          { id: 'unit9', title: 'Günlük/Blog' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { 
            id: 'logic',
            title: 'Mantık',
            topics: ['Önermeler ve Bileşik Önermeler']
          },
          {
            id: 'sets',
            title: 'Kümeler',
            topics: ['Kümelerde Temel Kavramlar', 'Kümelerde İşlemler']
          },
          {
            id: 'equations',
            title: 'Denklemler ve Eşitsizlikler',
            topics: [
              'Sayı Kümeleri',
              'Bölünebilme Kuralları',
              'Birinci Dereceden Denklemler ve Eşitsizlikler',
              'Üslü İfadeler ve Denklemler',
              'Denklemler ve Eşitsizliklerle İlgili Uygulamalar'
            ]
          },
          {
            id: 'triangles',
            title: 'Üçgenler',
            topics: [
              'Üçgenlerde Temel Kavramlar',
              'Üçgenlerde Eşlik ve Benzerlik',
              'Üçgenlerin Yardımcı Elemanları',
              'Dik Üçgen ve Trigonometri',
              'Üçgenin Alanı'
            ]
          },
          {
            id: 'data',
            title: 'Veri',
            topics: [
              'Merkezî Eğilim ve Yayılım Ölçüleri',
              'Verilerin Grafikle Gösterilmesi'
            ]
          }
        ]
      },
      {
        id: 'physics',
        title: 'Fizik',
        units: [
          { id: 'unit1', title: 'Fizik Bilimine Giriş' },
          { id: 'unit2', title: 'Madde ve Özellikleri' },
          { id: 'unit3', title: 'Hareket ve Kuvvet' },
          { id: 'unit4', title: 'Enerji' },
          { id: 'unit5', title: 'Isı ve Sıcaklık' },
          { id: 'unit6', title: 'Elektrostatik' }
        ]
      },
      {
        id: 'chemistry',
        title: 'Kimya',
        units: [
          { id: 'unit1', title: 'Kimyanın Temel Kanunları ve Kimyasal Hesaplamalar' },
          { id: 'unit2', title: 'Karışımlar' },
          { id: 'unit3', title: 'Asitler, Bazlar ve Tuzlar' }
        ]
      },
      {
        id: 'history',
        title: 'Tarih',
        units: [
          { id: 'unit1', title: 'Tarih ve Zaman' },
          { id: 'unit2', title: 'İnsanlığın İlk Dönemleri' },
          { id: 'unit3', title: 'Orta Çağ\'da Dünya' },
          { id: 'unit4', title: 'İlk ve Orta Çağlarda Türk Dünyası' },
          { id: 'unit5', title: 'İslam Medeniyetinin Doğuşu' },
          { id: 'unit6', title: 'Türklerin İslamiyet\'i Kabulü ve İlk Türk İslam Devletleri' }
        ]
      },
      {
        id: 'religion',
        title: 'Din Kültürü ve Ahlak Bilgisi',
        units: [
          { id: 'unit1', title: 'Bilgi ve İnanç' },
          { id: 'unit2', title: 'Din ve İslam' },
          { id: 'unit3', title: 'İslam ve İbadet' },
          { id: 'unit4', title: 'Gençlik ve Değerler' },
          { id: 'unit5', title: 'Gönül Coğrafyamız' }
        ]
      },
      {
        id: 'geography',
        title: 'Coğrafya',
        units: [
          { id: 'unit1', title: 'Doğal Sistemler' },
          { id: 'unit2', title: 'Beşeri Sistemler' },
          { id: 'unit3', title: 'Küresel Ortam: Bölgeler ve Ülkeler' },
          { id: 'unit4', title: 'Çevre ve Toplum' }
        ]
      }
    ]
  },
  {
    id: '10',
    title: '10. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türk Dili ve Edebiyatı',
        units: [
          { id: 'unit1', title: 'Giriş I. Dönem' },
          { id: 'unit2', title: 'Hikâye' },
          { id: 'unit3', title: 'Şiir' },
          { id: 'unit4', title: 'Makale' },
          { id: 'unit5', title: 'Sohbet ve Fıkra' },
          { id: 'unit6', title: 'Roman I. Dönem' },
          { id: 'unit7', title: 'Anı (Hatıra)' },
          { id: 'unit8', title: 'Haber Metni' },
          { id: 'unit9', title: 'Gezi Yazısı' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          {
            id: 'probability',
            title: 'Sıralama ve Seçme',
            topics: ['Basit Olayların Olasılıkları']
          },
          {
            id: 'functions',
            title: 'Fonksiyon Kavramı ve Gösterimi',
            topics: ['Fonksiyonların Bileşkesi ve Tersi']
          },
          {
            id: 'polynomials',
            title: 'Polinom Kavramı ve İşlemler',
            topics: ['Polinomların Çarpanlara Ayrılması']
          },
          { id: 'equations', title: 'İkinci Dereceden Denklemler' },
          { id: 'geometry', title: 'Dörtgenler ve Çokgenler' },
          { id: 'space', title: 'Uzay Geometri' }
        ]
      },
      {
        id: 'physics',
        title: 'Fizik',
        units: [
          { id: 'unit1', title: 'Elektrik ve Manyetizma' },
          { id: 'unit2', title: 'Basınç ve Kaldırma Kuvveti' },
          { id: 'unit3', title: 'Dalgalar' },
          { id: 'unit4', title: 'Optik' }
        ]
      },
      {
        id: 'chemistry',
        title: 'Kimya',
        units: [
          { id: 'unit1', title: 'Kimyanın Temel Kanunları ve Kimyasal Hesaplamalar' },
          { id: 'unit2', title: 'Karışımlar' },
          { id: 'unit3', title: 'Asitler, Bazlar ve Tuzlar' }
        ]
      },
      {
        id: 'history',
        title: 'Tarih',
        units: [
          { id: 'unit1', title: 'Yerleşme ve Devletleşme Sürecinde Selçuklu Türkiyesi' },
          { id: 'unit2', title: 'Beylikten Devlete Osmanlı Siyaseti (1302-1453)' },
          { id: 'unit3', title: 'Devletleşme Sürecinde Savaşçılar ve Askerler' },
          { id: 'unit4', title: 'Beylikten Devlete Osmanlı Medeniyeti' },
          { id: 'unit5', title: 'Dünya Gücü Osmanlı (1453-1595)' },
          { id: 'unit6', title: 'Sultan ve Osmanlı Merkez Teşkilatı' },
          { id: 'unit7', title: 'Klasik Çağda Osmanlı Toplum Düzeni' }
        ]
      },
      {
        id: 'religion',
        title: 'Din Kültürü ve Ahlak Bilgisi',
        units: [
          { id: 'unit1', title: 'Allah-İnsan İlişkisi' },
          { id: 'unit2', title: 'Hz. Muhammed ve Gençlik' },
          { id: 'unit3', title: 'Din ve Hayat' },
          { id: 'unit4', title: 'Ahlaki Tutum ve Davranışlar' },
          { id: 'unit5', title: 'İslam Düşüncesinde İtikadi, Siyasi ve Fıkhi Yorumlar' }
        ]
      },
      {
        id: 'geography',
        title: 'Coğrafya',
        units: [
          { id: 'unit1', title: 'Doğal Sistemler' },
          { id: 'unit2', title: 'Beşeri Sistemler' },
          { id: 'unit3', title: 'Küresel Ortam: Bölgeler ve Ülkeler' },
          { id: 'unit4', title: 'Çevre ve Toplum' }
        ]
      },
      {
        id: 'philosophy',
        title: 'Felsefe',
        units: [
          { id: 'unit1', title: 'Felsefeyi Tanıma' },
          { id: 'unit2', title: 'Felsefeyle Düşünme' },
          { id: 'unit3', title: 'Felsefenin Temel Konuları ve Problemleri' },
          { id: 'unit4', title: 'Felsefi Okuma ve Yazma' }
        ]
      }
    ]
  },
  {
    id: '11',
    title: '11. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türk Dili ve Edebiyatı',
        units: [
          { id: 'unit1', title: 'Giriş I. Dönem' },
          { id: 'unit2', title: 'Hikâye' },
          { id: 'unit3', title: 'Şiir' },
          { id: 'unit4', title: 'Makale' },
          { id: 'unit5', title: 'Sohbet ve Fıkra' },
          { id: 'unit6', title: 'Roman II. Dönem' },
          { id: 'unit7', title: 'Tiyatro' },
          { id: 'unit8', title: 'Eleştiri' },
          { id: 'unit9', title: 'Mülakat/Röportaj' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { id: 'unit1', title: 'Trigonometri' },
          { id: 'unit2', title: 'Analitik Geometri' },
          { id: 'unit3', title: 'Fonksiyonlarda Uygulamalar' },
          { id: 'unit4', title: 'Denklem ve Eşitsizlik Sistemleri' },
          { id: 'unit5', title: 'Çember ve Daire' },
          { id: 'unit6', title: 'Uzay Geometri' },
          { id: 'unit7', title: 'Olasılık' }
        ]
      },
      {
        id: 'physics',
        title: 'Fizik',
        units: [
          { id: 'unit1', title: 'Kuvvet ve Hareket' },
          { id: 'unit2', title: 'Elektrik ve Manyetizma' }
        ]
      },
      {
        id: 'chemistry',
        title: 'Kimya',
        units: [
          { id: 'unit1', title: 'Modern Atom Teorisi' },
          { id: 'unit2', title: 'Periyodik Sistem ve Elektron Dizilimleri' },
          { id: 'unit3', title: 'Kimyasal Bağlar ve Madde Özellikleri' },
          { id: 'unit4', title: 'Gazlar, Çözeltiler ve Kimyasal Denge' },
          { id: 'unit5', title: 'Tepkimeler Hızı ve Enerji Değişimleri' },
          { id: 'unit6', title: 'Organik Kimyaya Giriş' }
        ]
      },
      {
        id: 'history',
        title: 'Tarih',
        units: [
          { id: 'unit1', title: 'Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti (1595-1774)' },
          { id: 'unit2', title: 'Değişim Çağında Avrupa ve Osmanlı' },
          { id: 'unit3', title: 'Uluslararası İlişkilerde Denge Stratejisi (1774-1914)' },
          { id: 'unit4', title: 'Devrimler Çağında Değişen Devlet-Toplum İlişkileri' },
          { id: 'unit5', title: 'Sermaye ve Emek' },
          { id: 'unit6', title: 'XIX ve XX. Yüzyılda Değişen Gündelik Hayat' }
        ]
      },
      {
        id: 'religion',
        title: 'Din Kültürü ve Ahlak Bilgisi',
        units: [
          { id: 'unit1', title: 'Dünya ve Ahiret' },
          { id: 'unit2', title: 'Kur\'an\'a Göre Hz. Muhammed' },
          { id: 'unit3', title: 'Kur\'an\'da Bazı Kavramlar' },
          { id: 'unit4', title: 'İnançla İlgili Meseleler' },
          { id: 'unit5', title: 'Yahudilik ve Hıristiyanlık' }
        ]
      },
      {
        id: 'geography',
        title: 'Coğrafya',
        units: [
          { id: 'unit1', title: 'Doğal Sistemler' },
          { id: 'unit2', title: 'Beşeri Sistemler' },
          { id: 'unit3', title: 'Küresel Ortam: Bölgeler ve Ülkeler' },
          { id: 'unit4', title: 'Çevre ve Toplum' }
        ]
      },
      {
        id: 'philosophy',
        title: 'Felsefe',
        units: [
          { id: 'unit1', title: 'MÖ 6. Yüzyıl – MS 2. Yüzyıl Felsefesi' },
          { id: 'unit2', title: 'MS 2. Yüzyıl – MS 15. Yüzyıl Felsefesi' },
          { id: 'unit3', title: '15. Yüzyıl – 17. Yüzyıl Felsefesi' },
          { id: 'unit4', title: '18. Yüzyıl – 19. Yüzyıl Felsefesi' },
          { id: 'unit5', title: '20. Yüzyıl Felsefesi' }
        ]
      }
    ]
  },
  {
    id: '12',
    title: '12. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türk Dili ve Edebiyatı',
        units: [
          { id: 'unit1', title: 'Giriş I. Dönem' },
          { id: 'unit2', title: 'Hikâye' },
          { id: 'unit3', title: 'Şiir' },
          { id: 'unit4', title: 'Roman' },
          { id: 'unit5', title: 'Tiyatro' },
          { id: 'unit6', title: 'Deneme' },
          { id: 'unit7', title: 'Söylev/Nutuk' },
          { id: 'unit8', title: 'Eleştiri' },
          { id: 'unit9', title: 'Mülakat/Röportaj' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { id: 'unit1', title: 'Üstel ve Logaritmik Fonksiyonlar' },
          { id: 'unit2', title: 'Diziler' },
          { id: 'unit3', title: 'Trigonometri' },
          { id: 'unit4', title: 'Dönüşümler' },
          { id: 'unit5', title: 'Türev' },
          { id: 'unit6', title: 'İntegral' },
          { id: 'unit7', title: 'Analitik Geometri' }
        ]
      },
      {
        id: 'physics',
        title: 'Fizik',
        units: [
          { id: 'unit1', title: 'Çembersel Hareket' },
          { id: 'unit2', title: 'Basit Harmonik Hareket' },
          { id: 'unit3', title: 'Dalga Mekaniği' },
          { id: 'unit4', title: 'Atom Fiziğine Giriş ve Radyoaktivite' },
          { id: 'unit5', title: 'Modern Fizik' },
          { id: 'unit6', title: 'Modern Fiziğin Teknolojideki Uygulamaları' }
        ]
      },
      {
        id: 'chemistry',
        title: 'Kimya',
        units: [
          { id: 'unit1', title: 'Kimya ve Elektrik (Elektrokimya)' },
          { id: 'unit2', title: 'Karbon Kimyasına Giriş' },
          { id: 'unit3', title: 'Biyomoleküller' },
          { id: 'unit4', title: 'Endüstriyel Kimya ve Çevre' }
        ]
      }
    ]
  }
];