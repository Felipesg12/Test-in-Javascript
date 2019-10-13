module.exports = {
  host: '127.0.0.1',
  username : 'root',
  password : 'password',
  database : 'nodeauth',
  dialect : 'mysql',
  
  logging : console.log,
  define : {
    timestamps : true,
    underscored : true,
    underscoredAll: true,
  }
}