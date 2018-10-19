Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:[],
    tab:[
      {
        name:"全部",
        type:1
      }, 
      {
        name: "视频",
        type: 41
      },
      {
        name: "图片",
        type: 10
      },
      {
        name: "段子",
        type: 29
      },
      {
        name: "声音",
        type: 31
      }
    ],
    currentType:1,
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that=this;
    // 轮播图
    wx.request({
      url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1539834099847',
      success:function(res){
        // console.log(res.data.data.slider);
        that.setData({
          slider: res.data.data.slider
        })
      }
    });
    //请求全部类型数据
    this.requestBS(this.data.currentType)
  },
  swiperTap:function(e){
    getApp().linkUrl=e.target.dataset.link;
    wx.navigateTo({
      url: "../link/link"
    })
  },
  requestBS:function(type){
    var that=this;
    // 轮播图下数据
    wx.request({
      url: 'https://api.budejie.com/api/api_open.php?a=list&c=data&type='+this.data.currentType, //获取api接口
      success: function (res) {
        // console.log(res.data)
        that.setData({
          list: res.data.list
        })
      }
    })
  },
  tabTap: function (e) {
     this.setData({
       currentType: e.target.dataset.type,
       currentIndex: e.target.dataset.index
     });
    this.requestBS();
  },
  commentTap:function(e){
    // console.log(e.currentTarget.dataset.id)
    var { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: 'details/detail?id='+id,
    })
  }
})