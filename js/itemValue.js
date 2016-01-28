function cal(form) {
	try {
		var S1 = parseInt(form.S1.value);
		var S2 = parseInt(form.S2.value);
		var S3 = parseInt(form.S3.value);
		var S4 = parseInt(form.S4.value);
		var nCondition = Math.floor(S1 / 100) + S2 + S3 + S4;
	    var strType = ' Ngân bảo';
	    var nAmount = 10;
	    if (nCondition <= 30)
	    {
			strType = ' Vàng';
			nAmount = nCondition * nCondition * nCondition * nCondition + 1000;
	    }
	    else if (nCondition <= 45)
	    {
			nAmount = (nCondition - 30) / 2;
	    }
	    nAmount=Math.floor(nAmount);
		var strMsg = "Bán trang bị này sẽ thu được khoảng " + nAmount + strType;
		alert(strMsg);
	} catch(err) {
		alert("Lỗi rồi!");
	}
	
}