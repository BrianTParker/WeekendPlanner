$(document).ready(function () {$("#submit-1911760333").bind("click", function (event) {$.ajax({data:$("#submit-1911760333").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});
$("#submit-742042987").bind("click", function (event) {$.ajax({data:$("#submit-742042987").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Day1details").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});
$("#submit-477330317").bind("click", function (event) {$.ajax({data:$("#submit-477330317").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Day2details").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});
$("#submit-1810403130").bind("click", function (event) {$.ajax({data:$("#submit-1810403130").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Day3details").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});
$("#submit-528873689").bind("click", function (event) {$.ajax({data:$("#submit-528873689").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Day4details").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});});