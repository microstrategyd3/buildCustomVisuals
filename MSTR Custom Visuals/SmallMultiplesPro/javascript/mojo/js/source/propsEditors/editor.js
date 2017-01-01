(function() {
    mstrmojo.plugins.SmallMultiplesPro.propsEditors || (mstrmojo.plugins.SmallMultiplesPro.propsEditors = {}), mstrmojo.requiresCls("mstrmojo.vi.models.editors.CustomVisEditorModel");
    var e = mstrmojo.vi.models.editors.CustomVisEditorModel.WIDGET_TYPE;
    mstrmojo.plugins.SmallMultiplesPro.propsEditors.editor = mstrmojo.declare(mstrmojo.vi.models.editors.CustomVisEditorModel, null, {
        scriptClass: "mstrmojo.plugins.SmallMultiplesPro.propsEditors.editor",
        getCustomProperty: function() {
            return [this.ColorProperties]
        },
        ColorProperties: {
            name: "Appearance",
            value: [
			{
                style: e.LABEL,
                labelText: "Height"
            },
			
				{
  style: e.STEPPER,
  propertyName: "height",
  min: 1,
  max: 100
},{
                style: e.LABEL,
                labelText: "Width"
            },
				{
  style: e.STEPPER,
  propertyName: "width",
  min: 1,
  max: 100
},
			{
                style: e.LABEL,
                labelText: "Top margin"
            },
			
{
  style: e.STEPPER,
  propertyName: "tmargin",
  min: 1,
  max: 20
},
			{
                style: e.LABEL,
                labelText: "Bottom margin"
            },
			
{
  style: e.STEPPER,
  propertyName: "bmargin",
  min: 1,
  max: 20
},
{
                style: e.LABEL,
                labelText: "Left margin"
            },
			
{
  style: e.STEPPER,
  propertyName: "lmargin",
  min: 1,
  max: 20
},
{
                style: e.LABEL,
                labelText: "Right margin"
            },
			
{
  style: e.STEPPER,
  propertyName: "rmargin",
  min: 1,
  max: 20
},
		
			{
                style: e.LABEL,
                labelText: "Line Thickness"
            },
			
{
  style: e.STEPPER,
  propertyName: "lineThickness",
  min: 1,
  max: 6
}	,
			{
                style: e.LABEL,
                labelText: "Line Color"
            },
			
			{
  style: e.FILLGROUP,
  propertyName: "Color"
}
			
	,

		{
                style: e.LABEL,
                labelText: "# x axis labels"
            },
			
{
  style: e.STEPPER,
  propertyName: "xticks",
  min: 0,
  max: 10
}		
			
			
		,

{
                style: e.LABEL,
                labelText: "# y axis labels"
            },
			
{
  style: e.STEPPER,
  propertyName: "yticks",
  min: 0,
  max: 10
}		
			
	,

{
                style: e.LABEL,
                labelText: "Date label format"
            },

{
  style: e.TEXTBOX,
  propertyName: "dateFormat"
}	
			
			
			
			
			]
        }
    })
})();