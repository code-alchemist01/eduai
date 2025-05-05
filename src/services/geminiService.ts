import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.REACT_APP_GEMINI_API_KEY) {
  throw new Error('REACT_APP_GEMINI_API_KEY çevre değişkenlerinde tanımlanmamış. Lütfen .env dosyasını kontrol edin.');
}

const API_KEY = 'AIzaSyB7VdiQTbhMOloXgRnGdf4DrDAGTPMEH5I';
const genAI = new GoogleGenerativeAI(API_KEY);

interface ContentGenerationParams {
  level: string;
  grade: string;
  subject: string;
  topic: string;
}

interface TestGenerationParams extends ContentGenerationParams {
  difficulty?: 'easy' | 'medium' | 'hard';
  questionCount?: number;
}

const getSubjectSpecificPrompt = (params: ContentGenerationParams): string => {
  const subjectPrompts: Record<string, string> = {
    'matematik': `Matematik konusu için detaylı bir anlatım oluştur:
    - Konunun temel kavramlarını ve tanımlarını açıkla
    - Formülleri ve matematiksel ifadeleri adım adım göster
    - Çözümlü örnek problemler ekle
    - Günlük hayattan uygulama örnekleri ver
    - Konuyla ilgili önemli ipuçları ve püf noktaları belirt
    - Sık yapılan hataları ve bunlardan kaçınma yollarını açıkla`,
    
    'fizik': `Fizik konusu için detaylı bir anlatım oluştur:
    - Fiziksel kavramları ve kanunları açıkla
    - Formülleri ve birimleri göster
    - Deney ve gözlemleri anlat
    - Günlük hayattan fizik uygulamalarını örnekle
    - Problemleri adım adım çöz
    - Konuyla ilgili teknolojik uygulamaları açıkla`,
    
    'kimya': `Kimya konusu için detaylı bir anlatım oluştur:
    - Kimyasal kavramları ve terimleri tanımla
    - Kimyasal reaksiyonları ve denklemleri göster
    - Laboratuvar deneyleri ve güvenlik kurallarını açıkla
    - Günlük hayatta kimyanın yerini örnekle
    - Moleküler yapıları ve bağları açıkla
    - Çevre ve sürdürülebilirlik bağlantılarını kur`,
    
    'biyoloji': `Biyoloji konusu için detaylı bir anlatım oluştur:
    - Biyolojik yapıları ve sistemleri açıkla
    - Canlı örnekleri ve yaşam döngülerini göster
    - Mikroskobik ve makroskobik süreçleri anlat
    - Ekolojik ilişkileri ve çevre etkileşimlerini açıkla
    - Sağlık ve hastalık bağlantılarını kur
    - Güncel biyolojik araştırmaları ve uygulamaları paylaş`,
    
    'turkce': `Türkçe konusu için detaylı bir anlatım oluştur:
    - Dil bilgisi kurallarını açıkla
    - Örnek metinler ve analizler ekle
    - Yazım ve noktalama kurallarını göster
    - Edebi sanatları ve kullanımlarını açıkla
    - Metin türlerini ve özelliklerini anlat
    - Pratik uygulama önerileri sun`,
    
    'tarih': `Tarih konusu için detaylı bir anlatım oluştur:
    - Tarihi olayları kronolojik sırayla anlat
    - Önemli kişileri ve rollerini tanıt
    - Dönemin sosyal ve kültürel özelliklerini açıkla
    - Neden-sonuç ilişkilerini kur
    - Görsel malzemeler ve haritalar ekle
    - Günümüze etkileri ve çıkarılacak dersleri belirt`
  };

  const gradeSpecificInstructions: Record<string, string> = {
    '1': 'Basit ve somut örneklerle, görsellerle destekleyerek anlat.',
    '2': 'Temel kavramları örneklerle pekiştirerek anlat.',
    '3': 'Günlük hayat bağlantıları kurarak detaylı açıkla.',
    '4': 'Analitik düşünmeyi teşvik eden karmaşık örnekler ekle.',
    '5': 'İleri düzey kavramları ve uygulamaları detaylı açıkla.',
    '6': 'Konular arası bağlantılar kurarak kapsamlı bir anlatım yap.',
    '7': 'Eleştirel düşünmeyi teşvik eden tartışma konuları ekle.',
    '8': 'Akademik düzeyde detaylı ve analitik bir anlatım yap.',
    '9': 'Üniversite hazırlık düzeyinde kapsamlı örnekler ver.',
    '10': 'Üniversite sınavına yönelik püf noktaları ve çözüm stratejileri ekle.',
    '11': 'TYT konularıyla bağlantılar kurarak tekrar yap.',
    '12': 'AYT odaklı ileri düzey konu anlatımı yap.'
  };

  const basePrompt = subjectPrompts[params.subject.toLowerCase()] || `${params.subject} konusu için detaylı bir anlatım oluştur`;
  const gradeInstruction = gradeSpecificInstructions[params.grade] || '';

  return `${basePrompt}\n\nSınıf düzeyine özel notlar:\n${gradeInstruction}\n\nKonu: ${params.topic}`;
};

const getTestPrompt = (params: TestGenerationParams): string => {
  return `Lütfen ${params.subject} dersi ${params.topic} konusu için ${params.questionCount || 5} adet test sorusu oluştur.

Zorluk seviyesi: ${params.difficulty || 'medium'}

Soruları aşağıdaki formatta hazırla:

TEST BAŞLANGIÇ

SORU 1:
[Soru metni]

A) [Seçenek]
B) [Seçenek]
C) [Seçenek]
D) [Seçenek]

Açıklama: [Bu sorunun detaylı açıklaması, doğru cevabın nedeni ve yanlış cevapların neden yanlış olduğu]

SORU 2:
[Soru metni]

A) [Seçenek]
B) [Seçenek]
C) [Seçenek]
D) [Seçenek]

Açıklama: [Bu sorunun detaylı açıklaması, doğru cevabın nedeni ve yanlış cevapların neden yanlış olduğu]

[Diğer sorular...]

CEVAP ANAHTARI:
1. [Doğru cevap harfi]
2. [Doğru cevap harfi]
3. [Doğru cevap harfi]
4. [Doğru cevap harfi]
5. [Doğru cevap harfi]

TEST BİTİŞ

Önemli kurallar:
1. Her soru için sadece bir doğru cevap olmalı
2. Şıklar mantıklı ve ayırt edici olmalı
3. Soru metni açık ve anlaşılır olmalı
4. Zorluk seviyesi belirtilen düzeye uygun olmalı
5. Her şık benzersiz olmalı
6. Matematiksel ifadeleri LaTeX formatı yerine normal matematiksel işaretlerle yaz (örn: 2×3, 5², √16, ÷ gibi)
7. Sorular doğrudan anlaşılır olmalı, ek metin veya diyalog gerektirmemeli
8. Her soru kendi içinde tam ve bağımsız olmalı, başka bir metne veya diyaloğa referans vermemeli
9. Şıklar arasında anlam bütünlüğü olmalı ve her şık sorunun bağlamına uygun olmalı
10. Her soru için detaylı bir açıklama ekle:
    - Doğru cevabın neden doğru olduğunu açıkla
    - Yanlış cevapların neden yanlış olduğunu belirt
    - Konuyla ilgili önemli noktaları vurgula`;
};

export const generateContent = async (params: ContentGenerationParams): Promise<string> => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-04-17' });
  const prompt = getSubjectSpecificPrompt(params);

  try {
    console.log('Generating content with params:', params);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log('Generated content:', text.substring(0, 100) + '...');
    return text;
  } catch (error) {
    console.error('Content generation error:', error);
    throw new Error('İçerik oluşturulurken bir hata oluştu: ' + (error instanceof Error ? error.message : String(error)));
  }
};

export const generateTest = async (params: TestGenerationParams): Promise<string> => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-04-17' });
  const prompt = getTestPrompt(params);

  try {
    console.log('Generating test with params:', params);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log('Generated test:', text.substring(0, 100) + '...');
    return text;
  } catch (error) {
    console.error('Test generation error:', error);
    throw new Error('Test oluşturulurken bir hata oluştu: ' + (error instanceof Error ? error.message : String(error)));
  }
};

export const generateUniversityContent = async (params: ContentGenerationParams): Promise<string> => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-04-17' });

  const prompt = `Lütfen aşağıdaki üniversite dersi için detaylı bir ders anlatımı oluştur:

Bölüm: ${params.level}
Yıl: ${params.grade}
Dönem: ${params.subject}
Ders: ${params.topic}

Anlatım şu bölümleri içermeli:
1. Dersin Amacı ve Öğrenme Çıktıları
2. Teorik Altyapı ve Temel Kavramlar
3. İleri Düzey Konular ve Uygulamalar
4. Örnek Problemler ve Çözümleri
5. Pratik Uygulamalar ve Vaka Çalışmaları
6. Akademik Kaynaklar ve İleri Okuma Önerileri

Lütfen anlatımı akademik düzeye uygun, detaylı ve profesyonel bir dille hazırla.`;

  try {
    console.log('Generating university content with params:', params);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log('Generated university content:', text.substring(0, 100) + '...');
    return text;
  } catch (error) {
    console.error('University content generation error:', error);
    throw new Error('Üniversite içeriği oluşturulurken bir hata oluştu: ' + (error instanceof Error ? error.message : String(error)));
  }
};

export const generateUniversityTest = async (params: TestGenerationParams): Promise<string> => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-04-17' });

  const prompt = `Lütfen aşağıdaki üniversite dersi için bir test oluştur:

Bölüm: ${params.level}
Yıl: ${params.grade}
Dönem: ${params.subject}
Ders: ${params.topic}
Zorluk Seviyesi: ${params.difficulty || 'medium'}
Soru Sayısı: ${params.questionCount || 5}

Test şu özellikleri içermeli:
1. Çoktan seçmeli sorular (5 şık)
2. Açık uçlu sorular
3. Problem çözme soruları
4. Her soru için detaylı çözüm ve açıklama
5. Teorik bilgiyi ve pratik uygulamayı test eden çeşitli sorular

Lütfen soruları üniversite düzeyine uygun, kapsamlı ve analitik düşünmeyi teşvik edecek şekilde hazırla.`;

  try {
    console.log('Generating university test with params:', params);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log('Generated university test:', text.substring(0, 100) + '...');
    return text;
  } catch (error) {
    console.error('University test generation error:', error);
    throw new Error('Üniversite testi oluşturulurken bir hata oluştu: ' + (error instanceof Error ? error.message : String(error)));
  }
};