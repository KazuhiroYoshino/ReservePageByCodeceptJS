const assert = require('assert');

let reserveTestTable = new DataTable(['宿泊初日', '連泊数', '宿泊人数', '朝食', '昼からチェックインプラン', 'お得な観光プラン', '氏名', '合計料金']);
reserveTestTable.add(['Monday', '1', '1', 'off', 'off'                   ,'off'           ,'武田晴信','7000']);
reserveTestTable.add(['Monday', '1', '1', 'off', 'off'                   ,'off'           ,'武田晴信','6500']);
reserveTestTable.add(['Monday'   ,'2'   ,'8'     ,'on' ,'on'                    ,'on'            ,'真田昌虎','144000']);
reserveTestTable.add(['Monday'   ,'3'   ,'9'     ,'off','off'                   ,'on'            ,'山本寛太','198000']);
reserveTestTable.add(['Monday'   ,'5'   ,'2'     ,'on' ,'on'                    ,'off'           ,'上杉景虎','82000']);
reserveTestTable.add(['Monday'   ,'9'   ,'2'     ,'on' ,'on'                    ,'off'           ,'直江愛子','153000']);
reserveTestTable.add(['Tuesday'  ,'1'   ,'9'     ,'on' ,'on'                    ,'on'            ,'武田晴信','90000']);
reserveTestTable.add(['Tuesday'  ,'2'   ,'2'     ,'off','on'                    ,'on'            ,'真田昌虎','32000']);
reserveTestTable.add(['Tuesday'  ,'3'   ,'1'     ,'on' ,'off'                   ,'off'           ,'山本寛太','24000']);
reserveTestTable.add(['Tuesday'  ,'5'   ,'9'     ,'off','off'                   ,'off'           ,'上杉景虎','330750']);
reserveTestTable.add(['Tuesday'  ,'9'   ,'8'     ,'off','off'                   ,'on'            ,'直江愛子','540000']);
reserveTestTable.add(['Wednesday','1'   ,'2'     ,'on' ,'on'                    ,'on'            ,'武田晴信','20000']);
reserveTestTable.add(['Wednesday','2'   ,'2'     ,'on' ,'on'                    ,'off'           ,'真田昌虎','34000']);
reserveTestTable.add(['Wednesday','3'   ,'8'     ,'on' ,'off'                   ,'on'            ,'山本寛太','200000']);
reserveTestTable.add(['Wednesday','5'   ,'1'     ,'off','on'                    ,'off'           ,'上杉景虎','39500']);
reserveTestTable.add(['Wednesday','9'   ,'9'     ,'on' ,'on'                    ,'on'            ,'直江愛子','697500']);
reserveTestTable.add(['Thursday' ,'1'   ,'2'     ,'off','off'                   ,'on'            ,'武田晴信','16000']);
reserveTestTable.add(['Thursday' ,'2'   ,'1'     ,'on' ,'on'                    ,'off'           ,'真田昌虎','17000']);
reserveTestTable.add(['Thursday' ,'3'   ,'8'     ,'off','off'                   ,'off'           ,'山本寛太','182000']);
reserveTestTable.add(['Thursday' ,'5'   ,'9'     ,'on' ,'on'                    ,'off'           ,'上杉景虎','400500']);
reserveTestTable.add(['Thursday' ,'9'   ,'8'     ,'on' ,'off'                   ,'on'            ,'直江愛子','612000']);
reserveTestTable.add(['Friday'   ,'1'   ,'8'     ,'off','off'                   ,'on'            ,'武田晴信','64000']);
reserveTestTable.add(['Friday'   ,'2'   ,'9'     ,'off','off'                   ,'off'           ,'真田昌虎','141750']);
reserveTestTable.add(['Friday'   ,'3'   ,'2'     ,'on' ,'on'                    ,'on'            ,'山本寛太','59000']);
reserveTestTable.add(['Friday'   ,'5'   ,'8'     ,'off','off'                   ,'off'           ,'上杉景虎','308000']);
reserveTestTable.add(['Friday'   ,'9'   ,'1'     ,'on' ,'on'                    ,'on'            ,'直江愛子','79250']);
reserveTestTable.add(['Saturday' ,'1'   ,'1'     ,'off','off'                   ,'off'           ,'武田晴信','8750']);
reserveTestTable.add(['Saturday' ,'2'   ,'2'     ,'off','off'                   ,'off'           ,'真田昌虎','35000']);
reserveTestTable.add(['Saturday' ,'3'   ,'8'     ,'off','on'                    ,'off'           ,'山本寛太','204000']);
reserveTestTable.add(['Saturday' ,'5'   ,'2'     ,'on' ,'off'                   ,'on'            ,'上杉景虎','89000']);
reserveTestTable.add(['Saturday' ,'9'   ,'9'     ,'on' ,'on'                    ,'on'            ,'直江愛子','729000']);
reserveTestTable.add(['Sunday'   ,'1'   ,'9'     ,'on' ,'on'                    ,'on'            ,'武田晴信','105750']);
reserveTestTable.add(['Sunday'   ,'2'   ,'1'     ,'on' ,'off'                   ,'off'           ,'真田昌虎','17750']);
reserveTestTable.add(['Sunday'   ,'3'   ,'1'     ,'on' ,'on'                    ,'on'            ,'山本寛太','27750']);
reserveTestTable.add(['Sunday'   ,'5'   ,'8'     ,'on' ,'off'                   ,'on'            ,'上杉景虎','342000']);
reserveTestTable.add(['Sunday'   ,'9'   ,'2'     ,'off','off'                   ,'off'           ,'直江愛子','136500'])

Feature('宿泊予約機能');

Data(reserveTestTable).Scenario('Reserve Tests', async({I , current}) => {
    I.ページを移動する('http://example.selenium.jp/reserveApp_Renewal/');
    I.fromDay(current.宿泊初日);
    I.click('#guestname');
    I.selectOption('reserve_t', current.連泊数);
    I.selectOption('hc', current.宿泊人数);
    if(current.朝食 == 'on'){
        I.checkOption('#breakfast_on');
    }else{
        I.checkOption('#breakfast_off');
    }
    if(current.昼からチェックインプラン == 'on'){
        I.checkOption('plan_a');
    }
    if(current.お得な観光プラン == 'on') {
        I.checkOption('plan_b');
    }
    I.fillField('gname', current.氏名);

    let term = await I.grabValueFrom('select[name="reserve_t"]');
    let headcount = await I.grabValueFrom('select[name="hc"]');

    I.click('利用規約に同意して次へ');
//    assert.equal(current.合計料金 - 0, I.testPrice());
    I.see(current.合計料金);
    I.seeTerm(term);
    I.seeHeadCount(headcount);
    if(current.朝食 == 'on'){
        I.see('朝食: あり');
    }else{
        I.see('朝食: なし');
    }
    if(current.昼からチェックインプラン == 'on'){
        I.see('昼からチェックインプラン');
    }
    if(current.お得な観光プラン == 'on') {
        I.see('お得な観光プラン');
    }
    I.see(current.氏名);
});
