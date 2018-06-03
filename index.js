var h1Changer = document.querySelector("h1");
var stepOneCardId = "";
var stepTwoCardId = "";
var stepOneCardHTML = "";
var stepTwoCardHTML = "";
var numberOfDrops = "";
var isFaded = true;

/* Event bound to beardGrowthCards on Page 1; handler can only be triggered once per click as the
  handler is unbound on click */

$(".col__Step-One").on( "click", function(){
    $(".col__Step-One").off("click");
    stepOne();
    stepOneCardId = this.getAttribute("id");
    var stepOneCard = document.getElementById(stepOneCardId);
    stepOneCardHTML = stepOneCard.outerHTML;
    stepThree();
  });


/*function below fades out container containing beardGrowthCards then fades in productCards, changes
  h1 text  then calls stepTwoBinder*/

function stepOne(){
  $(".col__Step-One").fadeOut(500, function(){
    if(isFaded === true){
      $(".col__Step-Two").fadeIn(500);
      h1Changer.innerHTML = "<a href=\"index.html\"><i class=\"far fa-arrow-alt-circle-left\"></i></a><span class=\"heading__top--highlight\">Step 2:</span> Select Your Product";
      isFaded = !isFaded;
    }
  });
  stepTwoBinder();
}

  /* Event bound to beardGrowthCards on Page 1; handler can only be triggered once per click as the
    handler is unbound on click */

  function stepTwoBinder(){
    $(".col__Step-Two").on("click", function(){
      $(".col__Step-Two").off("click");
      stepTwo();
      stepTwoCardId = this.getAttribute("id");
      var stepTwoCard = document.getElementById(stepTwoCardId);
      stepTwoCardHTML = stepTwoCard.outerHTML;
      $(".col__Step-Two").fadeOut(500, function(){
        if(isFaded === false){
          stepThree();
          isFaded = !isFaded;
        }
      });
    });
  }

/*Function below evaluates the ID of the beardGrowthCard clicked in order to determine the numberOfDrops
of beard oil used. Then this function updates the text of the h1 element and includes the appropriate numberOfDrops of oil. */

function stepTwo(){
  var clickedBeardGrowthCard = stepOneCardId;
  switch(clickedBeardGrowthCard){
    case "one":
      numberOfDrops = "<span class=\"heading__top--highlight\">3-4</span>"
      break;
    case "two":
      numberOfDrops = "<span class=\"heading__top--highlight\">4-6</span>"
      break;
    case "three":
      numberOfDrops = "<span class=\"heading__top--highlight\">7-10</span>"
      break;
    case "four":
      numberOfDrops = "<span class=\"heading__top--highlight\">10+</span>"
      break;
  }
  h1Changer.innerHTML = "<a href=\"index.html\"><i class=\"far fa-arrow-alt-circle-left\"></i></a>"+ "Suggested Number of Drops: " + numberOfDrops + " drops per day";
}

/*Function below stores the HTML of the elements clicked in stepOne and stepTwo and is able
to return the appropriate html content dependent on what was clicekd */

function stepThree(){
  var clickedBeardGrowthCard = stepOneCardId;
  var clickedProductCard = stepTwoCardId;
  var clickedBeardGrowthCardHTML = stepOneCardHTML;
  var clickedProductCardHTML = stepTwoCardHTML;
  // Only execute code below when text has been added to indicate that step3 content is ready to be added to page; i.e. when functionstepTwo has finished executing
  if(h1Changer.innerHTML === "<a href=\"index.html\"><i class=\"far fa-arrow-alt-circle-left\"></i></a>"+ "Suggested Number of Drops: " + numberOfDrops + " drops per day"){
    //The below returns appropriate elements depending on elements clicked on step One and Step Two
    switch(clickedBeardGrowthCard){
      case "one":
        $(".row__top").attr("style", "display: none;"); // removes content on page such that info can be first appended to it
        $(".row__top").append(clickedBeardGrowthCardHTML, $("#oneMonth").html(), clickedProductCardHTML); // append elements to page
        $(".row__top").fadeIn(500); // fadeIn all content including the info appended in previous step.
        break;
      case "two":
        $(".row__top").attr("style", "display: none;");
        $(".row__top").append(clickedBeardGrowthCardHTML, $("#threeMonths").html(), clickedProductCardHTML);
        $(".row__top").fadeIn(500);
        break;
      case "three":
        $(".row__top").attr("style", "display: none;");
        $(".row__top").append(clickedBeardGrowthCardHTML, $("#twelveMonths").html(), clickedProductCardHTML);
        $(".row__top").fadeIn(500);
        break;
      case "four":
        $(".row__top").attr("style", "display: none;");
        $(".row__top").append(clickedBeardGrowthCardHTML, $("#caveman").html(), clickedProductCardHTML);
        $(".row__top").fadeIn(500);
        break;
    }
    /*remove the class (.hidden) from the btn element thereby allowing it to be displayed on the page.
    the third element(object) had to be selected because the product cards from step 2 / page 2 still exist
    in the DOM but have display:none;. they were "hidden"*/
    $(".btn")[2].classList.remove("hidden");
  }
}
