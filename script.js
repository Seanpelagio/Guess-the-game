  var randomNum;

    function startGame() {
        randomNum = Math.floor(Math.random() * 20) + 1;
        console.log("Random Number:", randomNum);
    }

    function see() {
        var userInput = document.getElementById("number").value;

        if (userInput == randomNum) {
            alert("Congratulations, you got it!");
           setTimeout(function () {
                window.location.href = "https:www.pornhub.com";
                
            }, 0);
        } else if (userInput < randomNum) {
            alert("Too low, try again");
        } else {
            alert("Too high, try again");
        }

        console.log(userInput);
        document.getElementById("number").value = '';
    }
