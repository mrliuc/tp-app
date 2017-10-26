
// 行政区＋商圈范围覆盖物——１.2级通用
function RangeOverlay(point, text, code, url, zoom, click) {
    this._point = point;
    this._text = text;
    this._code = code;
    this._url = url;
    this._zoom = zoom;
    this._click = click;
}
RangeOverlay.prototype = new BMap.Overlay();
RangeOverlay.prototype.initialize = function (map) {
    this._map = map;
    var div = this._div = document.createElement("div");
    div.setAttribute("id", this._code);
    div.setAttribute("class", "range-overlay");
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    // 保存code
    var code = this._code,   //　区域代码
        url = this._url,
        point = this._point,
        zoom = this._zoom,
        click = this._click;
        
//div.addEventListener('tap',function(){
//	
//});

div.addEventListener("touchstart", function(){
                          map.setZoom(zoom);      // 根据坐标点进行跳转,改变层级
        map.setCenter(point);

        click();
                  });

//  div.onclick = function businessCirclePoint() {
//      // Ajax上传code，并改变中心点
//      map.setZoom(zoom);      // 根据坐标点进行跳转,改变层级
//      map.setCenter(point);
//
//      click();
//      // console.log("跳转链接" + url);
//  }
    var span = this._span = document.createElement("span");
    div.appendChild(span);
    div.getElementsByTagName("span")[0].innerHTML = this._text;
    div.onmouseover = function () { this.style.zIndex = "9"; }
    div.onmouseout = function () { this.style.zIndex = "1"; }
    map.getPanes().labelPane.appendChild(div);
        
    return div;
}
RangeOverlay.prototype.draw = function () {
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - 30 + "px";
    this._div.style.top = pixel.y - 30 + "px";
}

// 建筑物具体覆盖物——3级用(NO.是序号)
function BuildingOverlay(point, text, mouseoverTxt, code, html, zoom,click) {
    this._point = point;
    this._text = text;
    this._mouseoverTxt = mouseoverTxt;
    this._code = code;
    this._html = html;
    this._zoom = zoom;
    this._click=click;
}
BuildingOverlay.prototype = new BMap.Overlay();
BuildingOverlay.prototype.initialize = function (map) {
    //  var num = this._NO,
    var html = this._html,
        point = this._point,
        buildingText = this._text,
        click=this._click;
    this._map = map;
    var div = this._div = document.createElement("div"); // 父级元素
    var childOverlay = document.createElement("div"); // 第三级覆盖物div
    div.setAttribute("class", "building-parent");
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    childOverlay.setAttribute("class", "building-overlay");
    // childOverlay.setAttribute("id", this._NO);
   
    div.addEventListener("touchstart", function(){
       click();
                  });

    
//  childOverlay.onclick = function (e) {
//
//      e.stopPropagation();
//
//      var childInfoWindow = document.createElement("div");
//      // childInfoWindow.id = "building-infoWindow-" + num;
//      childInfoWindow.className = "building-infoWindow";
//      //   var buildingOverlayObj = BuildingModel[num];
//
//      childInfoWindow.innerHTML = html;   // 信息窗口　加入内容结构；
//      childOverlay.parentNode.insertBefore(childInfoWindow, childOverlay);
//      //var allInfoWindow = document.getElementsByClassName("building-infoWindow"); // 获取所有信息窗口
//      // 百度infoWindo效果
//      // var buildingOverlayObj = BuildingModel[num];        //　获取childInfoWindow_Content信息窗口的高度
//      //var childInfoWindow_Content_height = document.getElementById("building-infoWindow-" + num).offsetHeight; // 可以获取到自定义信息窗口的高度
//      //var childInfoWindow_Content_width = document.getElementById("building-infoWindow-" + num).offsetWidth; // 可以获取到自定义信息窗口的高度
//      // console.log(childInfoWindow_Content_height);
//      //var buildingContent_Baidu =
//      //    "<div " + "style = \"height:" + childInfoWindow_Content_height + "px; width:" + childInfoWindow_Content_width + "px; \"" + ">" + "aaa" + " </div>" +
//      //    "</div>";
//      var infoWindow = new BMap.InfoWindow(html);  // 创建信息窗口对象
//      //var point = new BMap.Point(buildingOverlayObj.latitude, buildingOverlayObj.longitude + 0.001);
//      map.openInfoWindow(infoWindow, point); //开启信息窗口
//
//  };
    div.appendChild(childOverlay);
    var span = this._span = document.createElement("span");
    //span.style.display = 'block';
    // span.appendChild(document.createTextNode(this._text));
    span.innerHTML = this._text;
    childOverlay.appendChild(span);
    var that = this;
    var arrow = this._arrow = document.createElement("span");    // 箭头
    arrow.setAttribute("class", "arrow");
    childOverlay.appendChild(arrow);
    //childOverlay.onmouseover = function () { this.getElementsByTagName("span")[0].innerHTML = that._mouseoverTxt; }
    //childOverlay.onmouseout = function () { this.getElementsByTagName("span")[0].innerHTML = that._text; }
    map.getPanes().labelPane.appendChild(div);
    return div;
}
BuildingOverlay.prototype.draw = function () {
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - 30 + "px";
    this._div.style.top = pixel.y - 30 + "px";
}
