$(document).ready(function () {$("#submit-1666451262").bind("click", function (event) {$.ajax({data:$("#submit-1666451262").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#items").html(data);}, type:"post", url:"\/planner\/Events\/detail\/tobiasparker"});
return false;});
$("#submit-1665353711").bind("click", function (event) {$.ajax({data:$("#submit-1665353711").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Fridaymeals").html(data);}, type:"post", url:"\/planner\/Events\/detail\/tobiasparker"});
return false;});
$("#submit-1696421707").bind("click", function (event) {$.ajax({data:$("#submit-1696421707").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Saturdaymeals").html(data);}, type:"post", url:"\/planner\/Events\/detail\/tobiasparker"});
return false;});
$("#submit-693988430").bind("click", function (event) {$.ajax({data:$("#submit-693988430").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Sundaymeals").html(data);}, type:"post", url:"\/planner\/Events\/detail\/tobiasparker"});
return false;});
$("#submit-388214559").bind("click", function (event) {$.ajax({data:$("#submit-388214559").closest("form").serialize(), dataType:"html", success:function (data, textStatus) {$("#Mondaymeals").html(data);}, type:"post", url:"\/planner\/Events\/detail\/tobiasparker"});
return false;});});