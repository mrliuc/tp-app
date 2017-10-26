Vue.prototype.formatOrderType=function(orderType){
	if(!orderType){
		return null;
	}
	return Model.OrderTypeName[orderType];
}
