$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const question1 = parseInt($("input:radio[name=question1]:checked").val());
    const question2 = parseInt($("input:radio[name=question2]:checked").val());
    const question3 = parseInt($("input:radio[name=question3]:checked").val());
    const question4 = parseInt($("input:radio[name=question4]:checked").val());
    const question5 = parseInt($("input:radio[name=question5]:checked").val());
    const question6 = parseInt($("input:radio[name=question6]:checked").val());
  })

})












// $(document).ready(function() {
//   $("form#question1").submit(function(event) {
//     const true = parseInt($("input#true").val());
//     const false = parseInt($("input#false").val());
  
//     let result1;
    
//     if (true) {            
//       alert('Try Javascript!');
//     }
//     else (false) {
//      alert('Perhaps C# or Python are more suitable.')
//     }
    
//     event.preventDefault();
//   });
// });



//  function doyoulikeJavaScript() {
//    var string;
//   if (true) {
//     alert = "You should try Javascript!";
//   } else {
//     alert = "Perhaps C# or Python are more your thing."
//   }
// }