const ed = {
	name: "Smartphone",
	brand: ["Apple", "Samsung", "Oppo", "Redmi"],
	category: "Mobile",
	description: "This smartphone comes with advanced features.",
	price: [60000, 30000, 20000, 250000],
	specifications: {
		display: "6.5-inch Full HD display",
		camera: "Dual 12MP rear cameras",
		processor: "Octa-core processor",
		storage: "128GB internal storage",
		connectivity: "5G , LTE"
	}
};

order = (brand) => {
		console.log("Loading...");
		setTimeout(() => {
		console.log(`${ed.brand[brand]}`);
		displayInfo(ed, brand);
	}, 3000);
	
};

function displayInfo(ed, brand) {
	setTimeout(() => {
		console.log(`Name: ${ed.name}`);
		console.log(`Category: ${ed.category}`);
		console.log(`Description: ${ed.description}`);
		console.log(`Price: $${ed.price[brand]}`);
		console.log(`Specifications:`);
		console.log(ed.specifications)
			}, 0);
}

order(2);













// navlinks.addEventListener('click',function(){

//     this.style.backgroundColor='blue';
    
    
//     })
//     nav.addEventListener('click',function(e){

//         this.style.backgroundColor='yellow';
//         e.stopPropagation();
        
//         })
//     document.querySelector('body').addEventListener('click',function()
//     {
//         this.style.backgroundColor='pink'
//     })