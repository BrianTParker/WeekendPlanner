$(document).ready(function () {$("#submit-79444603").bind("click", function (event) {$.ajax({data:$("#submit-79444603").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});});