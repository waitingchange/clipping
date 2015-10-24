
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,

    ctor:function () {
        this._super();
        var size = cc.winSize;




        var spClose = new cc.Sprite(res.CloseNormal_png);
        spClose.setAnchorPoint(cc.p(0,0));
        spClose.setPosition(0,200);
        spClose.setVisible(true);

        var pBg = new cc.Sprite(res.BgBig_png);
        pBg.setPosition(size.width/2 ,size.height/2);
        this.addChild(pBg);

        var pView = new cc.Sprite(res.BgSmall_png);
        pView.setPosition(size.width/2 ,size.height/2);
        this.addChild(pView);

        var BoxSize = pView.getContentSize();
        var viewSize = cc.size(BoxSize.width , BoxSize.height * 0.85);
        var scrollView = new cc.ScrollView();
        scrollView.setViewSize(viewSize);
        pView.addChild(scrollView);

        var container = new  cc.LayerColor(cc.color(255,0, 128, 255));
        //var container = new cc.Layer();
        container.setContentSize(cc.size(viewSize.width ,viewSize.height));
        container.setAnchorPoint(0,0);
        container.setPosition(0,0);

        scrollView.setContainer(container);
        scrollView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);
        scrollView.setBounceable(true);


        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                var pos = touch.getLocation();
                pos = target.convertToNodeSpace(pos);
                var s = target.getContentSize();
                var rect = cc.rect(0,0, s.width, s.height)
                if(cc.rectContainsPoint(rect,pos)){
                    cc.log(11111111);
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {
                var target = event.getCurrentTarget();
                cc.log(target.getContentOffset().y);
            },
            onTouchEnded: function (touch, event) {

            }
        }, scrollView);

    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

