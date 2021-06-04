document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('item-image')) { // 変化監視要素:イメージのフォーム
    const ImageList = document.getElementById('item-img-list'); // プレビュー差し込み対象
    var ImagesCount = 1; // カウンターセット

    const createImageHTML = (blob, e) => {
      // eイベントオブジェクトから取得
      const BtnId = e.target.id;

      // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');
      imageElement.setAttribute('class', "image-element");

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);
      blobImage.setAttribute('class', 'img-preview');

      // ファイル削除ボタンを生成
      const delImage = document.createElement('input');
      delImage.type = 'button';
      delImage.value = '削除';
      delImage.setAttribute('onclick', `document.getElementById('${BtnId}').value = ""; this.closest(".image-element").remove()`);

      // 画像と削除ボタンをセットにする
      const divImageBtn = document.createElement('div');
      divImageBtn.setAttribute('class', 'img-btn');
      divImageBtn.appendChild(blobImage);
      divImageBtn.appendChild(delImage);

      // ファイル添付ボタンを生成
      const inputFile = document.createElement('input');
      inputFile.setAttribute('id', `item-image-${ImagesCount}`);
      inputFile.setAttribute('name', 'item[images][]'); // formの配列名に合わせる
      inputFile.setAttribute('type', 'file')

      // 生成したHTMLの要素をブラウザに表示
      const btnElem = document.getElementById(BtnId); // 押されたボタンの要素取得
      btnElem.style.display = "none"; // 押されたボタンを非表示にする
      imageElement.appendChild(btnElem);
      imageElement.appendChild(divImageBtn);
      ImageList.appendChild(imageElement);
      ImageList.appendChild(inputFile);

      inputFile.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);
        createImageHTML(blob, e);
      })
      ImagesCount++; // カウントアップ
    };

    document.getElementById('item-image').addEventListener('change', function (e) { // 変化監視要素:イメージのフォーム
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob, e);
    });
  }
});
