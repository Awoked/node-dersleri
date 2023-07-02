const Index = (req, res) => {
    res.render('users', {
        title: "Kullanıcılar",
     
    });
    // res.sendFile(path + '/index.html');
}

module.exports={
    Index
}