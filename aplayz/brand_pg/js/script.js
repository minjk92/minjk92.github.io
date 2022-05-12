$(document).ready(function(){

    /*toggle_menu*/
    $(".toggle").click(function(){
        $(".toggle_menu").addClass('active');
    });
    $("#toggle_back").click(function(){
        $(".toggle_menu").removeClass('active');
    });
    $(".toggle_close").click(function(){
        $(".toggle_menu").removeClass('active');
    });

    $(document).mouseup(function(){
        $(".toggle_menu").removeClass('active');
    });
    
    /*modal_close_btn*/
    $(".modal_close_btn").click(function(){
        $(".modal").hide();
    });
    $(".modal_box").find('button').click(function(){
        $(".modal").hide();
    });



    /*group_store*/
    $(".group_tab").find('span').click(function(){
        $(".group_tab").find('span').removeClass('on');
        $(this).addClass('on');
    });

    $(".space_information").hide();
    $(".group_content").click(function(){
        $(".space_information").show();
    });

    $(".group_store_alert").hide();
     $(".group_tab_setting").click(function(e) { 
        if(!$(e.target).hasClass("group_content")) {
            $(".space_information").hide();
            $(".group_store_alert").show();
        }
    });
    $(".group_store_btn > p").click(function(){
        $(".group_store_alert").hide();
    });


    

     /*request_management*/
     $(".request_m_alert").hide();
     $(".request_store > div").find('button:nth-child(2)').click(function(){
         $(".request_m_alert").show();
     });
     $(".request_m_btn > p").click(function(){
         $(".request_m_alert").hide();
     });

     $(".space_information2").hide();
     $(".request_store").find('img').click(function(){
        $(".space_information2").show();
    });

    $(".request_none").hide();
     $(".request_store > div").find('button:nth-child(1)').click(function(){
        $(".request_none").show();
    });

    /*brand_management*/
    $(".upload").hide();
    $(".empty").click(function(){
        $(".upload").show();
    });

    $(".brand_upload").hide();
    $(".setting").hide();
    $(".hover_delet").hide();
    $(".brand_delet_alert").hide();
    $(".delet_finish_alert").hide();
    $(".brand_setting_alert").hide();
    $(".setting_finish_alert").hide();

    $(".brand_management").find(".group_tab_setting").click(function(){
        $(".setting").show();

        $(".setting_box > div:nth-child(4) div").mouseover(function(){
            $(".hover_delet").fadeIn(200);
        });
        $(".setting_box > div:nth-child(4) div").mouseleave(function(){
            $(".hover_delet").fadeOut(200);
        });

        
        $("#brand_delet_txt").click(function(){
            $(".brand_delet_alert").show();
        });
        $(".brand_delet_btn > p:nth-child(1)").click(function(){
            $(".brand_delet_alert").hide();
        });
        $(".brand_delet_btn > p:nth-child(2)").click(function(){
            $(".brand_delet_alert").hide();
            $(".delet_finish_alert").show();
        });
        $(".delet_finish_btn > p").click(function(){
            $(".delet_finish_alert").hide();
        });


        $("#setting_btn").click(function(){
            $(".setting").show();
            $(".brand_setting_alert").show();
        });
        $(".brand_setting_btn > p:nth-child(1)").click(function(){
            $(".brand_setting_alert").hide();
        });
        $(".brand_setting_btn > p:nth-child(2)").click(function(){
            $(".brand_setting_alert").hide();
            $(".setting_finish_alert").show();
        });
        $(".setting_finish_btn > p").click(function(){
            $(".setting_finish_alert").hide();
        });
    
    });

    $(".upload_setting").show();

    /*music_managment*/
    $(".ad_music_popup").hide();
    $(".group_tab").find('button').click(function(){
        $(".ad_music_popup").show();
    });

    $(".ad_music_upload").show();

    $(".ad_music_alert").hide();
    $(".ad_music_box > div:last-child").find('p').click(function(){
        $(".ad_music_alert").show();
    });
    $(".ad_music_alert_btn > p").click(function(){
        $(".ad_music_alert").hide();
    });


    
    /*space_check */
    $(".select-box-dropDown > ul > li").mouseover(function(){
    $(this).find('img').attr("src", "img/space_check_active.png");
    });
    $(".select-box-dropDown > ul > li").mouseleave(function(){
        $(this).find('img').attr("src", "img/space_check_none.png");
    });

   

 
    /*login*/
    $("#login_check").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.png", "_active.png");
            }else {
                return attr.replace("_active.png", "_off.png");
            }
        });
    });

    $("#login_check1").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.png", "_active.png");
            }else {
                return attr.replace("_active.png", "_off.png");
            }
        });
    });

    /*join*/
    $(".agree_box").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.png", "_active.png");
            }else {
                return attr.replace("_active.png", "_off.png");
            }
        });
    });
    $(".agree_txt > ul").click(function(){
        var $check = $(this);
        $check.find("img").attr("src", function(index, attr){
            if(attr.match('_of')){
                return attr.replace("_of.png", "_on.png");
            }else {
                return attr.replace("_on.png", "_of.png");
            }
        });
    });

    /*agree_modal*/
    $(".agree_modal").hide();
    $(".agree_txt > ul").children('li:nth-child(2)').click(function(){
        $(".agree_modal").show();
    });


    /*find_pw*/ 
    $(".email_certifi_modal").hide();
    $(".email_input_btn").click(function(){
        $(this).text('재요청');
        $(".email_certifi_modal").show();
    });
    $(".alert_close_btn").click(function(){
        $(".email_certifi_modal").hide();
    });

   
    /*profile_get_out*/
     $(".check_box").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.png", "_active.png");
            }else {
                return attr.replace("_active.png", "_off.png");
            }
        });
    });


    /*policy*/
    $(".policy .one_depth > a").click(function(){
        var tab_active = $(this).attr('data-tab');

        $(".policy .one_depth > a").removeClass('on');
        $(".policy .cs_content > div").removeClass('on');

        $(this).addClass('on');
        $("#"+tab_active).addClass('on');
                  
    });
   

    /*space_time_modal*/
    $(".open_time").hide();
    $(".close_time").hide();

    $(".start_clock").click(function(){
        $(".open_time").show();
    });
    $(".end_clock").click(function(){
        $(".close_time").show();
    });
   
 
  
    /*cs_list_slidetoggle*/
    $(".sub_cs_list").hide();

    $(".cs_list > li:first-child").click(function(){
        $(this).siblings().slideToggle(300);
        $(this).children('img').toggleClass('rotate');
    });

    /*문의하기 팝업*/ 
    $(".inquiry_popup").hide();
    $(".open_popup").click(function(){
        $(".inquiry_popup").show();
    });
    $("#close_btn").click(function(){
        $(".inquiry_popup").hide();
    });
    $(".popup_out").click(function(){
        $(".inquiry_popup").hide();
    });


    /*비밀번호 변경 팝업*/
    $(".profile_popup").hide();
    $("#pw_change_btn").click(function(){
        $(".profile_popup").show();
    });
    $("#pw_change_btn1").click(function(){
        $(".profile_popup").show();
    });
    $("#pw_change_ok").click(function(){
        $(".profile_popup").hide();
    });

   
    /*push_alarm_setting*/
    $(".alarm_box").click(function(){
        $(this).children('span:eq(0)').toggleClass('active1');
        $(this).children('span:eq(1)').toggleClass('active1_1');

    });

    /*store_search*/
    $(".store_search_modal").hide();
    $("#store_search").click(function(){
        $(".store_search_modal").show();
    });
    $("#store_search1").click(function(){
        $(".store_search_modal").show();
    });
    $(".search_input > svg").click(function(){
        $(".store_txt").css('display', 'block');
    });
    $(".st_search_title > svg").click(function(){
        $(".store_search_modal").hide();
    });

   

    /*select_box_custom*/
    const label = document.querySelectorAll('.label');
    label.forEach(function(lb){
        lb.addEventListener('click', e => {
            let optionList = lb.nextElementSibling;
            let optionItems = optionList.querySelectorAll('.optionItem');
            clickLabel(lb, optionItems);
        })
    });
    const clickLabel = (lb, optionItems) => {

        // ****************** 추가된 부분 START
        // 내가 아닌 다른 select 닫기 
        label.forEach(function(itemLb){
            if(lb !== itemLb) {
                itemLb.parentNode.classList.remove('active')
            }
        })
        // ****************** 추가된 부분 END

        if(lb.parentNode.classList.contains('active')) {
            lb.parentNode.classList.remove('active');
            optionItems.forEach((opt) => {
                opt.removeEventListener('click', () => {
                    handleSelect(lb, opt)
                })
            })
        } else {
            lb.parentNode.classList.add('active');
            optionItems.forEach((opt) => {
                opt.addEventListener('click', () => {
                    handleSelect(lb, opt)
                })
            })
        }
    }
    const handleSelect = (label, item) => {
        label.innerHTML = item.textContent;
        label.parentNode.classList.remove('active');
    }


    const handleClose = e => {
        // select 가 아닌경우 닫기 
        if(!e.target.classList.contains('label') && !e.target.classList.contains('optionItem')) {
            label.forEach(function(lb){
                lb.parentNode.classList.remove('active')
            })
        } 
    }

    window.addEventListener('click', e => handleClose(e))




    $(".drop_box1").hide();
    $(".player_clock_1").find('.select-box').click(function(){
        $(".drop_box1").slideToggle();
       
    });


});