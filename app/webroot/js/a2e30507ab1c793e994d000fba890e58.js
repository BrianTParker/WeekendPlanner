$(document).ready(function () {$("#submit-1693960224").bind("click", function (event) {$.ajax({data:$("#submit-1693960224").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/events\/detail\/party"});
return false;});});