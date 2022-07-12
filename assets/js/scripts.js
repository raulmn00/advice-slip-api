async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    document.querySelector("#advice").innerText = data.slip.advice;
}

const getBtnAdvice = document.querySelector("#get-advice");

getBtnAdvice.addEventListener("click", getAdvice);

window.document.onload(getAdvice());