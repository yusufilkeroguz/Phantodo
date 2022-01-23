# Phantodo

PhanTODO

NextJS kullandım React Framework'ü olarak. Kurulumu kolay olduğu için bunu seçtim. Stiller için styled-components kullandım.

Tasarım üzerine çok daha fazla uğraşmak istedim ama verdiğim süre geçti bile. Daha fazla bekletmek istemiyorum.

## Componentler

Componentler Klasör şeklinde oluşturdum. Böylece stilleri kendi klasörü içinde `styled.js`.

Componentler atoms, molecules, organisms olarak üçe ayrılıyor.

**atoms**: çok basit componentler. Tüm diğer (molecules, organisms) componentler bunlara bağlı.

**molecules**: atomları kullanarak oluşturulmuş componentler.

**molecules**: molekülleri kullanan ana componentler. Sayfalar bu komponentleri çağırıyor.

## High Order Componentler (hocs)

High Order Componentleri sürekli context api bağlantısı için birleştirdim. Bu sayede basit bir redux mantığında çalışıyorlar.

**withTaskList**: TaskList Context'ine bağlanıp, onun ile ilgili fonksiyon ve değişkenleri yönettiğimiz component. 

**withTheme**: Theme Context'ine bağlanıp, temayı `dark` yada `light` yapmak için kullanıyorum ve şuanda mevcut olarak hangi tema kullanıldığını öğrenmek için `themeName` ve `isDarkTheme` değişkenlerini bulunduruyorum.

## Hooks

Context güncellektikten sonra hooklar ile mevut dataları getirmek için yazdığım iki custom hook.
