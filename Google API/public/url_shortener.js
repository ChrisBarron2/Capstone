app.get('/url_shortener', function(req, res) {
    res.render('maps', {
                          title: 'URL_Shortener',
                          heading: "Google API's",
                          key: process.env.key
                          })
});

