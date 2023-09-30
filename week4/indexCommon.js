//common js = biasanya dipakai oleh javacript lama / es6 kebawah. 
// dan biasa digunakan didalam backend -> ringkas, straight-forward.

//import
// const products = require('./method')

//export
// module.exports = products
// esm = es modul / javascript modul -> frontend.
//import
// import products from './method'

// //export
// export default products
// export {
//     products
// }

// ✅ common js
//cara pertama ini lebih cocok untuk 1 import 1 export
const products = require('./src/products')

console.log(products.getAll())

// cara kedua ini lebih cocok untuk multiple export/import
const {products, users} = require('./src/method')

products.delete()
users.getAll()


//bukan seperti ini, kalo seperti dibawah akan kepanjangan
// const method = require('./method')
// //bisa seperti ini
// method.products.getAll()
// method.users.getAll()