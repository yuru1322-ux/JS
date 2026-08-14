// スライダー内の要素を取得
const sliderImages = document.querySelectorAll('.slider-images img');
const sliderTrack = document.querySelector('.slider-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

// 現在表示中の画像のインデックス
// sliderImages.length = 5
// js は 0 が1 始まり
let currentIndex = 0;

// トラックを現在のインデックス分だけ左右にずらして、1秒かけてスライドさせる
const updateSlider = () => {
  // currentIndex.length = 4 → 500%
  // currentIndex = 画像の○枚目
  // そこに 100 を掛けることで translateX の何%かを出している
  // 例えば 3枚目なら * 100 で 300%。300%横にずらすことで、3枚目が表示される
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  // forEach はループ処理
  // 今選択している index番目の と currentIndex が同じであれば active = true になる
  // その結果、洗濯中の画像に対する dot だけ active になる
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};

// 次の画像へ(最後の画像の次は最初に戻る)
// 次へボタンがクリックされたとき
nextButton.addEventListener('click', () => {
  // 現在のインデックスに+1したインデックスが呼ばれる
  // js では 0 は 1 ~
  // 最後になると 4 + 1 = 5 % sliderImages.length = 5 のため、0。0 = 1 で最初に戻る
  // この処理がないと 5枚目の次がないのに 5枚目を表示しようとしてバグる
  currentIndex = (currentIndex + 1) % sliderImages.length;
  // updateSlider が呼ばれ、トラックを現在のインデックス分だけ左右にずらして、1秒かけてスライド
  // dots も現在のindex 番号に合わせて active を更新する。 index currentIndex になる様にする
  updateSlider();
});

// 前の画像へ(最初の画像の前は最後に戻る)
prevButton.addEventListener('click', () => {
  // 今が 2
  // 0 の時は 1 - 1 + 1 = 1
  // 1 % 1 = 1 で 1 ページに移動する
  currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
  updateSlider();
});

// ドットをクリックしたら該当の画像に切り替える
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // dot をクリックしたらクリックされた index 番号に currentIndex が更新される
    currentIndex = index;
    updateSlider();
  });
});