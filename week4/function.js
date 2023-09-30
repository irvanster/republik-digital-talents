//arrow function (recommend)
//kita akan membuat function untuk cek harga berdasarkan distance
// ketika jaraknya 1 km / per 1km -> 6.000
// ketika orang tersebut memakai voucher -> 15%



// const harga = 20.0000
// const checkHarga = (jarak, harga, voucher)=> { //aliasing/parameter
//     if(voucher =="GORIDEAJA") {
//         const rumus = 15/100
//         const hargaAsli = harga*jarak
//         const discount = rumus*(harga*jarak)

//         return {
//             jarak: jarak,
//             hargaAsli: hargaAsli,
//             discount: discount,
//             hargaTotal: hargaAsli-discount,
//             // message: 'Silahkan jalan dengan mendapatkan potongan sebesar '+ discount + ' jadi kamu hanya membayar harga '+hargaAsli-discount
//             //string literals / literals string
//             message: `Silahkan jalan dengan mendapatkan potongan sebesar ${discount} jadi kamu hanya membayar harga ${hargaAsli-discount}`
//         }
//     }else {
//         return {
//             jarak: jarak,
//             harga: harga*jarak,
//             message: voucher ? 'Voucher Tidak Valid':'Silahkan Gojek'
//         }
//     }
// }


// function checkHarga(jarak, harga, voucher) {
//     if(voucher =="GORIDEAJA") {
//         const rumus = 15/100
//         const hargaAsli = harga*jarak
//         const discount = rumus*(harga*jarak)

//         return {
//             jarak: jarak,
//             hargaAsli: hargaAsli,
//             discount: discount,
//             hargaTotal: hargaAsli-discount,
//             // message: 'Silahkan jalan dengan mendapatkan potongan sebesar '+ discount + ' jadi kamu hanya membayar harga '+hargaAsli-discount
//             //string literals / literals string
//             message: `Silahkan jalan dengan mendapatkan potongan sebesar ${discount} jadi kamu hanya membayar harga ${hargaAsli-discount}`
//         }
//     }else {
//         return {
//             jarak: jarak,
//             harga: harga*jarak,
//             message: voucher ? 'Voucher Tidak Valid':'Silahkan Gojek'
//         }
//     }
// }


//istilah ketika kita menginputkan/membuat argument bernilai -> function = callback namanya
// [1,2,3,4].map(()=> {
    
// })
// [1,2,3,4].map(function() {

// })
// console.log(checkHarga(5, 6000, 'GORIDEAJA')) //argument/input
// checkHarga() -> () => function



//cb / callback
// const filterTokoByLokasi = (array, cb)=> {
//     //kita membuat logic

//     return cb(array)
// }

// filterTokoByLokasi(['Toko Abah','Toko Lontong','Timbul Jaya Motor', 'Mas ncus','darco'],((item)=> {
//     console.log(item)
// }))



// const cekMasuk = (dataDiri)=> {
//     //kalau kepanjangan bisa pake desctructuing
//     return `Halo ${dataDiri.name} oh kamu dari ${dataDiri.address} yaa!, umur kamu ${dataDiri.age}`
// }

// // desctructuring //cara 1
// const cekMasuk = (dataDiri, isLogin)=> {
//     const {name, address, age} = dataDiri
//     //kalau kepanjangan bisa pake desctructuing
//     return `Halo ${name} oh kamu dari ${address} yaa!, umur kamu ${age} ${isLogin}`
// }
// //cara 2
// const cekMasuk = ({name, address, age}, isLogin)=> {
//     //kalau kepanjangan bisa pake desctructuing
//     return `Halo ${name} oh kamu dari ${address} yaa!, umur kamu ${age} ${isLogin}`
// }

console.log(cekMasuk({
    name: 'Ahok',
    gender: 'L',
    address: 'JKT',
    age: 45
}, 'anda telah login'))