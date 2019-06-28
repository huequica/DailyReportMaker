import './Assets/main.scss'

class DailyReport_Template{
  constructor() {
    this.today_action = '';
    this.tomorrow_action = '';
    this.notEnded_task = '';
    this.feeling = '';
    this.happy_things = [];

    this.date = new Date();
    }
  
  reload_preview(){
    let base_string = `
【日報】${this.date.getMonth() + 1}/${this.date.getDate()} 小野晴海
各位

お疲れ様です。小野晴海です。

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
  
  `;
  let Preview = document.getElementById("preview");
  // console.log(Preview);
  Preview.innerText = base_string;
  }
}

let report_instance = new DailyReport_Template();
report_instance.reload_preview();

// 本日のの行動
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


