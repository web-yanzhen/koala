      // 轮播图
      window.onload = function(){
        // 获取俩按钮
        var prev =document.getElementsByClassName("prev")[0];
        var next =document.getElementsByClassName("next")[0];
        // 获取所有的图片
        var banner = document.getElementById("banner");
        var bannerimg = banner.getElementsByTagName("img")[0];
        var dots = document.getElementById("dots");
        var alli = dots.getElementsByTagName("i");
        var blur = document.getElementById("blur");
        var blurimg = blur.getElementsByTagName("img")[0];
        
        var imgarr =["../考拉海购/img/banner-1.jpg","../考拉海购/img/banner-2.jpg",
        "../考拉海购/img/banner-3.jpg","../考拉海购/img/banner-4.jpg",
        "../考拉海购/img/banner-5.jpg","../考拉海购/img/banner-6.jpg",
        "../考拉海购/img/banner-7.jpg","../考拉海购/img/banner-8.jpg"]
        var index=0;
        var timer;
    
        alli[index].style.backgroundColor="#ff1e32";
            //  上一张
            prev.onclick =function(){
                index--;
                if(index<0){
                    index=imgarr.length-1;
                }
                bannerimg.src = imgarr[index];
                blurimg.src = imgarr[index];
                seti();
            }
            //   下一张
            next.onclick =function(){
                index++;
                if(index>imgarr.length-1){
                    index=0;
                }
                bannerimg.src = imgarr[index];
                blurimg.src = imgarr[index];
                seti();
            }
            // 定时器
             timer = setInterval(function(){
              
              index++;
              if(index>imgarr.length-1){
                  index=0;
              }
              bannerimg.src = imgarr[index];
              blurimg.src = imgarr[index];
              seti();

            },2000);
            
            //鼠标滑过容器停止播放
		        banner.onmouseover = function(){
			clearInterval( timer);
		}
		    // 鼠标离开容器时继续播放下一张
		      banner.onmouseout = function(){

                 setInterval(timer = setInterval(function(){
              
              index++;
              if(index>imgarr.length-1){
                  index=0;
              }
              bannerimg.src = imgarr[index];
              blurimg.src = imgarr[index];
              seti();

            },2000));         
          }

            //  点击原点切换图片
            for(i=0; i<alli.length; i++) {

                alli[i].num = i
               alli[i].onmouseover = function(){
                   index = this.num;
                   bannerimg.src = imgarr[index];
                   blurimg.src = imgarr[index];
                   seti();
               }
               
            }
            function seti(){

                for(i=0 ;i<alli.length; i++){
                  alli[i].style.backgroundColor="";
             }
            //  将选中的变为红色
            alli[index].style.backgroundColor="#ff1e32";
        }
    }