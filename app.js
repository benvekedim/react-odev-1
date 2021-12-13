// Terminalden npm install axios diyerek axios bağımlılığımızı oluşturalım

//axios kütüphanesini kullanmak için ekledik
import axios from "axios";
//asenkron getData arrow fonksiyonu
const  getData = async (Number) => {
    //10 users'tan birisinin verisi
    const {data: users} = await axios(`https://jsonplaceholder.typicode.com/users/${Number}`);
    //seçtigimiz kişinin postları
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${Number}`);
    //hangi kullanici ise kullanici ve postları return ettik
    return {"users":users,"posts":posts}
}
//export default diyerek index.js'de kullanabiliriz.
//sonra kullanacagimiz yerde import edecegiz
export default getData;