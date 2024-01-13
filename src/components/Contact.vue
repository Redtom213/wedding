<template>
  <section id="contact">
    <div class="image-divider auto-height" :style="{ backgroundImage: 'url(./src/assets/images/footer.jpg)', paddingBottom: '100px', paddingTop: '100px' }">
      <div class="divider-overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-offset-2 col-md-8" style="text-align:center">
            <div class="text-center banner-text withlove large light" style="visibility: visible; font-family: MapoFlowerIsland,sans-serif">
              <h2>마음 전하실 곳</h2><br>
              참석이 어려우신 분들은<br>축하의 마음을 전달해주세요.
            </div>
            <div class="banner-text withlove large light" style="visibility: visible; font-family: BookkMyungjo-Bd7, sans-serif;font-size: 90%;">
              <h3>신랑측</h3>
              <p>{{ groomAccount }}
                <br>
                <img src="https://i.imgur.com/64ZwWNj.png" style="width: 60px;cursor: pointer;border-radius: 4px; margin-right: 10px;" @click="copyToClipboard(1)" alt="복사하기">
                <img src="https://i.imgur.com/pdLL0dT.png" style="width: 60px;cursor: pointer;border-radius: 4px;" @click="openKakaoPay(1)" alt="카카오페이">
              </p>
              <p style="margin-bottom: 10px;">{{ groomMainAccount }}
                <br>
                <img src="https://i.imgur.com/64ZwWNj.png" style="width: 60px;cursor: pointer;border-radius: 4px;" @click="copyToClipboard(2)" alt="복사하기">
              </p>
            </div>
            <div class="banner-text withlove large light" style="visibility: visible; font-family: BookkMyungjo-Bd7, sans-serif;font-size: 90%;">
              <h3>신부측</h3>
              <p>{{ brideAccount }}
                <br>
                <img src="https://i.imgur.com/64ZwWNj.png" style="width: 60px;cursor: pointer;border-radius: 4px; margin-right: 10px;" @click="copyToClipboard(3)" alt="복사하기">
                <img src="https://i.imgur.com/pdLL0dT.png" style="width: 60px;cursor: pointer;border-radius: 4px;" @click="openKakaoPay(3)" alt="카카오페이">
              </p>
              <p style="margin-bottom: 10px;">{{ brideMainAccount }}
                <br>
                <img src="https://i.imgur.com/64ZwWNj.png" style="width: 60px;cursor: pointer;border-radius: 4px;" @click="copyToClipboard(4)" alt="복사하기">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      groomAccount: '신한 110-483-346116 김태병',
      groomMainAccount: '우리 144-070929-77 김주명(혼주)',
      brideAccount: '기업 932-049578-01-018 강희종',
      brideMainAccount: '국민 640002-95-103613 강용구(혼주)'
    };
  },
  methods: {
    copyToClipboard(text) {
      if (text === 1) {
        text = '신한은행 110483346116';
      } else if (text === 2) {
        text = '우리은행 14407092977';
      } else if (text === 3) {
        text = '기업은행 93204957801018';
      } else if (text === 4) {
        text = '국민은행 64000295103613';
      }
      navigator.clipboard.writeText(text).then(() => {
        alert(text + '\n' + '복사되었습니다.');
      });
    },
    openKakaoPay(accountType) {
      // Implement KakaoPay logic here
      window.open(accountType === 1 ? 'https://qr.kakaopay.com/Ej8XbQeMu' : 'https://qr.kakaopay.com/FWm4nRGUF');
    }
  }
};
</script>
