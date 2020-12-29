$(document).ready(function() {
  window.scrollTo(0,0);

  firstScreen();

  function firstScreen() {
    $(".awayTeam").val("");
    $(".homeTeam").val("");

    $("#firstScreen").show();

    $form = $("<form autocomplete = 'off'></form>");
    $form.addClass("awayTeamInput")
    $form.append("<div id = awayCheck>Away Team: <span class = 'inputAway'><input class = 'first' type = 'text'></input></span>")
    $(".awayTeam").html($form);

    $form2 = $("<form autocomplete = 'off'></form>");
    $form2.addClass("homeTeamInput")
    $form2.append("<div id = homeCheck>Home Team: <span class = 'inputHome'><input class = 'second' type = 'text'></input></span>")
    $(".homeTeam").html( $form2);

    $form3 = $("<form autocomplete = 'off'></form>");
    $form3.addClass("timeoutsInput")
    $form3.append("<div id = timeOutCheck>Timeouts per Team: <span class = 'inputTimeouts'><input class = 'timeOutCount' type = 'numeric' maxlength = '2' size = '2'></input></span></div>")
    $(".timeouts").html($form3);

    $form4 = $("<form autocomplete = 'off'></form>");
    $form4.addClass("timerInput")
    $form4.append("<div id = timerCheck>Time per half (minutes): <span class = 'timerInput'><input class = 'timerNumber' type = 'numeric' maxlength = '2' size = '2'></input></span></div>")
    $(".timer").html($form4);

    $button = $("<button type = 'submit'>Submit</button>")
    $button.addClass("submitInfo")
    $("#buttonAppear").html($button);

    $('.submitInfo').on('click', function() {
      let awayTeam = $(".first").val();
      console.log("Away Team: " + awayTeam);
      let homeTeam = $(".second").val();
      console.log("Home Team: " + homeTeam);
      let timer = $(".timerNumber").val();
      console.log("Time per half: " + timer);
      let timeOuts = $(".timeOutCount").val();
      console.log("Timeouts: " + timeOuts);
    })
  }

})