# 🎬 CineTag

Merhaba! CineTag ile film ve dizi dünyasına hoş geldiniz. Bu React projesi, kullanıcıların film ve dizilerini bir arada tutabilmelerine, kolayca erişebilmelerine, favorilerini kaydetmelerine ve en iyi film/dizileri trendler kısmında bulmalarına olanak tanır. Hadi, favori film ve dizilerinizi kaydedebilmenin ve kolaylıkla bulmanın keyfini çıkarın! 🌟

## ⭐️ Özellikler 

- 🔍 Arama & Filtreleme: Hızlı erişim için film veya dizi arayın.
- 📈 Trendler: 7.5 ve üzeri puan alan sahneleri trendler kısmında bulun.
- ❤️ Favorilere Ekle: Beğendiğiniz içerikleri kaydedin.
- 📚 Kaydedilenler: Kaydettiğiniz içeriklere kolayca ulaşın.
- 📱 Responsive Tasarım: Projemiz mobil cihazlar, tabletler ve masaüstü ekranlar dahil olmak üzere farklı cihazlarda sorunsuz bir şekilde çalışır.

## 🚀 Başlarken 

Projeyi yerel bilgisayarınıza kurmak ve kullanmaya başlamak için aşağıdaki adımları takip edebilirsiniz:
1. Projeyi klonlayın: `git clone https://github.com/halilnergiz/react-movie-project`
2. Gerekli bağımlılıkları yüklemek için: `npm install`
3. Mock data tanımlayın: [🎉 Örnek Veri](#-örnek-veri)
4. Projeyi başlatmak için: `npm start`

## 🎨 Stil Dosyaları ve Çıktıları 

Projede stil için Sass kullanılmış ve stil dosyaları `src/scss` klasöründe bulunmaktadır. Proje derlendiğinde, Sass dosyaları işlenir ve CSS çıktılarını `dist/css` klasöründe saklanır. Bunun için şu komutu kullanabilirsiniz.

- `sass --watch src/scss/index.scss:dist/css/root.css`

## 💡 Teknolojiler 

Bu projede kullanılan teknolojiler:

- **Framework:** React ⚛️
- **Stil:** SCSS 💎
- **Animasyon:** Framer Motion ✨

## 👩‍💻 Kullanım 

- Projeyi başlatın: `npm start`
- Arama yaparak film veya dizi bulun.
- Beğendiğiniz içerikleri favorilere ekleyin.
- Kaydedilenler bölümünden favori içeriklerinizi görüntüleyin.

## Veri Saklama ve Paylaşımı

- Projemizde kullanıcı verileri yerel depolama (LocalStorage) kullanılarak saklanmaktadır. Bu, kullanıcıların favori film ve dizi listelerini cihazlarına kaydedebilmelerini ve her ziyaret ettiklerinde aynı verilere erişebilmelerini, kaldıkları yerden devam edebilmelerini sağlar.

## 🎉 Örnek Veri 

Projeyi başlatmadan önce `src/mocks/scenes.json` dosyasına aşağıdaki gibi film ve dizi verilerini eklemelisiniz. Görsellerinizi `public/assets` klasörüne eklemeyi unutmayın. bookmarked özelliğinin her data için ilk değeri false olarak ayarlanmalıdır.

```json
[
  {
    "id": 0,
    "image": "/assets/image-1.jpg",
    "name": "Scene 1",
    "year": "2017",
    "variety": "Movie",
    "kind": "Anime",
    "rating": "9.2",
    "bookmarked": false
  },
    {
    "id": 1,
    "image": "/assets/image-2.jpg",
    "name": "Scene 2",
    "year": "2011",
    "variety": "TV Series",
    "kind": "Horror",
    "rating": "7.1",
    "bookmarked": false
  },
]
```


## Ekran Görüntüleri
![home](https://github.com/halilnergiz/react-movie-project/assets/73109882/575b3209-c024-48a9-be92-02aafd3d6409)
![movies](https://github.com/halilnergiz/react-movie-project/assets/73109882/8e80ac92-e4c6-4832-bd76-19496cac9283)
![series](https://github.com/halilnergiz/react-movie-project/assets/73109882/fac0d6e8-3814-4c96-a128-b11077de31ac)
![bookmarked](https://github.com/halilnergiz/react-movie-project/assets/73109882/51d0f17f-84af-4eb8-b7b2-0ace89c61b45)
![search](https://github.com/halilnergiz/react-movie-project/assets/73109882/d9f3bba2-b521-4936-93ca-30e828565384)
![not-found](https://github.com/halilnergiz/react-movie-project/assets/73109882/39c92528-b822-47a5-b437-3e5ee832c9e5)
![responsive](https://github.com/halilnergiz/react-movie-project/assets/73109882/0be2154a-0bd7-42df-8132-bc54cc2441ff)
