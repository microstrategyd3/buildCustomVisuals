(function () { 
    if (!mstrmojo.plugins.SmallMultiplesPro) {
        mstrmojo.plugins.SmallMultiplesPro = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.CustomVisBase",
        "mstrmojo.models.template.DataInterface"
    );
	
	

  
  
  
	

    mstrmojo.plugins.SmallMultiplesPro.SmallMultiplesPro = mstrmojo.declare(
        mstrmojo.CustomVisBase,
        null,
        {
            scriptClass: "mstrmojo.plugins.SmallMultiplesPro.SmallMultiplesPro",
            cssClass: "SmallMultiplesPro",
            errorMessage: "Something isn't right...",
            errorDetails: "This visualisation requires a date in dd/mm/yyyy format, an attribute with the event name and a metric.  Ask Dan Harrington in BIS if you are having problems",
            externalLibraries: [{url:"//cdnjs.cloudflare.com/ajax/libs/d3/3.5.2/d3.min.js"}],
            useRichTooltip: false,
            reuseDOMNode: false,
            plot:function(){
			
			
			this.setDefaultPropertyValues({
    d11: '80',
	fontSize:'60',
    Color: {
      fillColor: "#0080FF",
      fillAlpha: '100'
    }
  });
			
			
			


                var $DI = mstrmojo.models.template.DataInterface,
                    normalizedModel = (new $DI(this.model.data)).getRawData($DI.ENUM_RAW_DATA_FORMAT.TREE); 
					
					
					
					
					
var c = 	normalizedModel.children;		
     var mydata = [];
      c.forEach(function(d,i){
        console.log(d.name);
		mydata[i] = {store:d.name , sales:d.children};		
      });
		


	
	var e = this;
            d3.select(e.domNode).selectAll("div").remove();
			
//var title = d3.select(this.domNode).append("p").html("% sales").style("font-size","30px").style("text-align","center").style("font-family","calibri");
			
			var div = d3.select(this.domNode).append("div").attr('class','viz');
			
			
			
var col = '#0080FF';

var z1 =  this.getProperties();
console.log(z1);

if (z1.Color == null) {
    console.log('no properties');
}
else
{
	col = z1.Color.fillColor;
	 console.log('yes properties');
	 console.log(z1.Color.fillColor);
	 
};		




function check (x) {
    return (x == null) ? "%Y-%m-%d" : x
};

var dateFormat = check(z1.dateFormat);

console.log(dateFormat);






	
			
			
			
var hhh = (+z1.height || 5) * 25;			
var www = (+z1.width || 5) * 25;	
var tm = (+z1.tmargin || 5) * 5;		
var bm = (+z1.bmargin || 5) * 5;	
var lm = (+z1.lmargin || 5) * 5;		
var rm = (+z1.rmargin || 5) * 5;	
var lineThickness = +z1.lineThickness || 1;		
var xticks = +z1.xticks || 1;	
var yticks = +z1.yticks || 1;	

//declare all variables

//convert string dates to proper dates
var parseDate = d3.time.format("%d/%m/%Y").parse;

//the height and width of each chart.  We will have one chart for each object in mydata
var margin = {top: tm, right: rm, bottom: bm, left: lm},
    width = www - margin.left - margin.right,
    height = hhh - margin.top - margin.bottom;
	
	

	
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
  .orient("bottom").ticks(xticks).tickFormat(d3.time.format(dateFormat));
 
var yAxis = d3.svg.axis().scale(yScale)
  .orient("left").ticks(yticks);	
	
//this helps us translate our data into an svg path	description
var line = d3.svg.line()
//.interpolate("basis")
    .x(function(d) { return xScale(parseDate(d.name)); })
    .y(function(d) { return yScale(d.value); });	
		
	
//only now do we start to append objects to the page	
//make a div for each object in our data


var charts = div.selectAll(".charts").data(mydata).enter().append("div").attr("class","charts");


var svg = charts.append('svg')
    .attr('width', width + margin.left + margin.right )
    .attr('height', height + margin.top + margin.bottom );
	
	
	
	svg.append("text").text(function(d) {return d.store  }).attr("x",(width + margin.left + margin.right)/2).attr('text-anchor','middle').attr("class","titles").attr('y',20);
	
var g = 	svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	

	

var sales = g.append("path")
    .attr("class", "line")
	.style("fill","none")
    .style("stroke",col)
    .style("stroke-width",lineThickness)
    .attr("d", function(d) { return line(d.sales); });



//Add the X Axis
  g.append("g")   
    .attr("class", "x axis")
    //.attr("transform", "translate(" + margin.left+ "," + (height-margin.bottom) + ")")
	.attr("transform", "translate(0," + height + ")")
    .call(xAxis);
 
  // Add the Y Axis
  g.append("g")   
    .attr("class", "y axis")
	//.attr("transform", "translate(" + margin.left + "," + (margin.top) + ")")
    .call(yAxis);
	
	
	
	
	
	
	
	

}})}());
