$(document).ready(function () {$("#submit-684994765").bind("click", function (event) {$.ajax({data:$("#submit-684994765").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});});