<template>
  <div class="service">
    <div class="header">
      <h2>All in One Medical Care Package</h2>
      <div class="divider"></div>
    </div>
    <div class="content">
      <img class="float-end" src="@/assets/images/lifecare.png" alt="" />
      <div class="serv">
        <i class="fa-solid fa-heart-pulse"></i>
        <span
          >ပြည်တွင်းမှ ကျွမ်းကျင်ဆရာဝန်များဖြင့် လူကိုယ်တိုင်(သို့) Online
          မှတစ်ဆင့် ဆွေးနွေးတိုင်ပင်ကာ ရောဂါ နှင့် ကိုက်ညီသော ကုထုံးများ ကို
          အကြံပြုပေးခြင်း ဝန်ဆောင်မှု</span
        >
      </div>
      <div class="serv">
        <i class="fa-solid fa-heart-pulse"></i>
        <span
          >ထိုင်းနိုင်ငံ ဘန်ကောက်မြို့ရှိ နိုင်ငံတကာအဆင့်မှီဆေးရုံကြီးများမှ
          ကျွမ်းကျင် ဆရာဝန်ကြီးများ နှင့် Online မှတစ်ဆင့် ဆွေးနွေးတိုင်ပင်ခြင်း
          (Teleconsultation) ဝန်ဆောင်မှု</span
        >
      </div>
      <div class="serv">
        <i class="fa-solid fa-heart-pulse"></i>
        <div>
          <span
            >ထိုင်းနိုင်ငံ ဘန်ကောက်မြို့ရှိ နိုင်ငံတကာအဆင့်မှီဆေးရုံကြီးများတွင်
            ကျွမ်းကျင် ဆရာဝန်ကြီးများနှင့် အတူ နောက်ဆုံးပေါ်ခေတ်မှီနည်းပညာများ၊
            စက်ကိရိယာများ ဖြင့် အဆင့်မြင့်ကျန်းမာရေး ဆေးကုသမှုအတွက်</span
          >
          <ul>
            <li>
              ပြည်ပဆေးကုသမှုခရီးစဥ်အတွက် မိမိသွားရောက်ပြသလိုသော
              ဆေးရုံကြီးများအလိုက် ခန့်မှန်းကုန်ကျစရိတ်တွက်ချက်ပေးခြင်း
            </li>
            <li>
              ဆေးကုသမှုခရီးစဥ်လိုအပ်သောကျန်းမာရေးဆေးစစ်ချက် အချက်အလက်များ (Case
              Summary)အား စုဆောင်းပြင်ဆင်ပြီး မိမိသွားရောက်ပြသလိုသည်
              ဆေးရုံကြီးသို့ ကြိုတင်ပေးပို့ထားခြင်း၊
            </li>
            <li>
              ပြည်ပဆေးကုသမှုခရီးစဥ်အတွက်လိုအပ်သော အချက်အလက်များ
              ကြိုတင်ပြင်ဆင်ပေးခြင်း၊
            </li>
            <li>ခရီးစဥ် အသွားအပြန်အတွက် လေယာဥ်လက်မှတ်စီစဥ်ပေးခြင်း၊</li>
            <li>
              မိမိသွားရောက်မည့် ဆေးရုံကြီးများနှင့် အနီးဆုံးပတ်ဝန်းကျင်တွင်
              တည်းခိုနိုင်ရန် ကြိုတင်ချိတ်ဆက်ပေးခြင်းနှင့် ကားအကြိုအပို့
              စီစဥ်ပေးခြင်း၊
            </li>
            <li>
              ဆေးကုသရန်အတွက် ပြည်ပဆိုက်ရောက်ချိန်မှစ၍
              ဆေးကုသမှုအစီအစဥ်များပြီးစီး၍ ပြည်ပမှပြန်လည် ထွက်ခွာချိန် အထိ
              ဧည့်လမ်းညွှန်ပါဝင်ခြင်း။
            </li>
          </ul>
        </div>
      </div>
      <div class="serv">
        <span
          >စသည့် “All in One Medical Care Package” ဝန်ဆောင်မှု များကို
          အသက်သာဆုံးနှုန်းထား များ နှင့် စိတ်ချယုံကြည်စွာရယူနိုင်ပါသည်။</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.service .header {
  text-align: center;
}

.header h2 {
  font-weight: bold;
  color: #5a5a5a;
}

.header .divider {
  width: 300px;
  height: 3px;
  background: var(--sec-color);
  margin: 0 auto;
}

.content {
  margin: 60px 0 40px;
  padding-left: 40px;
}

.content img {
  width: 300px;
  object-fit: cover;
}

.content .serv {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.serv i {
  color: #d40013;
  font-size: 18px;
  padding-top: 3px;
}

.serv span {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 30px;
}

.serv ul {
  margin-top: 20px;
}

.serv ul li {
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

@media (max-width: 1600px) {
  .header h2 {
    font-size: 24px;
  }

  .header .divider {
    width: 200px;
  }

  .content {
    margin: 50px 0 40px;
    padding-left: 40px;
  }

  .content img {
    width: 250px;
    object-fit: cover;
  }

  .content .serv {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
  }

  .serv i {
    font-size: 14px;
    padding-top: 10px;
  }

  .serv span {
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 30px;
  }

  .serv ul {
    margin-top: 20px;
  }

  .serv ul li {
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0px;
    margin-bottom: 15px;
  }
}

@media (max-width: 550px) {
  .content img {
    width: 150px;
    object-fit: cover;
  }
}

@media (max-width: 400px) {
  .content img {
    width: 120px;
    object-fit: cover;
  }
}
</style>
