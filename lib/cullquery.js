;cull.dom.el.propmap.events = function (el, events) {
    var property, $el = jQuery(el);
    for (property in events) {
        $el.bind(property, events[property]);
    }
};
