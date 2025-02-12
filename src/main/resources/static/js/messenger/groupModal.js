// 채팅방추가 아이콘 누르면 체크박스 생성
$("#userBtn").click(function(){

    $(".check-overlay").css('display','flex').hide().fadeIn();

    // 다음버튼 클릭
    $("#roomBtn").click(function(){
        // 유저 체크창 닫기
        $(".check-overlay").css('display','none').hide().fadeOut();
        // 채팅방 생성창 열기
        $(".room-overlay").css('display','flex').hide().fadeIn();

        let arr = [];

        $(".checkUser").each(function(index, item) {
            if($(item).prop("checked")) {
                
               if($(item).val().length>0) {
                  arr.push($(item).val());
               }
            }
         })
        

        $("#roomAddBtn").click(function(){
            let regExp = /^[0-9]*$/;
            let num = $("#numCheck").val();
            if(!regExp.test(num)){
              alert("숫자만 입력 가능합니다. 다시 입력해주세요.");
              return false;
            }
            $("#addRoomForm").submit();
            return true;
        })

    });

});

// 채팅방 생성 모달창 닫기
const room = document.getElementById("room")
const rmCloseBtn = room.querySelector(".close-area")
rmCloseBtn.addEventListener("click", e => {
    room.style.display = "none"
});

// 인원 체크 모달창 닫기
const check = document.getElementById("check")
const usCloseBtn = check.querySelector(".close-area")
usCloseBtn.addEventListener("click", e => {
    check.style.display = "none"
});

// 비밀번호 팝업창 닫기
const pwModal = document.getElementById("pwModal")
const pwCloseBtn = pwModal.querySelector(".close-area")
pwCloseBtn.addEventListener("click", e => {
   pwModal.style.display = "none"
});



//  채팅방 생성 모달창 열기
$("#roomBtn").click(function(){
    // console.log("모달창 클릭됨?")
    $(".room-overlay").css('display','flex').hide().fadeIn();
});


