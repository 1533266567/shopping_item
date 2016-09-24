$(function(){
    //送货地址栏的操作
	$('.send_t').mouseenter(function(){
      $(".send_t").addClass('hover');
      $('.sc_icon').css('display','block');
	})
	$('.send_t').mouseleave(function(){

      $(".send_t").removeClass('hover');
      $('.sc_icon').css('display','none');
	})
    $('.sc_blank').mouseover(function(){
       $(".send_t").addClass('hover');
      $('.sc_icon').css('display','block');
    })
    $('.sc_icon').mouseleave(function(){
       $(".send_t").removeClass('hover');
      $('.sc_icon').css('display','none');
    }) 

    //促销活动
    $('.act').mouseenter(function(){
	    	$(this).addClass('sale_hover');
	    	$('.salewrap').css('display','block');

    })
     $('.act').mouseleave(function(){
    	$(this).removeClass('sale_hover');
	    	$('.salewrap').css('display','none');
    })
     //搜索切换
     $('.s_change').mouseenter(function(){
      $(this).find('ul').eq(0).css({'overflow':'visible','height':'auto'})
     })
     $('.s_change').mouseleave(function(){
       $(this).find('ul').eq(0).css({'overflow':'hidden','height':'35px'})
     })
     //图标转换
     $('.h_rule').mouseenter(function(){
           $('.h_rule_front').css('display','none');
           $('.h_rule_back').css('display','block');
     })
     $('.h_rule').mouseleave(function(){
           $('.h_rule_front').css('display','block');
           $('.h_rule_back').css('display','none');
     })
     //导航栏滑动
     $('.shop_item').find('li').mouseenter(function(){
     	$('.item_line').stop().animate({
     		 'left':$(this).position().left,
     		 'width':$(this).width(),
     	},300);
     })
     $('.shop_item').mouseleave(function(){
     	$('.item_line').stop().animate({
     		 'left':$('.shop_item').find('li').eq(0).position().left,
     		 'width':$('.shop_item').find('li').eq(0).width(),
     	});
     })
    //轮播图
    function lunbo(){
	     if(n==aLi-1){
	     	n=0;
	     }else{
	     	n++;
	     }
      $('.bg').find('li').eq(n).stop().animate({'opacity':'1'});
      $('.bg').find('li').eq(n).css('display','block');
      $('.bg').find('li').eq(n).siblings().stop().animate({'opacity':'0'});
      $('.bg').find('li').eq(n).siblings().css('display','block');
      $('.change').find('li').eq(n).addClass('on');
      $('.change').find('li').eq(n).siblings().removeClass('on');
    }
    var n=0;
    var aLi=$('.bg').find('li').length;
    var ltimer=setInterval(lunbo,2000);
    $('.banner').mouseenter(function(){
    	clearInterval(ltimer);
    })
     $('.banner').mouseleave(function(){
    	ltimer=setInterval(lunbo,2000);
    })
     $('.change').find('li').on({
     	click:function(){
	     	var that = $(this).index();
	     	$('.bg').find('li').eq(that).stop().animate({'opacity':'1'});
	     	$('.bg').find('li').eq(that).css('display','block');
	     	$('.bg').find('li').eq(that).siblings().stop().animate({'opacity':'0'});
	     	$('.change').find('li').eq(that).addClass('on');
	     	$('.change').find('li').eq(that).siblings().removeClass('on');
	     	n=$(this).index();
          },
          mouseenter:function(){
          	clearInterval(ltimer);
          }
     })

     //点击轮播
     $('.f_lunbo').find('a').mouseenter(function(){

     	$(this).siblings().stop().animate({'opacity':'0.4'})
     	$('.f_prve').css('opacity','0.6');
     	$('.f_next').css('opacity','0.6');
     })
      $('.f_lunbo').find('a').mouseleave(function(){

     	$(this).siblings().stop().animate({'opacity':'1'})
     	$('.f_next').css('opacity','0');
     	$('.f_prve').css('opacity','0');
     })

     var f_li = $('.tempwrap').find('li').length;
     var f_ul = $('.tempwrap').find('li').eq(0).width()*f_li;
     var fn=0;
     $('.tempwrap').find('ul').eq(0).css('width',f_ul);
    
     $('.f_next').on({
        mouseenter:function(){
        	$(this).css('opacity','0.6');
        },
        mouseleave:function(){
        	$(this).css('opacity','0');
        },
     	click:function(){
	      if(fn==f_li-1){
	      	fn=0;
	      }else{
	      	fn++;
	      }
	       var ful_w=$('.tempwrap').find('li').eq(fn).width();
	      $('.tempwrap').find('ul').eq(0).stop().animate({'left':-fn*ful_w});
          }

     })
     $('.f_prve').on({
     	mouseenter:function(){
           $(this).css('opacity','0.6');
     	},
     	mouseleave:function(){
        	$(this).css('opacity','0');
        },
     	click:function(){
	     	if(fn==0){	
	          fn=f_li-1;
	     	}else{
              fn--;
	     	}
	     	var ful_w=$('.tempwrap').find('li').eq(fn).width();
		      $('.tempwrap').find('ul').eq(0).stop().animate({'left':-fn*ful_w});
	     } 
     })

    //左边大导航
    $('.item').mouseenter(function(){
    	$(this).addClass('chose');
    	$(this).children('.item_layer').show();
    })
     $('.item').mouseleave(function(){
    	$(this).removeClass('chose');
    	$(this).children('.item_layer').hide();
    })

     //右边抢购
     $('.ad_nav').children('li').mouseenter(function(){
     	var index=$(this).index();
     	$(this).addClass('on');
     	$(this).siblings().removeClass('on');
     	$('.ad_p1').eq(index).css('display','block');
     	$('.ad_p1').eq(index).siblings().css('display','none');
     })

    //热门推荐
    $('.done_tab_nav').children('li').on({
    	mouseenter:function(){
          $(this).addClass('on');
          $(this).siblings().removeClass('on');
          $('.done_item').eq($(this).index()).css({'display':'block'});
          $('.done_item').eq($(this).index()).stop().animate({'opacity':"1"})
          $('.done_item').eq($(this).index()).siblings().css({'display':'none'});
          $('.done_item').eq($(this).index()).siblings().stop().animate({'opacity':"0"})
    	}
    })
    $('.done_item').mouseenter(function(){
    	$('.done_prve').css('opacity','1');
    	$('.done_next').css('opacity','1');
    })
    $('.done_item').mouseleave(function(){
    	$('.done_prve').css('opacity','0');
    	$('.done_next').css('opacity','0');
    })
     
     var domn=0;
    $('.done_prve').on({
    	click:function(){
       
          var dome_li=$(this).parents('.done_item').find('li').length;
          var dome_ul=$(this).parents('.done_item').find('li').eq(0).outerWidth()*dome_li;
          $(this).parents('.done_item').find('ul').eq(0).css('width',dome_ul);
           if(domn==0){
                domn=0;
           }else{
           	  domn--;
           }
           $(this).parents('.done_item').find('ul').eq(0).stop().animate({
           	'left':-$(this).parents('.done_item').find('li').eq(domn).outerWidth()*domn
           })
    	}
    })

    $('.done_next').click(function(){
    	  var dome_li=$(this).parents('.done_item').find('li').length;
          var dome_ulw=$(this).parents('.done_item').find('li').eq(0).outerWidth()*dome_li;
           $(this).parents('.done_item').find('ul').eq(0).css('width',dome_ulw);
           if(domn==dome_li-5){
              domn=dome_li-5;
           }else{
           	  domn++;
           }
           $(this).parents('.done_item').find('ul').eq(0).stop().animate({
           	'left':-$(this).parents('.done_item').find('li').eq(domn).outerWidth()*domn
           })
    	})
   
     //团购
     var t_li=$('.team_by').find('li').length;
     var t_ul=$('.team_by').find('li').eq(0).width()*t_li;
     $('.team_by').find('ul').eq(0).css('width',t_ul);
     $('.team_by').find('ul').on({
     	mouseenter:function(){
     		$('.t_prve').css('opacity','1');
     		$('.t_next').css('opacity','1');
     	},
     	mouseleave:function(){
     	     $('.t_prve').css('opacity','0');
     		$('.t_next').css('opacity','0');
     	}
     })
      
      var tn=0
     $('.t_prve').on({
     	mouseover:function(){
     		$(this).css('opacity','1');
     	},
     	click:function(){
            if(tn==0){
            	tn=t_li-1;
            }else{
            	tn--;
            }
           $('.team_by').find('ul').eq(0).stop().animate({'left':-$('.team_by').find('li').eq(tn).width()*tn})
     	}
     })

      $('.t_next').on({
     	mouseover:function(){
     		$(this).css('opacity','1');
     	},
     	click:function(){
            if(tn==t_li-1){
            	tn=0;
            }else{
            	tn++;
            }
           $('.team_by').find('ul').eq(0).stop().animate({'left':-$('.team_by').find('li').eq(tn).width()*tn})
     	}
     })

    //品牌街
    var cloneLi=$('.bd').find('li').eq(0).clone(true);//克隆节点
    $('.bd').find('ul').eq(0).append(cloneLi);
    var b_li=$('.bd').find('li').length;
    var b_ul=$('.bd').find('li').eq(0).width()*b_li;
    $('.bd').find('ul').eq(0).css('width',b_ul);
    var bn=0;
    var hn=0;
    function brandad(){
        if(bn==b_li-1){
        	$('.bd').find('ul').eq(0).css('left','0');
        	bn=1;
        }else{
        	bn++;
        }
       $('.bd').find('ul').eq(0).stop().animate({
       	 'left':-$('.bd').find('li').eq(0).width()*bn
       });
       if(hn==3){
       	hn=0;
       }else{
       	hn++;
       }
       $('.hd').find('li').eq(hn).addClass('on');
       $('.hd').find('li').eq(hn).siblings().removeClass('on');
    }
    var btimer=setInterval(brandad,1500);
    $('.brand_ad').mouseenter(function(){
    	clearInterval(btimer);
    })
     $('.brand_ad').mouseleave(function(){
    	btimer=setInterval(brandad,1500);
    })
    $('.hd').find('li').on({
    	mouseenter:function(){
          $(this).addClass('on');
          $(this).siblings().removeClass('on');
          $('.bd').find('ul').eq(0).stop().animate({
          	'left':-$('.bd').find('li').eq(0).width()*$(this).index()
          })

    	}
    })

   //1楼层左边轮播
   var onClass1 = $('#floor1').find('.onClass');
   var cfnav1 = $('#floor1').find('.cf_nav')
   onClass1.find('li').mouseenter(function(){
       cfnav1.find('dd').eq($(this).index()).css('background','transparent none repeat scroll 0% 0%')
      $(this).children('.toClass').show();
   })
   onClass1.find('li').mouseleave(function(){
      cfnav1.find('dd').eq($(this).index()).css('background','#fff none repeat scroll 0% 0%')
       $(this).children('.toClass').hide();
   })
      var cban1 = $('#floor1').find('.cf_ban')
      var cbd1 = $('#floor1').find('.cf_bd');
      var chd1 = $('#floor1').find('.cf_hd');
	  var c_li1 = cbd1.find('li').length;
	   var c_ul1 = cbd1.find('li').eq(0).width()*c_li1;
	    cbd1.find('ul').eq(0).css('width',c_ul1);
	   var cn1=0;
	   function fban1(){
	   	if(cn1==c_li1-1){
	   		cn1=0;
	   	}else{
	   		cn1++;
	   	}
	   	   cbd1.find('ul').eq(0).stop().animate({
	   	 	'left':-cbd1.find('li').eq(0).width()*cn1
	   	 })
	   
	   	  chd1.find('li').eq(cn1).addClass('on');
	   	  chd1.find('li').eq(cn1).siblings().removeClass('on');
	   }
	   var ctimer1=setInterval(fban1,1500);
       cban1.on({
	       	mouseenter:function(){
	       		clearInterval(ctimer1);
	       	},
	        mouseleave:function(){
	       		ctimer1=setInterval(fban1,1500);
	       	}
       })
        chd1.find('li').mouseenter(function(){
           $(this).addClass('on');
	   	   $(this).siblings().removeClass('on');
          //只有一个ul
	   	  cbd1.find('ul').eq(0).stop().animate({
	   	  'left':-cbd1.find('li').eq(0).width() * $(this).index()
	   	 })
           cn = $(this).index();
           
        })

    //1楼层左边点击
    var cfbd1 = $('#floor1').find('.cf_brd');
    var cf_ul1=cfbd1.find('ul').length;
    var cfn1=0;
    cfbd1.on({
    	mouseenter:function(){
    		$(this).children('.brd_prve').show();
    		$(this).children('.brd_next').show();
    	},
    	mouseleave:function(){
    		$(this).children('.brd_prve').hide();
    		$(this).children('.brd_next').hide();
    	}
    })
    cfbd1.children('.brd_prve').click(function(){
    	if(cfn1==0){
    		cfn1=0;
    	}else{
    		cfn1--;
    	}
      cfbd1.find('.brd_list').stop().animate({
       	'left':-cfbd1.find('ul').eq(0).width()*cfn1
       })
    })
    cfbd1.find('.brd_next').click(function(){
    	if(cfn1==cf_ul1-1){
    		cfn1=cf_ul1-1;
    	}else{
    		cfn1++;
    	}
      cfbd1.find('.brd_list').stop().animate({
       	'left':-cfbd1.find('ul').eq(0).width()*cfn1
       })
     
    })

  //1楼层右侧切换
    var gfti1 = $('#floor1').find('.gf_ti');
    var crmain1 = $('#floor1').find('.cr_main');
    
    gfti1.find('li').mouseenter(function(){
    	$(this).addClass('on');
    	$(this).siblings().removeClass('on');
        crmain1.eq($(this).index()).show();
        crmain1.eq($(this).index()).siblings().hide();
    })

    var conr1=$('#floor1').find('.con_right');
    conr1.find('li').on({
    	mouseenter:function(){
    		$(this).siblings().css('opacity','0.5')
    	},
    	mouseleave:function(){
    		$(this).siblings().css('opacity','1')
    	}
    })
//1楼层下方新品
    var ghNew1=$('#floor1').find('.gf_new');
     ghNew1.find('li').on({
     	mouseenter:function(){
     		$(this).css({'opacity':'1'});
     		$(this).siblings().css('opacity','0.25');
     	},
     	mouseleave:function(){
     		$(this).css({'opacity':'0.9'});
     		$(this).siblings().css('opacity','0.9');
     	}

     })

      //2楼层左边轮播
   var onClass2 = $('#floor2').find('.onClass');
   var cfnav2 = $('#floor2').find('.cf_nav')
   onClass2.find('li').mouseenter(function(){
       cfnav2.find('dd').eq($(this).index()).css('background','transparent none repeat scroll 0% 0%')
      $(this).children('.toClass').show();
   })
   onClass2.find('li').mouseleave(function(){
      cfnav2.find('dd').eq($(this).index()).css('background','#fff none repeat scroll 0% 0%')
       $(this).children('.toClass').hide();
   })
      var cban2 = $('#floor2').find('.cf_ban')
      var cbd2 = $('#floor2').find('.cf_bd');
      var chd2 = $('#floor2').find('.cf_hd');
	  var c_li2 = cbd2.find('li').length;
	   var c_ul2 = cbd2.find('li').eq(0).width()*c_li2;
	    cbd2.find('ul').eq(0).css('width',c_ul2);
	   var cn2=0;
	   function fban2(){
	   	if(cn2==c_li2-1){
	   		cn2=0;
	   	}else{
	   		cn2++;
	   	}
	   	   cbd2.find('ul').eq(0).stop().animate({
	   	 	'left':-cbd1.find('li').eq(0).width()*cn2
	   	 })
	   	  chd2.find('li').eq(cn2).addClass('on');
	   	  chd2.find('li').eq(cn2).siblings().removeClass('on');
	   }
	   var ctimer2=setInterval(fban2,1500);
       cban2.on({
	       	mouseenter:function(){
	       		clearInterval(ctimer2);
	       	},
	        mouseleave:function(){
	       		ctimer2=setInterval(fban2,1500);
	       	}
       })
        chd2.find('li').mouseenter(function(){
           $(this).addClass('on');
	   	   $(this).siblings().removeClass('on');
          //只有一个ul
	   	  cbd2.find('ul').eq(0).stop().animate({
	   	  'left':-cbd2.find('li').eq(0).width() * $(this).index()
	   	 })
           cn = $(this).index();
           
        })

    //2楼层左边点击
    var cfbd2 = $('#floor2').find('.cf_brd');
    var cf_ul2=cfbd2.find('ul').length;
    var cfn2=0;
    cfbd2.on({
    	mouseenter:function(){
    		$(this).children('.brd_prve').show();
    		$(this).children('.brd_next').show();
    	},
    	mouseleave:function(){
    		$(this).children('.brd_prve').hide();
    		$(this).children('.brd_next').hide();
    	}
    })
    cfbd2.children('.brd_prve').click(function(){
    	if(cfn2==0){
    		cfn2=0;
    	}else{
    		cfn2--;
    	}
      cfbd2.find('.brd_list').stop().animate({
       	'left':-cfbd2.find('ul').eq(0).width()*cfn2
       })
    })
    cfbd2.find('.brd_next').click(function(){
    	if(cfn2==cf_ul2-1){
    		cfn2=cf_ul2-1;
    	}else{
    		cfn2++;
    	}
      cfbd2.find('.brd_list').stop().animate({
       	'left':-cfbd2.find('ul').eq(0).width()*cfn2
       })
     
    })

  //2楼层右侧切换
    var gfti2 = $('#floor2').find('.gf_ti');
    var crmain2 = $('#floor2').find('.cr_main');
    
    gfti2.find('li').mouseenter(function(){
    	$(this).addClass('on');
    	$(this).siblings().removeClass('on');
        crmain2.eq($(this).index()).show();
        crmain2.eq($(this).index()).siblings().hide();
    })

    var conr2=$('#floor2').find('.con_right');
    conr2.find('li').on({
    	mouseenter:function(){
    		$(this).siblings().css('opacity','0.5')
    	},
    	mouseleave:function(){
    		$(this).siblings().css('opacity','1')
    	}
    })
//2楼层下方新品
    var ghNew2=$('#floor2').find('.gf_new');
     ghNew2.find('li').on({
     	mouseenter:function(){
     		$(this).css({'opacity':'1'});
     		$(this).siblings().css('opacity','0.25');
     	},
     	mouseleave:function(){
     		$(this).css({'opacity':'0.9'});
     		$(this).siblings().css('opacity','0.9');
     	}

     })

      //3楼层左边轮播
   var onClass3 = $('#floor3').find('.onClass');
   var cfnav3 = $('#floor3').find('.cf_nav')
   onClass3.find('li').mouseenter(function(){
       cfnav3.find('dd').eq($(this).index()).css('background','transparent none repeat scroll 0% 0%')
      $(this).children('.toClass').show();
   })
   onClass3.find('li').mouseleave(function(){
      cfnav3.find('dd').eq($(this).index()).css('background','#fff none repeat scroll 0% 0%')
       $(this).children('.toClass').hide();
   })
      var cban3 = $('#floor3').find('.cf_ban')
      var cbd3 = $('#floor3').find('.cf_bd');
      var chd3 = $('#floor3').find('.cf_hd');
	  var c_li3 = cbd3.find('li').length;
	   var c_ul3 = cbd3.find('li').eq(0).width()*c_li3;
	    cbd3.find('ul').eq(0).css('width',c_ul3);
	   var cn3=0;
	   function fban3(){
	   	if(cn3==c_li3-1){
	   		cn3=0;
	   	}else{
	   		cn3++;
	   	}
	   	   cbd3.find('ul').eq(0).stop().animate({
	   	 	'left':-cbd3.find('li').eq(0).width()*cn3
	   	 })
	   	  chd3.find('li').eq(cn3).addClass('on');
	   	  chd3.find('li').eq(cn3).siblings().removeClass('on');
	   }
	   var ctimer3=setInterval(fban3,1500);
       cban3.on({
	       	mouseenter:function(){
	       		clearInterval(ctimer3);
	       	},
	        mouseleave:function(){
	       		ctimer3=setInterval(fban3,1500);
	       	}
       })
        chd3.find('li').mouseenter(function(){
           $(this).addClass('on');
	   	   $(this).siblings().removeClass('on');
          //只有一个ul
	   	  cbd3.find('ul').eq(0).stop().animate({
	   	  'left':-cbd3.find('li').eq(0).width() * $(this).index()
	   	 })
           cn = $(this).index();
           
        })

    //3楼层左边点击
    var cfbd3 = $('#floor3').find('.cf_brd');
    var cf_ul3=cfbd3.find('ul').length;
    var cfn3=0;
    cfbd3.on({
    	mouseenter:function(){
    		$(this).children('.brd_prve').show();
    		$(this).children('.brd_next').show();
    	},
    	mouseleave:function(){
    		$(this).children('.brd_prve').hide();
    		$(this).children('.brd_next').hide();
    	}
    })
    cfbd3.children('.brd_prve').click(function(){
    	if(cfn3==0){
    		cfn3=0;
    	}else{
    		cfn3--;
    	}
      cfbd3.find('.brd_list').stop().animate({
       	'left':-cfbd3.find('ul').eq(0).width()*cfn2
       })
    })
    cfbd3.find('.brd_next').click(function(){
    	if(cfn3==cf_ul3-1){
    		cfn3=cf_ul3-1;
    	}else{
    		cfn3++;
    	}
      cfbd3.find('.brd_list').stop().animate({
       	'left':-cfbd1.find('ul').eq(0).width()*cfn2
       })
     
    })

  //3楼层右侧切换
    var gfti3 = $('#floor3').find('.gf_ti');
    var crmain3 = $('#floor3').find('.cr_main');
    
    gfti3.find('li').mouseenter(function(){
    	$(this).addClass('on');
    	$(this).siblings().removeClass('on');
        crmain3.eq($(this).index()).show();
        crmain3.eq($(this).index()).siblings().hide();
    })

    var conr3=$('#floor3').find('.con_right');
    conr3.find('li').on({
    	mouseenter:function(){
    		$(this).siblings().css('opacity','0.5')
    	},
    	mouseleave:function(){
    		$(this).siblings().css('opacity','1')
    	}
    })
//3楼层下方新品
    var ghNew3=$('#floor3').find('.gf_new');
     ghNew3.find('li').on({
     	mouseenter:function(){
     		$(this).css({'opacity':'1'});
     		$(this).siblings().css('opacity','0.25');
     	},
     	mouseleave:function(){
     		$(this).css({'opacity':'0.9'});
     		$(this).siblings().css('opacity','0.9');
     	}

     })

      //4楼层左边轮播
   var onClass4 = $('#floor4').find('.onClass');
   var cfnav4 = $('#floor4').find('.cf_nav')
   onClass4.find('li').mouseenter(function(){
       cfnav4.find('dd').eq($(this).index()).css('background','transparent none repeat scroll 0% 0%')
      $(this).children('.toClass').show();
   })
   onClass4.find('li').mouseleave(function(){
      cfnav4.find('dd').eq($(this).index()).css('background','#fff none repeat scroll 0% 0%')
       $(this).children('.toClass').hide();
   })
      var cban4 = $('#floor4').find('.cf_ban')
      var cbd4 = $('#floor4').find('.cf_bd');
      var chd4 = $('#floor4').find('.cf_hd');
	  var c_li4 = cbd4.find('li').length;
	   var c_ul4= cbd4.find('li').eq(0).width()*c_li4;
	    cbd4.find('ul').eq(0).css('width',c_ul4);
	   var cn4=0;
	   function fban4(){
	   	if(cn4==c_li4-1){
	   		cn4=0;
	   	}else{
	   		cn4++;
	   	}
	   	   cbd4.find('ul').eq(0).stop().animate({
	   	 	'left':-cbd4.find('li').eq(0).width()*cn4
	   	 })
	   	  chd4.find('li').eq(cn4).addClass('on');
	   	  chd4.find('li').eq(cn4).siblings().removeClass('on');
	   }
	   var ctimer4=setInterval(fban4,1500);
       cban4.on({
	       	mouseenter:function(){
	       		clearInterval(ctimer4);
	       	},
	        mouseleave:function(){
	       		ctimer4=setInterval(fban4,1500);
	       	}
       })
        chd4.find('li').mouseenter(function(){
           $(this).addClass('on');
	   	   $(this).siblings().removeClass('on');
          //只有一个ul
	   	  cbd4.find('ul').eq(0).stop().animate({
	   	  'left':-cbd4.find('li').eq(0).width() * $(this).index()
	   	 })
           cn = $(this).index();
           
        })

    //4楼层左边点击
    var cfbd4 = $('#floor4').find('.cf_brd');
    var cf_ul4=cfbd4.find('ul').length;
    var cfn4=0;
    cfbd4.on({
    	mouseenter:function(){
    		$(this).children('.brd_prve').show();
    		$(this).children('.brd_next').show();
    	},
    	mouseleave:function(){
    		$(this).children('.brd_prve').hide();
    		$(this).children('.brd_next').hide();
    	}
    })
    cfbd4.children('.brd_prve').click(function(){
    	if(cfn4==0){
    		cfn4=0;
    	}else{
    		cfn4--;
    	}
      cfbd1.find('.brd_list').stop().animate({
       	'left':-cfbd1.find('ul').eq(0).width()*cfn4
       })
    })
    cfbd4.find('.brd_next').click(function(){
    	if(cfn4==cf_ul4-1){
    		cfn4=cf_ul4-1;
    	}else{
    		cfn4++;
    	}
      cfbd4.find('.brd_list').stop().animate({
       	'left':-cfbd4.find('ul').eq(0).width()*cfn4
       })
     
    })

  //4楼层右侧切换
    var gfti4 = $('#floor4').find('.gf_ti');
    var crmain4 = $('#floor4').find('.cr_main');
    
    gfti4.find('li').mouseenter(function(){
    	$(this).addClass('on');
    	$(this).siblings().removeClass('on');
        crmain4.eq($(this).index()).show();
        crmain4.eq($(this).index()).siblings().hide();
    })

    var conr4=$('#floor4').find('.con_right');
    conr4.find('li').on({
    	mouseenter:function(){
    		$(this).siblings().css('opacity','0.5')
    	},
    	mouseleave:function(){
    		$(this).siblings().css('opacity','1')
    	}
    })
//4楼层下方新品
    var ghNew4=$('#floor4').find('.gf_new');
     ghNew4.find('li').on({
     	mouseenter:function(){
     		$(this).css({'opacity':'1'});
     		$(this).siblings().css('opacity','0.25');
     	},
     	mouseleave:function(){
     		$(this).css({'opacity':'0.9'});
     		$(this).siblings().css('opacity','0.9');
     	}

     })

//猜你喜欢
     //标签变色
  $('.lv_list').find('a').on({
  	   mouseenter:function(){
  	   	$(this).css({'background':'#ec5151',"color":'#fff','border':'1px solid #ec5151'});
  	   },
  	   mouseleave:function(){
  	    $(this).css({'background':'#fff',"color":'#755a5a','border':'1px solid #755a5a'});
  	   }
  })
        //划入划出遮罩
  $('.pro_item').on({
  	mouseenter:function(){
   	 $(this).children('.jbox').stop().animate({
   	 	'left':'0px'
   	 },100)
  	},
  	mouseleave:function(){
   	 $(this).children('.jbox').stop().animate({
   	 	'left':'-110px'
   	 },100)
  	}
  })
  
   //验证码
   $('.sel_code').children('li').mouseenter(function(){
   	  $(this).addClass('current');
   	  $(this).siblings().removeClass('current');
   	 $('.code_wrap').children().eq($(this).index()).show();
     $('.code_wrap').children().eq($(this).index()).siblings().hide();
   })
   //底部链接
   $('.footer_desc').find('a').mouseover(function(){
   	   $(this).css('color','#fff');
   })
   $('.footer_desc').find('a').mouseleave(function(){
   	   $(this).css('color','#8b8b8b');
   })

  //ajax加载商品分类
  $('.item').mouseover(function(){
  	 $.ajax({
  	 	url:'splb/'+($(this).index()+1)+'.json',
  	 	type:'get',
  	 	success:function(res){
         $('.la_l_nav').html(res.topic_content);
         $('.la_l_con').html(res.cat_content);
  	 	}
  	 })
  })

    //ajax加载热门推荐
    $.ajax({
    	url:'goods/hot.json',
    	type:'get',
    	success:function(res){
          for(var i=0;i<res.length;i++){
          	  var htm="";
          	  html='<div class="done_img"><a href="list.html" target="_blank"><img src="'+res[i].src+'"title='+res[i].title+'/></a></div><div class="done_name"><a href="javascript:;">'+res[i].title+'</a></div><div class="done_price"><span class="shop_pri"><em>￥'+res[i].price+'</em></span><span class="bf_pri"><em>￥'+res[i].originalprice+'</em></span></div>';
              $('#dome1').find('li').eq(i).html(html);
          }

    	}

    })

     $.ajax({
    	url:'goods/qiang.json',
    	type:'get',
    	success:function(res){
    		
          for(var i=0;i<res.length;i++){
          	  var htm="";
          	  html='<div class="done_img"><a href=""><img src="'+res[i].src+'"title='+res[i].title+'/></a></div><div class="done_name"><a href="">'+res[i].title+'</a></div><div class="done_price"><span class="shop_pri"><em>￥'+res[i].price+'</em></span><span class="bf_pri"><em>￥'+res[i].originalprice+'</em></span></div>';
              $('#dome2').find('li').eq(i).html(html);
          }
    	}

    })
        $.ajax({
    	url:'goods/hot.json',
    	type:'get',
    	success:function(res){
    	
          for(var i=0;i<res.length;i++){
          	  var htm="";
          	  html='<div class="done_img"><a href=""><img src="'+res[i].src+'"title='+res[i].title+'/></a></div><div class="done_name"><a href="">'+res[i].title+'</a></div><div class="done_price"><span class="shop_pri"><em>￥'+res[i].price+'</em></span><span class="bf_pri"><em>￥'+res[i].originalprice+'</em></span></div>';
              $('#dome3').find('li').eq(i).html(html);
          }
    	}

    })
           $.ajax({
    	url:'goods/qiang.json',
    	type:'get',
    	success:function(res){
    	
          for(var i=0;i<res.length;i++){
          	  var htm="";
          	  html='<div class="done_img"><a href=""><img src="'+res[i].src+'"title='+res[i].title+'/></a></div><div class="done_name"><a href="">'+res[i].title+'</a></div><div class="done_price"><span class="shop_pri"><em>￥'+res[i].price+'</em></span><span class="bf_pri"><em>￥'+res[i].originalprice+'</em></span></div>';
              $('#dome4').find('li').eq(i).html(html);
          }
    	}

    })

//吸顶搜索栏
   //回到顶部按钮显示隐藏
   $(window).scroll(function(){
      if($(window).scrollTop()>$('.shop_nav').offset().top){

          $('.attachtop').stop().animate({'top':0});
          $('.returntop').show();
      }else{
           $('.attachtop').stop().animate({'top':-60});
           $('.returntop').hide();
      }
       
   })

  //左侧导航楼梯
 
   $(window).scroll(function(){
        if( $(window).scrollTop() > $('.con_brand').offset().top && $(window).scrollTop() < $('#floor4').find('.gf_con').offset().top ){
           $('.elevator').stop().animate({'opacity':1})
        }else{
           $('.elevator').stop().animate({'opacity':0})
        }

        var length = $('.goods_floor').length;

         for(var i=0 ;i<length; i++){
             //滚动条的长度大于楼层的offset().top减去一定值，而楼层的offse()是固定的,不给值的话会出现选中错误
            if( ($('.goods_floor').eq(i).offset().top-400) < $(window).scrollTop() ){
                 $('.elevator').find('li').eq(i).addClass('cur');
                 $('.elevator').find('li').eq(i).siblings().removeClass('cur');
                
            }
         }
        
   })

    $('.elevator').find('li').click(function(){

         var sTop = $('.goods_floor').eq($(this).index()).offset().top;
         $('body,html').stop().animate({scrollTop:sTop});//楼层有序滚动
    })
    
  //购物车
    $('.linkpanel').find('li').on({
       mouseenter:function(){
         $(this).find('a').addClass('on');
       },
       mouseleave:function(){
         $(this).find('a').removeClass('on');
       }
    })
 $('.cartlist').on({
       mouseenter:function(){
         $(this).addClass('on');
       },
       mouseleave:function(){
         $(this).removeClass('on');
       },
      //购物车滑入滑出
       click:function(){
         if($('.morelinkwrap').css('right') == '0px'){
             $('.morelinkwrap').stop().animate({'right':'-280'});
              $(this).addClass('on');
          }else{
             $('.morelinkwrap').stop().animate({'right':0});
             $(this).removeClass('on');
          }
       }
   })
 
    $('.close').click(function(){
        if($('.morelinkwrap').css('right') == '0px'){
             $('.morelinkwrap').stop().animate({'right':'-280'});
              
          }else{
             $('.morelinkwrap').stop().animate({'right':0});
             
          }
    })

    //回到顶部
    $('.returntop').click(function(){

       $('body,html').stop().animate({scrollTop:0});
    })
   
  //倒计时
   overTime();
   function check(i){
          if(i<10){
             i = '0'+i;
          }
         return i;
   }
   function overTime(){
     var endTime = new Date("2017/1/1,00:00:00");
     var  now = new Date();
     var leftTime = parseInt((endTime.getTime()-now.getTime())/1000);
     var d = parseInt(leftTime/(60*60*24));
     var h = parseInt( leftTime/(60*60)%24 );
     var m = parseInt( leftTime/60%60 );
     var s = parseInt( leftTime%60 );
     m = check(m);
     s = check(s);
     $('.time').html(' <span>'+d+'</span> 天<span>'+h+'</span> 时<span>'+m+'</span> 分<span>'+s+'</span> 秒');
     $('.team_ti').html(' <span>'+d+'</span> 天<span>'+h+'</span> 时<span>'+m+'</span> 分<span>'+s+'</span> 秒')
     if(leftTime<=0){
         $('.time').html('Hello World!');
         $('.team_ti').html('Hello World!');
     }
     setTimeout(overTime,1000);
   }

   //切换商品和店铺
   $('.cur').click(function(){
        var html = $(this).html();
        var shtml = $(this).siblings().html();
        $(this).html(shtml);
        $(this).siblings().html(html);
        $(this).parent().css({
          'overflow':"hidden",
          'height':'35px'
        })
   })

})