// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

 

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCspF9w0Hh5qYugG41tQE_GWamr4PlIvf0",

  authDomain: "yk-project-5d31d.firebaseapp.com",

  databaseURL: "https://yk-project-5d31d-default-rtdb.firebaseio.com",

  projectId: "yk-project-5d31d",

  storageBucket: "yk-project-5d31d.appspot.com",

  messagingSenderId: "1048058550373",

  appId: "1:1048058550373:web:590ee1977a7a4d7ada8e8c",

  measurementId: "G-NBQK8CD9E7"

};

 

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
—-----------------



const express = require('express');
const app = express();

// const bodyParser = require('body-parser');
// const path = require('path');

// app.set('view engine', 'pug');
// app.set('views', './views');

// const adminRoutes = require('./routes/admin');
// const userRoutes = require('./routes/shop');

// const errorController = require('./controllers/errors');
// const sequelize = require('./utility/database');

// const Category = require('./models/category');
// const Product = require('./models/product');
// const User = require('./models/user');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// // routes
// app.use('/admin', adminRoutes);
// app.use(userRoutes);

// app.use(errorController.get404Page);

// Product.belongsTo(Category, { foreignKey: { allowNull: false } });
// Category.hasMany(Product);

// Product.belongsTo(User);
// User.hasMany(Product);

// sequelize
//     .sync({ force: true })
//     //.sync()
//     .then(() => {

//         User.findByPk(1)
//             .then(user => {
//                 if (!user) {
//                     User.create({ name: 'sadikturan', email: 'email@gmail.com' });
//                 }
//                 return user;
//             }).then(user => {
//                 Category.count()
//                     .then(count => {
//                         if (count === 0) {
//                             Category.bulkCreate([
//                                 { name: 'Telefon', description: 'telefon kategorisi' },
//                                 { name: 'Bilgisayar', description: 'bilgisayar kategorisi' },
//                                 { name: 'Elektronik', description: 'elektronik kategorisi' }
//                             ]);
//                         }
//                     });
//             });
//     })
//     .catch(err => {
//         console.log(err);
//     });

app.get("/", (req,res,next) => {
    res.send(
        `
        <html>
        <body>
        <h1>Merhaba</h1>
        </body>
        </html>
        `
        );
});

app.use((req,res,next) =>{
    res.statusCode = 404
    res.send(
        `
        <html>
        <body>
        <h1> PAGE NOT FOUND </h1>
        <p> Please Check Your Address</p>
        <button style="color:red">Anasayfaya Dön</button> 
        <body>
        </html>
        `)
});
app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
});
