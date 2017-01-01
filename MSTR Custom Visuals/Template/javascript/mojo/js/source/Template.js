(function() {
    if (!mstrmojo.plugins.Template) {
        mstrmojo.plugins.Template = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.CustomVisBase",
        "mstrmojo.models.template.DataInterface"
    );



    mstrmojo.plugins.Template.Template = mstrmojo.declare(
        mstrmojo.CustomVisBase,
        null, {
            scriptClass: "mstrmojo.plugins.Template.Template",
            cssClass: "Template",
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
    
                var e = this;
                d3.select(e.domNode).selectAll("div").remove();

                var div = d3.select(this.domNode).append("div").attr('class', 'viz');

				
				
				
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





//delete this line when you are ready to visualise your own dataset.  The below line helps show the structure of the data that has been placed on the dataset editor panel
div.append('pre').html(formatJson(JSON.stringify(c,null, 2)));
				
				




            }
        })
}());