$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});


// 【イベントの記述】
/*
$('.セレクタ名').イベント名(function(){
  イベント発生時に行われる処理
});
*/


// <「マウスオーバー」イベント設定>
/*
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': '#0000FF'});
  });
});
*/
// <「マウスアウト」イベント設定>
/*
$(function(){
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});
*/
// <2つを合わせると>
/*
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': '#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});
*/


// <class属性を追加する/解除する>
/*
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});
*/


// <「マウスクリック」イベント設定>
// 【マウスクリックイベントの記述】
/*
$('.セレクタ名').on('click', function() {
  イベント発生時に行われる処理
});
*/