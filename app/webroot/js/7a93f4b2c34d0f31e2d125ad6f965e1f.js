$(document).ready(function () {$("#submit-833787841").bind("click", function (event) {$.ajax({data:$("#submit-833787841").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/planner\/events\/detail"});
return false;});});