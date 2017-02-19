$(function() {
  $("#success-alert").hide();
  $('#practice').easyWizard({
    showSteps: false,
    submitButton: false,
    buttonsClass: 'btn',
    submitButtonClass: 'btn btn-info',
    before: function(wizardObj, currentStepObj, nextStepObj) {
      //if($( "input[name=gender1]:checked" ).val() === 'No'){
        //alert('Your answer is wrong. Try again');
      //} else if($( "input[name=gender1]:checked" ).val() === 'Yes'){
      //  $("#success-alert").alert();
      //  $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
      //    $("#success-alert").slideUp(500);
      //  });
        //sleep(3000);
    //  }
    },
    after: function(wizardObj, currentStepObj, nextStepObj) {
      if($( "input[name=gender1]:checked" ).val() === 'No'){
        $("#info").css('display','block');
        $( "input[name=gender1]:checked" ).prop('checked',false)
        $('#practice').easyWizard('prevStep');
     } else if($( "input[name=gender1]:checked" ).val() === 'Yes'){
        $( "input[name=gender1]:checked" ).prop('checked',false)
      }
      if($( "input[name=think]:checked" ).val() === 'First'){
        $("#diagnosis").css('display','block');
        $("#practice").css('display','none');
        $( "input[name=think]:checked" ).prop('checked',false);
        $('#practice').easyWizard('prevStep');
      }
    }
  });
  $('#diagnosis').easyWizard({
      buttonsClass: 'btn',
      submitButtonClass: 'btn',
      submitButtonText: 'Go Back To Practice',
      before: function(wizardObj, currentStepObj, nextStepObj) {

      },
      after: function(wizardObj, currentStepObj, nextStepObj) {

      },
      beforeSubmit: function(wizardObj) {
        if($( "input[name=diagnosis]:checked" ).val() === 'Camel'){
          $("#diagnosis").css('display','none');
          $("#practice").css('display','block');
          $( "input[name=diagnosis]:checked" ).prop('checked',false)
        }
      }
  });
  $("#diagnosis").css('display','none');
});
