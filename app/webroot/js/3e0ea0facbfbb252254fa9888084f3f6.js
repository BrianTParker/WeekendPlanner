$(document).ready(function () {$("#submit-489658163").bind("click", function (event) {$.ajax({data:$("#submit-489658163").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/Events\/detail\/tobiasparker"});
return false;});
$("#submit-1095069093").bind("click", function (event) {$.ajax({data:$("#submit-1095069093").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Fridaymorning").html(data);}, type:"post", url:"\/planner\/Events\/detail\/tobiasparker"});
return false;});
$("#submit-2040422596").bind("click", function (event) {$.ajax({data:$("#submit-2040422596").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Saturdaymorning").html(data);}, type:"post", url:"\/planner\/Events\/detail\/tobiasparker"});
return false;});
$("#submit-1609299638").bind("click", function (event) {$.ajax({data:$("#submit-1609299638").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Sundaymorning").html(data);}, type:"post", url:"\/planner\/Events\/detail\/tobiasparker"});
return false;});
$("#submit-699727959").bind("click", function (event) {$.ajax({data:$("#submit-699727959").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Mondaymorning").html(data);}, type:"post", url:"\/planner\/Events\/detail\/tobiasparker"});
return false;});});