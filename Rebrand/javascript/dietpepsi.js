var drink = "Diet Pepsi"; var lyrics = "";
var liter = 99;
while (liter > 0) {
lyrics = lyrics + liter + " two liter bottles of "
+ drink + " on the file cabinet <br>"; lyrics = lyrics + liter + " two liter bottles of "
+ drink + "<br>";
lyrics = lyrics + "Take one down, pass it around,<br>";
if (liter > 1) {
lyrics = lyrics + (liter-1) + " two liter bottles of "
+ drink + " on the file cabinet <br>";
}else {
lyrics = lyrics + "No more two liter bottles of "
+ drink + " on the wall <br>"; }liter = liter - 1;
} document.write(lyrics);