$(".cta").click(function() {
    $(".form-popup").css("display", "block");
    $(".body").css("filter","blur(4px)");
    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/8335b3896acd5938113fa50f13c4fda6',
        dataType: 'json',
        accepts: 'application/json',
        data: {"msg":"cta clicked!",'_captcha':false},
        success: (data) => { console.log(data);
            
        },
        error: (err) => console.log('error', err),
        

    });
});
$('.here').click(function(){
    $(".cta").click();
})
$(".goback").click(function() {
    $(".form-popup").css("display", "none");
    $(".body").css("filter","blur(0px)")
})
function getFormObj() {
    var formObj = {};
    var inputs = $('form').serializeArray();
    $.each(inputs, function (i, input) {
        formObj[input.name] = input.value;
    });
    return formObj;
}
$(".submit").click(function() {
    if($("input[name='name']").val()==="" || $("input[name='mobile']").val()===""){
        alert("Please fill in all fields");
        return;
    }
    if(/\D/.test($("input[name='mobile']").val())){
        alert("Please enter a valid mobile number");
        return;
    }
    
    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/8335b3896acd5938113fa50f13c4fda6',
        dataType: 'json',
        accepts: 'application/json',
        data: getFormObj(),
        success: (data) => { console.log(data);
            $(".form-popup").css("display", "none");
            $(".body").css("filter","blur(0px)");
            $(".thanks").css("display", "block");
        },
        error: (err) => {console.log('error', err);
        $(".form-popup").css("display", "none");
            $(".body").css("filter","blur(0px)");
            $(".thanks").show(20);
            $(".thanks").hide(4000);

    }
    });
});
var $select = $("#society").selectize({
    create: true,
    sortField: "text",
    placeholder:"Search your society and Select",
    allowEmptyOption:true,
   
  });
  $select[0].selectize.clear()