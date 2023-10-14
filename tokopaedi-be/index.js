const express = require("express");
const app = express();
const db = require("./config/db");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { v4: uuidv4 } = require("uuid");
const { toSlug } = require("./helper");

//endpoint
//get all
app.get("/api/products", (req, res) => {
  db.query("SELECT * from products", (err, result) => {
    if (err)
      return res.status(500).send({
        message: err.message,
        data: [],
      });
    return res.status(200).send({
      message: "success get all products",
      data: result.rows,
    });
  });
});
//get by id/slug
//slug: title -> yang di lowercase() -> " " -> "-"
// Salman Alfarisi
// salman-alfarisi
//params :slug atau :id

app.get("/api/products/:slug", (req, res) => {
  db.query(
    `SELECT * from products WHERE products_slug='${req.params.slug}'`,
    (err, result) => {
      if (err)
        return res.status(500).send({
          message: err.message,
          data: {},
        });
      if (result.rowCount == 0)
        return res.status(400).send({
          message: "Produk Tidak ditemukan",
          data: {},
        });
      return res.status(200).send({
        message: "success get detail product",
        data: result.rows[0],
      });
    }
  );
});

app.post("/api/products", (req, res) => {
  const { name, price, description, stock, category, image } = req.body;

  db.query(
    `INSERT INTO products (id_products, products_name, products_price, products_description, products_stock, products_category, products_image, products_slug) VALUES ('${uuidv4()}','${name}','${price}','${description}','${stock}','${category}','${image}','${toSlug(
      name
    )}') RETURNING *`,
    (err, result) => {
      if (err)
        return res.status(500).send({
          message: err.message,
          data: [],
        });
      return res.status(200).send({
        message: "Add New Product Success",
        data: result.rows[0],
      });
    }
  );
});

/* 
    UPDATE
    patch = mengubah sebagian/salah satu/keseluruhan data. name = 'rizky' -> salman
            konsep: mengambil data dari sebelumnya-> jika dari req.body itu fieldnya tidak ada isinya, 
            maka kita akan membuat field dari body yang tidak terisi tersbeut akan mengambil dari database. 
            kalo terisi kita akan mengambil dari req.body
    put = menaruh/mereplace/mengganti -> name, price, dll, harus ke isi semua.
        kalo ada yang kosong kita akan mereturn kan -> semua field harus di isi.
        name = 'rizky' => 'Salman'
        konsep: semua harus ada, dan terisi, walaupun tidak ada perubahan.
*/
app.patch(`/api/products/:slug`, (req, res) => {
  db.query(
    `SELECT * from products WHERE products_slug='${req.params.slug}'`,
    (err, result) => {
    if(result.rowCount == 0) return res.status(400).send({
        message: "Produk Tidak ditemukan",
        data: {}
    })
     //artinya default value (=) => ketika name tidak terisi/tidak ada di body/tidak diisi dari FE/POSTMAN maka kita akan menggambil dari result.rows[0].products_name
      const {
        name = result.rows[0].products_name,
        price = result.rows[0].products_price,
        description = result.rows[0].products_description,
        stock = result.rows[0].products_stock,
        category = result.rows[0].products_category,
        image = result.rows[0].products_image,
      } = req.body;
      db.query(
        `UPDATE products SET products_name='${name}', products_price='${price}', products_description='${description}', products_stock='${stock}', products_category='${category}', products_image='${image}', products_slug='${toSlug(name)}' RETURNING *`, (err, updatedResult)=> {
            if(err) return res.status(500).send({
                message: err.message,
                data: {}
            })
            return res.status(200).send({
                message: 'success update product',
                data: updatedResult.rows[0]
            })
        });
    }
  );
});
app.put(`/api/products/:slug`, (req, res) => {
    const { name, price, description, stock, category, image } = req.body;
    if(!name || !price || !description || !stock || !category || !image) {
        return res.status(400).send({
            message: 'Semua Field Harus terisi!',
            data: {}
        })
    }
      db.query(
        `UPDATE products SET products_name='${name}', products_price='${price}', products_description='${description}', products_stock='${stock}', products_category='${category}', products_image='${image}', products_slug='${toSlug(name)}' RETURNING *`, (err, updatedResult)=> {
            if(err) return res.status(500).send({
                message: err.message,
                data: {}
            })
            return res.status(200).send({
                message: 'success update product',
                data: updatedResult.rows[0]
            })
        });
});
app.delete("/api/products/:slug", (req, res) => {
  return res.status(201).send({
    message: "Add new Product Success",
    data: req.body,
  });
});

//npm i nodemon -g
app.listen(5000, () => {
  console.log("BE ALREADY RUNNING");
});
