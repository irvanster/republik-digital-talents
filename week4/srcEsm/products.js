//method: metode, object bisa ngapain aja. ada function didalam object -> di backend

//kalo kita perlu untuk menggunakan this (mengambil key dari object dirinya sendiri)=> function biasa,
//arrow function isn't supported
const products = {
    data: [
        {title: 'Peci NU',price: 145000, stock: 45},
        {title: 'Peci MU',price: 245000, stock: 456},
        {title: 'Peci Kopyah',price: 545000, stock: 24},
        {title: 'Peci Bordir',price: 115000, stock: 24},
        {title: 'Peci JH',price: 15000, stock: 41},
    ],
    getAll: function(){
        return this.data
    },
    getDetail: function(index){
        return this.data[index]
    },
    add: function(newData){
        this.data.push(newData)
        return {
            message: 'Data Berhasil ditambah',
            data: newData
        }
    },
    update: function(index, data){
        this.data[index] = data
        return {
            message: 'Data Berhasil diperbarui',
            data: data,
            products: this.data
        }
    },
    delete:function(index){
        this.data.splice(index, 1)
        return {
            message: 'Data Berhasil dihapus',
            data: this.data[index],
            products: this.data
        }
    }
}


// console.log(products.getAll())
// console.log(products.getDetail(2))
// console.log(products.update(0, { title: 'aowko', price: 120000, stock: 224 }))
// console.log(products.add({ title: 'Peci Asbak', price: 545000, stock: 24 }))
// console.log(products.delete(2))

export default products