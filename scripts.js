    /*
  	 * Data taken from https://data.cityofnewyork.us/Business/Legally-Operating-Businesses/w7w3-xahh
  	 * Chart taken from https://developers.google.com/chart/interactive/docs/gallery/columnchart#Configuration_Options
  	 */
      google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
		var data = google.visualization.arrayToDataTable([
  ['Industry', 'Number'],
  ["Amusement Device Permanent",121],
  ["Amusement Device Portable",514],
  ["Amusement Device Temporary",6],
  ["Auction House Premises",34],
  ["Auctioneer",343],
  ["Bingo Game Operator",73],
  ["Booting Company",3],
  ["Cabaret",126],
  ["Catering Establishment",51],
  ["Cigarette Retail Dealer",9256],
  ["Commercial Lessor",9],
  ["Dealer In Products",788],
  ["Debt Collection Agency",1239],
  ["Electronic & Appliance Service",1812],
  ["Electronics Store",3054],
  ["Employment Agency",326],
  ["Games of Chance",114],
  ["Gaming Cafe",37],
  ["Garage",1341],
  ["Garage and Parking Lot",87],
  ["General Vendor",2291],
  ["General Vendor Distributor",7],
  ["Home Improvement Contractor",9231],
  ["Home Improvement Salesperson",10309],
  ["Horse Drawn Cab Owner",68],
  ["Horse Drawn Driver",271],
  ["Laundry",2582],
  ["Laundry Jobber",1747],
  ["Locksmith",2687],
  ["Locksmith Apprentice",18],
  ["Motion Picture Projectionist",214],
  ["Newsstand",311],
  ["Parking Lot",536],
  ["Pawnbroker",418],
  ["Pedicab Business",258],
  ["Pedicab Driver",953],
  ["Pool or Billiard Room",56],
  ["Process Server Individual",807],
  ["Process Serving Agency",123],
  ["Scale Dealer Repairer",28],
  ["Scrap Metal Processor",75],
  ["Secondhand Dealer - Auto",873],
  ["Secondhand Dealer - Firearms",7],
  ["Secondhand Dealer - General",5996],
  ["Sidewalk Cafe",1242],
  ["Sightseeing Bus",13],
  ["Special Sale",6],
  ["Stoop Line Stand",2173],
  ["Storage Warehouse",62],
  ["Tow Truck Company",559],
  ["Tow Truck Driver",2466],
  ["Tow Truck Exemption",56]
        ]);
        
        var options = {
          chart: {
            title: 'NYC Legally Operated Businesses',
            subtitle: 'Grouped by Industry',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, options);
      }