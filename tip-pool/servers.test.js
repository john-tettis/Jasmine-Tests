describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });
    afterEach(function() {
    serverId=0;
    serverTbody.innerHTML='';
    allServers={};

  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  it('should not add server if input is empty on submitServerInfo()',function(){
    serverNameInput.value ='';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  })
  it('should update the the server table when SUbmitServerInfo() runs', function(){
    submitServerInfo();
    updateServerTable();
    let serverList = document.querySelectorAll('#serverTable tbody tr td');
   console.log(serverList);
    expect(serverList.length).toEqual(3);
    expect(serverList[0].innerText).toEqual('Alice');
    expect(serverList[1].innerText).toEqual('$0.00');
  })


});
describe('Table logic and update',function(){
  beforeEach(function(){

  })
  it('should create table elements with the correct values', function(){
  })
})
