(function () { 
    if (!mstrmojo.plugins.NewChart) {
        mstrmojo.plugins.NewChart = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.CustomVisBase",
        "mstrmojo.models.template.DataInterface"
    );

    mstrmojo.plugins.NewChart.NewChart = mstrmojo.declare(
        mstrmojo.CustomVisBase,
        null,
        {
            scriptClass: "mstrmojo.plugins.NewChart.NewChart",
            cssClass: "NewChart",
            errorMessage: "Either there is not enough data to display the visualization or the visualization configuration is incomplete.",
            errorDetails: "This visualization requires one or more attributes and one metric.",
            externalLibraries: [{url:"//cdnjs.cloudflare.com/ajax/libs/d3/3.5.2/d3.min.js"}],
            useRichTooltip: false,
            reuseDOMNode: false,
            plot:function(){


          var $DI = mstrmojo.models.template.DataInterface,
                    normalizedModel = (new $DI(this.model.data)).getRawData($DI.ENUM_RAW_DATA_FORMAT.TREE); 
					
					
		
					



var MSTRdata = 	normalizedModel.children;				

console.log('%c The data available for this visualisation is shown below', 'background: #222; color: #bada55');
console.log(MSTRdata);	


	


function formatJson(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
};




var viz = d3.select(this.domNode).select("div");
if (viz.empty()) {viz = d3.select(this.domNode).append("div").attr("class", "viz");}


//delete this line when you are ready to visualise your own dataset.  The below line helps show the structure of the data that has been placed on the dataset editor panel
viz.append('pre').html(formatJson(JSON.stringify(MSTRdata,null, 2)));



	

}})}());
