$(document).ready(function () {$("#submit-1166417482").bind("click", function (event) {$.ajax({data:$("#submit-1166417482").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});
$("#submit-486888514").bind("click", function (event) {$.ajax({data:$("#submit-486888514").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Day1details").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});
$("#submit-869320774").bind("click", function (event) {$.ajax({data:$("#submit-869320774").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Day2details").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});
$("#submit-1405257609").bind("click", function (event) {$.ajax({data:$("#submit-1405257609").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Day3details").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});
$("#submit-785094227").bind("click", function (event) {$.ajax({data:$("#submit-785094227").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Day4details").html(data);}, type:"post", url:"\/planner\/events\/detail\/tobiasparker"});
return false;});});