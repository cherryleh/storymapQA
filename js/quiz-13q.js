$(document).ready(function() 
{    $("#results").click(function() {                

if (!$("input[@name=q1]:checked").val() ||            
!$("input[@name=q2]:checked").val() ||            
!$("input[@name=q3]:checked").val()          
) {            
alert("You're not done yet!");        
}        

else {            
var cat1name = "1";            
var cat2name = "2";            
var cat3name = "3";            
var cat4name = "none";            

var cat1 = ($("input[@name=q1]:checked").val() != "b"); 
           
var cat2 = ($("input[@name=q2]:checked").val() != "c");  

var cat3 = ($("input[@name=q3]:checked").val() != "a");  

var cat4 = ($("input[@name=q4]:checked").val() != "d");  

var cat4 = (!cat1 && !cat2 && !cat3); var categories = [];                        

if (cat1) { categories.push(cat1name) };            
if (cat2) { categories.push(cat2name) };            
if (cat3) { categories.push(cat3name) };            
if (cat4) { categories.push(cat4name) };            

var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
$("#categorylist").text(catStr);                        
$("#categorylist").show("slow");            

if (cat1) { $("#category1").show("slow"); };            
if (cat2) { $("#category2").show("slow"); };            
if (cat3) { $("#category3").show("slow"); };            
if (cat4) { $("#category4").show("slow"); };            
{ $("#closing").show("slow"); };
}
    });});
