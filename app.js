"use strict";

var g = "color:#777;font-weight:bold;";
var b = "color:#0F669D;font-weight:bold;";
var base22MainStyle =
  "font-size:34px; font-weight:200; letter-spacing:0.02em; line-height:1.4em; font-family:helvetica,arial; color:rgba(0,0,0,0.9);";
var base22MessageStyle =
  "font-size:21px; font-weight:200; letter-spacing:0.2em; line-height:1.4em; font-family:helvetica,arial; color:rgba(0,0,25,0.5);";
var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var textChrome =
  "\n%cXX                                %cXXXXXX XXXXXX    \n%cXX                                    %cXX     XX\n%cXX                                %cXXXXXX XXXXXX\n%cXXXXXXXX XXXXXXXX XXXXXXX XXXXXXX %cXX     XX\n%cXX    XX XX    XX XX      XX   XX %cXXXXXX XXXXXX\n%cXX    XX XX    XX XXXXXXX XXXXXXX %c\n%cXX    XX XX    XX      XX XX      %c\n%cXXXXXXXX XXXXXXXX XXXXXXX XXXXXXX %c\n               %cXX\n";
var textOthers =
  "\n%cXX                                %cXXXXXX XXXXXXX    \n%cXX                                    %cXX      XX\n%cXX                                    %cXX      XX\n%cXXXXXXXX XXXXXXXX XXXXXXX XXXXXXX %cXXXXXX XXXXXXX\n%cXX    XX XX    XX XX      XX   XX %cXX     XX\n%cXX    XX XX    XX XXXXXXX XXXXXXX %cXX     XX\n%cXX    XX XX    XX      XX XX      %cXX     XX\n%cXXXXXXXX XXXXXXXX XXXXXXX XXXXXXX %cXXXXXX XXXXXXX\n               %cXX\n"; // There is no better web brower for developers, right?

if (isChrome) {
  console.log(textChrome, g, b, g, b, g, b, g, b, g, b, g, b, g, b, g, b, g);
} else {
  console.log(textOthers, g, b, g, b, g, b, g, b, g, b, g, b, g, b, g, b, g);
}

console.log("%cBase22", base22MainStyle),
  console.log("%cEnterprise Web Evolution", base22MessageStyle),
  console.log("%c", "font-size:34px; line-height:1.4em;");
