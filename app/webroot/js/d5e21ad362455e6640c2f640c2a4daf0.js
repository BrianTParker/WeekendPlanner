$(document).ready(function () {$("#submit-749885141").bind("click", function (event) {$.ajax({data:$("#submit-749885141").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});});