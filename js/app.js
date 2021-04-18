/*
hi-q / peg solitaire
33 holes, numofpegs = holes - 1; 32 pegs

7 columns - a, b, c, d, e, f, g
a, b - 3 rows
c, d, e - 7 rows
f, g - 3 rows
   D4 is empty

pegs are buttons
pegs move by hopping adjacent pegs horizontally or vertically
   cannot move diagonally

game end when no moves left
objective is to have 1 peg left in centre
   the less pegs left at the end, the better the score
*/

"use strict";
   // Global Variable Declarations
let holes = [];
let pegs = [];
let sHole, sPeg;
   // Objects
function Hole(id) {
   this.id = id;
}
function Peg(xCoord, yCoord, id) {
   this.xCoord = xCoord;
   this.yCoord = yCoord;
   this.id = id;
}

function createPegsHoles() {
   let rowCount, id = 0;
   for (let x = 0; x < 7; x++) {
      // Set # of rows for each column
      switch(x) {
         case 2:
         case 3:
         case 4:
            rowCount = 7;
         break;
         default:
            rowCount = 3;
      }
      // Create holes & pegs
      for (let y = 0; y < rowCount; y++) {
         // Short sides adjustment
         if (rowCount == 3) {
            y += 2;
         }

         // Create hole obj
         let id = String(x) + String(y);
         let newHole = new Hole(id);
         // Create click event
         let btnHole = document.getElementById(String(id));
         btnHole.addEventListener("click", function getPocket(elem) {
            let hole = holes.find(p => p.id == elem.target.id);
            ClickHole(hole);
         });
         holes.push(newHole);

         // Skip middle peg
         if (id != "33") {
            // xCoord, yCoord, id
            let newPeg = new Peg(x, y, id);
            pegs.push(newPeg);
         }

         // Short sides adjustment
         if (rowCount == 3) {
            y -= 2;
         }
      }
   }
   DisplayPegsHoles();
}

function DisplayPegsHoles() {
      // Display holes & pegs
   // Holes & pegs are buttons
   // Holes w/ pegs w/ matching coords are enabled btns (red coloured)
   // Holes w/o pegs are disabled (grey coloured)
   holes.forEach(hole => {
      let btnHole = document.getElementById(String(hole.id));
      let peg = pegs.find(p => p.id == hole.id);
      // Holes & Pegs arrays are compared to display the pegs properly
      if (peg != undefined) {
         btnHole.style.background='red';
         btnHole.disabled = false;
      } else {
         btnHole.style.background='grey';
         btnHole.disabled = true;
      }
   });
}

function ClickHole(selBtn) {
   // determine what user has clicked (peg or hole)
   // when peg is clicked, all red peg btns disable and all grey hole btns enable
   let btnHole = document.getElementById(String(selBtn.id));
      // Peg selected
   if (btnHole.style.background == 'red') {
      // Check for adjacent pegs -> check for those pegs' adjacent holes
      console.log(selBtn.id);
      // Split id into 2 digits -> dig1 = 2 dig2 = 3
      // Adjacent btns are +/- both digits -> dig1; 1, 3 dig2; 2, 4 -> 13, 24, 33, 22
   }
      // Hole selected
   else {

   }
      //peg
   // user must select empty hole
   // holebtns are now enabled, pegbtns are disabled
   // selBtn stays enabled, clicking it will undo selection (no change, enable pegbtn and disable hole btn)

      //hole
   // holebtns disable, pegbtns enable
   ToggleBtn();
   // updatepegcoords
   // removepeg
}

function ToggleBtn() {
   holes.forEach(hole => {
      let btnHole = document.getElementById(String(hole.id));
         // Peg selected
      // Disable all pegs
      // Enable all holes -> update to enable only adjacent pegs' adjacent holes -> update to keep selPeg enabled for undoing selection
      if (btnHole.style.background == 'red') {
         btnHole.style.background = 'grey';
         btnHole.disabled = true;
      }
         // Hole selected
      // Disable all holes
      // Update peg coords -> move selPeg to selHole
      // Remove peg -> remove peg that was between them from array
      // Enable all pegs
      else {
         btnHole.style.background = 'red';
         btnHole.disabled = false;
      }
   });
}

function UpdatePegCoords(selPeg, selHole) {
      // Move peg to selected hole
   // Must "hop over" adjacent (horiz. / vert.) peg to capture it
   // Change selPeg coords btn grey & disable
   // Change selHole btn red & enable

   // Call Remove
      // remPeg (peg between selPeg & selHole; above/below or beside)
}

function RemovePeg(remPeg) {
   // Call Update
      // remPeg, remPeg
      // if Update func selPeg coords == selHole coords
         // turn btn grey & disable

   // Remove the captured peg from array

   // Call EndCheck
}

function EndCheck() {
   // See if there are possible moves left (adjacent pegs)
      // if false, call DisplayScore
}

function DisplayScore() {
      // Show user their score
   // 5 or less pegs = good, more than 5 = poor
   // 1 peg left = amazing
   // 1 peg left in D4 coords = perfect game
}

/*
-- WINDOW ONLOAD
*/
window.onload = () => {
         // Call starting functions
      createPegsHoles();
}