buster.testCase("Cullquery", {
    "adds event handler": function () {
        var handler = this.spy();
        var el = cull.dom.el("button", { events: { click: handler } });

        jQuery(el).trigger("click");

        assert.calledOnce(handler);
    }
});
