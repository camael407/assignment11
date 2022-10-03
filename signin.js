
function login() {
    var form = document.loginForm;
    if (form.userId.value == "") {
        alert("아이디를 입력해 주십시오.");
        form.userId.focus();
        return;
    }
    if (form.userId.value.length < 4 || form.userId.value.length > 12)
                  {
                   alert("아이디는 4~12자 이내로 입력 가능합니다!");

                   form.userId.select();//입력한 문자를 선택 상태로 만듬.
                   return;
                  }

            //입력된 문자의 길이만큼 루프를 돌면서 검사 

            for (i=0; i<form.userId.value.length; i++)
            {
                   var ch = form.userId.value.charAt(i);//문자를 반환(정수형), 범위 검사 가능

                   //입력된 문자를 검사

                   if ( ( ch < "a" || ch > "z") && (ch < "A" || ch > "Z") && (ch < "0" || ch > "9" ) )
                   {
                    alert("아이디는 영문 소문자로만 입력 가능 합니다!");
                    form.userId.select();
                    return;
                   }
            }

            //입력된 첫번째 문자가 숫자인지 검사하는 조건문

            if (!isNaN(form.userId.value.substr(0,1)))

            {
                 alert("아이디는 숫자로 시작할 수 없습니다!");
                 form.userId.select();
                 return;
            }

 
    if (form.password.value == "") {
        alert("비밀번호를 입력해 주십시오.");
        form.password.focus();
        return;
    }
    if (form.password.value.length < 4 || form.password.value.length > 12)
    {
         alert("비밀번호는 8~16자 이내로 입력 가능 합니다!");

         form.password.select();
         return;
    }
    form.submit();
}