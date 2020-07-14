$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const question1 = $("input:radio[name=question1]:checked").val();
    const question2 = $("input:radio[name=question2]:checked").val();
    const question3 = $("input:radio[name=question3]:checked").val();
    const question4 = $("input:radio[name=question4]:checked").val();
    const question5 = $("input:radio[name=question5]:checked").val();
    const question6 = $("input:radio[name=question6]:checked").val();
    
    // console.log(question1);

    let result;

     if (question1 === "true") {
       result = "Javascript"
     }
      else if (question1 == "false" && question2 == "true") {
       result = "Python"
     }
      else if (question2 == "false" && question3 == "false") {
      result = "C#"
    }
      else {
        result = "Javascript"
      }
    console.log(result);
   $("#output").text(result);
  });
});

