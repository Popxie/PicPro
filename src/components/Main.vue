<template>
  <div class="main-cont" id="main" @dblclick.prevent="dbClick">
    <el-dialog
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
      :show-close="false"
      @closed="dialogClose">
      <img class="dialog-img-style" :src="dialogImg" >
      <img class="back-style" src="../assets/img/back.png" @click="dialogClose">
    </el-dialog>
    <img class="logo-style" src="../assets/img/logo.png">
    <div class="module-cont">
      <div class="left-cont">
        <div 
          v-for="(iconItem, index) in 13" 
          :class="`icon_${index+1} icon`"
          :key="index" 
          @click="menuItemClick(index + 1)"></div>
        <img class="pic-style" :src="choosePic()">
      </div>
      <div class="right-cont">
        <div class="menu-item" v-for="item in menuList" :key="item.id" :class="{'set-margin': item.id === 6}">
          <div class="left">
            <img :src="item.url" class="icon-style">
          </div>
          <div 
            class="right" 
            @click="menuItemClick(item.id)">
            <div class="zh">{{ item.zh }}</div>
            <div class="en">{{ item.en }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import { menuList, dialogList } from './dataList'

export default {
  data() {
    return {
      dialogVisible: false,
      menuId: -1,
      menuList,
      dialogList,
      dialogImg: ''
    }
  },
  mounted() {
    // 双击全屏的时候 log会默认被选中
    const main = document.getElementById("main")
    main.onselectstart = function(ev) {
      const e = ev || window.event;
      e.preventDefault();
    }
  },
  methods: {
    async dbClick() {
      if (!screenfull.isEnabled) return alert('你当前的浏览器不支持全屏预览！')
      await screenfull.toggle()
    },
    dialogClose() {
      this.menuId = -1
      this.dialogVisible = false
    },
    menuItemClick(menuId) {
      if (menuId === 14 || menuId > 3) return
      this.menuId = menuId
      this.dialogList.forEach(item => {
        if (item.id === menuId) {
          this.dialogImg = item.url
        }
      })
      this.dialogVisible = true
    },
    choosePic() {
      switch(this.menuId) {
        case -1:
          return require('../assets/img/初始.png')
        case 1:
          return require('../assets/img/阳光房.png')
        case 2:
          return require('../assets/img/风暴空间.png')
        case 3:
          return require('../assets/img/脑电实验室.png')
        case 4:
          return require('../assets/img/求真空间.png')
        case 5:
          return require('../assets/img/主任办公室.png')
        case 6:
          return require('../assets/img/光合会议室.png')
        case 7:
          return require('../assets/img/仓库间.png')
        case 8:
          return require('../assets/img/厨房实验室.png')
        case 9:
          return require('../assets/img/D_WILL.png')
        case 10:
          return require('../assets/img/山丘会议室.png')
        case 11:
          return require('../assets/img/综合办公室.png')
        case 12:
          return require('../assets/img/行政办公室.png')
        case 13:
          return require('../assets/img/茶水间.png')
      }
    }
  }
}
</script>

<style lang='scss'>
$width: 1080px;
.main-cont {
  font-family: SimHei, -apple-system, Helvetica Neue, Roboto, Microsoft Yahei, sans-serif;
  color: #c8c8c8;
  margin: 0 auto;
  width: 1080px;
  height: 1920px;
  position: relative;
  -webkit-tap-highlight-color: transparent; // 移动端点击会有选中状态一闪而过
  .dialog-img-style {
    width: $width;
  }
  .logo-style {
    position: absolute;
    top: 105px;
    left: 115px;
    width: 182px;
    z-index: 2100;
  }
  .module-cont {
    position: absolute;
    bottom: 250px;
    left: 0;
    display: flex;
    .left-cont {
      position: relative;
      .pic-style {
        width: 785px;
        height: 960px;
      }
      .icon {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        &:hover {
          cursor: pointer;
        }
      }
      .icon_1 {
        width: 56px;
        height: 56px;
        left: 531px;
        top: 60px;
      }
      .icon_2 {
        width: 82px;
        height: 82px;
        left: 477px;
        top: 111px;
      }
      .icon_3 {
        width: 68px;
        height: 68px;
        left: 622px;
        top: 194px;
      }
      .icon_4 {
        width: 90px;
        height: 90px;
        left: 254px;
        top: 274px;
      }
      .icon_5 {
        left: 164px;
        top: 319px;
      }
      .icon_6 {
        left: 286px;
        top: 388px;
      }
      .icon_7 {
        width: 64px;
        height: 64px;
        left: 482px;
        top: 492px;
      }
      .icon_8 {
        width: 82px;
        height: 82px;
        left: 522px;
        top: 600px;
      }
      .icon_9 {
        width: 168px;
        height: 168px;
        left: 348px;
        top: 633px;
      }
      .icon_10 {
        width: 80px;
        height: 80px;
        left: 170px;
        top: 700px;
      }
      .icon_11 {
        width: 74px;
        height: 74px;
        left: 332px;
        top: 791px;
      }
      .icon_12 {
        left: 189px;
        top: 798px;
      }
      .icon_13 {
        left: 307px;
        top: 867px;
      }
    }
    .right-cont {
      margin-left: 35px;
      padding-right: 20px;
      .set-margin {
        margin-bottom: 124px;
      }
    }
    .menu-item {
      display: flex;
      margin-bottom: 33px;
      .left {
        .icon-style {
          width: 26px;
        }
      }
      .right {
        margin-left: 14px;
        .zh {
          font-size: 14px;
        }
        .en {
          font-size: 10px;
        }
        &:hover {
          cursor: pointer;
          color: #00FF00;
        }
      }
      .is-choosed {
        color: #00FF00;
      }
    }
  }
}
// dialog垂直水平居中
.el-dialog{
  width: $width;
  background: none;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  margin:0 !important;
  padding: 0;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  .back-style {
    width: 30px;
    position: absolute;
    // top: 400px;
    bottom: 60px;
    right: 150px;
    &:hover {
      cursor: pointer;
    }
  }
}
.el-dialog .el-dialog__body{
  flex:1;
  padding: 0;
}

.el-dialog__wrapper {
  background: #000000b3;
}
</style>