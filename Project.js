var data = [
	{
		"year": "2006",
		"SuccesfulLaunch": "FALSE",
		"SuccesfulLanding": "TRUE",
		
		"image": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
	},
	{
		"year": "2007",
		"SuccesfulLaunch": "TRUE",
		"SuccesfulLanding": "TRUE",
		
		"image": "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png"
	},
	{
		"year": "2008",
		"SuccesfulLaunch": "FALSE",
		"SuccesfulLanding": "FALSE",
		
		"image": "https://images2.imgbox.com/3d/86/cnu0pan8_o.png"
	},
	{
		"year": "2009",
		"SuccesfulLaunch": "TRUE",
		"SuccesfulLanding": "FALSE",
		
		"image": "https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png"
	},
	{
		"year": "2010",
		"SuccesfulLaunch": "TRUE",
		"SuccesfulLanding": "TRUE",
		
		"image": "https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png"
	},
	{
		"year": "2011",
		"SuccesfulLaunch": "FALSE",
		"SuccesfulLanding": "FALSE",
		
		"image": "https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png"
	},
	{
		"year": "2012",
		"SuccesfulLaunch": "TRUE",
		"SuccesfulLanding": "TRUE",
		
		"image": "https://images2.imgbox.com/d9/3e/FfrN88ry_o.png"
	}
];

var products = "",
	years = "",
	SuccesfulLaunchs = "",
	SuccesfulLandings = "";

for (var i = 0; i < data.length; i++) {
	var year = data[i].year,
		SuccesfulLaunch = data[i].SuccesfulLaunch,
		SuccesfulLanding = data[i].SuccesfulLanding,
		price = data[i].price,
		
		
		image = data[i].image;
	
	
	products += "<div class='col-sm-4 product' data-make='" + year + "' data-model='" + SuccesfulLaunch + "' data-type='" + SuccesfulLanding +  "'><div class='product-inner text-center'><img src='" + image + "'><br />year: " + year + "<br />SuccesfulLaunch: " + SuccesfulLaunch + "<br />SuccesfulLanding: " + SuccesfulLanding + "<br /></div></div>";
	
	
	if (years.indexOf("<option value='" + year + "'>" + year + "</option>") == -1) {
		years += "<option value='" + year + "'>" + year + "</option>";
	}
	
	
	if (SuccesfulLaunchs.indexOf("<option value='" + SuccesfulLaunch+"'>" + SuccesfulLaunch + "</option>") == -1) {
		SuccesfulLaunchs += "<option value='" + SuccesfulLaunch + "'>" + SuccesfulLaunch + "</option>";
	}
	
	
	if (SuccesfulLandings.indexOf("<option value='" + SuccesfulLanding + "'>" + SuccesfulLanding + "</option>") == -1) {
		SuccesfulLandings += "<option value='" + SuccesfulLanding + "'>" + SuccesfulLanding + "</option>";
	}
}

$("#products").html(products);
$(".filter-make").append(years);
$(".filter-model").append(SuccesfulLaunchs);
$(".filter-type").append(SuccesfulLandings);

var filtersObject = {};


$(".filter").on("change",function() {
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});


$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {
		var year = $(this).data("year").toLowerCase(),
			SuccesfulLaunch = $(this).data("SuccesfulLaunch").toLowerCase(),
			SuccesfulLanding = $(this).data("SuccesfulLanding").toLowerCase();

		if (year.indexOf(query) > -1 || SuccesfulLaunch.indexOf(query) > -1 || SuccesfulLanding.indexOf(query) > -1) {
			$(this).show();
		}
	});
});