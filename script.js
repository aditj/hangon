$(".cta").click(function() {
    $(".form-popup").css("display", "flex");
    $(".form-popup").css("opacity", "1");
    $(".form-popup").css("flex-direction", "column");
    $(".form-popup").css("justify-content", "space-around");
    $(".cta-container").css("display", "none");
    $(".content").css("display", "none");
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
$('.cta-2').click(function(){
    $(".cta").click();
    $("html, body").animate({ scrollTop: $(".header").offset().top }, 1000);

})
$(".goback").click(function() {
    $(".form-popup").css("display", "none");
    $(".thanks-popup").css("display", "none");
    $(".cta-container").css("display", "block");
    $(".content").css("display", "block");
    location.reload()
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
        alert("Please enter a valid 10 digit mobile number");
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
            
            $(".thanks-popup").css("display", "flex");
            $(".thanks-popup").css("flex-direction", "column");
            $(".thanks-popup").css("justify-content", "space-around");
            
        },
        error: (err) => {console.log('error', err);
        $(".form-popup").css("display", "none");
        $(".thanks-popup").css("display", "flex");
        $(".thanks-popup").css("flex-direction", "column");
        $(".thanks-popup").css("justify-content", "space-around");


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

$(".know-more").click(function() {
    console.log("clicked");
    $("html, body").animate({ scrollTop: $(".cta").offset().top }, 1000);
})