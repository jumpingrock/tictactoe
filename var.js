var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");
var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var player1 = true, winstate = false, tie = 0
var win1 = '', win2 = '', win3 = '', win4 = '', win5 = '', win6 = '', win7 = '', win8 = '', winFinal = [], p1Score = 0, p2Score = 0, tieScore = 0;
var p1Stats = document.querySelector("#player1Score");
var p2Stats = document.querySelector("#player2Score");
var tieStats = document.querySelector("#tieScore");
var player1Name = prompt("Enter Player 1 Name","Player 1");
var player1Symbol = prompt("Please choose your Symbol","X");
var player2Name = prompt("Enter Player 2 Name","Player 2");
var player2Symbol = prompt("Please choose your Symbol","O");
document.querySelector("#p1Name").innerText = player1Name;
document.querySelector("#p2Name").innerText = player2Name;
var restartButtonjs = document.querySelector("#restartButton");
var buttonpress = document.querySelectorAll(".button");