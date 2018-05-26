var beardGrowthCards = document.querySelectorAll(".col__Step-One--fadeOut");
var h1Changer = document.querySelector("h1");
var productCards = document.querySelectorAll(".col__Step-Two--fadeIn");
var stepOneCardId = "";
var stepTwoCardId = "";
var stepOneCardHTML = "";
var stepTwoCardHTML = "";

// Loop below adds event listeners to beardGrowthCards
for(var i = 0; i < beardGrowthCards.length; i++){
  beardGrowthCards[i].addEventListener("click", function(){
    stepOne();
    stepOneCardId = this.getAttribute("id");
    var stepOneCard = document.getElementById(stepOneCardId);
    stepOneCardHTML = stepOneCard.outerHTML;
    stepThree();
  });
}

/*function below fades out container containing beardGrowthCards then fades in productCards and changes
  h1 text */

function stepOne(){
  $(".col__Step-One--fadeOut").fadeOut(1000, function(){
    $(".col__Step-Two--fadeIn").fadeIn(1000);
    h1Changer.textContent = "Step 2: Select Your Product"
  });
// Adds event listeners to product cards
  for(var i = 0; i < productCards.length; i++){
    productCards[i].addEventListener("click", function(){
      stepTwo();
      stepTwoCardId = this.getAttribute("id");
      var stepTwoCard = document.getElementById(stepTwoCardId);
      stepTwoCardHTML = stepTwoCard.outerHTML;
      stepThree();
    });
  }
}

function stepTwo(){
  h1Changer.textContent = "Read the Instructions Below!"
  $(".col__Step-Two--fadeIn").fadeOut();
}

function stepThree(){
  var clickedBeardGrowthCard = stepOneCardId;
  var clickedProductCard = stepTwoCardId;
  var clickedBeardGrowthCardHTML = stepOneCardHTML;
  var clickedProductCardHTML = stepTwoCardHTML;
  var startToOneMonth = "<div class = col><p>You need to use a surprisingly small amount of beard oil on each application to see results; consistency is much more important. Most guys will only have to use 6 drops of oil per application per day.</p></col>"
  var OnetoThreeMonths = ""
  var FourToTwelveMonths = ""
  var caveMan = ""
  // Only execute code in function when Page 3 has been loaded; when Read the Instructions Below! is the heading on page.
  if(h1Changer.textContent === "Read the Instructions Below!"){
    //The below is to evualate customer who clicked on beardGrower
    if(clickedProductCard === "beardGrower"){
      switch(clickedBeardGrowthCard){
        case "one":
        $(".row__top").append(clickedBeardGrowthCardHTML, startToOneMonth, clickedProductCardHTML);
        break;
      }
    }
  }
}
