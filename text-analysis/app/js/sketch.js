var myString = "An engraving of a farmer walking across a pastoral field while sprinkling seeds from the seeder bowl he carries. The seeds that fill the bowl look like coins, but the seeds that land in the field look like notes on a music staff.";
				var ritaString = new RiString(myString);
				var input;
				var button;

				// ritaString.pos();

				// console.log(ritaString.pos());

				function setup() {
					noCanvas();
					input = createInput(myString);
					button = createButton('submit');
					input.changed(processRita);
					button.mousePressed(processRita);
					input.size(300);
				}

				function processRita() {
					var userTxt = input.value();
					createP(userTxt);
					RiTa.concordance(userTxt);
				}