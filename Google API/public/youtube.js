app.get('/youtube', function(req, res) {
    res.render('maps', {
                          title: 'YouTube',
                          heading: "Google API's",
                          key: process.env.key
                          })
});
