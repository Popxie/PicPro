const env = process.env.NODE_ENV || 'development'
console.log('env: ', env)
const isProduction = env === 'production'

module.exports = {
  publicPath: isProduction ? '/dic-guide-map': '', // 以前必须根路径第一级要跟项目名保持一致github page才会正常显示， 现在发现不需要了！
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            /**
             * 换算基数， 默认100。
             * 这样的话把根标签的字体规定为1rem为`${rootValue}px`,
             * 这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
             */
            rootValue: 108, 
            /**
             * 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，
             * 例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，
             * 请把此属性设为默认值
             */
            // exclude: /(node_module)/,
            exclude: false,
            //（布尔值）允许在媒体查询中转换px。
            mediaQuery: false,
          }),
        ]
      }
    }
  },
  chainWebpack: config => {
    const mapType = isProduction ? '' : 'source-map'
    config.devtool(mapType)
  }
}