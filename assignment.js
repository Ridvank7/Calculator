    Merhaba arkadaşlar, yarın üzerinde çalışacağınız 'Guess My Number' projesinin algoritmasını paylaşıyorum. Adım adım ilerleyerek çözümü bulmaya çalışmanızı öneriyorum. Unutmayın, sürece katılmak ve uğraşmak çözümü bulmaktan daha çok önemli. Bu süreçte karşılaşacağınız zorluklar, öğrenme seviyenizi artıracak. Herkese başarılar dilerim.
    1. Oyunun Başlangıç Ayarları
    - 1 ile 100 arasında rastgele bir sayı üret ve sakla. Bu sayı, oyuncunun tahmin etmesi gereken sayıdır.
    - Oyuncunun başlangıç puanını 10 olarak ayarla. Her yanlış tahminde, puan 1 azalacak.
    2. Kullanıcı Arayüzünü Kur
    - Kullanıcının tahminlerini girebileceği bir metin giriş alanı yerleştir.
    - Tahminleri kontrol etmek için bir "Kontrol Et" butonu ekle.
    - Oyuncunun mevcut puanını ve en yüksek puanını gösterecek alanlar oluştur.
    - Oyuncuya ipuçları vermek, kazanma veya kaybetme durumlarını bildirmek için bir mesaj bölümü oluştur.
    3. "Kontrol Et" Butonuna Events Ekle
    - Butona tıkladığında, kullanıcının girdiğini sayıya çevir ve bu sayıyı rastgele üretilen sayı ile karşılaştır.
    - Kullanıcı sayı girmeden butona bastığında uyarı mesajı göster.
    4. Tahmin Kontrolü ve Puan Güncellemesi (if-else)
    - Kullanıcının tahmini doğru ise, kazandığını belirten bir mesaj göster ve arka plan rengini değiştir.
    - Tahmin yanlış ise ve puan hala 0'dan büyük ise, kullanıcının tahminini yükseltmesi veya düşürmesi gerektiğini belirten bir ipucu ver ve puanı 1 azalt.
    - Puan 0'a düşerse, oyunun bittiğini ve kullanıcının kaybettiğini belirten bir mesaj göster.
    5. En Yüksek Puanı Sakla ve Güncelle
    - Oyun bittiğinde, mevcut puanı yerel depolamada saklanan en yüksek puan ile karşılaştır.
    - Mevcut puan daha yüksekse, en yüksek puanı güncelle ve kullanıcı arayüzünde göster.
    6. Oyunu Yeniden Başlatma Fonksiyonelliği
    - Oyuncunun oyunu yeniden başlatabilmesi için bir "Tekrar" butonu ekle.
    - Bu butona basıldığında, oyunun başlangıç değerlerini (rastgele sayı, puan) sıfırla, mesajları temizle ve arka plan rengini varsayılana döndür.
    7. Giriş Alanına Klavye Events i Ekle
    - Kullanıcı, metin kutusuna bir sayı girdikten sonra "Enter" tuşuna basarak tahminini gönderebilmeli.
    - "Enter" tuşuna basıldığında, "Kontrol Et" butonunun işlevselliğini tetikleyecek bir olay dinleyici ekle.
