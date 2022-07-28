# API POINTS




## ARTIKEL
### Menampilkan seluruh artikel
```
GET: /artikel
response:
[
  {
    "id"         : "",
    "judul"      : "",
    "img"        : "",
    "oleh"       : "",
    "desc"       : "",
    "artikel"    : ""
  },
  {
    ...
  }
]
```
### Menampilkan artikel berdasarkan ```id```
```
GET: /artikel/[id]
response:
{
    "id"         : "",
    "judul"      : "",
    "img"        : "",
    "oleh"       : "",
    "desc"       : "",
    "artikel"    : ""
}
```
### Menambahkan artikel
```
POST: /artikel
data:
{
    "judul"      : "",
    "img"        : "",
    "oleh"       : "",
    "desc"       : "",
    "artikel"    : ""
}
response:
true    //if true
false   //if false
```
### Mengubah artikel
```
PUT: /artikel
data:
{
    "judul"      : "",
    "img"        : "",
    "oleh"       : "",
    "desc"       : "",
    "artikel"    : ""
}
response:
true    //if true
false   //if false
```
### Menghapus artikel
```
DELETE: /artikel
response:
true    //if true
false   //if false
```


## USER
### Menampilkan user
```
GET: /user
response:
[
  {
    "id"          : "",
    "deskripsi"   : "",
    "nim"         : "",
    "prodi"       : ""
    "gambar"      : ""
  },
  {
    ...
  }
]
```
### Menampilkan data user media berdasarkan ```id```
```
GET: /user/[id]
response:
{
    "id"          : "",
    "deskripsi"   : "",
    "nim"         : "",
    "prodi"       : ""
    "gambar"      : ""
}
```
### Menambahkan data user
```
POST: /user
data:
{
    "deskripsi"   : "",
    "nim"         : "",
    "prodi"       : ""
    "gambar"      : ""
}
response:
true    //if true
false   //if false
```

### Mengubah data user
```
PUT: /user
data:
{
    "deskripsi"   : "",
    "nim"         : "",
    "prodi"       : ""
    "gambar"      : ""
}
response:
true    //if true
false   //if false
```
### Menghapus data user
```
DELETE: /user/[id]
response:
true    //if true
false   //if false
```


## CONTACT
### Menampilkan contact
```
GET: /contact
response:
[
  {
    "id"       : "",
    "alamat"   : "",
    "a_desc"   : "",
    "email"    : "",
    "e_desc"   : "",
    "telp"     : "",
    "t_desc"   : "",
    "judul"    : ""
  },
  {
    ...
  }
]
```
### Menampilkan data contact media berdasarkan ```id```
```
GET: /contact/[id]
response:
{
    "id"       : "",
    "alamat"   : "",
    "a_desc"   : "",
    "email"    : "",
    "e_desc"   : "",
    "telp"     : "",
    "t_desc"   : "",
    "judul"    : ""
}
```
### Menambahkan data contact
```
POST: /contact
data:
{
    "alamat"   : "",
    "a_desc"   : "",
    "email"    : "",
    "e_desc"   : "",
    "telp"     : "",
    "t_desc"   : "",
    "judul"    : ""
}
response:
true    //if true
false   //if false
```

### Mengubah data contact
```
PUT: /contact
data:
{
    "alamat"   : "",
    "a_desc"   : "",
    "email"    : "",
    "e_desc"   : "",
    "telp"     : "",
    "t_desc"   : "",
    "judul"    : ""
}
response:
true    //if true
false   //if false
```
### Menghapus data contact
```
DELETE: /user/[id]
response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/fiandra99/tekweb2022/master/artikel/Desain.png)
