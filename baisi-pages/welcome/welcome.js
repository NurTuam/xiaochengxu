// baisi-pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  var that=this;
   wx.getUserInfo({
     success:function(res){
       var { avatarUrl, nickName}=res.userInfo;
       that.setData({
         avatarUrl,
         nickName
       })
     }
   })
  },
  onTap:function(){
    wx.switchTab({
      url: "../../baisi-pages/index/index",
    })
  }
})