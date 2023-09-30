// tipe data dalam javascript 7 (yang paling bianyak digunakan)

// tipe data primitive
// string, number, Boolean, function
//string
// const name = "salman";
// console.log(name)
//3: "",'',``
//numnber
// const age = 8;

// javascript = number

// integer -> BigInt
// sql -> 1234567891236 (> 12)
// sql -> 12536718930128793686721123567889 BigInt

// console.log(age)
//boolean
// const married = true; //false
//object
const tiar = {
    nama: 'bachtiar',
    tubuh: {
        kepala: {
            mata: 'belo',
            aksesioris: ['anting', 'kacamata','softlens']
        },
        bentuk: [
            {name: 'Lutut', type: 'Kopong'},
            {name: 'Lengan', type: 'Gede'},
            {name: 'Perut', type: 'kotak-kotak'},
        ]
    }
}
//array
// [] //suatu wadah yang bisa memasukkan lebih dari satu tipedata.
//null
//looping in javascript = map => build method javascript
// forEach = arra,
// while,
// for,
// do while,
// tiar.tubuh.bentuk.forEach(function(item) {
//     console.log(item.name)
// })
// build in method javascript untuk perulangan
//foreach = kita benar-benar memakai variable secara langsung item array tersebut
//map = kita didalam javascript membuat variable virtual yang mana membuat variable yang dipanggil tidak ada perubahan secara langsung
// const array = [1,2,3,4,5,6]

// //terbaru
// [
//     {name: 'Lutut', type: 'Kopong'},
//     {name: 'Lengan', type: 'Gede'},
//     {name: 'Perut', type: 'kotak-kotak'},
// ].map((item)=> {
//     return {name: item.name, type: 'salman'}
// })

// //termurah
// tiar.tubuh.bentuk.forEach((item)=> {
//     return {name: item.name, type: 'alok'}
// })
// //termahal
// tiar.tubuh.bentuk.forEach((item)=> {
//     return {name: item.name, type: 'ahok'}
// })

// tiar.tubuh.bentuk.forEach((item, index)=> {
//     if(index == 0) {
//         return {name: item.name, type: 'belang'}
//     }else {
//         return {name: item.name, type: item.type}
//     }
// })
// // arr //hasil pergantian belang
// console.log(tiar.tubuh.bentuk)


// array.map(element => {
//     element = 100+
// });
// foreac
// map
// console.log(tiar.tubuh.kepala.aksesioris[1])
// let sortByName = tiar.find(tiar => tiar.name)
// console.log(sortByName)
// console.log({
//     nama: tiar.tubuh.bentuk[0].name,
//     nama: tiar.tubuh.bentuk[1].name,
//     nama: tiar.tubuh.bentuk[2].name,
// })
//gimana cara kalian menampilkan semuanya, bentuknya seperti ini, tapi hanya name nya saja, type

// [
//     'Perut'
//     'Lengan'
//     'Lutut'
//   ]
// console.log({
//     mata: tiar.tubuh.kepala.mata,
//     bentuk: tiar.tubuh.bentuk
// })
//undefined

// const prodcuts = [
//   { id: "1", title: "Mazda", harga: "1rb" },
//   { id: "2", title: "Rubicorn", harga: "90rb" },
//   { id: "3", title: "Alphard", harga: "500rb" },
//   { id: "4", title: "Gas Kompor", harga: "40000rb" },
//   { id: "6", title: "Gas Kompor", harga: "40000rb" },
//   { id: "9", title: "Gas Kompor", harga: "40000rb" },
//   { id: "1", title: "Gas Kompor", harga: "40000rb" },
//   { id: "1", title: "Gas Kompor", harga: "40000rb" },
// ];

// const getDetail = { id: "1", title: "Mazda", harga: "1rb" };


// getDetail.title

// getDetail.harga
// prodcuts.map((item) => {
//   return (
//     <div>
//       <img src={item.img} />
//       <img src={item.img} />
//     </div>
//   );
// });



const names = ['Salman','Rziky','Husni']

// names.push('rizky') // menambah item baru di sebelah kanan / terakhir
// names.unshift('rizky') // menambah item baru disebelah kiri / awal
// names.pop() //kebalikan dari push (menghapus) / terakhir
names.shift() // kebalikan dari unshift (mehapus) / awal
console.log(names)