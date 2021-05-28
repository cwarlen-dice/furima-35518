document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('item-image-0')) { // 変化監視要素:イメージのフォーム
    const ImageList = document.getElementById('image-list'); // プレビュー差し込み対象
    const ImageForm = document.getElementById('item-image-0'); // イメージのフォーム
    var ImagesCount = 1; // カウンターセット

    const createImageHTML = (blob, e) => {
      // eイベントオブジェクトから取得
      const BtnId = e.target.id;
      console.log(BtnId);

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
      const inputDiv = document.createElement('div');
      inputDiv.setAttribute('class', 'img-preview image-del');
      inputDiv.appendChild(blobImage);
      inputDiv.appendChild(delImage);

      // ファイル添付ボタンを生成
      const inputFile = document.createElement('input');
      inputFile.setAttribute('id', `item-image-${ImagesCount}`);
      inputFile.setAttribute('name', 'item[images][]'); // formの配列名に合わせる
      inputFile.setAttribute('type', 'file')

      // 生成したHTMLの要素をブラウザに表示
      const elem = document.getElementById(BtnId);
      imageElement.appendChild(elem);
      imageElement.appendChild(inputDiv);
      ImageList.appendChild(imageElement);
      ImageList.appendChild(inputFile);

      inputFile.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);
        createImageHTML(blob, e);
      })
      ImagesCount++; // カウントアップ
    };

    document.getElementById('item-image-0').addEventListener('change', function (e) { // 変化監視要素:イメージのフォーム
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob, e);
    });
  }
});
