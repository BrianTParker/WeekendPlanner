$(document).ready(function () {$("#submit-628547494").bind("click", function (event) {$.ajax({data:$("#submit-628547494").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});});