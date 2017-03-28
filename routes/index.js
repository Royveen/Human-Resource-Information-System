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



/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: root_path });
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

router.post('/api/loginauth', function(req, res) {
    // var db = req.db;
    // var resourceModel = getModel(db, 'employeecollection', schemaRes);

    // var resource1 = new resourceModel({
    //     "firstname": "Prateek",
    //     "lastname": "Wahi"
    // });

    // resource1.save(function(err) {
    //     if (err) throw err;
    //     console.log("save successfull");
    //     resourceModel.find({}).exec(function(err, docs) {
    //         console.log(docs);
    //     })
    // })
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
    var resourceModel = getModel(db, 'addresource', schemas.addresource, 'employeecollection');
    resourceModel.find({}).exec(function(err, docs) {
        if (err) {

        } else {
            res.json(docs);
        }
    })


});


router.get('/api/resources/:id', (req, res) => {

    let customerId = req.params.id;
    var db = req.db;
    var resourceModel = getModel(db, 'getresource', schemas.addresource, 'employeecollection');
    resourceModel.findById(customerId, function(err, docs) {
        if (err) {

        } else {
            res.json(docs);
        }
    })
})

router.post('/api/resources/addroute', (req, res) => {


    var db = req.db;
    var resourceModel = getModel(db, 'addresource', schemas.addresource, 'employeecollection');
    var resource = new resourceModel(req.body);

    resource.save(function(err) {

        if (err) {
            res.sendStatus(500);
        } else {
            console.log("Save successfull");
            res.sendStatus(200);
        }


        // resourceModel.find({}).exec(function(err, docs) {
        //     if (err) {

        //     } else {

        //     }
        // })
    })
});

router.put('/api/resources/:id', (req, res) => {
    var db = req.db;
    var putData = req.body;
    var id = req.params.id;

    var resourceModel = getModel(db, 'updateResource', schemas.addresource, 'employeecollection');
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