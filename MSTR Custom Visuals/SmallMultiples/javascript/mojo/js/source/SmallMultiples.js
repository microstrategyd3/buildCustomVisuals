(function () { 
    if (!mstrmojo.plugins.SmallMultiples) {
        mstrmojo.plugins.SmallMultiples = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.CustomVisBase",
        "mstrmojo.models.template.DataInterface"
    );

    mstrmojo.plugins.SmallMultiples.SmallMultiples = mstrmojo.declare(
        mstrmojo.CustomVisBase,
        null,
        {
            scriptClass: "mstrmojo.plugins.SmallMultiples.SmallMultiples",
            cssClass: "SmallMultiples",
            errorMessage: "Either there is not enough data to display the visualization or the visualization configuration is incomplete.",
            errorDetails: "This visualization requires one or more attributes and one metric.",
            externalLibraries: [{url:"https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"}],
            useRichTooltip: false,
            reuseDOMNode: false,
            plot:function(){
console.log('%c A custom vis used to expose the data structure exposed to the browser by MSTR ', 'background: #222; color: #bada55');

          var $DI = mstrmojo.models.template.DataInterface,
                    normalizedModel = (new $DI(this.model.data)).getRawData($DI.ENUM_RAW_DATA_FORMAT.TREE); 
					
					
		
					



var MSTRdata = 	normalizedModel.children;				
					
	console.log(MSTRdata);	
	
	
	
     var mydata = []; 
      MSTRdata.forEach(function(d,i){
		mydata[i] = {store:d.name , sales:d.children};		
      });
	
console.log('%c Small multiples ready data', 'background: #0066ff; color: #bada55');	
	console.log(mydata);	
	
	
	





                var viz = d3.select(this.domNode).select("div");

                if (viz.empty()) {
                    viz = d3.select(this.domNode).append("div")
                        .attr("class", "SmallMultiplesViz");
                }

   


	
	
//declare all variables

//convert string dates to proper dates
var parseDate = d3.time.format("%d/%m/%Y").parse;

//the height and width of each chart.  We will have one chart for each object in mydata
var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 300 - margin.left - margin.right,
    height = 150 - margin.top - margin.bottom;
	
	
	var stroke =  '#1f77b4';
	var strokeWidth = 2;
	
	//find the maximum value for y in our data	
   var y_max =      d3.max(d3.values(mydata), function(d) { 
         return d3.max(d3.values(d.sales), function(e) {
                 return e.value;
         })
   });
   
 //find the minimum value for y in our data	  
      var y_min =      d3.min(d3.values(mydata), function(d) { 
         return d3.min(d3.values(d.sales), function(e) {
                 return e.value;
         })
   });
   
 //find the maximum value for x in our data	  
         var x_min =      d3.min(d3.values(mydata), function(d) { 
         return d3.min(d3.values(d.sales), function(e) {
                 return parseDate(e.name);
         })
   });
   
 //find the minimum value for x in our data	    
   var x_max =      d3.max(d3.values(mydata), function(d) { 
         return d3.max(d3.values(d.sales), function(e) {
                 return parseDate(e.name);
         })
   });	
	
	
//set the x scale.  It makes use of the min and max we found above	
var xScale = d3.time.scale().domain([x_min, x_max]).range([0, width]);


//set the y scale	
var yScale = d3.scale.linear().range([height, 0]).domain([y_min,y_max]);	
	
	
// Define the axes that we will call later
var xAxis = d3.svg.axis().scale(xScale)
  .orient("bottom").ticks(3);
 
var yAxis = d3.svg.axis().scale(yScale)
  .orient("left").ticks(3);	
	
//this helps us translate our data into an svg path	description
var line = d3.svg.line()
//.interpolate("basis")
    .x(function(d) { return xScale(parseDate(d.name)); })
    .y(function(d) { return yScale(d.value); });	
		
	
//only now do we start to append objects to the page	
//make a div for each object in our data


var charts = viz.selectAll(".charts").data(mydata).enter().append("div").attr("class","charts");


var svg = charts.append('svg')
    .attr('width', width + margin.left + margin.right )
    .attr('height', height + margin.top + margin.bottom )
	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	
var title = svg.append("text").text(function(d) {return d.store}).attr("x",width/2).attr('text-anchor','middle').attr("class","titles");	
	

var sales = svg.append("path")
    .attr("class", "line")
	.style("fill","none")
    .style("stroke",stroke)
    .style("stroke-width",strokeWidth)
    .attr("d", function(d) { return line(d.sales); });



//Add the X Axis
  svg.append("g")   
    .attr("class", "x axis")
    //.attr("transform", "translate(" + margin.left+ "," + (height-margin.bottom) + ")")
	.attr("transform", "translate(0," + height + ")")
    .call(xAxis);
 
  // Add the Y Axis
  svg.append("g")   
    .attr("class", "y axis")
	//.attr("transform", "translate(" + margin.left + "," + (margin.top) + ")")
    .call(yAxis);
	

}})}());
