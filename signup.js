$(document).ready(function(){
    // 라디오버튼 클릭시 이벤트 발생
    $("input:radio[name=chk_info]").click(function(){
 
        if($("input[name=chk_info]:checked").val() == "1"){
            $("input:text[name=company]").attr("disabled",false);
            // radio 버튼의 value 값이 1이라면 활성화
 
        }else if($("input[name=chk_info]:checked").val() == "0"){
              $("input:text[name=company]").attr("disabled",true);
            // radio 버튼의 value 값이 0이라면 비활성화
        }
    });

    window.addEventListener('load', () => {
      const forms = document.getElementsByClassName('validation-form');
    
      Array.prototype.filter.call(forms, (form) => {
        form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        form.classList.add('was-validated');
        }, false);
      });
      }, false);

      $('#password, #password_chk').on('keyup', function () {
        if ($('#password').val() != '' && $('#password_chk').val() != '' && $('#password').val() == $('#password_chk').val()) {
          $("#submitBtn").attr("disabled",false);
          $('#cPwdValid').show();
          $('#cPwdInvalid').hide();
          $('#cPwdValid').html('Valid').css('color', 'green');
          $('.pwds').removeClass('is-invalid')
        } else {
          $("#submitBtn").attr("disabled",true);
          $('#cPwdValid').hide();
          $('#cPwdInvalid').show();
          $('#cPwdInvalid').html('비밀번호를 확인해주세요').css('color', 'red');
          $('.pwds').addClass('is-invalid')
          Form.password.select();
          return;
      };
    }
    );

});




// https://www.codeply.com/p/AQBzIBAsZl