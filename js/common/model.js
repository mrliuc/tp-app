(function(model) {
	model.TransferEmptyToNULL = function(v) {
		return v === "" || v == undefined ? null : v;
	};

	model.GetFormatTime = function(time, length) {
		length = length == undefined ? 19 : length;
		return time.substring(0, length);
	}

	model.OrderStatusName = {
		1: '确认中',
		11: '已取消',
		2: '已派车',
		21: '已退单',
		3: '提货中',
		4: '送货中',
		5: '已送达',
		6: '已对账'
	};

	model.OrderTypeName = {
		1: '普通货运',
		2: '进口整箱',
		3: '进口散货',
		4: '出口整箱',
		5: '出口散货'
	};

	model.AccountTypeName = {
		1: '客户物流客服',
		2: '司机',
		3: '公司',
		4: '车队',
		5: '客户财务',
		6: '车队财务',
		7: '车队物流',
		8: '客户物流主管'
	};

	model.AccountStatusName = {
		1: '正常',
		2: '冻结'
	};

	model.FeeStatusName = {
		1: '未维护费用',
		2: '已维护费用',
		3: '未维护运费',
		31: '维护运费退回',
		4: '已维护运费',
		5: '未生成对账单',
		6: '已确认对账',
		61: '生成对账单退回'
	};

	model.OrderStatementStatusName = {
		1: '正常',
		2: '异常'
	}

	model.OrderStatementStatus = {
		正常: 1,
		异常: 2
	}

	model.StatementStatusName = {
		1: '未提交',
		2: '已提交',
		21: '已退回',
		3: '已确认'
	};

	model.StatementStatus = {
		未提交: 1,
		已提交: 2,
		已退回: 21,
		已确认: 3
	}

	model.BankName = [
		'工商银行',
		'农业银行',
		'建设银行',
		'招商银行'
	];

	model.TransactionTypeName = {
		1: '入账',
		2: '提现'
	};

	model.TransactionStatusName = {
		1: '申请中',
		2: '已确认',
		3: '已付款',
		11: '申请中',
		12: '已完成',
	};

	model.FreightStatus = {
		未维护: 0,
		已维护: 1
	}

	model.ChargeStatus = {
		未维护: 0,
		已维护: 1
	}

	model.TopicStatusName = {
		0: '已取消',
		1: '待处理',
		2: '待接单',
		3: '已接单'
	}

	model.AuthStatusName = {
		0: '未提交',
		1: '审核中',
		2: '已认证',
		3: '未通过'
	}

	model.PLPRStatus = {
		待付款: 1,
		已付款: 2,
		已发送: 3,
		已接单: 4,
		已取消: 41,
		已退款: 42,
		已退单: 43,
		已完成: 5,
		已确认: 6
	}
	model.PLPRStatusName = {
		1: '待付款',
		2: '已付款',
		3: '已发送',
		4: '已接单',
		41: '已取消',
		42: '已退款',
		43: '已退单',
		5: '已完成',
		6: '已确认'
	}

	model.PLType = {
		更新状态: 1,
		询问: 2,
		小票保存: 3
	}
	model.PLTypeName = {
		1: '更新状态',
		2: '询问',
		3: '小票保存'
	}

	model.RechargeType = {
		充值: 1,
		注册: 2,
		邀请: 3
	}
	
	
model.PayStatus = {
    支付中: 1,
    支付成功: 2
}

}(window.Model = {}));