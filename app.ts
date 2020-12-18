import * as express from 'express'
import { JsonWebTokenError } from 'jsonwebtoken'
import { Project } from './models/project'
import { Functions } from './utils/functions'

class App {
  public express
  public jwt

  constructor () {
    this.express = express()
    this.jwt = require("jsonwebtoken")
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    var bodyParser = require('body-parser')
    router.use(bodyParser.json())

    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })

    router.post('/api/identify', async (req, res) => {
      const user = {
        id: req.body.name
      }
      const token = this.jwt.sign({user}, 'my_secret_key');
      var resp = new Functions();
      let result = await resp.signGithub();
      res.json({
        token
      })
    })


    function ensureToken(req, res, next){
      var _this = this;
      const bearerHeader = req.headers['authorization'];
      if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[bearer.length-1];
        req.token = bearerToken;
        next();
      }
      else{
        res.sendStatus(403)
      }
    }

    router.get('/api/projects', ensureToken, (req, res) => {
      this.jwt.verify(req.token, 'my_secret_key', async (err, data) => { 
        if(err) 
          res.sendStatus(403) 
        else{
          var resp = new Functions();
          let result = await resp.getProjects();
          res.json({
            result
          })
        }
      });
    })

    router.get('/api/projects/:projectName', ensureToken, (req, res) => {
      this.jwt.verify(req.token, 'my_secret_key', async (err, data) => { 
        if(err) 
          res.sendStatus(403); 
        else{
          var resp = new Functions();
          var result = await resp.getCommits(req.params.projectName);
          res.json({
            result
          })
        }
      });
    })

    this.express.use('/', router)
  }
}

export default new App().express