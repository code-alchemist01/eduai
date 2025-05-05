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

export const middleSchoolData: GradeData[] = [
  {
    id: '5',
    title: '5. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türkçe',
        units: [
          { id: 'theme1', title: 'Oyun Dünyası' },
          { id: 'theme2', title: 'Atatürk\'ü Tanımak' },
          { id: 'theme3', title: 'Duygularımı Tanıyorum' },
          { id: 'theme4', title: 'Geleneklerimiz' },
          { id: 'theme5', title: 'İletişim ve Sosyal İlişkiler' },
          { id: 'theme6', title: 'Sağlıklı Yaşıyorum' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { id: 'unit1', title: 'Geometrik Şekiller' },
          { id: 'unit2', title: 'Doğal Sayılar ve İşlemler' },
          { id: 'unit3', title: 'Geometrik Nicelikler' },
          { id: 'unit4', title: 'Kesirler' },
          { id: 'unit5', title: 'İstatistiksel Araştırma Süreci' },
          { id: 'unit6', title: 'İşlemlerle Cebirsel Düşünme' },
          { id: 'unit7', title: 'Veriden Olasılığa' }
        ]
      },
      {
        id: 'science',
        title: 'Fen Bilimleri',
        units: [
          { id: 'unit1', title: 'Gökyüzündeki Komşularımız ve Biz' },
          { id: 'unit2', title: 'Kuvveti Tanıyalım' },
          { id: 'unit3', title: 'Canlıların Yapısına Yolculuk' },
          { id: 'unit4', title: 'Işığın Dünyası' },
          { id: 'unit5', title: 'Maddenin Doğası' },
          { id: 'unit6', title: 'Yaşamımızdaki Elektrik' },
          { id: 'unit7', title: 'Sürdürülebilir Yaşam ve Geri Dönüşüm' }
        ]
      },
      {
        id: 'social',
        title: 'Sosyal Bilgiler',
        units: [
          { id: 'unit1', title: 'Birlikte Yaşamak' },
          { id: 'unit2', title: 'Evimiz Dünya' },
          { id: 'unit3', title: 'Ortak Mirasımız' },
          { id: 'unit4', title: 'Yaşayan Demokrasimiz' },
          { id: 'unit5', title: 'Hayatımızdaki Ekonomi' }
        ]
      },
      {
        id: 'religion',
        title: 'Din Kültürü ve Ahlak Bilgisi',
        units: [
          { id: 'unit1', title: 'Allah İnancı' },
          { id: 'unit2', title: 'Namaz' },
          { id: 'unit3', title: 'Kur\'ân-ı Kerim' },
          { id: 'unit4', title: 'Peygamber Kıssaları' },
          { id: 'unit5', title: 'Mimarimizde Dinî Motifler' }
        ]
      }
    ]
  },
  {
    id: '6',
    title: '6. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türkçe',
        units: [
          { id: 'theme1', title: 'Dilimizin Zenginliği' },
          { id: 'theme2', title: 'Bağımsızlık Yolu' },
          { id: 'theme3', title: 'Farklı Dünyalar' },
          { id: 'theme4', title: 'İletişim ve Sosyal İlişkiler' },
          { id: 'theme5', title: 'Bilim ve Teknoloji' },
          { id: 'theme6', title: 'Lider Ruhlar' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { id: 'unit1', title: 'Doğal Sayılarla İşlemler' },
          { id: 'unit2', title: 'Çarpanlar ve Katlar' },
          { id: 'unit3', title: 'Kümeler' },
          { id: 'unit4', title: 'Tam Sayılar' },
          { id: 'unit5', title: 'Kesirlerle İşlemler' },
          { id: 'unit6', title: 'Ondalık Gösterim' },
          { id: 'unit7', title: 'Oran' },
          { id: 'unit8', title: 'Cebirsel İfadeler' },
          { id: 'unit9', title: 'Veri Toplama ve Değerlendirme' },
          { id: 'unit10', title: 'Veri Analizi' },
          { id: 'unit11', title: 'Açılar' },
          { id: 'unit12', title: 'Alan Ölçme' },
          { id: 'unit13', title: 'Çember' },
          { id: 'unit14', title: 'Geometrik Cisimler' },
          { id: 'unit15', title: 'Sıvı Ölçme' }
        ]
      },
      {
        id: 'science',
        title: 'Fen Bilimleri',
        units: [
          { id: 'unit1', title: 'Güneş Sistemi ve Tutulmalar' },
          { id: 'unit2', title: 'Kuvvetin Etkisinde Hareket' },
          { id: 'unit3', title: 'Canlılarda Sistemler' },
          { id: 'unit4', title: 'Işığın Yansıması ve Renkler' },
          { id: 'unit5', title: 'Maddenin Ayırt Edici Özellikleri' },
          { id: 'unit6', title: 'Elektriğin İletimi ve Direnç' },
          { id: 'unit7', title: 'Sürdürülebilir Yaşam ve Etkileşim' }
        ]
      },
      {
        id: 'social',
        title: 'Sosyal Bilgiler',
        units: [
          { id: 'unit1', title: 'Birey ve Toplum' },
          { id: 'unit2', title: 'Kültür ve Miras' },
          { id: 'unit3', title: 'İnsanlar, Yerler ve Çevreler' },
          { id: 'unit4', title: 'Üretim, Dağıtım ve Tüketim' },
          { id: 'unit5', title: 'Etkin Vatandaşlık' },
          { id: 'unit6', title: 'Bilim, Teknoloji ve Toplum' }
        ]
      },
      {
        id: 'religion',
        title: 'Din Kültürü ve Ahlak Bilgisi',
        units: [
          { id: 'unit1', title: 'Allah\'ın (c.c.) Elçileri: Peygamberler' },
          { id: 'unit2', title: 'Namaz İbadeti ve Önemi' },
          { id: 'unit3', title: 'Kur\'ân-ı Kerim\'in Temel Özellikleri' },
          { id: 'unit4', title: 'Ahlâkî Davranışlar' },
          { id: 'unit5', title: 'Günümüzde Dinin Yansımaları' }
        ]
      }
    ]
  },
  {
    id: '7',
    title: '7. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türkçe',
        units: [
          { id: 'theme1', title: 'Hayat Boyu Gelişim' },
          { id: 'theme2', title: 'Bir Hilal Uğruna' },
          { id: 'theme3', title: 'İletişim ve Sosyal İlişkiler' },
          { id: 'theme4', title: 'Türk Sanatı' },
          { id: 'theme5', title: 'Okuma Kültürü' },
          { id: 'theme6', title: 'Hak ve Sorumluluklar' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { id: 'unit1', title: 'Tam Sayılarla İşlemler' },
          { id: 'unit2', title: 'Rasyonel Sayılar ve İşlemler' },
          { id: 'unit3', title: 'Cebirsel İfadeler' },
          { id: 'unit4', title: 'Oran-Orantı' },
          { id: 'unit5', title: 'Doğrusal Denklemler' },
          { id: 'unit6', title: 'Veri Analizi ve Olasılık' },
          { id: 'unit7', title: 'Açılar ve Üçgenler' },
          { id: 'unit8', title: 'Dörtgenler' },
          { id: 'unit9', title: 'Çember ve Daire' },
          { id: 'unit10', title: 'Geometrik Cisimler' }
        ]
      },
      {
        id: 'science',
        title: 'Fen Bilimleri',
        units: [
          { id: 'unit1', title: 'Saf Madde ve Karışımlar' },
          { id: 'unit2', title: 'Işığın Madde ile Etkileşimi' },
          { id: 'unit3', title: 'Canlılarda Üreme, Büyüme ve Gelişme' },
          { id: 'unit4', title: 'Elektronik Devreler ve Elektrik' },
          { id: 'unit5', title: 'Yıkıcı Doğa Olayları' },
          { id: 'unit6', title: 'Sürdürülebilir Yaşam ve Geri Dönüşüm' },
          { id: 'unit7', title: 'Bilim, Teknoloji ve Toplum' }
        ]
      },
      {
        id: 'social',
        title: 'Sosyal Bilgiler',
        units: [
          { id: 'unit1', title: 'Demokrasi ve Katılım' },
          { id: 'unit2', title: 'Ekonomi, Üretim ve Tüketim' },
          { id: 'unit3', title: 'Coğrafya: Yeryüzünde Yaşam' },
          { id: 'unit4', title: 'Tarih: İlk Türk-İslam Devletleri' },
          { id: 'unit5', title: 'Kültür ve Miras' },
          { id: 'unit6', title: 'Güncel Küresel Sorunlar' }
        ]
      },
      {
        id: 'religion',
        title: 'Din Kültürü ve Ahlak Bilgisi',
        units: [
          { id: 'unit1', title: 'Melek ve Ahiret İnancı' },
          { id: 'unit2', title: 'Hac ve Kurban İbadetleri' },
          { id: 'unit3', title: 'Ahlâkî Davranışlar' },
          { id: 'unit4', title: 'Hz. Muhammed\'in Örnekliği' },
          { id: 'unit5', title: 'İslam Düşüncesinde Yorumlar' }
        ]
      }
    ]
  },
  {
    id: '8',
    title: '8. Sınıf',
    subjects: [
      {
        id: 'turkish',
        title: 'Türkçe',
        units: [
          { id: 'theme1', title: 'İletişim ve Sosyal İlişkiler' },
          { id: 'theme2', title: 'Vatan Sevgisi' },
          { id: 'theme3', title: 'Doğa ve İnsan' },
          { id: 'theme4', title: 'Türk Hikâye Geleneği ve Destanları' },
          { id: 'theme5', title: 'Sanat ve Estetik' },
          { id: 'theme6', title: 'Akademik Düşünme Dünyası' }
        ]
      },
      {
        id: 'math',
        title: 'Matematik',
        units: [
          { id: 'unit1', title: 'Üslü ve Köklü İfadeler' },
          { id: 'unit2', title: 'Cebirsel İfadeler ve Eşitsizlikler' },
          { id: 'unit3', title: 'Oran, Orantı ve Yüzdeler' },
          { id: 'unit4', title: 'Fonksiyon Kavramı' },
          { id: 'unit5', title: 'Veri Analizi ve Olasılık' },
          { id: 'unit6', title: 'Çember ve Daire' },
          { id: 'unit7', title: 'Dönüşümler ve Simetri' },
          { id: 'unit8', title: 'Denklem Çözme Teknikleri' }
        ]
      },
      {
        id: 'science',
        title: 'Fen Bilimleri',
        units: [
          { id: 'unit1', title: 'Madde ve Özellikleri' },
          { id: 'unit2', title: 'Kuvvet ve Basınç' },
          { id: 'unit3', title: 'Elektrik Devreleri' },
          { id: 'unit4', title: 'Birimler ve Ölçme' },
          { id: 'unit5', title: 'Işık Olayları' },
          { id: 'unit6', title: 'Canlılarda Enerji Dönüşümleri' },
          { id: 'unit7', title: 'İklim Değişikliği ve Çevre Bilimi' }
        ]
      },
      {
        id: 'social',
        title: 'Sosyal Bilgiler',
        units: [
          { id: 'unit1', title: 'Cumhuriyet ve Demokrasi Kültürü' },
          { id: 'unit2', title: 'Ekonomi: Vergi, Bütçe ve Finans' },
          { id: 'unit3', title: 'Coğrafya: Türkiye\'nin Beşeri ve Fiziki Coğrafyası' },
          { id: 'unit4', title: 'Tarih: Çağdaş Dünya Tarihi' },
          { id: 'unit5', title: 'İnsan Hakları ve Temel Özgürlükler' }
        ]
      },
      {
        id: 'religion',
        title: 'Din Kültürü ve Ahlak Bilgisi',
        units: [
          { id: 'unit1', title: 'Kader İnancı' },
          { id: 'unit2', title: 'Zekât ve Sadaka' },
          { id: 'unit3', title: 'Din ve Hayat İlişkisi' },
          { id: 'unit4', title: 'Hz. Muhammed\'in Örnekliği' },
          { id: 'unit5', title: 'Kur\'ân-ı Kerim ve Özellikleri' }
        ]
      }
    ]
  }
];