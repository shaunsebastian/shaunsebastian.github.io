$(document).ready(function () {
    $("#submitbutton").mouseenter(function () {
        $(this).css({ "background": "#94bde0" })
    })
    $("#submitbutton").mouseleave(function () {
        $(this).css({ "background": "#0275d8" })
    })

    $.validator.addMethod("alpha", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
    });

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value == '' || value.trim('').length >= 4;
    }, "At least four characters");

    $.validator.addMethod("isEmail", function (value, element) {
        return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
    });

    $('body').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $("#submit-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 4,
                alpha: true,
                noSpace: true
            },
            email: {
                required:true,
                isEmail:true
            },
            message: {
                required: true,
                minlength: 10
            },
            mobile:{
                required: true,
                minlength:10,
                maxlength:10,
                number: true
            },
        },
        messages:{
            name:{
                alpha:"Please enter letters only"
            },
            email:{
                isEmail:"Please enter a valid email address"
            },
            mobile:{
                number:"Please enter a valid mobile number",
                minlength:"Please enter a valid mobile number",
                maxlength:"Please enter a valid mobile number",
            },
        }, 

        submitHandler: function (form) {
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbxTV1PmFUqev5rPq_2W-KIRSA5GlvusggjJ7M_o/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function (response) {
                    alert("Message submitted successfully")
                    window.location.reload()
                },
                error: function (err) {
                    alert("Something Error")
                }
            })
        }
    })

    $('#img1').hover(() => {
        document.getElementById('img1-pop').style.display = 'block'
        document.getElementById('img1-pop').style.position = 'absolute'
    })
    $('#img1').mouseleave(() => {
        document.getElementById('img1-pop').style.display = 'none'
    })
    $('#img2').hover(() => {
        document.getElementById('img2-pop').style.display = 'block'
        document.getElementById('img2-pop').style.position = 'absolute'
    })
    $('#img2').mouseleave(() => {
        document.getElementById('img2-pop').style.display = 'none'
    })
    $('#img3').hover(() => {
        document.getElementById('img3-pop').style.display = 'block'
        document.getElementById('img3-pop').style.position = 'absolute'
    })
    $('#img3').mouseleave(() => {
        document.getElementById('img3-pop').style.display = 'none'
    })
    $('#img4').hover(() => {
        document.getElementById('img4-pop').style.display = 'block'
        document.getElementById('img4-pop').style.position = 'absolute'
    })
    $('#img4').mouseleave(() => {
        document.getElementById('img4-pop').style.display = 'none'
    })
    $('#img5').hover(() => {
        document.getElementById('img5-pop').style.display = 'block'
        document.getElementById('img5-pop').style.position = 'absolute'
    })
    $('#img5').mouseleave(() => {
        document.getElementById('img5-pop').style.display = 'none'
    })
    $('#img6').hover(() => {
        document.getElementById('img6-pop').style.display = 'block'
        document.getElementById('img6-pop').style.position = 'absolute'
    })
    $('#img6').mouseleave(() => {
        document.getElementById('img6-pop').style.display = 'none'
    })
    $('#img7').hover(() => {
        document.getElementById('img7-pop').style.display = 'block'
        document.getElementById('img7-pop').style.position = 'absolute'
    })
    $('#img7').mouseleave(() => {
        document.getElementById('img7-pop').style.display = 'none'
    })
    $('#img8').hover(() => {
        document.getElementById('img8-pop').style.display = 'block'
        document.getElementById('img8-pop').style.position = 'absolute'
    })
    $('#img8').mouseleave(() => {
        document.getElementById('img8-pop').style.display = 'none'
    })
    $('#img9').hover(() => {
        document.getElementById('img9-pop').style.display = 'block'
        document.getElementById('img9-pop').style.position = 'absolute'
    })
    $('#img9').mouseleave(() => {
        document.getElementById('img9-pop').style.display = 'none'
    })
})
