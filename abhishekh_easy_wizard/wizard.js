$(function() {
  $("#success-alert").hide();
  $('#practice').easyWizard({
    showSteps: false,
    buttonsClass: 'btn',
    submitButtonClass: 'btn btn-info',
    before: function(wizardObj, currentStepObj, nextStepObj) {
      //practice1
      if($( "input[name=practice1]:checked" ).val() === 'bad'){
        $("#success-alert").alert();
        $("#success-alert").fadeTo(5000, 500).slideUp(500, function(){
          $("#success-alert").slideUp(500);
        });
        $( "input[name=practice1]:checked" ).prop('checked',false)
      }
      //practice2
      if($( "input[name=practice2]:checked" ).val() === 'cancel'){
        $("#success-alert").alert();
        $("#success-alert").fadeTo(5000, 500).slideUp(500, function(){
          $("#success-alert").slideUp(500);
        });
        $( "input[name=practice2]:checked" ).prop('checked',false)
      }
      //practice3
      var expected = ["thin", "extra", "touch"];
      var checkedValues = $('input:checkbox:checked').map(function() {
                              return this.value;
                          }).get();
      if(checkedValues.toLocaleString() === expected.toLocaleString()){
        $("#success-alert").alert();
        $("#success-alert").fadeTo(5000, 500).slideUp(500, function(){
          $("#success-alert").slideUp(500);
        });
        $('input:checkbox').removeAttr('checked');
      }
      //practice4
      if($( "input[name=practice4]:checked" ).val() === 'send'){
        $("#success-alert").alert();
        $("#success-alert").fadeTo(5000, 500).slideUp(500, function(){
          $("#success-alert").slideUp(500);
        });
        $( "input[name=practice4]:checked" ).prop('checked',false)
      }

      //test

    },
    after: function(wizardObj, currentStepObj, nextStepObj) {
      //practice1
      if($( "input[name=practice1]:checked" ).val() === 'good'){
        $("#practice1_info").css('display','block');
        $( "input[name=practice1]:checked" ).prop('checked',false)
        $('#practice').easyWizard('prevStep');
      }
      //practice2
      if($( "input[name=practice2]:checked" ).val() === 'save' || $( "input[name=practice2]:checked" ).val() === 'cancel_save' || $( "input[name=practice2]:checked" ).val() === 'nocancel_nosave'){
        $("#practice2_info").css('display','block');
        $( "input[name=practice2]:checked" ).prop('checked',false)
        $('#practice').easyWizard('prevStep');
      }
      //practice3
      var expected = ["thin", "extra", "touch"];
      var checkedValues = $('input:checkbox:checked').map(function() {
                              return this.value;
                          }).get();
      if(checkedValues.toLocaleString() !== expected.toLocaleString() && checkedValues.length > 0){
       $("#practice3_info").css('display','block');
       $('input:checkbox').removeAttr('checked');
       $('#practice').easyWizard('prevStep');
      }
      //diagno practice4
      if($( "input[name=practice4]:checked" ).val() === 'cancel_violates' || $( "input[name=practice4]:checked" ).val() === 'cancel_send' || $( "input[name=practice4]:checked" ).val() === 'nocancel_nosend'){
        $("#diagnosis").css('display','block');
        $("#practice").css('display','none');
        $( "input[name=practice4]:checked" ).prop('checked',false);
        $('#practice').easyWizard('prevStep');
        $("#diagnosis_header").css('display','block');
      }
    },
    beforeSubmit: function(wizardObj) {
      var score = 0;
      var expected_score = ['qualifies_test1','thin_test2','contrast','three_test4','test5_bad'];
      var test_score = $('input:radio:checked').each(function( index, element ) {
                              if(element.value === expected_score[index]){
                                score++;
                              }
                              return score;
                          }).get();

      $("#practice").css('display','none');
      $("#test_score").css('display','block');
      $("#test_no").text(score);
   }
  });

  $('#diagnosis').easyWizard({
      showSteps: false,
      submitButton: false,
      buttonsClass: 'btn',
      //submitButtonClass: 'btn',
      //submitButtonText: 'Go Back To Practice',
      before: function(wizardObj, currentStepObj, nextStepObj) {
        //diagnosis1
        if($( "input[name=diagnosis1]:checked" ).val() === 'camel_upper'){
          $("#success-alert").alert();
          $("#success-alert").fadeTo(5000, 500).slideUp(500, function(){
            $("#success-alert").slideUp(500);
          });
          $( "input[name=diagnosis1]:checked" ).prop('checked',false)
        }
        //diagnosis2
        if($( "input[name=diagnosis2]:checked" ).val() === 'camel'){
          $("#success-alert").alert();
          $("#success-alert").fadeTo(5000, 500).slideUp(500, function(){
            $("#success-alert").slideUp(500);
          });
          $( "input[name=diagnosis2]:checked" ).prop('checked',false)
        }
      },
      after: function(wizardObj, currentStepObj, nextStepObj) {
        //diagnosis1
        if($( "input[name=diagnosis1]:checked" ).val() === 'camel' || $( "input[name=diagnosis1]:checked" ).val() === 'lower_upper' || $( "input[name=diagnosis1]:checked" ).val() === 'none_of_the_above'){
          $( "input[name=diagnosis1]:checked" ).prop('checked',false)
          $('#diagnosis').easyWizard('prevStep');
        }
        //diagnosis2
        if($( "input[name=diagnosis2]:checked" ).val() === 'upper'){
          $( "input[name=diagnosis2]:checked" ).prop('checked',false)
          $('#diagnosis').easyWizard('prevStep');
        }
        //diagnosis3
        if($( "input[name=diagnosis3]:checked" ).val() === 'lower'){
          $( "input[name=diagnosis3]:checked" ).prop('checked',false)
          $('#diagnosis').easyWizard('prevStep');
        }
        //diagnosis3
        if($( "input[name=diagnosis3]:checked" ).val() === 'upper'){
          $("#diagnosis").easyWizard('goToStep', 1);
          $("#diagnosis").css('display','none');
          $("#practice").css('display','block');
          $("#diagnosis_header").css('display','none');
          $( "input[name=diagnosis3]:checked" ).prop('checked',false);
        }
      },
      beforeSubmit: function(wizardObj) {

      }
  });
  $("#diagnosis").css('display','none');
});
