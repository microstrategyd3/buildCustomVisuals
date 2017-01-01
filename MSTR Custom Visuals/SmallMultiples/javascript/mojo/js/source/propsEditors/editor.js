(function() {
    mstrmojo.plugins.SmallMultiples.propsEditors || (mstrmojo.plugins.SmallMultiples.propsEditors = {}), mstrmojo.requiresCls("mstrmojo.vi.models.editors.CustomVisEditorModel");
    var e = mstrmojo.vi.models.editors.CustomVisEditorModel.WIDGET_TYPE;
    mstrmojo.plugins.SmallMultiples.propsEditors.editor = mstrmojo.declare(mstrmojo.vi.models.editors.CustomVisEditorModel, null, {
        scriptClass: "mstrmojo.plugins.SmallMultiples.propsEditors.editor",
        getCustomProperty: function() {
            return [this.ColorProperties]
        },
        ColorProperties: {
            name: "Appearance",
            value: [
			
			
			
			
			]
        }
    })
})();