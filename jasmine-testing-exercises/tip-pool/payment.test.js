describe('testing payments',function(){
    beforeEach(function(){
        billAmtInput.value=100;
        tipAmtInput.value=15;
    })
    it('should add payment info to allPayments on SubmitPaymentInfo()',function(){
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1)
        expect(allPayments['payment1'].billAmt).toBe('100');
        expect(allPayments['payment1'].tipAmt).toBe('15');
        expect(allPayments['payment1'].tipPercent).toEqual(15);
    })
    it('should not add to allPayment if there is no input for SubmitPaymentInfo() ',function(){
        billAmtInput.value='';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });
    it('should create a new payment on createCurPayment()',function(){
        let payment = createCurPayment();
        expect(payment.billAmt).toEqual('100');
        expect(payment.tipAmt).toEqual('15');
        expect(payment.tipPercent).toEqual(15);

    });
    it('should update #paymentTable on appendPaymentTable',function(){
        let payment = createCurPayment();
        appendPaymentTable(payment);

        let paymentList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(paymentList.length).toEqual(4);
        expect(paymentList[0].innerText).toEqual('$100');
        expect(paymentList[1].innerText).toEqual('$15');
        expect(paymentList[2].innerText).toEqual('15%');
        expect(paymentList[3].innerText).toEqual('X');
    });
    it('should not create a new payment on empty inputs of createCurPayment()',function(){
        billAmtInput.value ='';
        tipAmtInput.value=0;
        let test = createCurPayment();
        expect(test).toEqual(undefined);
    })
    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })



});