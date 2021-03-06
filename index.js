const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const cors = require('cors')({ origin: true });

exports.retrieveTeachers = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    var Tea = [];
    const ref = admin.database().ref('Teachers').orderByKey();
    ref.once('value').then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var value = childSnapshot.val();
        Tea.push({
          ID: value.TeacherID,
          TeachName: value.TeachName
        });
      });
      res.status(200).write(JSON.stringify(Tea));
      res.end();
    });
  });
});

exports.retrieveLocation = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    var Loc = [];
    const ref = admin.database().ref('Locations').orderByKey();
    ref.once('value').then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var value = childSnapshot.val();
        Loc.push({
          ID: value.Place_ID,
          Place: value.Place
        });
      });
      res.status(200).write(JSON.stringify(Loc));
      res.end();
    });
  });
});

exports.retrieveCourse = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    var Cours = [];
    const ref = admin.database().ref('Courses').orderByKey();
    ref.once('value').then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var value = childSnapshot.val();
        Cours.push({
          ID: value.Course_ID,
          Course: value.Course_Name
        });
      });
      res.status(200).write(JSON.stringify(Cours));
      res.end();
    });
  });
});