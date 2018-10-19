// baisi-pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftList:[],
    rightList:[],
    currentId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '请稍后',
    })
    var that=this;
       wx.request({
         url: 'http://api.budejie.com/api/api_open.php?a=category&c=subscribe',
         success:function(res){
           res.data.list[0].selected=true;
           res.data.list[0].index = 0;
           for (var i = 1; i < res.data.list.length;i++){
             res.data.list[i].selected=false;
             res.data.list[i].selected = i;
           }
          //  console.log(res.data.list);
           that.setData({
             leftList: res.data.list,
             currentId: res.data.list[0].id
           });
           that.getRightData()
         }
       })
  },
   getRightData:function(){
     wx.showLoading(
       {
         title:"请稍后"
       }
     );
     var that=this;
     wx.request({
       url: 'http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id='+that.data.currentId,
       success:function(res){
        // console.log(res.data.list);
        that.setData({
          rightList: res.data.list
        });
         if (res.data.list.length==0){
             wx.showSuccess("没有新数据");
             wx.stopPullDownRefresh();
         }else{
            setTimeout(function(){
               wx.hideLoading();
               wx.stopPullDownRefresh();
            },1000);
         }
       }
     })
   },
   leftTabTap:function(e){
    //  console.log(e.target.dataset.id)
    this.setData({
      currentId: e.target.dataset.id
    });
    this.getRightData()
   }
})