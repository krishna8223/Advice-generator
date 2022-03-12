const advice_no = document.getElementsByClassName("advice_no");
const Advice = document.getElementsByTagName("span");
const dice = document.getElementsByClassName("dice");

const advice = async () => {
  advice_no[0].innerText = "loading ...";
  Advice[0].innerText = "loading..";

  const get = await fetch("	https://api.adviceslip.com/advice");
  const { slip } = await get.json();
  
  advice_no[0].innerText = "advice # " + slip.id;
  Advice[0].innerText = slip.advice;

};

advice();

const send =() =>  {
    advice_no[0].innerText = "loading ...";
    Advice[0].innerText = "loading..";
    setTimeout(() => {
        advice();
        
    }, 3000);
}
dice[0].addEventListener("click", send);