module.exports = {
  //  写自己想要配置的东西去覆盖系统自带的
  // 关闭ESLint的规则
  lintOnSave: false,
  devServer: {
    //页面的正常数据
    proxy: {
      '/api': {
        // 改成本地地址
        target: 'http://www.wangshuo1998.cn:7300/mock/5f9fc77b5739e560520990e0',
      },
      '/mysql':{
        target:"http://localhost:3000",
        pathRewrite: {"^/mysql" : ""}
      }
    }
  }
}
