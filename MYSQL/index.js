const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    waitForConnections: true,
    pool: 5,
    port: 3306,
    debug: false,
    timezone: 'local',
    database: 'egitimdb'
});

const createDB = () => {
    connection.query('CREATE DATABASE egitimdb', (error, result) => {
        if (error) {
            console.log(error);
        }
        console.log("result", result);
    })
}
const createTable = () => {
    // connection.query('CREATE TABLE IF NOT EXISTS ogrenciler (id int NOT NULL AUTO_INCREMENT, isim VARCHAR(100) NOT NULL, soyisim VARCHAR(100) NOT NULL, PRIMARY KEY (id))', (err, result) => {
    //     if (err) {
    //         console.log(err)
    //     }

    //     console.log(result)
    // })

}

const createRecord = () => {
    const query = "INSERT INTO ogrenciler (isim, soyisim) VALUES ('Alper', 'Koşay')";
    connection.query(query, (err, result) => {
        if (err) {
            console.log('err', err)
        }

        console.log('result', result)
    })
}

const createMultipleRecord = () => {

    const studentsArr = [
        ['Ahmet', 'Uçar'],
        ['Alper', 'Koşay'],
        ['abdullah', 'Tonka'],
        ['Berke', 'civan'],
    ]
    const query2 = `INSERT INTO ogrenciler (isim, soyisim) VALUES ?`;

    connection.query(query2, [studentsArr], (error, result) => {
        if (error) {
            console.log('error', error)
        }

        console.log(result);
    })
}

const createDynamicRecord = () => {
    const query2 = `INSERT INTO ogrenciler (isim, soyisim) VALUES (?, ?)`;
    const name = process.argv[2];
    const surname = process.argv[3];
    console.log('name', name)
    connection.query(query2, [name, surname], (error, result) => {
        if (error) {
            console.log('error', error)
        }

        console.log(result);
    })

}

const getAll = () => {
    const query3 = `SELECT * FROM ogrenciler`;
    connection.query(query3, (err, result) => {
        if (err) {
            console.log('err', err)
        }

        console.log(result);
    })

}

const findById = (id) => {
    const query3 = `SELECT * FROM ogrenciler WHERE id = ?`;
    connection.query(query3, [id], (err, result) => {
        if (err) {
            console.log('err', err)
        }

        console.log(result);
    })

}

/** @param {string} name */
const findByName = (name) => {
    const query = `SELECT * FROM ogrenciler WHERE isim = ?`
    connection.query(query, [name], (err, res) => {
        if (err) {
            console.log('err', err)
        }
        console.log(res);
    })
}
const findByNameWithId = (name, id) => {
    const query = `SELECT * FROM ogrenciler WHERE isim = ? AND id = ?`
    connection.query(query, [name, id], (err, res) => {
        if (err) {
            console.log('err', err)
        }
        console.log(res);
    })
}

const findByNameOrSurname = (name, surname) => {
    const query = `SELECT * FROM ogrenciler WHERE isim = ? OR soyisim = ?`;
    connection.query(query, [name, surname], (err, res) => {
        if (err) {
            console.log('err', err)
        }

        console.log(res);
    })
}
const deleteById = (id) => {
    const query = `DELETE FROM ogrenciler WHERE id = ?`;
    connection.query(query, [id], (err, res) => {
        if (err) {
            console.log('err', err)

        }

        console.log(res);
    })
}

const updateById = (id, newName, newSurname) => {
    const query = `UPDATE ogrenciler SET isim = ?, soyisim = ? WHERE id = ?`;
    connection.query(query, [newName, newSurname, id], (err, res) => {
        if (err) {
            console.log('err', err)
        }

        console.log('res', res)
    })
}

connection.connect((error) => {
    if (error) {
        console.log(error)
        return
    }

    // createDB();
    // createTable();

    // createRecord();
    // createMultipleRecord();
    // createDynamicRecord();


    // findById(4);
    getAll();
    // findByName("alper");
    // findByNameWithId("alper", 122);
    // findByNameOrSurname("alper","civan")
    // deleteById(1);
    updateById(2, "Alper Yeni", "Koşay Yeni")
    getAll();

})
