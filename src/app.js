import './Assets/main.scss'

class DailyReport_Template{


  constructor() {
    this.today_action = '';
    this.tomorrow_action = '';
    this.notEnded_task = '';
    this.feeling = '';
    this.happy_things = [];
    }
  
  reload_preview(){
    let base_string = `
  【日報】6/25 小野晴海
  各位

  お疲れ様です。小野晴海です。

  6月25日の業務報告を致します。

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