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


const createOneToManyTable = () => {
    connection.query(
        `CREATE TABLE IF NOT EXISTS kisiler (kisi_id INT AUTO_INCREMENT PRIMARY KEY, kisi_ad VARCHAR(100), kisi_soyad VARCHAR(100))`
        , (error, result) => {
            if (!error) {

                connection.query(
                    `CREATE TABLE sosyal_medya
                (sosyal_medya_id INT AUTO_INCREMENT PRIMARY KEY,
                kisi_id INT NOT NULL,
                sosyal_medya_ad VARCHAR(100),
                FOREIGN KEY (kisi_id) REFERENCES kisiler(kisi_id))
                `
                    , (error, result) => {
                        if (!error) {


                        } else {
                            console.log(error);
                        }
                    })
            } else {
                console.log(error);
            }
        })
}

const createUser = () => {
    const query = "INSERT INTO kisiler (kisi_ad, kisi_soyad) VALUES (?, ?)";
    const name = process.argv[2];
    const surname = process.argv[3];


    connection.query(query, [name, surname], (err, result) => {
        if (err) {
            console.log('err', err)
        }

        console.log('result', result.insertId)
    })
}


const createSocialMediaWithUser = () => {
    const query = "INSERT INTO sosyal_medya (kisi_id, sosyal_medya_ad) VALUES (3, 'INSTAGRAM')";


    connection.query(query, (err, result) => {
        if (err) {
            console.log('err', err)
        }

        console.log('result', result)
    })
}

connection.connect((error) => {
    if (error) {
        console.log('error', error)
        return;
    }

    // createUser();
    createSocialMediaWithUser();

    // createOneToManyTable();
})