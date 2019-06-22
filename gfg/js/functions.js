
//众筹时间倒计时
var leftTimer = function(year, month, day, hour, minute, second){
    var leftTime = (new Date(year, month-1, day, hour, minute, second)) - (new Date());//计算剩余毫秒数
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余天数
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余小时数
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩分钟数
    var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余秒数

    days = checkTime(days).toString();
    hours = checkTime(hours).toString();
    minutes = checkTime(minutes).toString();
    seconds = checkTime(seconds).toString();

    $(".countdown-container .countdown-time .day div").eq(0).html(days.charAt(0));
    $(".countdown-container .countdown-time .day div").eq(1).html(days.charAt(1));
    $(".countdown-container .countdown-time .hour div").eq(0).html(hours.charAt(0));
    $(".countdown-container .countdown-time .hour div").eq(1).html(hours.charAt(1));
    $(".countdown-container .countdown-time .minute div").eq(0).html(minutes.charAt(0));
    $(".countdown-container .countdown-time .minute div").eq(1).html(minutes.charAt(1));
    $(".countdown-container .countdown-time .second div").eq(0).html(seconds.charAt(0));
    $(".countdown-container .countdown-time .second div").eq(1).html(seconds.charAt(1));
}
var checkTime = function(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}

$(document).ready(function() {

    var language = localStorage.getItem("language", language);

    //调用翻译的内容
    translation();

    if(language == "cn"){
        $("#community-video .video-content .btn-video img").attr("src", "./img/community/bg_btn.jpg");
    }else{
        $("#community-video .video-content .btn-video img").attr("src", "./img/community/bg_btn_en.jpg");
    }

    //给dAPP添加链接
    $("#team .team-support-content .team-support-item1 a").attr({"href": "http://ndapp.org", "target": "_blank"});


    if($(window).width() > 1251){
        var margin_bottom = ($(window).width() * 0.495 - $("#competitive .head").height() - 457.6)/2;
        $("#competitive .head").css("margin-bottom", margin_bottom)
    }
    if($(window).width() < 451){
        $("#community-video .video-content .btn-video img").attr("src", "./img/community/bg_btn_big_en.jpg");
        if(language == "cn")$("#community-video .video-content .btn-video img").attr("src", "./img/community/bg_btn_big.jpg");
    }

    $(window).resize(function(){//监听浏览器窗口大小事件

        if($(window).width() > 1251){
            var margin_bottom = ($(window).width() * 0.495 - $("#competitive .head").height() - 457.6)/2;
            $("#competitive .head").css("margin-bottom", margin_bottom);
        }else{
            $("#competitive .head").css("margin", "0vw 0 4vw");
        }
        if($(window).width() < 451){
            $("#community-video .video-content .btn-video img").attr("src", "./img/community/bg_btn_big_en.jpg");
            if(language == "cn")$("#community-video .video-content .btn-video img").attr("src", "./img/community/bg_btn_big.jpg");
        }else {
            $("#community-video .video-content .btn-video img").attr("src", "./img/community/bg_btn_en.jpg");
            if(language == "cn")$("#community-video .video-content .btn-video img").attr("src", "./img/community/bg_btn.jpg");
        }
    })

    var community_video = $("#community-video .video-content video")[0];

    //community的视频动态修改
    $("#community-video .video-content .btn-video").click(function(){
        $("#community-video .video-content video").show();
        var language = localStorage.getItem("language");
        if(language == "cn"){
            var text = '<source src="./img/community/gamefund.webm" type="video/webm" />' +
                       '<source src="./img/community/gamefund.mp4" type="video/mp4" />' +     
                       '<div id="video_tag_tip">您的浏览器不支持video标签</div>';
            $("#community-video .video-content video").append(text);           
        }else{
            var text = '<source src="./img/community/gamefund_en.webm" type="video/webm" />' +
                       '<source src="./img/community/gamefund_en.mp4" type="video/mp4" />' +     
                       '<div id="video_tag_tip">您的浏览器不支持video标签</div>';
            $("#community-video .video-content video").append(text);
        }

        $(this).hide();
        if(community_video.paused){
            community_video.play();
            $("#community-video .video-content .btn-video").css("display", "none");
            $("#community-video .video-content video").attr("controls", "controls");
        }else{
            community_video.pause();
            $("#community-video .video-content .btn-video").show();
        }
    })


    //众筹时间倒计时
    var startTime = (new Date(2018, 5-1, 18, 11, 0, 0)) - (new Date());
    var endTime = (new Date(2018, 6-1, 4, 11, 0, 0)) - (new Date());
    if(startTime < 0 && endTime > 0){
        $(".countdown-container").css("display", "flex");
        setInterval("leftTimer(2018, 6, 4, 11, 0, 0)", 1000);

        if(language == "cn"){
            $("#countdown-time-text").html("距离GAME.FUND原型展示版本上线还有");
        }else{
            $("#countdown-time-text").html("GAME.FUND prototype display version will go live in :");
        }

        $(".countdown-container .countdown-time-endTime p").html("2018.6.4&nbsp&nbsp&nbsp11:00");
    }else{
        //原型版本
        $(".version-container").show();
        showProtoVer();
    }

    //原型版本
    function showProtoVer(){
        // if(language == "cn"){
        //     $("#button-version div").html("原型展示版");
        //     $("#version-content-text").html("原型展示版本仅供展示预览，非正式上线版本。");
        //     $("#button-version").attr("href", "http://game.fund");
        //     $("#button-version").attr("target", "_blank");
        // }else{
        //     $("#button-version div").html("Prototype display<br/> version");
        //     $("#version-content-text").html("Prototype display version is not a formal online live version, just for display and preview.");
            
        //     $(".version-container .version-content .button-version>div").addClass("en-version").css({"line-height": "120%"});
        //     $(".version-container .version-content .version-content-text").addClass("en-version");
        //     $("#button-version").attr("href", "http://game.fund");
        //     $("#button-version").attr("target", "_blank");
        // }

        if(language == "cn"){
            $("#sequence-button-version span").html("Game.Fund 下载");
            $("#sequence-button-version").attr("href", "http://game.fund");
            $("#sequence_other-button-version span").html("Game.Fund 下载");
            $("#sequence_other-button-version").attr("href", "http://game.fund");
        }else{
            $("#sequence-button-version span").html("Download Game.Fund");      //Game.Fund Download
            $("#sequence-button-version").attr("href", "http://game.fund?language=en");
            $("#sequence_other-button-version span").html("Download Game.Fund");      //Game.Fund Download
            $("#sequence_other-button-version").attr("href", "http://game.fund?language=en");
            $("#top-slider .slider-button .new-button-version").addClass("en-version");
            $("#sequence .load-pdf-content .new-button-version").addClass("en-version");
        }
    }
        

    /*----------------------------------------------------*/
    /*	Sequence Slider
    /*----------------------------------------------------*/
        
    $(function(){
        var options = {
            nextButton: true,
            prevButton: true,
            pagination: true,
            animateStartingFrameIn: true,
            autoPlay: true,
            autoPlayDelay: 3000,
            preloader: true,
            preloadTheseFrames: [1],
        };
        
        var mySequence = $("#sequence").sequence(options).data("sequence");
    });

    /*----------------------------------------------------*/
    /*	Portfolio Hover Overlay
    /*----------------------------------------------------*/

    $('.overlay').hover(
            function(){
                $(this).find('.caption').fadeIn(550); 
            },
            function(){
                $(this).find('.caption').fadeOut(550); 
            }
    ); 

    /*----------------------------------------------------*/
    /*	Back to the Top Button
    /*----------------------------------------------------*/

    $(function(){
        $(window).scroll(function() { 
            if ($(this).scrollTop() > 1200) {
                $("#top-bt:hidden").css('visibility','visible');   
                $("#top-bt:hidden").fadeIn('550');  
            } 
            else {     
                $("#top-bt:visible").fadeOut("550"); 
            }  
        });
    });
    
    $(document).ready(function(){
        
    })

    //根据不同语音版本和屏宽修改标签元素
    $(function(){
        var language = localStorage.getItem("language");        
        if(language == "en"){
            $("#portfolio .overlay p ").css("line-height", "18px");
            $("#portfolio .overlay  #Grid_title_item11").css("margin", "0");
            
            $("#competitive .background-img .competitive-content .item-content .item-title").css("font-size", "16px");
            $("#competitive .background-img .competitive-content .item-content .item-title").css("margin-bottom", "0");
            $("#competitive .background-img .competitive-content .fifth-content .item-title").css("margin-top", "0");
            $("#competitive .background-img .competitive-content #competitive_title_item6").css("line-height", "20px");
            // $("#industry-status .container .prominent-characteristic").css("margin-top", "5vw");
            $("#industry-status .container .special-info div span").css("line-height", "20px");
            $("#industry-status .industry-status-intro").css("top", "12%");

            if($(window).width() > 1251){
                $("#portfolio #Grid .service-col").css("padding-top", "25px");
                $("#portfolio .overlay .icon-mobile").css("height", "55px");
            }
            if($(window).width() > 1250){
                $("#service .container .service .service-col").css("padding", "0");
                $("#service .service-col p").css("line-height", "18px");
            }
            
            if($(window).width() < 1400){
                $("#service .service-col h4").css({"line-height":"20px", "padding":"0"});
            }
         
        }else if(language == "ja"){          
            $("#portfolio #Grid .service-col").css("padding-top", "25px");
            $("#portfolio .overlay .icon-mobile").css("height", "55px");
            $("#industry-status .industry-status-intro").css("top", "12%");     
            $("#competitive .background-img .competitive-content #competitive_title_item6").css({"line-height": "20px", "margin-bottom": "0px"});//competitive_title_item3
            $("#competitive .background-img .competitive-content #competitive_title_item3").css({"line-height": "20px", "margin-bottom": "0px"});


            if($(window).width() > 1250){
                $("#service .container .service .service-col").css("padding", "0");
                $("#service .service-col p").css("line-height", "22px");
                $("#service .service-col h4").css({"margin": "0", "padding":"0"});
            }
            if($(window).width() < 475){
                $("#sequence_other_item2_fourth").css({"position": "absolute", "letter-spacing": "-1px", "font-size": "15px"});
            }
            if($(window).width() < 375){
                $("#sequence_other_item2_fourth").css({"position": "absolute", "letter-spacing": "-2px", "font-size": "15px"});
            }
            $("#sequence_item2_fourth").css({"position": "absolute"});
        }
    })

    $(window).resize(function(){
        var language = localStorage.getItem("language");
        if(language == "en"){       
            if($(window).width() > 1251){
                $("#portfolio #Grid .service-col").css("padding-top", "25px");
                $("#portfolio .overlay .icon-mobile").css("height", "55px");
            }
            if($(window).width() > 1250){
                $("#service .container .service .service-col").css("padding", "0");
                $("#service .service-col p").css("line-height", "18px");
            }else{
                $("#service .container .service .service-col").css("padding", "30px 10px");
            }
            
            if($(window).width() < 1400){
                $("#service .service-col h4").css({"line-height":"20px", "padding":"0"});
            }else if($(window).width() < 451){
                $("#service .service-col h4").css({"line-height":"inherit", "padding":"10px 0px"});
            }else{
                $("#service .service-col h4").css({"line-height":"inherit", "padding":"10px 0px"});
            }

        }else if(language == "ja"){
            if($(window).width() > 1250){
                $("#service .container .service .service-col").css("padding", "0");
                $("#service .service-col p").css("line-height", "22px");
                $("#service .service-col h4").css({"margin": "0", "padding":"0"});
            }else{
                $("#service .container .service .service-col").css("padding", "30px 10px");
            }
            if($(window).width() < 375){
                $("#sequence_other_item2_fourth").css({"position": "absolute", "letter-spacing": "-2px", "font-size": "15px"});
            }else{
                $("#sequence_other_item2_fourth").css({"position": "block", "letter-spacing": "-1px", "font-size": "16px"})
            }
        }
    })

    //翻译的内容
    //  var translation = function(){
    function translation(){
        var language = localStorage.getItem("language");
        if(language == "cn"){
            console.log("cn1")
            $("html").attr("lang", "zh-cmn-Hans");
            //#top-slider
            $("#sequence_item1").html(cn.sequence_item1);
            $("#sequence_item2_fourth").html(cn.sequence_item2_fourth);
            $("#sequence_item2_first_paper").html(cn.sequence_item2);
            $("#sequence_other_item2_first_paper").html(cn.sequence_item2);

            $("#sequence_other_item1").html(cn.sequence_item1);
            $("#sequence_other_item2_fourth").html(cn.sequence_item2_fourth);
            
            //#industry_status
            $("#industry_status_feature").html(cn.industry_status_feature);
            $("#industry_status_item1").html(cn.industry_status_item1);
            $("#industry_status_item2").html(cn.industry_status_item2);
            $("#industry_status_item3").html(cn.industry_status_item3);
            $("#industry_status_item4").html(cn.industry_status_item4);
            // $("#industry_status_item5").html(cn.industry_status_item5);

            $("#industry_status_feature1").html(cn.industry_status_feature1);
            $("#industry_status_feature2").html(cn.industry_status_feature2);
            $("#industry_status_feature3").html(cn.industry_status_feature3);
            $("#industry_status_feature4").html(cn.industry_status_feature4);
            $("#industry_status_feature5").html(cn.industry_status_feature5);
            //#service
            $("#service_title1").html(cn.service_title1);
            $("#service_title2").html(cn.service_title2);
            $("#service_title_item1").html(cn.service_title_item1);
            $("#service_text_item1").html(cn.service_text_item1);
            $("#service_title_item2").html(cn.service_title_item2);
            $("#service_text_item2").html(cn.service_text_item2);
            $("#service_title_item3").html(cn.service_title_item3);
            $("#service_text_item3").html(cn.service_text_item3);
            //#portfolio
            $("#portfolio_title1").html(cn.portfolio_title1);
            $("#portfolio_title2").html(cn.portfolio_title2);
            $("#portfolio_title_item1").html(cn.portfolio_title_item1);
            $("#portfolio_title_item2").html(cn.portfolio_title_item2);
            $("#portfolio_title_item3").html(cn.portfolio_title_item3);
            $("#portfolio_title_item4").html(cn.portfolio_title_item4);
            $("#portfolio_title_item5").html(cn.portfolio_title_item5);

            $("#Grid_title_item1").html(cn.Grid_title_item1);
            $("#Grid_text_item1").html(cn.Grid_text_item1);
            $("#Grid_title_item2").html(cn.Grid_title_item2);
            $("#Grid_text_item2").html(cn.Grid_text_item2);
            $("#Grid_title_item3").html(cn.Grid_title_item3);
            $("#Grid_text_item3").html(cn.Grid_text_item3);
            $("#Grid_title_item4").html(cn.Grid_title_item4);
            $("#Grid_text_item4").html(cn.Grid_text_item4);

            $("#Grid_title_item5").html(cn.Grid_title_item5);
            $("#Grid_text_item5").html(cn.Grid_text_item5);
            $("#Grid_title_item6").html(cn.Grid_title_item6);
            $("#Grid_text_item6").html(cn.Grid_text_item6);
            $("#Grid_title_item7").html(cn.Grid_title_item7);
            $("#Grid_text_item7").html(cn.Grid_text_item7);
            $("#Grid_title_item8").html(cn.Grid_title_item8);
            $("#Grid_text_item8").html(cn.Grid_text_item8);

            $("#Grid_title_item9").html(cn.Grid_title_item9);
            $("#Grid_text_item9").html(cn.Grid_text_item9);
            $("#Grid_title_item10").html(cn.Grid_title_item10);
            $("#Grid_text_item10").html(cn.Grid_text_item10);
            $("#Grid_title_item11").html(cn.Grid_title_item11);
            $("#Grid_text_item11").html(cn.Grid_text_item11);
            $("#Grid_title_item12").html(cn.Grid_title_item12);
            $("#Grid_text_item12").html(cn.Grid_text_item12);
            //#competitive
            $("#competitive_title1").html(cn.competitive_title1);
            $("#competitive_title2").html(cn.competitive_title2);

            $("#competitive_title_item1").html(cn.competitive_title_item1);
            $("#competitive_text_item1").html(cn.competitive_text_item1);
            $("#competitive_title_item2").html(cn.competitive_title_item2);
            $("#competitive_text_item2").html(cn.competitive_text_item2);
            $("#competitive_title_item3").html(cn.competitive_title_item3);
            $("#competitive_text_item3").html(cn.competitive_text_item3);
            $("#competitive_title_item4").html(cn.competitive_title_item4);
            $("#competitive_text_item4").html(cn.competitive_text_item4);
            $("#competitive_title_item5").html(cn.competitive_title_item5);
            $("#competitive_text_item5").html(cn.competitive_text_item5);
            $("#competitive_title_item6").html(cn.competitive_title_item6);
            $("#competitive_text_item6").html(cn.competitive_text_item6);

            $("#competitive_other_title_item1").html(cn.competitive_title_item1);
            $("#competitive_other_text_item1").html(cn.competitive_text_item1);
            $("#competitive_other_title_item2").html(cn.competitive_title_item2);
            $("#competitive_other_text_item2").html(cn.competitive_text_item2);
            $("#competitive_other_title_item3").html(cn.competitive_title_item3);
            $("#competitive_other_text_item3").html(cn.competitive_text_item3);
            $("#competitive_other_title_item4").html(cn.competitive_title_item4);
            $("#competitive_other_text_item4").html(cn.competitive_text_item4);
            $("#competitive_other_title_item5").html(cn.competitive_title_item5);
            $("#competitive_other_text_item5").html(cn.competitive_text_item5);
            $("#competitive_other_title_item6").html(cn.competitive_title_item6);
            $("#competitive_other_text_item6").html(cn.competitive_text_item6);
            //price_title
            $("#price_title1").html(cn.price_title1);
            $("#price_title2").html(cn.price_title2);

            $("#price_item1").html(cn.price_item1);
            $("#price_item2").html(cn.price_item2);
            $("#price_item3").html(cn.price_item3);
            $("#price_item4").html(cn.price_item4);
            $("#price_item5").html(cn.price_item5);
            $("#price_item6").html(cn.price_item6);
            $("#price_item7").html(cn.price_item7);
            $("#price_item8").html(cn.price_item8);
            $("#price_item9").html(cn.price_item9);
            $("#price_item10").html(cn.price_item10);
            $("#price_item11").html(cn.price_item11);
            $("#price_item12").html(cn.price_item12);  
            //team_title
            $("#team_title").html(cn.team_title);
            $("#team_title_intro").html(cn.team_title_intro);
            $("#team-creative-title").html(cn.team_title1);
            $("#team-consultant-title").html(cn.team_title2);
            $("#team-investment-title").html(cn.team_title3);
            
            $("#team_name_item0").html(cn.team_name_item0);
            $("#team_text_item0").html(cn.team_text_item0);

            $("#team_name_item1").html(cn.team_name_item1);
            $("#team_text_item1").html(cn.team_text_item1);
            $("#team_name_item2").html(cn.team_name_item2);
            $("#team_text_item2").html(cn.team_text_item2);
            $("#team_name_item3").html(cn.team_name_item3);
            $("#team_text_item3").html(cn.team_text_item3);
            $("#team_name_item4").html(cn.team_name_item4);
            $("#team_text_item4").html(cn.team_text_item4);

            $("#team_name_item5").html(cn.team_name_item5);
            $("#team_text_item5").html(cn.team_text_item5);
            $("#team_name_item6").html(cn.team_name_item6);
            $("#team_text_item6").html(cn.team_text_item6);
            $("#team_name_item7").html(cn.team_name_item7);
            $("#team_text_item7").html(cn.team_text_item7);
            $("#team_name_item8").html(cn.team_name_item8);
            $("#team_text_item8").html(cn.team_text_item8);

            $("#team_name_item9").html(cn.team_name_item9);
            $("#team_text_item9").html(cn.team_text_item9);
            $("#team_name_item10").html(cn.team_name_item10);
            $("#team_text_item10").html(cn.team_text_item10);
            $("#team_name_item11").html(cn.team_name_item11);
            $("#team_text_item11").html(cn.team_text_item11);
            $("#team_name_item12").html(cn.team_name_item12);
            $("#team_text_item12").html(cn.team_text_item12);
            
            $("#team_support_item1").html(cn.team_support_item1);
            $("#team_support_item2").html(cn.team_support_item2);
            $("#team_support_item3").html(cn.team_support_item3);
            //comunity
            $("#community_title1").html(cn.community_title1);
            $("#community_title2").html(cn.community_title2);
            $("#community_img_title").html(cn.community_img_title);
            $("#community_title_item1").html(cn.community_title_item1);
            $("#community_text_item1").html(cn.community_text_item1);
            $("#community_title_item2").html(cn.community_title_item2);
            $("#community_text_item2").html(cn.community_text_item2);
            $("#community_title_item3").html(cn.community_title_item3);
            $("#community_text_item3").html(cn.community_text_item3);
            $("#community_title_item4").html(cn.community_title_item4);
            $("#community_text_item4").html(cn.community_text_item4);
            $("#community_title_item5").html(cn.community_title_item5);
            $("#community_text_item5").html(cn.community_text_item5);
            
            $("#total_content_item1").html(cn.total_content_item1);
            $("#total_content_item2").html(cn.total_content_item2);
            $("#total_content_item3").html(cn.total_content_item3);

            $("#community_video_title").html(cn.community_video_title);
            $("#video_tag_tip").html(cn.video_tag_tip);
            $("#community_video_text1").html(cn.community_video_text1);
            $("#community_video_text2").html(cn.community_video_text2);

        }else if(language == "en"){
            console.log("en")
            $("html").attr("lang", "en");
            //#top-slider
            $("#sequence_item1").html(en.sequence_item1);
            $("#sequence_item2_fourth").html(en.sequence_item2_fourth);
            $("#sequence_item2_first_paper").html(en.sequence_item2);
            $("#sequence_other_item2_first_paper").html(en.sequence_item2);

            $("#sequence_other_item1").html(en.sequence_item1);
            $("#sequence_other_item2_fourth").html(en.sequence_item2_fourth);
            //#industry_status
            $("#industry_status_feature").html(en.industry_status_feature);
            $("#industry_status_item1").html(en.industry_status_item1);
            $("#industry_status_item2").html(en.industry_status_item2);
            $("#industry_status_item3").html(en.industry_status_item3);
            $("#industry_status_item4").html(en.industry_status_item4);
            // $("#industry_status_item5").html(en.industry_status_item5);

            $("#industry_status_feature1").html(en.industry_status_feature1.toUpperCase());
            $("#industry_status_feature2").html(en.industry_status_feature2.toUpperCase());
            $("#industry_status_feature3").html(en.industry_status_feature3.toUpperCase());
            $("#industry_status_feature4").html(en.industry_status_feature4.toUpperCase());
            $("#industry_status_feature5").html(en.industry_status_feature5.toUpperCase());
            //#service
            $("#service_title1").html(en.service_title1);
            $("#service_title2").html(en.service_title2);
            $("#service_title_item1").html(en.service_title_item1);
            $("#service_text_item1").html(en.service_text_item1);
            $("#service_title_item2").html(en.service_title_item2);
            $("#service_text_item2").html(en.service_text_item2);
            $("#service_title_item3").html(en.service_title_item3);
            $("#service_text_item3").html(en.service_text_item3);
            //#portfolio
            $("#portfolio_title1").html(en.portfolio_title1);
            $("#portfolio_title2").html(en.portfolio_title2);
            $("#portfolio_title_item1").html(en.portfolio_title_item1);
            $("#portfolio_title_item2").html(en.portfolio_title_item2);
            $("#portfolio_title_item3").html(en.portfolio_title_item3);
            $("#portfolio_title_item4").html(en.portfolio_title_item4);
            $("#portfolio_title_item5").html(en.portfolio_title_item5);

            $("#Grid_title_item1").html(en.Grid_title_item1);
            $("#Grid_text_item1").html(en.Grid_text_item1);
            $("#Grid_title_item2").html(en.Grid_title_item2);
            $("#Grid_text_item2").html(en.Grid_text_item2);
            $("#Grid_title_item3").html(en.Grid_title_item3);
            $("#Grid_text_item3").html(en.Grid_text_item3);
            $("#Grid_title_item4").html(en.Grid_title_item4);
            $("#Grid_text_item4").html(en.Grid_text_item4);

            $("#Grid_title_item5").html(en.Grid_title_item5);
            $("#Grid_text_item5").html(en.Grid_text_item5);
            $("#Grid_title_item6").html(en.Grid_title_item6);
            $("#Grid_text_item6").html(en.Grid_text_item6);
            $("#Grid_title_item7").html(en.Grid_title_item7);
            $("#Grid_text_item7").html(en.Grid_text_item7);
            $("#Grid_title_item8").html(en.Grid_title_item8);
            $("#Grid_text_item8").html(en.Grid_text_item8);

            $("#Grid_title_item9").html(en.Grid_title_item9);
            $("#Grid_text_item9").html(en.Grid_text_item9);
            $("#Grid_title_item10").html(en.Grid_title_item10);
            $("#Grid_text_item10").html(en.Grid_text_item10);
            $("#Grid_title_item11").html(en.Grid_title_item11);
            $("#Grid_text_item11").html(en.Grid_text_item11);
            $("#Grid_title_item12").html(en.Grid_title_item12);
            $("#Grid_text_item12").html(en.Grid_text_item12);
            //#competitive
            $("#competitive_title1").html(en.competitive_title1);
            $("#competitive_title2").html(en.competitive_title2);

            $("#competitive_title_item1").html(en.competitive_title_item1);
            $("#competitive_text_item1").html(en.competitive_text_item1);
            $("#competitive_title_item2").html(en.competitive_title_item2);
            $("#competitive_text_item2").html(en.competitive_text_item2);
            $("#competitive_title_item3").html(en.competitive_title_item3);
            $("#competitive_text_item3").html(en.competitive_text_item3);
            $("#competitive_title_item4").html(en.competitive_title_item4);
            $("#competitive_text_item4").html(en.competitive_text_item4);
            $("#competitive_title_item5").html(en.competitive_title_item5);
            $("#competitive_text_item5").html(en.competitive_text_item5);
            $("#competitive_title_item6").html(en.competitive_title_item6);
            $("#competitive_text_item6").html(en.competitive_text_item6);

            $("#competitive_other_title_item1").html(en.competitive_title_item1);
            $("#competitive_other_text_item1").html(en.competitive_text_item1);
            $("#competitive_other_title_item2").html(en.competitive_title_item2);
            $("#competitive_other_text_item2").html(en.competitive_text_item2);
            $("#competitive_other_title_item3").html(en.competitive_title_item3);
            $("#competitive_other_text_item3").html(en.competitive_text_item3);
            $("#competitive_other_title_item4").html(en.competitive_title_item4);
            $("#competitive_other_text_item4").html(en.competitive_text_item4);
            $("#competitive_other_title_item5").html(en.competitive_title_item5);
            $("#competitive_other_text_item5").html(en.competitive_text_item5);
            $("#competitive_other_title_item6").html(en.competitive_title_item6);
            $("#competitive_other_text_item6").html(en.competitive_text_item6);
            //price_title
            $("#price_title1").html(en.price_title1);
            $("#price_title2").html(en.price_title2);

            $("#price_item1").html(en.price_item1);
            $("#price_item2").html(en.price_item2);
            $("#price_item3").html(en.price_item3);
            $("#price_item4").html(en.price_item4);
            $("#price_item5").html(en.price_item5);
            $("#price_item6").html(en.price_item6);
            $("#price_item7").html(en.price_item7);
            $("#price_item8").html(en.price_item8);
            $("#price_item9").html(en.price_item9);
            $("#price_item10").html(en.price_item10);
            $("#price_item11").html(en.price_item11);
            $("#price_item12").html(en.price_item12);  
            //team_title
            $("#team_title").html(en.team_title);
            $("#team_title_intro").html(en.team_title_intro);
            $("#team-creative-title").html(en.team_title1.toUpperCase());
            $("#team-consultant-title").html(en.team_title2.toUpperCase());
            $("#team-investment-title").html(en.team_title3.toUpperCase());
            
            $("#team_name_item0").html(en.team_name_item0);
            $("#team_text_item0").html(en.team_text_item0);

            $("#team_name_item1").html(en.team_name_item1);
            $("#team_text_item1").html(en.team_text_item1);
            $("#team_name_item2").html(en.team_name_item2);
            $("#team_text_item2").html(en.team_text_item2);
            $("#team_name_item3").html(en.team_name_item3);
            $("#team_text_item3").html(en.team_text_item3);
            $("#team_name_item4").html(en.team_name_item4);
            $("#team_text_item4").html(en.team_text_item4);

            $("#team_name_item5").html(en.team_name_item5);
            $("#team_text_item5").html(en.team_text_item5);
            $("#team_name_item6").html(en.team_name_item6);
            $("#team_text_item6").html(en.team_text_item6);
            $("#team_name_item7").html(en.team_name_item7);
            $("#team_text_item7").html(en.team_text_item7);
            $("#team_name_item8").html(en.team_name_item8);
            $("#team_text_item8").html(en.team_text_item8);

            $("#team_name_item9").html(en.team_name_item9);
            $("#team_text_item9").html(en.team_text_item9);
            $("#team_name_item10").html(en.team_name_item10);
            $("#team_text_item10").html(en.team_text_item10);
            $("#team_name_item11").html(en.team_name_item11);
            $("#team_text_item11").html(en.team_text_item11);
            $("#team_name_item12").html(en.team_name_item12);
            $("#team_text_item12").html(en.team_text_item12);

            $("#team_support_item1").html(en.team_support_item1);
            $("#team_support_item2").html(en.team_support_item2);
            $("#team_support_item3").html(en.team_support_item3);
            //comunity
            $("#community_title1").html(en.community_title1);
            $("#community_title2").html(en.community_title2);
            $("#community_img_title").html(en.community_img_title.toUpperCase());
            $("#community_title_item1").html(en.community_title_item1);
            $("#community_text_item1").html(en.community_text_item1);
            $("#community_title_item2").html(en.community_title_item2);
            $("#community_text_item2").html(en.community_text_item2);
            $("#community_title_item3").html(en.community_title_item3);
            $("#community_text_item3").html(en.community_text_item3);
            $("#community_title_item4").html(en.community_title_item4);
            $("#community_text_item4").html(en.community_text_item4);
            $("#community_title_item5").html(en.community_title_item5);
            $("#community_text_item5").html(en.community_text_item5);
            
            $("#total_content_item1").html(en.total_content_item1);
            $("#total_content_item2").html(en.total_content_item2);
            $("#total_content_item3").html(en.total_content_item3);

            $("#community_video_title").html(en.community_video_title.toUpperCase());
            $("#video_tag_tip").html(en.video_tag_tip);
            $("#community_video_text1").html(en.community_video_text1);
            $("#community_video_text2").html(en.community_video_text2);

        }else{
            console.log("en2")
            $("html").attr("lang", "en");
            //#top-slider
            $("#sequence_item1").html(en.sequence_item1);
            $("#sequence_item2_fourth").html(en.sequence_item2_fourth);
            $("#sequence_item2_first_paper").html(en.sequence_item2);
            $("#sequence_other_item2_first_paper").html(en.sequence_item2);
            
            $("#sequence_other_item1").html(en.sequence_item1);
            $("#sequence_other_item2_fourth").html(en.sequence_item2_fourth);
            //#industry_status
            $("#industry_status_feature").html(en.industry_status_feature);
            $("#industry_status_item1").html(en.industry_status_item1);
            $("#industry_status_item2").html(en.industry_status_item2);
            $("#industry_status_item3").html(en.industry_status_item3);
            $("#industry_status_item4").html(en.industry_status_item4);
            // $("#industry_status_item5").html(en.industry_status_item5);

            $("#industry_status_feature1").html(en.industry_status_feature1.toUpperCase());
            $("#industry_status_feature2").html(en.industry_status_feature2.toUpperCase());
            $("#industry_status_feature3").html(en.industry_status_feature3.toUpperCase());
            $("#industry_status_feature4").html(en.industry_status_feature4.toUpperCase());
            $("#industry_status_feature5").html(en.industry_status_feature5.toUpperCase());
            //#service
            $("#service_title1").html(en.service_title1);
            $("#service_title2").html(en.service_title2);
            $("#service_title_item1").html(en.service_title_item1);
            $("#service_text_item1").html(en.service_text_item1);
            $("#service_title_item2").html(en.service_title_item2);
            $("#service_text_item2").html(en.service_text_item2);
            $("#service_title_item3").html(en.service_title_item3);
            $("#service_text_item3").html(en.service_text_item3);
            //#portfolio
            $("#portfolio_title1").html(en.portfolio_title1);
            $("#portfolio_title2").html(en.portfolio_title2);
            $("#portfolio_title_item1").html(en.portfolio_title_item1);
            $("#portfolio_title_item2").html(en.portfolio_title_item2);
            $("#portfolio_title_item3").html(en.portfolio_title_item3);
            $("#portfolio_title_item4").html(en.portfolio_title_item4);
            $("#portfolio_title_item5").html(en.portfolio_title_item5);

            $("#Grid_title_item1").html(en.Grid_title_item1);
            $("#Grid_text_item1").html(en.Grid_text_item1);
            $("#Grid_title_item2").html(en.Grid_title_item2);
            $("#Grid_text_item2").html(en.Grid_text_item2);
            $("#Grid_title_item3").html(en.Grid_title_item3);
            $("#Grid_text_item3").html(en.Grid_text_item3);
            $("#Grid_title_item4").html(en.Grid_title_item4);
            $("#Grid_text_item4").html(en.Grid_text_item4);

            $("#Grid_title_item5").html(en.Grid_title_item5);
            $("#Grid_text_item5").html(en.Grid_text_item5);
            $("#Grid_title_item6").html(en.Grid_title_item6);
            $("#Grid_text_item6").html(en.Grid_text_item6);
            $("#Grid_title_item7").html(en.Grid_title_item7);
            $("#Grid_text_item7").html(en.Grid_text_item7);
            $("#Grid_title_item8").html(en.Grid_title_item8);
            $("#Grid_text_item8").html(en.Grid_text_item8);

            $("#Grid_title_item9").html(en.Grid_title_item9);
            $("#Grid_text_item9").html(en.Grid_text_item9);
            $("#Grid_title_item10").html(en.Grid_title_item10);
            $("#Grid_text_item10").html(en.Grid_text_item10);
            $("#Grid_title_item11").html(en.Grid_title_item11);
            $("#Grid_text_item11").html(en.Grid_text_item11);
            $("#Grid_title_item12").html(en.Grid_title_item12);
            $("#Grid_text_item12").html(en.Grid_text_item12);
            //#competitive
            $("#competitive_title1").html(en.competitive_title1);
            $("#competitive_title2").html(en.competitive_title2);

            $("#competitive_title_item1").html(en.competitive_title_item1);
            $("#competitive_text_item1").html(en.competitive_text_item1);
            $("#competitive_title_item2").html(en.competitive_title_item2);
            $("#competitive_text_item2").html(en.competitive_text_item2);
            $("#competitive_title_item3").html(en.competitive_title_item3);
            $("#competitive_text_item3").html(en.competitive_text_item3);
            $("#competitive_title_item4").html(en.competitive_title_item4);
            $("#competitive_text_item4").html(en.competitive_text_item4);
            $("#competitive_title_item5").html(en.competitive_title_item5);
            $("#competitive_text_item5").html(en.competitive_text_item5);
            $("#competitive_title_item6").html(en.competitive_title_item6);
            $("#competitive_text_item6").html(en.competitive_text_item6);

            $("#competitive_other_title_item1").html(en.competitive_title_item1);
            $("#competitive_other_text_item1").html(en.competitive_text_item1);
            $("#competitive_other_title_item2").html(en.competitive_title_item2);
            $("#competitive_other_text_item2").html(en.competitive_text_item2);
            $("#competitive_other_title_item3").html(en.competitive_title_item3);
            $("#competitive_other_text_item3").html(en.competitive_text_item3);
            $("#competitive_other_title_item4").html(en.competitive_title_item4);
            $("#competitive_other_text_item4").html(en.competitive_text_item4);
            $("#competitive_other_title_item5").html(en.competitive_title_item5);
            $("#competitive_other_text_item5").html(en.competitive_text_item5);
            $("#competitive_other_title_item6").html(en.competitive_title_item6);
            $("#competitive_other_text_item6").html(en.competitive_text_item6);
            //price_title
            $("#price_title1").html(en.price_title1);
            $("#price_title2").html(en.price_title2);

            $("#price_item1").html(en.price_item1);
            $("#price_item2").html(en.price_item2);
            $("#price_item3").html(en.price_item3);
            $("#price_item4").html(en.price_item4);
            $("#price_item5").html(en.price_item5);
            $("#price_item6").html(en.price_item6);
            $("#price_item7").html(en.price_item7);
            $("#price_item8").html(en.price_item8);
            $("#price_item9").html(en.price_item9);
            $("#price_item10").html(en.price_item10);
            $("#price_item11").html(en.price_item11);
            $("#price_item12").html(en.price_item12);          
            //team_title
            $("#team_title").html(en.team_title);
            $("#team_title_intro").html(en.team_title_intro);
            $("#team-creative-title").html(en.team_title1.toUpperCase());
            $("#team-consultant-title").html(en.team_title2.toUpperCase());
            $("#team-investment-title").html(en.team_title3.toUpperCase());
            
            $("#team_name_item0").html(en.team_name_item0);
            $("#team_text_item0").html(en.team_text_item0);

            $("#team_name_item1").html(en.team_name_item1);
            $("#team_text_item1").html(en.team_text_item1);
            $("#team_name_item2").html(en.team_name_item2);
            $("#team_text_item2").html(en.team_text_item2);
            $("#team_name_item3").html(en.team_name_item3);
            $("#team_text_item3").html(en.team_text_item3);
            $("#team_name_item4").html(en.team_name_item4);
            $("#team_text_item4").html(en.team_text_item4);

            $("#team_name_item5").html(en.team_name_item5);
            $("#team_text_item5").html(en.team_text_item5);
            $("#team_name_item6").html(en.team_name_item6);
            $("#team_text_item6").html(en.team_text_item6);
            $("#team_name_item7").html(en.team_name_item7);
            $("#team_text_item7").html(en.team_text_item7);
            $("#team_name_item8").html(en.team_name_item8);
            $("#team_text_item8").html(en.team_text_item8);

            $("#team_name_item9").html(en.team_name_item9);
            $("#team_text_item9").html(en.team_text_item9);
            $("#team_name_item10").html(en.team_name_item10);
            $("#team_text_item10").html(en.team_text_item10);
            $("#team_name_item11").html(en.team_name_item11);
            $("#team_text_item11").html(en.team_text_item11);
            $("#team_name_item12").html(en.team_name_item12);
            $("#team_text_item12").html(en.team_text_item12);

            $("#team_support_item1").html(en.team_support_item1);
            $("#team_support_item2").html(en.team_support_item2);
            $("#team_support_item3").html(en.team_support_item3);
            //comunity
            $("#community_title1").html(en.community_title1);
            $("#community_title2").html(en.community_title2);
            $("#community_img_title").html(en.community_img_title.toUpperCase());
            $("#community_title_item1").html(en.community_title_item1);
            $("#community_text_item1").html(en.community_text_item1);
            $("#community_title_item2").html(en.community_title_item2);
            $("#community_text_item2").html(en.community_text_item2);
            $("#community_title_item3").html(en.community_title_item3);
            $("#community_text_item3").html(en.community_text_item3);
            $("#community_title_item4").html(en.community_title_item4);
            $("#community_text_item4").html(en.community_text_item4);
            $("#community_title_item5").html(en.community_title_item5);
            $("#community_text_item5").html(en.community_text_item5);
            
            $("#total_content_item1").html(en.total_content_item1);
            $("#total_content_item2").html(en.total_content_item2);
            $("#total_content_item3").html(en.total_content_item3);

            $("#community_video_title").html(en.community_video_title.toUpperCase());
            $("#video_tag_tip").html(en.video_tag_tip);
            $("#community_video_text1").html(en.community_video_text1);
            $("#community_video_text2").html(en.community_video_text2);
        }
    }
    
});