import './Assets/main.scss'
import 'babel-polyfill';

class DailyReport_Template{
  constructor() {
    this.today_action = '';
    this.tomorrow_action = '';
    this.notEnded_task = '';
    this.feeling = '';
    this.happy_things = '';

    this.date = new Date();

    // ローカルストレージに値が保存されてるか問い合わせ(`void 0`は常に`undefined`を返すことを利用している)
    if(localStorage["Author"] === void 0){
      this.author = "<span style='color: #ff6347'>名前を設定してください</span>";
    }
    else {
      this.author = localStorage["Author"];
    }
  }
  
  reload_preview(){
    let base_string = `
【日報】${this.date.getMonth() + 1}/${this.date.getDate()} ${this.author}
各位

お疲れ様です。${this.author}です。

${this.date.getMonth() + 1}月${this.date.getDate()}日の業務報告を致します。

◇日報◇

■本日の行動■
${this.today_action}

■明日の行動■
${this.tomorrow_action}

■未消化タスク■
${this.notEnded_task}

■所感■
${this.feeling}

■よかったこと■
${this.happy_things}
`;
  let Preview = document.getElementById("preview");
  // console.log(Preview);
  Preview.innerHTML = base_string;
  }
}

let report_instance = new DailyReport_Template();
report_instance.reload_preview();

// 本日の行動
let Element_today_action = document.querySelector("#input_today_action");
Element_today_action.addEventListener('input', () => {
  report_instance.today_action = Element_today_action.value;
  report_instance.reload_preview();
});


// 明日の行動
let Element_tomorrow_action = document.querySelector('input#input_tomorrow_action');
Element_tomorrow_action.addEventListener('input', () => {
  report_instance.tomorrow_action = Element_tomorrow_action.value;
  report_instance.reload_preview();
});

let Element_notEndedTask = document.querySelector('input#input_notEnded-task');
Element_notEndedTask.addEventListener('input', () => {
  report_instance.notEnded_task = Element_notEndedTask.value;
  report_instance.reload_preview();
});


// 所感
let Element_Feeling = document.querySelector('textarea#input_Feeling');
Element_Feeling.addEventListener('input', () => {
  report_instance.feeling = Element_Feeling.value;
  report_instance.reload_preview();
});

//　よかったこと
let Element_happys = document.querySelector('textarea#input_happys');
Element_happys.addEventListener('input', () => {
  report_instance.happy_things = Element_happys.value;
  report_instance.reload_preview();
});

// モーダルの表示
document.querySelector('button#mordal_open').addEventListener('click', () => {
  document.querySelector('div#modal').classList.toggle('is-active');
})

// モーダルを消す部分
function mordal_close() {
  document.querySelector('div#modal').classList.toggle('is-active');
}

document.querySelector('div.modal-background').addEventListener('click', () => {
  mordal_close();
});

document.querySelector('button#modal_delete').addEventListener('click', () => {
  mordal_close();
});

// モーダルの設定を保存する
document.querySelector('button#modal_save').addEventListener('click', () => {
  let Element_Author = document.querySelector('input#input_author');
  
  // 空白だった場合はバリデートする(赤枠にするだけ)
  if(Element_Author.value == ''){
    Element_Author.classList.add('is-danger');
  }
  else {
    report_instance.author = Element_Author.value;
    localStorage["Author"] = Element_Author.value;
    mordal_close();
    report_instance.reload_preview();
  }
});

// コピーボタン
function sleep(time) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve();
      }, time);
  });
}

document.querySelector('button#button_copy').addEventListener('click', async () => {

  let Element_message = document.querySelector('article.message.is-success');
  Element_message.classList.remove('disable');
  Element_message.classList.add('enable');
  // console.log('sleep start');
  await sleep(3000);
  Element_message.classList.remove('enable');
  Element_message.classList.add('disable');
});