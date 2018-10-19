// baisi-pages/index/link/link.js
Page({
   data:{
     linkUrl:""

   },
   onLoad:function(){
     this.setData({
       linkUrl: getApp().linkUrl
     })
   }
})