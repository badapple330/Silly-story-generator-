//document.querySelector('html').style.backgroundColor = 'red';
//Above is check JS is surly applied to HTML


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText;
let insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
let insertY = ["the soup kitchen","Disneyland","the White House"];
let insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

//storyText = `It was ${temperature}${tempUnit} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — :insertx: weighs ${weight}${weightUnit}, and it was a hot day.`;
// : itemlistX : をreplace()でもよかったな。
randomize.addEventListener("click", result)

function result() {
    let temperature = 94;
    let weight = 300;
    let tempUnit = "fahrenheit";
    let weightUnit = "pounds";
    if(document.getElementById("jp").checked){
        temperature = ((temperature - 32) * 5 / 9).toFixed();
        weight = (weight /  2.205).toFixed();
        tempUnit = "℃";
        weightUnit = "kg";
    }

    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ); 
    storyText = `It was ${temperature} ${tempUnit} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs ${weight} ${weightUnit}, and it was a hot day.`;

    if (customName.value !== "") {
        storyText = storyText.replace("Bob", customName.value);
    } 
    story.textContent = storyText;
    story.style.visibility = 'visible';
    customName.focus();
}