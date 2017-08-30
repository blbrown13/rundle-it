//*** all items for sale
clifbar = { title:"CLIF Bar", 
			type:"Pre-Race Bar",
			description:"Take 1-2 hours before race time. CLIF Bars can help prime your body by providing a surge of necessary vitamins, sugars, and carbs to reach your max potential.",
			price: 2.49,
			image: "img/clif_bar.jpeg",
			options: new Array( "Peanut Butter", 
								"Chocolate Brownie",
								"Oatmeal Raisin")}
								
gatorade = { title:"Gatorade G1", 
			type:"Pre-Race Drink",
			description:"Drink plenty of Gatorade and water leading up to your race to properly hydrate yourself. Supercharge your body with the essential electrolytes and carbohydrates pre-race fuel.",
			price: 2.99,
			image: "img/gatorade.jpeg",
			options: new Array( "Glacier Freeze", 
								"Fruit Punch",
								"Lemon Lime")}
								
clifbuilder = { title:"CLIF Builder's Protein", 
			type:"Post-Race Protein",
			description:"Intended for use immediately after prolonged endurance activity. Maximum calories for depleted energy and muscle-recovery benefits for repairing your tired muscles so you can be ready to run your next race.",
			price: 2.99,
			image: "img/clif_builder.jpg",
			options: new Array( "Chocolate Chip", 
								"Crunchy Peanut Butter",
								"Chocolate Mint")}
								
powerbargel = { title:"PowerBar Gel", 
			type:"Gel",
			description:"Add that much needed boost of extra energy during your race with crucial nutrients and carbs to sustain that same level of effort through the finish line. Recommended gel intake every 30-60 minutes depending on personal preference.",
			price: 1.99,
			image: "img/powerbar_gel.jpg",
			options: new Array( "Chocolate", 
								"Strawberry Banana",
								"Vanilla")}
								
clifshotbloks = { title:"CLIF Shot Bloks", 
			type:"Bloks",
			description:"Simple to handle, easy to chew. For those who prefer to get extra energy in chewable form rather than gel, take the latest nutrition option for endurance athletes. Customize your intake to what your body needs.",
			price: 2.49,
			image: "img/clif_shot_bloks.jpeg",
			options: new Array( "Strawberry", 
								"Cran-Razz",
								"Black Cherry")}


medrundle = { title: "Med Rundle",
			type: "Med Rundle",
			description: "Take these extra essentials and supplements before, during, or after your race to keep you pushing through when everyone else wants to quit, or to speed up recovery and prevent those nasty muscle cramps.The pack includes 1 x Caffiene Pill, 1 x Vasolene Vial, 1 x Electrolyte Tab, 2 x Ibupropen Pills",
			price: 3.00,
			image: "img/medrundle.jpg",
			options: new Array("--")}


hatmittens = {title : "Hats & Mittens",
			type : "Extras",
			description : "Don't lose your race before you even start it, buy these throwaway items to keep you nice and toasty while your competition is tightening up from morning chill. Use before or during your race to keep warm, or throw them away when you're through with them - your choice!",
			price : 3.99,
			image : "img/mittens.jpg",
			options : new Array("Black", "Grey", "Dark Blue")}


socks = {title : "Socks",
		type : "Extras",
		description : "Maybe it's raining cats and dogs and you want to change mid-way through your race, or maybe you need an extra dry pair after you've crossed the finish line...either way, an extra pair of socks boosts the comfort factor. Nobody likes soggy socks.",
		price : 1.99,
		image : "img/socks.jpg",
		options : new Array("White", "Black", "Grey")}


//*** rundle packs
rundle58k = {name:"5-8k", 
			price: 6.99,
			btnClr: "btn-warning", //http://twitter.github.com/bootstrap/base-css.html#buttons
			prerace_items: new Array(clifbar, gatorade),
			prerace_qty: [1,1],
			race_items: new Array(powerbargel, clifshotbloks),
			race_qty: [1,1],
			postrace_items: new Array(clifbuilder),
			postrace_qty: [1],
			extras_items: new Array(medrundle, socks, hatmittens),
			extras_qty: [0, 0, 0]};

rundle13 = {name:"13.1", 
			price: 7.99, 
			btnClr: "btn-success",
			prerace_items: new Array(clifbar, gatorade),
			prerace_qty: [1,1],
			race_items: new Array(powerbargel, clifshotbloks),
			race_qty: [2,2],
			postrace_items: new Array(clifbuilder),
			postrace_qty: [1],
			extras_items: new Array(medrundle, socks, hatmittens),
			extras_qty: [0, 0, 0]
			};	

rundle26 = {name:"26.2", 
			price: 8.99,
			btnClr: "btn-info",
			prerace_items: new Array(clifbar, gatorade),
			prerace_qty: [2,1],
			race_items: new Array(powerbargel, clifshotbloks),
			race_qty: [4,4],
			postrace_items: new Array(clifbuilder),
			postrace_qty: [1],
			extras_items: new Array(medrundle, socks, hatmittens),
			extras_qty: [1, 0, 0]
			};
			
rundleUltra = {name:"Ultra", 
			price: 10.99,
			btnClr: "btn-danger",
			prerace_items: new Array(clifbar, gatorade),
			prerace_qty: [2,1],
			race_items: new Array(powerbargel, clifshotbloks),
			race_qty: [6,6],
			postrace_items: new Array(clifbuilder),
			postrace_qty: [2],
			extras_items: new Array(medrundle, socks, hatmittens),
			extras_qty: [1, 0, 0]};
									
rundles = new Array( rundle58k, rundle13, rundle26, rundleUltra);

///*** DO NOT CHANGE handle, items or qty EVER
///*** items and qty get over written
prerace = {
	name: "Pre-Race",
	handle: "prerace",
	description: "It's important that your body is prepared for the hell you're about to unleash. In addition to eating right the day before the race, it's very important to prime your body an hour or earlier before the gun.",
	items: new Array(clifbar, gatorade),
	qty: [1,1]
}

race = { 
	name: "Race",
	handle: "race",
	description: "This is it, it's just you and your race now. Energy gels help to replenish all the glycogen and calories you’re burning while attacking your race like a demon. Make sure to maintain optimal fueling during your race so you have enough energy to blaze past the finish line.",
	items: new Array(),
	qty: null,
	typeSelected: null
}

postrace = { 
	name: "Post-Race",
	handle: "postrace",
	description: "You did it! You destroyed the race monster, and you should feel damn proud. Now what your body needs is the proper nutrition to promote muscle recovery and to replenish carbohydrate stores, so you can live and race another day.",
	items: new Array(),
	qty: null
}


extras = {
	name: "Extras", 
	handle: "extras",
	description: "The little things add up. Step your race experience up. Run like a pro.",
	items: new Array(),
	qty: null
}

review = { 
	name: "Review",
	handle: "review",
	description: "Take the final step to kick ass on raceday. Confirm your Rundled goodies so we can send it your way.",
	items: new Array(),
	qty: null
}

pay = { 
	name: "Pay",
	handle: "pay",
	description: "So, sadly, we'll need your address and credit card to make this happen.",
	items: new Array(),
	qty: null
}

//*** DON'T TOUCH ME, I DON'T LIKE IT UNCLE
//ui setup
states = new Array(prerace, race, postrace, extras, review, pay);
curState = 0;
