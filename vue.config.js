module.exports = {
  publicPath: '/PicPro',
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
}