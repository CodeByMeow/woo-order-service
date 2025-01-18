const orderFieldMapping = {
	Name: 'order_id',
	tong_tien: 'total',
	giam_gia: 'discount_total',
	phuong_thuc_thanh_toan: 'payment_method',
	so_dien_thoai_nguoi_mua: 'billing.phone',
	email_nguoi_mua: 'billing.email',
	ten_nguoi_mua: 'billing.last_name'
};

const orderMetaDataMapping = {
	gioi_tinh: '_billing_gender',
	so_dien_thoai_nguoi_nhan: '_billing_phone_2',
	ten_nguoi_nhan: '_billing_last_name_2',
	dia_chi_nhan_hang: '_shipping_address'
};

const requiredFields = ['order_id', 'meta_data']

module.exports = {
	orderFieldMapping, orderMetaDataMapping, requiredFields
}

