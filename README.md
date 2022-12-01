# osu! Favourites ID

Just a simple guide and few lines of code on gathering and outputting all the beatmap ids from a user's favourites. This allows for fast sharing and un-favouriting even when a beatmap is DMCA'd. 


## Installation

1) Install [node.js](https://nodejs.org/en/)
2) Navigate to the profile page and scroll down to the favourites. Fully expand the list until there is no longer a 'show more' button
3) Inspect element and select this: ![a](https://user-images.githubusercontent.com/109441326/204966062-07b80c6c-dc5e-4940-b012-f7dcb1751546.png)
4) CTRL + C and CTRL + V into the element text file in the repository
5) Navigate to the folder inside terminal and run ```node code script.js```
6) The ids will be exported to a text file in the folder named 'data'.
