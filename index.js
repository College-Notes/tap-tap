alert("Comment ur score,Enjoiii and donate")



        $(document).ready(function() {
            var t = setInterval(func, 550);

            var score = 0;

            function func() {
                var rndm = Math.ceil(Math.random()*5);
                $(".score").text(score);
                switch (rndm) {
                    case 1:
                        hole = $("#hole1");
                        break;
                    case 2:
                        hole = $("#hole2");
                        break;
                    case 3:
                        hole = $("#hole3");
                        break;
                    case 4:
                        hole = $("#hole4");
                        break;
                    default:
                        hole = $("#hole5");
                    }

                    $ ("#hole1").text("");
                    $ ("#hole2").text("");
                    $("#hole3").text("");
                    $("#hole4").text("");
                    $("#hole5").text("");
                    hole.html("<p>🙂</p>");
                    $('p').click(function() {
                        score++;
                        navigator.vibrate(100);
                    });
                }
            });



            