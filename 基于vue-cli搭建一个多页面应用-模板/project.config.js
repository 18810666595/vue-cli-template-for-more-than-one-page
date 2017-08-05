var rapHost = "'http://rap.taobao.org/mockjsdata/15659'"

var sftpConfig = {
  host: 'https://github.com/tonyfree',  //公司的地址，自己的
  port: 22,    //端口号，自己的
  user: 'tony',   //用户名，自己的
  pass: '123',   //密码，自己的
  remotePath: '/opt/html/projectName'    //服务器地址，自己的
}

module.exports = {
  rapHost: rapHost,
  sftpConfig: sftpConfig
}
