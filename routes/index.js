var express = require('express');
var router = express.Router();
var root_path = require('app-root-path');
var fs = require('fs');
var schemas = require('./schemas.js');
var resources = JSON.parse(fs.readFileSync(root_path + '/data/customers.json', 'utf-8'));
var states = JSON.parse(fs.readFileSync(root_path + '/data/states.json', 'utf-8'));
var open = require('opn');
open('http://localhost:3000', { app: 'chrome.exe' }).then(() => {
    console.log('browser closed');
});


function getModel(db, mName, schema, dbname) {

    var retModel;

    if (db.models[mName]) {
        retModel = db.model(mName);
    } else {
        retModel = db.model(mName, schema, dbname);
    }
    return retModel;
}
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: root_path });
});

router.post('/api/loginauth', function(req, res) {

    var user = req.body.sendUser;
    var pass = req.body.sendPass;
    var authStat = {
        loginStatus: false
    }
    authStat.loginStatus = true;
    res.send(authStat);
})

router.get('/api/resources', (req, res) => {
    var db = req.db;
    var resourceModel = getModel(db, 'addresource', schemas.resource, 'employeecollection');
    resourceModel.find({}).exec(function(err, docs) {
        if (err) {} else {
            res.json(docs);
        }
    })


});


router.get('/api/resources/:id/:filter', (req, res) => {
    let customerId = req.params.id;
    var db = req.db;
    console.log(req.params);
    var resourceModel = getModel(db, 'getresource', schemas.resource, 'employeecollection');
    resourceModel.findById(customerId, JSON.parse(req.params.filter == 'undefined' ? '{}' : req.params.filter), function(err, docs) {
        console.log(docs);
        if (err) {

        } else {
            res.json(docs);
        }
    })
})

router.post('/api/resources/addroute', (req, res) => {
    var db = req.db;
    var resourceModel = getModel(db, 'addresource', schemas.resource, 'employeecollection');
    var resource = new resourceModel(req.body);

    resource.save(function(err, docs) {
        console.log(docs);
        console.log(err);
        if (err) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(200).send("Save Successfully");
        }
    })
});

router.put('/api/resources/:id', function(req, res) {

    var db = req.db;
    var putData = req.body;
    var id = req.params.id;
    console.log(id);
    var resourceModel = getModel(db, 'updateResource', schemas.resource, 'employeecollection');
    console.log(putData);
    resourceModel.update({ "_id": id }, { $set: putData }).exec((err, docs) => {
        console.log(err);
        console.log(docs);
        res.status(200).send("Save Successfully");
    })

});

router.delete('/api/resources/:id', function(req, res) {
    let resourceId = +req.params.id;
    for (let i = 0, len = resources.length; i < len; i++) {
        if (resources[i].id === resourceId) {
            resources.splice(i, 1);
            break;
        }
    }
    res.json({ status: true });
});

router.get('/api/states', (req, res) => {
    res.json(states);
});
router.all('/*', function(req, res) {
    res.render('index');
});
module.exports = router;