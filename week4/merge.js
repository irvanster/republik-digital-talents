//ARRAY

//concat
const hadir = ['Salman', 'Rizky','Husni']
const tidakHadir = ['bachtiar']
const muridBaru = ['Adnan','Adudu','Adada','Wolu']
// muridBaru[2] = 'adiii'

// const semuaMurid = hadir.concat(tidakHadir, muridBaru)
// const siswa = {
//     hadir: hadir,
//     tidakHadir: tidakHadir,
//     semuaMurid: semuaMurid,
//     muridBaru: muridBaru,
//     totalMurid: semuaMurid.length
// }
// console.log(siswa)

//spread operator (object/array)

//extract value
const semuaMurid = [...hadir, ...tidakHadir, ...muridBaru]
 // =>['Salman', 'Rizky','Husni','bachtiar','Adnan','Adudu','Adada','Wolu']
 
// const semuaMurid = ...hadir -> 'Salman', 'Rizky', 'Husni'
const siswa = {
    hadir: hadir,
    tidakHadir: tidakHadir,
    semuaMurid: semuaMurid
}
console.log(siswa)


//END OF ARRAY

//OBJECT
//edit produk
const author = {
    author_name: 'Syafaat',
    author_role: 'admin'
}
const product = {
    // author: author,
    ...author,
    name: 'Jersey MCU',
    stok: 15,
    image: 'http://omage.com/awok.png',
    harga: 50000,
    // penulis: author
}
// stok -> 15 => 30
//procedural change + add new key
// product.stok = 30
// product.harga = 300000
// product.description = 'ini paling oke'


//spread operator
const editProduct= {
    ...product,
    // stok: 1000,
    harga: 2000000,
    // description: 'aowkwoakkoaokwa'
}
// console.log(product)
console.log(editProduct)


//END OF OBJECT