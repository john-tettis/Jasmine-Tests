describe('Utilities test',function(){

    beforeEach(function(){
        billAmtInput.value=100;
        tipAmt.value=20
        submitPaymentInfo();
    })
    it('should add tips correctly',function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        
        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);
        
    })
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
    
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
    it('should create a td from a value and append it to a tr on appendTd(tr, value)',function(){
        let tr = document.createElement('tr');
        appendTd(tr, 'value');
        expect(tr.children.length).toEqual(1);
        expect(tr.firstChild.innerText).toEqual('value');
    });
    it('should total tip percents on SubmitPaymentInfo()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
        billAmtInput.value =100;
        tipAmtInput.value =50;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(70);
    })
    it('should calculate tip percentage on calculateTipPercentage',function(){
        expect(calculateTipPercent(100, 50)).toEqual(50);
    expect(calculateTipPercent(1000, 10)).toEqual(1);
    })
    afterEach(function () {
        billAmtInput.value ='';
        tipAmtInput.value ='';
        paymentId = 0;
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });



})