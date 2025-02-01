
 function openPopup() {
  document.getElementById("demo").innerHTML = 'Banned video games Fortnite <img src="https://cdn2.unrealengine.com/card-shortcut-01-1920x1080-53c9796f8aa4.jpg" height="100" width="100"> Roblox <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJy0Xe8zScPe4-W73S6Aw6OIW_U71wNbUAQ&s" height="100" width="100"> Valorant <img src="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-1dade6e50659c8e05805cb150b349e56" height="100" width="100">';
  document.getElementById("myImage").src = "https://images.tech.co/wp-content/uploads/2019/04/26044734/Banned-video-games-medium.png";
  document.querySelector('.popup').style.display = 'block';
}

function closePopup() {
  document.querySelector('.popup').style.display = 'none';
  document.getElementById("demo").innerHTML = '';

  document.getElementById("myImage").src = 'https://preview.redd.it/5dwd9ktnz7e51.jpg?width=1080&crop=smart&auto=webp&s=139985f4a1cbc246b494beb7357b0c0b80f42fdf';
}
function openPopularGamesPopup() {
  document.getElementById("popularGames").innerHTML = '.';
  document.querySelector('.popularGamesPopup').style.display = 'block';
}


function openPopularGamesPopup() {
  document.getElementById("demo").innerHTML = 'Popular video games: Minecraft <img src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" height="100" width="100"> fortnite <img src="https://cdn2.unrealengine.com/card-shortcut-01-1920x1080-53c9796f8aa4.jpg" height="100" width="100"> Call of Duty <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwiii/MWIII-REVEAL-FULL-TOUT.jpg" height="100" width="100">';
  document.querySelector('.popularGamesPopup').style.display = 'block';
  document.getElementById("myImage").src = 'https://i.ytimg.com/vi/u1X6nkv4sZM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCUuwDQa3TaUKzi2LtBw9lsG1YFg';
}


function closePopularGamesPopup() {
  document.querySelector('.popularGamesPopup').style.display = 'none';
  document.getElementById("demo").innerHTML = '';
  document.getElementById("myImage").src = 'https://preview.redd.it/5dwd9ktnz7e51.jpg?width=1080&crop=smart&auto=webp&s=139985f4a1cbc246b494beb7357b0c0b80f42fdf';
}


