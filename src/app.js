
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        //var bg = new cc.Sprite(res.HelloWorld_png);
        //bg.setPosition(size.width/2 , size.height/2);
        //this.addChild(bg);

        var clipper = new cc.ClippingNode();
        clipper.tag = 101;
        clipper.width = 200;
        clipper.height = 200;
        clipper.anchorX = 0.5;
        clipper.anchorY = 0.5;
        clipper.x = this.width / 2;
        clipper.y = this.height / 2;
        this.addChild(clipper);

        //clipper.setInverted(true);
        clipper.setInverted(false);
        var stencil = new cc.DrawNode();
        var rectangle = [cc.p(0, 0),cc.p(clipper.width, 0),
            cc.p(clipper.width, clipper.height),
            cc.p(0, clipper.height)];
        var white = cc.color(100, 20, 255, 10);

        stencil.drawPoly(rectangle, white, 1, white);
        clipper.stencil = stencil;

        var content = new cc.Sprite(res.HelloWorld_png);
        content.tag = 102;
        content.anchorX = 0.5;
        content.anchorY = 0.5;
        content.x = clipper.width /2 ;
        content.y = clipper.height / 2;
        clipper.addChild(content);


    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

