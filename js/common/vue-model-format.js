Vue.prototype.formatOrderType = function(orderType) {
	if(!orderType) {
		return null;
	}
	return Model.OrderTypeName[orderType];
}

Vue.prototype.formatDateTime = function(time) {
	return moment(time).format('YYYY-MM-DD HH:mm');
};