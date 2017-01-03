(function() {
    mstrmojo.plugins.BlankTemplate.propsEditors || (mstrmojo.plugins.BlankTemplate.propsEditors = {}), mstrmojo.requiresCls("mstrmojo.vi.models.editors.CustomVisEditorModel");
    var e = mstrmojo.vi.models.editors.CustomVisEditorModel.WIDGET_TYPE;
    mstrmojo.plugins.BlankTemplate.propsEditors.editor = mstrmojo.declare(mstrmojo.vi.models.editors.CustomVisEditorModel, null, {
        scriptClass: "mstrmojo.plugins.BlankTemplate.propsEditors.editor",
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