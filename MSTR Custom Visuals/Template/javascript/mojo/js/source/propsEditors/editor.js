(function() {
    mstrmojo.plugins.Template.propsEditors || (mstrmojo.plugins.Template.propsEditors = {}), mstrmojo.requiresCls("mstrmojo.vi.models.editors.CustomVisEditorModel");
    var e = mstrmojo.vi.models.editors.CustomVisEditorModel.WIDGET_TYPE;
    mstrmojo.plugins.Template.propsEditors.editor = mstrmojo.declare(mstrmojo.vi.models.editors.CustomVisEditorModel, null, {
        scriptClass: "mstrmojo.plugins.Template.propsEditors.editor",
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