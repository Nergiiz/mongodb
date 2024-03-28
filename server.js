const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect('mongodb+srv://nergiz:nergiz@atlascluster.osuwdxm.mongodb.net/Tourdb')
.then(()=>console.log('veritabanı ile bağlantı kuruldu'))
.catch((err)=>console.log('HATA',err));

const port = 4000;
app.listen (port, () => {
    console.log(`uygulama ${port} başladı`);
});
