let playerScore = 0
let botScore = 0
const player = document.getElementById("player")
const bot =  document.getElementById("bot")
const footer = document.getElementById("footer")
footer.textContent = "Let The Game Begin"


buttons = document.querySelectorAll(".pics")
console.log(buttons)
// while(true)
// {
    // while(playerScore != 5 && botScore != 5)
    // {
for(let i = 0; i<buttons.length; i++)
{
    buttons[i].addEventListener("click",()=>game(buttons[i].id))
}
    // }
reset()


function reset()
{
    playerScore = 0
    botScore = 0
}
function game(p_choice)
{
    const options = ["rock","paper","scissor"]
    choiceInt = Math.floor(Math.random()*3)//0 1 2
    let computer_choice = options[choiceInt]
    console.log("meow "+choiceInt)
    console.log("options "+computer_choice)
    footer.textContent = `You Chose ${p_choice} and bot chose ${computer_choice}.`

    if(p_choice == computer_choice)
    {
        console.log("")
        footer.textContent += " Draw Lmao!"
    }
    else if ((p_choice == "rock" && computer_choice == "scissor") 
    || (p_choice == "scissor" && computer_choice == "paper") 
    || (p_choice == "paper" && computer_choice == "rock"))
    {
        playerScore++;
        footer.textContent += " You Won!"
        
    }
    else
    {
        botScore++
        footer.textContent += " You Lost!"
        
    }
    console.log()
    
    console.log(playerScore)
    console.log(botScore)
    bot.textContent = botScore
    player.textContent = playerScore
    if(playerScore == 5)
    {
        footer.textContent = "You won the game congrats"
        reset()
    }
    if(botScore == 5)
    {
        footer.textContent = "You lost the game. Better Luck Next Time"
        reset()
    }
}
