var h1Changer = document.querySelector("h1");
var stepOneCardId = "";
var stepTwoCardId = "";
var stepOneCardHTML = "";
var stepTwoCardHTML = "";
var numberOfDrops = "";


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
    $(".col__Step-Two").fadeIn(500);
    h1Changer.textContent = "Step 2: Select Your Product";
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
      console.log(stepTwoCardHTML);
      stepThree();
    });
  }




function stepTwo(){
  h1Changer.textContent = "Read the Instructions Below!";
  $(".col__Step-Two").fadeOut();
}

function stepThree(){
  var clickedBeardGrowthCard = stepOneCardId;
  var clickedProductCard = stepTwoCardId;
  var clickedBeardGrowthCardHTML = stepOneCardHTML;
  var clickedProductCardHTML = stepTwoCardHTML;
  // Only execute code in function when Page 3 has been loaded; when Read the Instructions Below! is the heading on page.
  if(h1Changer.textContent === "Read the Instructions Below!"){
    //The below returns appropriate elements depending on elements clicked on stepOne and stepTwo
    switch(clickedBeardGrowthCard){
      case "one":
      $(".row__top").append(clickedBeardGrowthCardHTML, $("#oneMonth").html(), clickedProductCardHTML);
      break;
      case "two":
      $(".row__top").append(clickedBeardGrowthCardHTML, $("#threeMonths").html(), clickedProductCardHTML);
      break;
      case "three":
      $(".row__top").append(clickedBeardGrowthCardHTML, $("#twelveMonths").html(), clickedProductCardHTML);
      break;
      case "four":
      $(".row__top").append(clickedBeardGrowthCardHTML, $("#caveman").html(), clickedProductCardHTML);
      break;
    }
  }
}
