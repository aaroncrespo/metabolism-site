var canvas = Raphael('metabolism', '940', '680');

$(function () {

    Reaction = Backbone.Model.extend({

    });

    Line = Backbone.Model.extend({
    });

    Dot = Backbone.Model.extend({
    });

    ReactionCollection = Backbone.Collection.extend({
        model: Reaction
    });

    LineCollection = Backbone.Collection.extend({
        model: Line
    });

    DotCollection = Backbone.Collection.extend({
        model: Dot
    });

    ReactionView = Backbone.View.extend({
        initialize: function (args){
            this.element = canvas.path();
            this.setElement(this.element.node);
            this.delegateEvents(this.events);
        },

        events: {
            "click": "click";   
        },

        click: function(){
            alert('clicked');
        },

        render: function (){
            var modelJSON = this.model.toJSON();
            var p;
            if (modelJSON.type === "rect") {
                var rectAttr = modelJSON.attrs;
                p = canvas.rect(rectAttr.x, rectAttr.y, rectAttr.width, rectAttr.height);
            } else {
                p = canvas.path(modelJSON.attrs.path);
            }
            p.attr({fill: modelJSON.attrs.fill,
                    'stroke-width': '0',
                    'stroke-opacity': '1',
                    opacity: '0.7',
                    cursor: 'pointer'
                });

            this.setElement(p.node);
            return this;
        }
    });

    ReactionCollectionView = Backbone.View.extend({
        render: function (){
            var self = this;
            this.collection.each(function(model) {
                reactionView = new ReactionView({model: model});
                reactionView.render();
            });
            return this;
        }
    });

    DotsCollectionView = Backbone.View.extend({
        render: function (){
            var self = this;
            this.collection.each(function(model) {
                self.createdotItem(model);
            });
            return this;
        },
        createdotItem: function(model){
            modelJSON = model.toJSON();
            var path = canvas.circle(modelJSON.attrs.cx, modelJSON.attrs.cy, modelJSON.attrs.r);
            path.attr({fill: '#62B24F', 'stroke-width': '3','stroke-miterlimit': '10','stroke-opacity': '1', cursor: 'pointer'});
        }
    });

    LinesCollectionView = Backbone.View.extend({
        render: function (){
            var self = this;
            this.collection.each(function(model) {
                self.createLineItem(model);
            });
            return this;
        },
        createLineItem: function(model){
            modelJSON = model.toJSON();
            var path = canvas.path(modelJSON.attrs.path);
            path.attr({fill: modelJSON.attrs.fill, stroke: '#000000','stroke-width': '4','stroke-miterlimit': '10','stroke-opacity': '1'});
        }
    });

    var reactionCollection = new ReactionCollection(reactions);
    var dotsCollection = new DotCollection(dots);
    var linesCollection = new LineCollection(lines);

    var reactionsView = new ReactionCollectionView({
        collection:  reactionCollection
    });

    var dotsView = new DotsCollectionView({
        collection:  dotsCollection
    });

    var linesView = new LinesCollectionView({
        collection:  linesCollection
    });

    reactionsView.render();
    linesView.render();
    dotsView.render();
});