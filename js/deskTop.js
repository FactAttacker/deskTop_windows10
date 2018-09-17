
//초기 모달 관리
function modalMng(id,width,height){
  
    //넓이
    if(width  != null ) this.window_wdith = window.screen.width;
    else this.window_wdith = width;

    //높이
    if(height != null ) this.window_height = window.screen.height;
    else this.window_height = height;

}

//
modalMng.prototype.openPop = function(id){
    alert(id);
    if(id == 'tistory'){
        //새창
        linkEnt('blank',"http://backback.tistory.com");
    }else{
        //랜더링
        this.render(id);
    }
}

//lenk
function linkEnt(type,url){
    if(url === undefined || url == null){
        alert("URL 주소가 없습니다.");
    }
    switch (type) {
        case "blank": window.open("about:blank").location.href=url;
             break;
        case "self" :location.href=url;
            break;
    }
}

//랜더링
modalMng.prototype.render = function(id){
    var data = {}
    
    switch(id){
         case "self" : title=
        brek;
    }

    function modalRender(title){
        var title = "";

        var data =
        +'<div class="modal ui-widget-content">                                  '                                 
        +'        <div class="pop_head">                                         '
        +'            <div><input type="button" /></div>                         '
        +'            <div class="pop_title">'+title+'</div>                     '
        +'            <div class="pop_mng">                                      '     
        +'                <input type="button" class="pop_minsize" value="_" />  '
        +'                <input type="button" class="pop_maxsize" value="ㅁ"/>  '
        +'                <input type="button" class="pop_close"   value="X" />  '
        +'            </div>                                                     ' 
        +'        </div>                                                         ' 
        +'        <nav>                                                          '
        +'            <div>                                                      '
        +'                <input class="pop_navi" type="text"/>                  '
        +'            </div>                                                     '
        +'            <div>                                                      '
        +'                <input class="pop_search" type="text" />               '
        +'            </div>                                                     '
        +'        </nav>                                                         '
        +'        <div class="pop_content">                                      '
        +'            <div class="">                                             '
        +'                <ul>                                                   '
        +'                    <li></li>                                          '
        +'                    <li></li>                                          '
        +'                    <li></li>                                          '
        +'                    <li></li>                                          '
        +'                    <li></li>                                          '
        +'                </ul>                                                  '
        +'            </div>                                                     '
        +'            <div class="jqgrid">                                       '
        +'            </div>                                                     '
        +'            <div class="pop_preview">                                  '
        +'                <img src="" alt="미리 볼 파일을 선택하십시오.">       '
        +'            </div>                                                     '
        +'        </div>                                                         '
        +'    </div>                                                             '
    
    }

    return modalRender();
}

//실행
let deskTopManager = new function(){
    let _this = this;
    this.init = function(){
    }

    this.setEvent = function(){
         var folder_pop = new modalMng();

        //Modal Click Evt
         $(document).on("click", ".folder", function(){
             // data-target="ddd"
             let target = $(this).data("target")

             folder_pop.openPop(target);
         });

        //시작 슬라이드 업다운 처리
        var start_slide= $('.start_slide');
        $('.start_bnt').on('click',function(){
            start_slide.stop().slideToggle(100,function(){
                if($(this).css('display') != 'none'){
                    $('.desktop_bg').removeClass('fade');
                }else{
                    $('.desktop_bg').addClass('fade');
                }
            });
        });
        
        /*데스크탑 클릭시 슬라이드 사라지기*/
        $('.desktop_bg').on('click',function(){
            if(start_slide.css('display') != 'none' ){
                start_slide.stop().slideUp(100,function(){
                    $('.desktop_bg').addClass('fade');
                });
            }
        });

        //사운드 
        $('.sound_on_btn').on('click',function(){
            $(this).toggleClass('sound_on_btn_on');
        });


        scrollEvnt('minimal');//시작버튼 스크롤
        printClock();//시간 날짜 측정
    }
}

function scrollEvnt(theme_type){
    //시작버튼 스크롤
    console.log(theme_type);
    $(".start_list_2, .start_list_3").mCustomScrollbar({
        theme:theme_type,
    });
}

 /**set DATE */
let clockSatus = 'FIRST';
function printClock(){
    var clockSec =0;
    var currentDate = new Date();                  // 현재시간
    var calendar = currentDate.getFullYear() + "-" + addZeros((currentDate.getMonth()+1), 2) + "-" + currentDate.getDate() // 현재 날짜
    var currentHours   = addZeros(currentDate.getHours(),2); 
    var currentMinute  = addZeros(currentDate.getMinutes() ,2);
    var currentSeconds = addZeros(currentDate.getSeconds(),2);
    
    var amPm = '오전'; // 초기값 AM
    if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
        amPm = '오후';
        currentHours = addZeros(currentHours - 12,2);
    }
    if(amPm == '오전' && currentHours == 0) currentHours=12;

    $('.clock').html('<sapn>'+amPm+' '+Number(currentHours)+':'+currentMinute+'</span>');
    $('.date').html('<sapn>'+calendar+'</span>');
    
    if(clockSatus != null){
        clockSec = 60000-(currentSeconds * 1000); 
        clockSatus=null;
    }else{
        clockSec = 60000;
    }
    setTimeout('printClock()',parseInt(clockSec));
}

// 자릿수 맞춰주기
function addZeros(num, digit) { 
    var zero = '';
    num = num.toString();
    if (num.length < digit) {
        for (i = 0; i < digit - num.length; i++) {
        zero += '0';
        }
    }
    return zero + num;
}

//실행
 deskTopManager.setEvent();
