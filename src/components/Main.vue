<template>
  <div class="main-cont">
    <el-dialog
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
      :show-close="false"
      top="30vh">
      <img class="dialog-img-style" :src="dialogImg" alt="">
    </el-dialog>
    <img class="logo-style" src="../assets/img/logo.png" alt="">
    <div class="module-cont">
      <div class="left-cont">
        <img class="pic-style" :src="choosePic()" alt="">
      </div>
      <div class="right-cont">
        <div class="menu-item" v-for="item in menuList" :key="item.id">
          <div class="left">
            <img :src="item.url" alt="" class="icon-style">
          </div>
          <div class="right" @click="menuItemClick(item.id)">
            <div class="zh">{{ item.zh }}</div>
            <div class="en">{{ item.en }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menuList, dialogList } from './dataList';
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
  created() {},
  methods: {
    menuItemClick(menuId) {
      if (menuId === 14) return
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
          return require('../assets/img/班主任办公室.png')
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
.main-cont {
  color: #c8c8c8;
  margin: 0 auto;
  width: 1080px;
  height: 1920px;
  background: rgba(173, 216, 230, 0.13);
  position: relative;
  .dialog-img-style {
    width: 1080px;
  }
  .logo-style {
    position: absolute;
    top: 105px;
    left: 115px;
    width: 182px;
  }
  .module-cont {
    position: absolute;
    bottom: 250px;
    left: 0;
    display: flex;
    .pic-style {
      width: 785px;
      height: 960px;
    }
    .right-cont {
      margin-left: 35px;
      padding-right: 20px;
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
// .el-dialog {
//   width: 1080px;
//   height: 700px;
//   background: none;
//   box-shadow: none;
// }

// dialog垂直水平居中
.el-dialog{
  width: 1080px;
  height: 700px;
  background: none;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  margin:0 !important;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
.el-dialog .el-dialog__body{
  flex:1;
}
</style>