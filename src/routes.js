const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const UserController = require('./Controllers/UserController');
const SesionController = require('./Controllers/SessionController');
const SubjectController = require('./Controllers/SubjectController');
const CourseController = require('./Controllers/CourseController');
const ClassroomController = require('./Controllers/ClassroomController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
  return res.json({ success: 'API e-Teaching Online.' })
});

routes.post('/login', SesionController.create);

routes.get('/users', UserController.index);
routes.get('/users/:_id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:_id', UserController.update);
routes.delete('/users/:_id', UserController.delete);

routes.get('/subject', SubjectController.index);
routes.get('/subject/:_id', SubjectController.show);
routes.post('/subject/:user_id', SubjectController.store);
routes.put('/subject/:_id', SubjectController.update);
routes.delete('/subject/:_id', SubjectController.delete);

routes.get('/course', CourseController.index);
routes.get('/course/:_id', CourseController.show);
routes.post('/course/:user_id', CourseController.store);
routes.put('/course/:_id', CourseController.update);
routes.delete('/course/:_id', CourseController.delete);

routes.get('/classroom', ClassroomController.index);
routes.get('/classroom/:_id', ClassroomController.show);
routes.post('/classroom/:user_id', ClassroomController.store);
routes.delete('/classroom/:_id', ClassroomController.delete);

module.exports = routes;