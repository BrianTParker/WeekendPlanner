$(document).ready(function () {$("#submit-318557587").bind("click", function (event) {$.ajax({data:$("#submit-318557587").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/events\/detail\/party"});
return false;});});