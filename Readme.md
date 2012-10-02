# cullquery

jQuery powered DOM extensions for Cull.JS. For now, it only makes it possible to
attach event handlers through the element builder interface in Cull:

    cull.dom.el("a", {
        href: "/somewhere",
        events: {
            click: function (event) {
                alert("HA HA");
                event.preventDefault();
            }
        }
    });

## License

Copyright © 2012, Christian Johansen. BSD license.
