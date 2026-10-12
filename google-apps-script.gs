// Google Sheet এ স্টুডেন্ট রেজিস্ট্রেশন জমা করার কোড (Extensions > Apps Script এ পেস্ট করুন)
function c(v){v=String(v||'').slice(0,500);return /^[=+\-@]/.test(v)?"'"+v:v}
function doPost(e){
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var sh=ss.getSheetByName('Registrations')||ss.insertSheet('Registrations');
  if(sh.getLastRow()===0)sh.appendRow(['সময়','নাম','পিতার নাম','মোবাইল','রোল','রেজিস্ট্রেশন','কলেজ','বিষয়','সেশন','সেবা','মন্তব্য']);
  var d=JSON.parse(e.postData.contents);
  sh.appendRow([new Date(),c(d.name),c(d.father),c(d.mobile),c(d.roll),c(d.reg),c(d.college),c(d.subject),c(d.session),c(d.service),c(d.note)]);
  return ContentService.createTextOutput('ok');
}
