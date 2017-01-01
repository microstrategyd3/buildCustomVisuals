(function() {
    if (!mstrmojo.plugins.SmallMultiples) {
        mstrmojo.plugins.SmallMultiples = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.CustomVisBase",
        "mstrmojo.models.template.DataInterface"
    );



    mstrmojo.plugins.SmallMultiples.SmallMultiples = mstrmojo.declare(
        mstrmojo.CustomVisBase,
        null, {
            scriptClass: "mstrmojo.plugins.SmallMultiples.SmallMultiples",
            cssClass: "SmallMultiples",
            errorMessage: "Something isn't right...",
            errorDetails: "This visualisation requires two attributes,  the second of which should be a date in dd/mm/yyyy format and finally one metric.",
            externalLibraries: [{
                url: "//cdnjs.cloudflare.com/ajax/libs/d3/3.5.2/d3.min.js"
            }],
            useRichTooltip: false,
            reuseDOMNode: false,
            plot: function() {




                var $DI = mstrmojo.models.template.DataInterface,
                    normalizedModel = (new $DI(this.model.data)).getRawData($DI.ENUM_RAW_DATA_FORMAT.TREE);




                var c = normalizedModel.children;
                var mydata = [];
                c.forEach(function(d, i) {
                    console.log(d.name);
                    mydata[i] = {
                        store: d.name,
                        sales: d.children
                    };
                });




                var e = this;
                d3.select(e.domNode).selectAll("div").remove();

                var div = d3.select(this.domNode).append("div").attr('class', 'viz');




                //declare all variables

                //convert string dates to proper dates
                var parseDate = d3.time.format("%d/%m/%Y").parse;

                //the height and width of each chart.  We will have one chart for each object in mydata
                var margin = {
                        top: 10,
                        right: 5,
                        bottom: 20,
                        left: 40
                    },
                    width = 250 - margin.left - margin.right,
                    height = 150 - margin.top - margin.bottom;

                //the colour and stroke width of each line series	
                var stroke = 'blue';
                var strokeWidth = 2;



                //find the maximum value for y in our data	
                var y_max = d3.max(d3.values(mydata), function(d) {
                    return d3.max(d3.values(d.sales), function(e) {
                        return e.value;
                    })
                });

                //find the minimum value for y in our data	  
                var y_min = d3.min(d3.values(mydata), function(d) {
                    return d3.min(d3.values(d.sales), function(e) {
                        return e.value;
                    })
                });

                //find the maximum value for x in our data	  
                var x_min = d3.min(d3.values(mydata), function(d) {
                    return d3.min(d3.values(d.sales), function(e) {
                        return parseDate(e.name);
                    })
                });

                //find the minimum value for x in our data	    
                var x_max = d3.max(d3.values(mydata), function(d) {
                    return d3.max(d3.values(d.sales), function(e) {
                        return parseDate(e.name);
                    })
                });


                //set the x scale.  It makes use of the min and max we found above	
                var xScale = d3.time.scale().domain([x_min, x_max]).range([0, width]);


                //set the y scale	
                var yScale = d3.scale.linear().range([height, 0]).domain([y_min, y_max]);


                // Define the axes that we will call later
                var xAxis = d3.svg.axis().scale(xScale)
                    .orient("bottom").ticks(1);

                var yAxis = d3.svg.axis().scale(yScale)
                    .orient("left").ticks(3);

                //this helps us translate our data into an svg path	description
                var line = d3.svg.line()
                    .x(function(d) {
                        return xScale(parseDate(d.name));
                    })
                    .y(function(d) {
                        return yScale(d.value);
                    });


                //only now do we start to append objects to the page	
                //make a div for each object in our data


                var charts = div.selectAll(".charts").data(mydata).enter().append("div").attr("class", "charts");


                var svg = charts.append('svg')
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom);



                svg.append("text").text(function(d) {
                    return d.store
                }).attr("x", (width + margin.left + margin.right) / 2).attr('text-anchor', 'middle').attr("class", "titles").attr('y', 20);

                var g = svg.append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");




                var sales = g.append("path")
                    .attr("class", "line")
                    .style("fill", "none")
                    .style("stroke", stroke)
                    .style("stroke-width", strokeWidth)
                    .attr("d", function(d) {
                        return line(d.sales);
                    });



                //Add the X Axis
                g.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                // Add the Y Axis
                g.append("g")
                    .attr("class", "y axis")
                    .call(yAxis);




            }
        })
}());