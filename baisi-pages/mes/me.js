// baisi-pages/mes/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isplaying:true,
    currentSongIndex:0,
    musiclist: [
      { 
        url: "http://219.135.57.152/amobile.music.tc.qq.com/C400002I3Nwa4f9xqA.m4a?guid=9779415712&vkey=EFC8F8B4B96728EEAF820CA1367CA36A9552295EE9150F8E237DA130C244FBCD2ACF0AA97D9BE801B182023E32C617DC21B707CA4FF2E49E&uin=0&fromtag=66",
      title:"贝贝"
      },  
      {
        url:"http://219.135.57.146/amobile.music.tc.qq.com/C400004DXFlC0nsTCZ.m4a?guid=9779415712&vkey=8229FB9451CF587EEA05B953D89CB09F29EA36310AD762B34842E343A26B28660FB01274D8C6B0726DA9FE61BF93E5E62557997505749747&uin=0&fromtag=66",
        title:"年轻有为"
      },
      {
        url: "http://183.60.131.50/amobile.music.tc.qq.com/C400004S8VEa1C0LqC.m4a?guid=9779415712&vkey=13EAB35D2C1C342A0948096A174176E47727218B128FFFA7D2368571D4368851FD45C0D4DEB1B44F01B7CBC881F4740CB34E4CFDAB1D81B6&uin=0&fromtag=66",
        title:"春秋"
      }
    ],
    menu:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
      wx.request({
        url: 'http://api.budejie.com/api/api_open.php?a=square&c=topic',
        success:function(res){
          // console.log(res.data.square_list.splice(0,16));
          that.setData({
            menu: res.data.square_list.splice(0, 16)
          })
        }
      });
    this.playsong();
    wx.onBackgroundAudioPause(function(){
        that.setData({
          isplaying:false
        })
    });
    wx.onBackgroundAudioPlay(function(){
      that.setData({
        isplaying: true
      })
    })
  },
  playsong:function(){
    var that=this;
    wx.playBackgroundAudio({
      dataUrl: that.data.musiclist[that.data.currentSongIndex].url,
      title: that.data.musiclist[that.data.currentSongIndex].title
    })
  },
  randomplaysong:function(){
    this.setData({
      currentSongIndex: Math.floor(Math.random() * 3)
    });
    this.playsong();
  },
  musicStateChange:function(){
    this.setData({
      isplaying:!this.data.isplaying
    });
    if (this.data.isplaying){
      this.playsong();
    }else{
      wx.pauseBackgroundAudio()
    }
  }
})