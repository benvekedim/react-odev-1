//getData fonksiyonu export etmistik.import etmeliyiz
//from diyerek nereden alacagini söyledik
import getData from "./app.js";

//sonuc degiskeninde kullanici ve postlarinin bilgisini tuttuk
 let sonuc = await getData(1);
 //sonra bu degiskeni log'ladik
 //log'u görmek için Terminal'de node index.js diyerek gorebiliriz
 console.log(sonuc);