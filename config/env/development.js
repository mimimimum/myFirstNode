module.exports = {
       // mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
       mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',
       google: {
              clientID: '284129056337-0o3bekpr1stb1r239fodessu0l2totgo.apps.googleusercontent.com',
              clientSecret: '6UJrLlIgu7dup0N3PIAQ5BSm',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }

}