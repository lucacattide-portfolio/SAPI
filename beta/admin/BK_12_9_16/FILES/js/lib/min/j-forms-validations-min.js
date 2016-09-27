$(document).ready(function(){$("#show-pass").on("change",function(){$("#show-pass").is(":checked")?$("#password").attr("type","text"):$("#password").attr("type","password")}),$("#show-conf-pass").on("change",function(){$("#show-conf-pass").is(":checked")?$("#confirm-password").attr("type","text"):$("#confirm-password").attr("type","password")}),$("#check-enable-input").on("change",function(){$("#check-enable-input").is(":checked")?$("#enable-input").attr("disabled",!1).parent().removeClass("disabled-view error-view success-view"):($("#enable-input").attr("disabled",!0).parent().addClass("disabled-view").removeClass("success-view error-view"),$("#enable-input-error").length&&$("#enable-input-error").css("display","none"))});var e=$("#j-forms-validation");e.validate({errorClass:"error-view",validClass:"success-view",errorElement:"span",rules:{req_field:{required:!0},email:{required:!0,email:!0},url:{required:!0,url:!0},file:{required:!0,extension:"jpg|png"},password:{required:!0,minlength:6,maxlength:14},confirm_password:{required:!0,minlength:6,maxlength:14,equalTo:"#password"},first_name:{require_from_group:[1,".required-group"]},last_name:{require_from_group:[1,".required-group"]},checkbox:{required:!0},radio:{required:!0},checkbox_toggle:{required:!0},min_val:{required:!0,min:10},range_val:{required:!0,range:[10,50]},max_val:{required:!0,max:50},min_len:{required:!0,minlength:3},range_len:{required:!0,rangelength:[3,8]},max_len:{required:!0,maxlength:8},decimals:{required:!0,number:!0},digits:{required:!0,digits:!0},enable_input:{required:"#check-enable-input:checked"}},messages:{req_field:{required:"Please field is required"},email:{required:"Please field is required",email:"Incorrect email format"},url:{required:"Please field is required",url:"Incorrect url format"},file:{required:"Please upload some file",extension:"Incorrect file format"},password:{required:"Please password is required"},confirm_password:{required:"Please confirm your password",equalTo:"Mismatched passwords"},first_name:{require_from_group:"Please fill at least one field"},last_name:{require_from_group:"Please fill at least one field"},checkbox:{required:"Please select an option"},radio:{required:"Please select an option"},checkbox_toggle:{required:"Please select an option"},min_val:{required:"Please field is required"},range_val:{required:"Please field is required"},max_val:{required:"Please field is required"},min_len:{required:"Please field is required"},range_len:{required:"Please field is required"},max_len:{required:"Please field is required"},decimals:{required:"Please field is required",number:"Only decimal numbers allowed"},digits:{required:"Please field is required",digits:"Only digits allowed"},enable_input:{required:"Please field is required"}},highlight:function(e,r,i){$(e).closest(".input").removeClass(i).addClass(r),($(e).is(":checkbox")||$(e).is(":radio"))&&$(e).closest(".check").removeClass(i).addClass(r)},unhighlight:function(e,r,i){$(e).closest(".input").removeClass(r).addClass(i),($(e).is(":checkbox")||$(e).is(":radio"))&&$(e).closest(".check").removeClass(r).addClass(i)},errorPlacement:function(e,r){$(r).is(":checkbox")||$(r).is(":radio")?$(r).closest(".check").append(e):$(r).closest(".unit").append(e)}})});