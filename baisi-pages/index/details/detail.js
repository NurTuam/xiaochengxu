// baisi-pages/index/details/detail.js
var data_id="";
Page({
  data: {
     hot_hidden:false,
     dataList:[],
     hotList:[]
  },
  onLoad: function (options) {
    data_id = options.id;
    this.refreshNewData();
  },
  // 刷新信息
  refreshNewData:function(){
    wx.showLoading({
      title: "请稍后"
    });
    var that=this;
         wx.request({
           url: `http://api.budejie.com/api/api_open.php?a=dataList&c=comment&data_id=${data_id}&hot=1`,
           success:function(res){
            //  console.log(res.data)
             that.setData({
               dataList:res.data.data,
               hotList: res.data.hot,
               hot_hidden:res.data.hot.length?false:true              
             })
           },
           complete:function(){
             wx.hideLoading()
           }
         })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})