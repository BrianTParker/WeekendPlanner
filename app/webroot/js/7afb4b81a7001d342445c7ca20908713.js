$(document).ready(function () {$("#submit-211127458").bind("click", function (event) {$.ajax({data:$("#submit-211127458").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});});