function underconstruction() {
	alert("Under Construction");
}
function back(){
	$('#viewlessonfrm').attr('action', '../User/Dashboard?time='+datetime);
	$("#viewlessonfrm").submit();
}
function backindex(){
	$('#indexfrm').attr('action', '../Lessons/viewlesson?time='+datetime);
	$("#indexfrm").submit();
}
function ecjapaneese(bookId,levelName,colorCode) {
	var bookId = $("#bookId").val(bookId);
	var levelName = $("#levelName").val(levelName);
	var colorCode = $("#colorCode").val(colorCode);
        $('#viewlessonfrm').attr('action', '../Lessons/index?time='+datetime);
        $("#viewlessonfrm").submit();   
}
function helppopup(help) {
	$('#help').val(help);
	$('#helppopups').load('../../Lessons/helppopup?help='+help);
	$("#helppopups").modal({
	backdrop: 'static',
	keyboard: false
	});
	$('#helppopups').modal('show');
}
function searchbookName(){
	//to remove empty space
	var searchtext = $('#searchbox').val().replace(/\s/g, '');
	$('input, textarea, select, radio').each(function(){
				$(this).val(jQuery.trim($(this).val()));

			});
		if (searchtext  == "") {
			alert("Please Enter The Keyword")
			$('#searchbox').focus();
		} 
		else {
			$('#viewlessonfrm').attr('action', '../Lessons/viewlesson?time='+datetime);
        	$("#viewlessonfrm").submit();  
		}
}
function checkSubmitsingle(e) {
   	if(e && e.keyCode == 13) {
   		searchbookName();
   	}
}
function fngeneratekotabatest(bookId,lessonId,cnt,kanjiprt,levelName) {
	$('#bookId').val(bookId);
	$('#lessonId').val(lessonId);
	$('#lessonName').val(levelName);
	var partflg = 9999;
	$('#japtovoicepopup').load('../Lessons/kotabaexampopup?levelId='+lessonId+'&bookId='+bookId+'&kanjiprt='+kanjiprt+'&levelName='+levelName+'&partflg='+partflg);
		$("#japtovoicepopup").modal({
			backdrop: 'static',
			keyboard: false
		});
	$('#japtovoicepopup').modal('show');
}
function fngenerateexam(levelid,bookid,cnt,divisionName,levelName,divisionId) {
	$('#bookId').val(bookid);
	$('#lessonId').val(levelid);
	$('#lessonName').val(levelName); 
	$('#divisionName').val(divisionName);
	$('#divisionId').val(divisionId);
	$('#hiraganapopupid').load('../Lessons/generateexampopup?levelid='+levelid+'&bookid='+bookid+'&divisionId='+divisionId+'&divisionName='+divisionName+'&cnt='+cnt);
		$("#hiraganapopupid").modal({
			backdrop: 'static',
			keyboard: false
		});
	$('#hiraganapopupid').modal('show');
}
function fngeneratejptovoice(val) {
	var qflaga = $('#questionflaga').val();
	var qflagb = $('#questionflaga').val();
	if (((val == 11)&&(qflaga == 1)) || ((val == 12)&&(qflagb == 1)) || ((val == 13)&&(qflagb == 1))) {
	var bookId = $('#bookId').val();
	var lessonId = $('#lessonId').val();
	var levelName = $('#lessonName').val();
	var divisionId = $('#divisionId').val();
	var divisionName = $('#divisionName').val();
	$('#partflg').val(val);
	var partflg = val;
    $('#hiraganapopupid .close').click();
	$('#japtovoicepopup').load('../Lessons/exampopup?levelId='+lessonId+'&bookId='+bookId+'&divisionId='+divisionId+'&partflg='+partflg+'&divisionName='+divisionName+'&levelName='+levelName);
		$("#japtovoicepopup").modal({
			backdrop: 'static',
			keyboard: false
		});
	$('#japtovoicepopup').modal('show');
	} else {
		alert("No Questions Availale, for this Lesson!!");
	}
}
function fnOpenVoiceRecognition() {
	window.open('http://localhost:8080/ECJ-Voice/voicedic.php','newwindow',
	config='height=300,width=730,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no');
	window.addEventListener("message", function(ev) {
        $('#answer').val(ev.data.message);
	});
	var typedAnswer = $('#answer').val();
	if (typedAnswer =="") {
		$("#nextbtn").attr("disabled", false);
		$('#nextbtn').css('background-color','green');
		$("#backspacebtn").attr("disabled", false); 
    	$('#backspacebtn').css('background-color','blue');
		$("#skipbtn").attr("disabled", false);
		$("#clearbtn").attr("disabled", false);
		$('#clearbtn').css('background-color','#f0ad4e');
	} else {
		$("#nextbtn").attr("disabled", true);
		$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
		$("#clearbtn").attr("disabled", true);
		$('#clearbtn').css({"background-color": "grey","border-color": "grey"});
		$("#backspacebtn").attr("disabled", true); 
		$('#backspacebtn').css({"background-color": "grey","border-color": "grey"});


	}
}
function fnendtest() {
	alert("Do you Want To End the Test!!");
	$('#japtovoicepopup').modal('toggle');
}
function fnnextkotoba() {
	$("#answer").attr("disabled", "disabled");
	$("#endtestbtn").attr("disabled", false);
	var gettime_val = $('#time_next').val($('#showtime').text());
	var time_next = $('#time_next').val();
	var nextval = $('#nextval').val($('#nextval').val()-(-1));
	var preval = $('#preval').val($('#nextval').val()-(1));
	var kanjiprt = $('#kanjiprt').val();
	if (kanjiprt == 0) {
		var question_disp = questionarray[$('#nextval').val()].kanji;
		var currentQuest = questionarray[$('#nextval').val()-(1)].kanji;
	} else {
		var question_disp = questionarray[$('#nextval').val()].meaning;
		var currentQuest = questionarray[$('#nextval').val()-(1)].meaning;
	}
	var question_id_val = questionarray[$('#nextval').val()].id;
	var question_id = $('#question_id').val();
	var typedanswer = $('#answer').val();
	var bookId = $('#bookId').val();
	var lessonId = $('#lessonId').val();
	var nextval = $('#nextval').val();
	var question_count = $('#question_count').val();
	var ques_Type = $('#ques_Type').val();
	var resultid = $('#resultid').val();
	var temphtml ='<div style="width:100%;padding-bottom:20px;padding-right:20px;padding-left:20px;padding-top:10px;"><span style="font-size:18px;float:left;font-weight:bold;padding-left:5%;width:90%;">'+currentQuest+'</span><span style="font-size:18px;float:right;font-weight:lighter;padding-top:10px;padding-right:0%;">'+typedanswer+'<div style="float:right;margin-left:10px;font-size:10px;color:#7A3E3E;padding-top:13px;">'+time_next+'</div></span></div><br><div style="position:fixed;" id="newkotoba"></div>';
	$("#newkotoba").replaceWith(temphtml);
	$("#screlement").scrollTop(5000) + "px";
	$.ajax({
		dataType: 'json',
		url: "ajaxnextkotaba",
		data: {
			typedanswer: typedanswer,
            bookId: bookId,
            lessonId: lessonId,
            question_disp: question_disp,
            time_next:time_next,
            question_id:question_id,
            ques_Type:ques_Type,
            resultid:resultid,
            kanjiprt:kanjiprt,
		},
		success: function(result){
            // alert(JSON.stringify(result)); // view in console for error messages
           	// fnGetAnsweredQuestions();
            if (result) {
            	$('#answer').val("");
            	$('#totalquest').val($('#totalquest').val()-(-1));
            	$('#dispQuestCnt').html($('#totalquest').val());
            	if ($('#totalquest').val() == question_count) {
            		$('#endtestbtn').html(finish);
					$('#nextval').val(question_count);
					$("#nextbtn").attr("disabled", false);
					$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
					$("#skipbtn").attr("disabled", false);
				} else {
					$('#endtestbtn').html(endtest);
				}
            	$("#nextbtn").attr("disabled", true);
            	$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
            	$("#clearbtn").attr("disabled", true);
            	$('#clearbtn').css({"background-color": "grey","border-color": "grey"});
            	$("#backspacebtn").attr("disabled", true); 
    			$('#backspacebtn').css('background-color','grey');
				$('#question_id_html').html(question_disp);
				$('#question_id').val(question_id_val);
				$("#answer").removeAttr("disabled");
				$('#answer').focus();
			}
        }
    });
}
function fnGetAnsweredQuestions() {
	var bookId = $('#bookId').val();
	var lessonId = $('#lessonId').val();
	var resultid = $('#resultid').val();
	var kanjiprt = $('#kanjiprt').val();
	$.ajax({
		dataType: 'json',
		url: "ajaxansweredkotaba",
		data: {
			
            bookId: bookId,
            lessonId: lessonId,
            resultid:resultid,
            kanjiprt:kanjiprt,
		},
		success: function(result){
            // alert(JSON.stringify(result)); // view in console for error messages
        	for (i = 0; i < result.length; i++) {
        		$('#answered_q_disp').html(result[i]["typeAnswer"]);
            }
        }
    });
}
function fnnextquestion(val) {
	$("#answer").attr("disabled", "disabled");
	$(".imgtags").css("display", "none");
	$(".audiotags").css("display", "none");
	$('#identifybtn').val(val);
	var diffbtn = val;
	var gettime_val = $('#time_next').val($('#showtime').text());
	var time_next = $('#time_next').val();
	var nextval = $('#nextval').val($('#nextval').val()-(-1));
	var questionimg_disp = questionarray[$('#nextval').val()].quesPath;
	var questionaudio_disp = questionarray[$('#nextval').val()].audioPath;
	var question_disp = questionarray[$('#nextval').val()].quesText;
	var question_id_val = questionarray[$('#nextval').val()].id;
	var question_id = $('#question_id').val();
	var typedanswer = $('#answer').val();
	var bookId = $('#bookId').val();
	var lessonId = $('#lessonId').val();
	var divisionId = $('#divisionId').val();
	var nextval = $('#nextval').val();
	var question_count = $('#question_count').val();
	var ques_Type = $('#ques_Type').val();
	var resultid = $('#resultid').val();
	if (questionimg_disp) {
		$(".imgtags").css("display", "block");
	}
	if (questionaudio_disp) {
		$(".audiotags").css("display", "block");
	}
	/*for image display img_path*/
	var img_path = "../upload/books/questions/img/"+bookId+"/"+lessonId+"/"+questionimg_disp;
	/*removed old image tag*/
	$('#question_imgid').remove('');
	/* next audio display*/
	var audio_path = "../upload/books/questions/audio/"+bookId+"/"+lessonId+"/"+questionaudio_disp;
	/*remove old audio*/
	$('#myAudio').remove('');
	$.ajax({
		dataType: 'json',
		url: "ajaxnextquestion",
		data: {
            typedanswer: typedanswer,
            bookId: bookId,
            lessonId: lessonId,
            divisionId: divisionId,
            question_disp: question_disp,
            time_next:time_next,
            question_id:question_id,
            diffbtn:diffbtn,
            ques_Type:ques_Type,
            resultid:resultid,
        },
		success: function(result){
            // alert(JSON.stringify(result)); // view in console for error messages
            if (result) {
            	$('#answer').val("");
            	$('#totalquest').val($('#totalquest').val()-(-1));
            	$('#dispQuestCnt').html($('#totalquest').val());
            	if ($('#totalquest').val() == question_count) {
            		$('#endtestbtn').html(finish);
					$('#nextval').val(question_count);
					$("#nextbtn").attr("disabled", true);
					$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
					$("#clearbtn").attr("disabled", false);
      				$('#clearbtn').css('background-color','#f0ad4e');
					$("#skipbtn").attr("disabled", false);
					$('#skipbtn').click(function(){
        				fnendquestion(1,1)
      				});
				} else {
					$('#endtestbtn').html(endtest);
				}
            	$("#nextbtn").attr("disabled", true);
            	$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
            	$("#backspacebtn").attr("disabled", true); 
    			$('#backspacebtn').css({"background-color": "grey","border-color": "grey"});
    			$("#clearbtn").attr("disabled", true);
            	$('#clearbtn').css({"background-color": "grey","border-color": "grey"});
				$('#question_id_html').html(question_disp);
				$('#question_id').val(question_id_val);
				if (questionimg_disp == "") {
					$('#question_imgid').remove('');
				} else {
            		$('#question_img_html').prepend('<img id="question_imgid" style="width:40%;height: 40%;" class="appimg mt10 mb10"/>');
					$('#question_imgid').attr('src', img_path);
				}
				if (questionaudio_disp == "") {
					$('#myAudio').remove('');
				} else {
            		$('#question_audio_html').prepend('<audio id="myAudio" controls autoplay controlsList="nodownload"><source id="audio_srcid" src="" type="audio/mp3">Your browser does not support the audio element.</audio>');
    				$('#audio_srcid').attr('src', audio_path);
				}
				$("#answer").removeAttr("disabled");
            	$('#answer').focus();
            }
        }
    });
}
function fnclearanswer() {
	$('#answer').val("");
	$("#clearbtn").attr("disabled", true);
	$('#clearbtn').css({"background-color": "grey","border-color": "grey"});
	$("#nextbtn").attr("disabled", true);
	$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
	$("#backspacebtn").attr("disabled", true); 
    $('#backspacebtn').css('background-color','grey');
	$('#answer').focus();
}
function fnenablenextbbtn() {
	var typedanswer = $('#answer').val();
	var nextval = $('#nextval').val();
	var question_count = $('#question_count').val();
	$("#clearbtn").attr("disabled", false);
	$('#clearbtn').css('background-color','#f0ad4e');
	if (nextval == question_count) {
		$('#nextval').val(question_count);
		$("#nextbtn").attr("disabled", true);
		$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
		$("#backspacebtn").attr("disabled", false); 
        $('#backspacebtn').css('background-color','blue');
		
		
	}
	if (typedanswer != "") {
		if (nextval == question_count) {
			$('#nextval').val(question_count);
			$("#nextbtn").attr("disabled", true);
			$('#nextbtn').css({"background-color": "grey","border-color": "grey"});


			

		} else {
			$("#nextbtn").attr("disabled", false);
			$('#nextbtn').css('background-color','green');
			$("#backspacebtn").attr("disabled", false); 
            $('#backspacebtn').css('background-color','blue');
            $("#clearbtn").attr("disabled", false);
		    $('#clearbtn').css('background-color','#f0ad4e');

		}
	} else {
			$("#nextbtn").attr("disabled", true);
			$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
			$("#backspacebtn").attr("disabled", true); 
			$('#backspacebtn').css({"background-color": "grey","border-color": "grey"});
			$("#clearbtn").attr("disabled", true); 
			$('#clearbtn').css({"background-color": "grey","border-color": "grey"});
			
	}
}
function fnskipkotaba() {
	$("#answer").attr("disabled", "disabled");
	$("#endtestbtn").attr("disabled", false);
	var gettime_val = $('#time_next').val($('#showtime').text());
	var time_next = $('#time_next').val();
	var nextval = $('#nextval').val($('#nextval').val()-(-1));
	var kanjiprt = $('#kanjiprt').val();
	if (kanjiprt == 0) {
		var question_disp = questionarray[$('#nextval').val()].kanji;
		var currentQuest = questionarray[$('#nextval').val()-(1)].kanji;
	} else {
		var question_disp = questionarray[$('#nextval').val()].meaning;
		var currentQuest = questionarray[$('#nextval').val()-(1)].meaning;
	}
	var question_id_val = questionarray[$('#nextval').val()].id;
	var question_id = $('#question_id').val();
	var typedanswer = $('#answer').val();
	var bookId = $('#bookId').val();
	var lessonId = $('#lessonId').val();
	var nextval = $('#nextval').val();
	var question_count = $('#question_count').val();
	var ques_Type = $('#ques_Type').val();
	var resultid = $('#resultid').val();
	var kanjiprt = $('#kanjiprt').val();
	var displayAnswer = "";
	if (typedanswer == "") {
		displayAnswer = "Skipped";
	} else {
		displayAnswer = typedanswer;
	}
	var temphtml ='<div style="width:100%;padding-bottom:20px;padding-right:20px;padding-left:20px;padding-top:10px;"><span style="font-size:18px;float:left;font-weight:bold;padding-left:5%;width:90%;">'+currentQuest+'</span><span style="font-size:18px;float:right;font-weight:lighter;padding-top:10px;padding-right:0%;color:#7FB3D5;">'+displayAnswer+'<div style="float:right;margin-left:10px;font-size:10px;color:#7A3E3E;padding-top:13px;">'+time_next+'</div></span></div><br><div style="position:fixed;" id="newkotoba"></div>';
	$("#newkotoba").replaceWith(temphtml);
	$("#screlement").scrollTop(5000) + "px";
	$.ajax({
		dataType: 'json',
		url: "ajaxskipkotaba",
		data: {
			
            typedanswer: typedanswer,
            bookId: bookId,
            lessonId: lessonId,
            question_disp: question_disp,
            time_next:time_next,
            question_id:question_id,
            ques_Type:ques_Type,
            resultid:resultid,
            kanjiprt:kanjiprt,
		},
		success: function(result){
            // alert(JSON.stringify(result)); // view in console for error messages
            if (result) {
            	$('#answer').val("");
            	$('#totalquest').val($('#totalquest').val()-(-1));
            	$('#dispQuestCnt').html($('#totalquest').val());
            	if ($('#totalquest').val() == question_count) {
            		$('#endtestbtn').html(finish);
					$('#nextval').val(question_count);
					$("#nextbtn").attr("disabled", true);
					$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
					$("#clearbtn").attr("disabled", false);
					$('#clearbtn').css('background-color','#f0ad4e');
					$("#backspacebtn").attr("disabled", false); 
					$('#backspacebtn').css('background-color','blue');
					$("#skipbtn").attr("disabled", false);
					$('#skipbtn').click(function(){
        				fnendkotoba(1)
      				});
				} else {
					$('#endtestbtn').html(endtest);
				}
            	$("#nextbtn").attr("disabled", true);
            	$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
            	$("#backspacebtn").attr("disabled", true); 
            	$('#backspacebtn').css({"background-color": "grey","border-color": "grey"});
				$('#question_id_html').html(question_disp);
				$('#question_id').val(question_id_val);
				$("#answer").removeAttr("disabled");
            	$('#answer').focus();
			}
        }
    });
}
function fnskipquestion() {
    // alert(JSON.stringify(result)); // view in console for error messages
	$("#answer").attr("disabled", "disabled");
	$(".imgtags").css("display", "none");
	$(".audiotags").css("display", "none");
	var nextval = $('#nextval').val($('#nextval').val()-(-1));
	var question_disp = questionarray[$('#nextval').val()].quesText;
	var typedanswer = $('#answer').val();
	var bookId = $('#bookId').val();
	var lessonId = $('#lessonId').val();
	var questionimg_disp = questionarray[$('#nextval').val()].quesPath;
	var questionaudio_disp = questionarray[$('#nextval').val()].audioPath;
	var question_id_val = questionarray[$('#nextval').val()].id;
	var question_id = $('#question_id').val();
	var divisionId = $('#divisionId').val();
	var nextval = $('#nextval').val();
	var question_count = $('#question_count').val();
	var resultid = $('#resultid').val();
	if (questionimg_disp) {
		$(".imgtags").css("display", "block");
	}
	if (questionaudio_disp) {
		$(".audiotags").css("display", "block");
	}
	/*for image display img_path*/
	var img_path = "../upload/books/questions/img/"+bookId+"/"+lessonId+"/"+questionimg_disp;
	/*removed old image tag*/
	$('#question_imgid').remove('');
	/* next audio display*/
	var audio_path = "../upload/books/questions/audio/"+bookId+"/"+lessonId+"/"+questionaudio_disp;
	/*remove old audio*/
	$('#myAudio').remove('');
	$.ajax({
		dataType: 'json',
		url: "ajaxskipquestion",
		data: {
           
            typedanswer: typedanswer,
            bookId: bookId,
            lessonId: lessonId,
            divisionId: divisionId,
            question_disp: question_disp,
            resultid : resultid,
            question_id : question_id,
        },
		success: function(result){
            // alert(JSON.stringify(result)); // view in console for error messages
        	if (result) {
            	$('#answer').val("");
            	$('#totalquest').val($('#totalquest').val()-(-1));
            	$('#dispQuestCnt').html($('#totalquest').val());
            	if ($('#totalquest').val() == question_count) {
            		$('#endtestbtn').html(finish);
					$('#nextval').val(question_count);
					$("#nextbtn").attr("disabled", true);
					$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
					$("#clearbtn").attr("disabled", false);
					$('#clearbtn').css('background-color','#f0ad4e');
					$("#skipbtn").attr("disabled", false);
					$('#skipbtn').click(function(){
        				fnendquestion(1,1)
      				});
				} else {
					$('#endtestbtn').html(endtest);
				}
            	$("#nextbtn").attr("disabled", true); 
            	$('#nextbtn').css({"background-color": "grey","border-color": "grey"});
            	$("#backspacebtn").attr("disabled", false); 
					$('#backspacebtn').css('background-color','blue');
				$('#question_id_html').html(question_disp);
				$('#question_id').val(question_id_val);
				if (questionimg_disp == "") {
					$('#question_imgid').remove('');
				} else {
            		$('#question_img_html').prepend('<img id="question_imgid" style="width:40%;height: 40%;" class="appimg mt10 mb10"/>');
					$('#question_imgid').attr('src', img_path);
				}
				if (questionaudio_disp == "") {
					$('#myAudio').remove('');
				} else {
            		$('#question_audio_html').prepend('<audio id="myAudio" controls autoplay controlsList="nodownload"><source id="audio_srcid" src="" type="audio/mp3">Your browser does not support the audio element.</audio>');
    				$('#audio_srcid').attr('src', audio_path);
				}
				$("#answer").removeAttr("disabled");
            	$('#answer').focus();
            }
        }
    });
}
function fnendquestion(val,skiporend) {
	var con = confirm("Do You Want To End The Test");
	if (con == true) {
		$("#answer").attr("disabled", "disabled");
		$('#identifybtn').val(val);
		var typedanswer = $('#answer').val();
		$('#typedanswer').val(typedanswer);
		var gettime_val = $('#time_next').val($('#showtime').text());
		var time_next = $('#time_next').val();
		var typedanswer = $('#answer').val();
		var bookId = $('#bookId').val();
		var lessonId = $('#lessonId').val();
		var question_id = $('#question_id').val();
		var divisionId = $('#divisionId').val();
		var nextval = $('#nextval').val();
		var question_count = $('#question_count').val();
		var resultid = $('#resultid').val();
		$('#resultId').val(resultid)
		var ques_Type = $('#ques_Type').val();  
		var identifybtn = $('#identifybtn').val(); 
		var pppercent = $('#pppercent').val();
		var partflg = $('#partflg').val();
		var attendedquestion = $('#totalquest').val();
		$('#partIdentyFlg').val(partflg);
		var lessonName = $('#lessonName').val();
		$.ajax({
			dataType: 'json',
			url: "endquestion",
			data: {
         	   	typedanswer: typedanswer,
         	   	bookId: bookId,
         	  	lessonId: lessonId,
         	   	divisionId: divisionId,
          		resultid : resultid,
          	  	question_id : question_id,
          	  	identifybtn : identifybtn,
          	  	pppercent : pppercent,
          	  	time_next : time_next,
          	  	ques_Type : ques_Type,
          	  	partflg : partflg,
          	  	question_count : question_count,
          	  	skiporend : skiporend,
        },
        success: function(result){
        	// alert(JSON.stringify(result)); // view in console for error messages
        	if (result) {
        		$('#finalpassFlg').val(result["overAllState"]);
        		$('#finalresultid').val(result["getOverAllStatus"]);
        		$('#totalQuestions').val(question_count);
        		var totalMark = $('#finalresultid').val();
        		var statusFlg = $('#finalpassFlg').val();
        		$('#japtovoicepopup').modal('toggle');
        		$('#resultpopup').load('../Common/resultpagepopup?partflg='+partflg+'&totalMark='+totalMark+'&statusFlg='+statusFlg+'&question_count='+question_count+'&lessonName='+lessonName+'&bookId='+bookId+'&attendedquestion='+attendedquestion);
				$("#resultpopup").modal({
					backdrop: 'static',
					keyboard: false
					});
				$('#resultpopup').modal('show');
        	}
        }
    });
	} else {
		$('#answer').focus();
	}
}
function fnendkotoba(skiporend) {
	var con = confirm("Do You Want To End The Test");
		if (con == true) {
			$("#answer").attr("disabled", "disabled");
			var typedanswer = $('#answer').val();
			$('#typedanswer').val(typedanswer);
			var gettime_val = $('#time_next').val($('#showtime').text());
			var time_next = $('#time_next').val();
			var nextval = $('#nextval').val($('#nextval').val()-(-1));
			var preval = $('#preval').val($('#nextval').val()-(1));
			var kanjiprt = $('#kanjiprt').val();
			$('#partIdentyFlg').val(kanjiprt);
			var question_id = $('#question_id').val();
			var typedanswer = $('#answer').val();
			var bookId = $('#bookId').val();
			var lessonId = $('#lessonId').val();
			var nextval = $('#nextval').val();
			var question_count = $('#question_count').val();
			var ques_Type = $('#ques_Type').val();
			var resultid = $('#resultid').val();
			$('#resultId').val(resultid);
			var pppercent = $('#pppercent').val();
			var partflg = $('#kanjiprt').val();
			var lessonName = $('#lessonName').val();
			var attendedquestion = $('#totalquest').val();
			$('#divisionId').val(1);
			$.ajax({
			dataType: 'json',
			url: "endkotabaajax",
			data: {
			
            typedanswer: typedanswer,
            bookId: lessonId,
            lessonId: bookId,
            question_disp: question_disp,
            time_next:time_next,
            question_id:question_id,
            ques_Type:ques_Type,
            resultid:resultid,
            pppercent:pppercent,
            question_count:question_count,
            kanjiprt:kanjiprt,
            skiporend:skiporend,
		},
			success: function(result){
            	// alert(JSON.stringify(result)); // view in console for error messages
        		if (result) {
        			$('#finalpassFlg').val(result["overAllState"]);
        			$('#finalresultid').val(result["getOverAllStatus"]);
        			$('#totalQuestions').val(question_count);
        			var totalMark = $('#finalresultid').val();
        			var statusFlg = $('#finalpassFlg').val();
        			$('#japtovoicepopup').modal('toggle');
        			$('#resultpopup').load('../Common/resultpagepopup?partflg='+partflg+'&totalMark='+totalMark+'&statusFlg='+statusFlg+'&question_count='+question_count+'&lessonName='+lessonName+'&bookId='+lessonId+'&attendedquestion='+attendedquestion);
					$("#resultpopup").modal({
						backdrop: 'static',
						keyboard: false
						});
					$('#resultpopup').modal('show');
        		}
        	}
    		});
		} else {
			$('#answer').focus();
		}
}
function fnRedirectToResultPage() {
	$('#resultpopup').modal('toggle');
	$('#indexfrm').attr('action', 'resultPage?time='+datetime);
	$("#indexfrm").submit();
}
function fnDefaultBack() {
	window.history.back();
}
function fncancelpopup() {
	var bookId = $("#bookId").val(bookId);
    $('#resultpopupfrm').attr('action', 'index?time='+datetime);
    $("#resultpopupfrm").submit(); 
}
function fnbackspace() {
	var text = $('#answer').val();
	$('#answer').val(text.substring(0, (text.length -1)));
	var typedanswer = $('#answer').val();
   	if (typedanswer == "") {
      $("#nextbtn").attr("disabled", true); 
      $('#nextbtn').css({"background-color": "grey","border-color": "grey"});
      $("#clearbtn").attr("disabled", true);
      $('#clearbtn').css({"background-color": "grey","border-color": "grey"});
      $("#backspacebtn").attr("disabled", true);
      $('#backspacebtn').css({"background-color": "grey","border-color": "grey"});

   }
}