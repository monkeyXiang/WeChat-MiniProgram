//app.js
App({
 
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{

      //  登录接口的调用
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb
(that.globalData.userInfo)
            }
          })
        }
      });
    }
 },
  globalData: {
    userInfo: null
  }
});