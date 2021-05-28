document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('item-image')) { // 変化監視要素
    const ImageList = document.getElementById('image-list'); // プレビュー差し込み対象
    let imageElementNum = 0; // カウンターセット
    const ImageForm = document.getElementById('item-image'); // イメージのフォーム
    const clone_element = ImageForm.cloneNode(true); // 複製

    const createImageHTML = (blob) => {
      // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');
      imageElement.setAttribute('class', "image-element");

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);
      blobImage.setAttribute('class', 'img-preview');

      // ファイル削除ボタンを生成
      const inputHTML = document.createElement('input');
      inputHTML.type = 'button';
      inputHTML.value = '削除';
      inputHTML.setAttribute('id', `item_image_${imageElementNum}`);
      inputHTML.setAttribute('name', 'item[images][]'); // formの配列名に合わせる
      // inputHTML.setAttribute('type', 'file')
      inputHTML.setAttribute('onclick', 'this.parentNode.remove()');

      // 生成したHTMLの要素をブラウザに表示
      imageElement.appendChild(blobImage);
      imageElement.appendChild(inputHTML);
      ImageList.appendChild(imageElement);

      // inputHTML.addEventListener('change', (e) => {
      //   file = e.target.files[0];
      //   blob = window.URL.createObjectURL(file);

      //   createImageHTML(blob);
      // })
      // imageElementNum++; // カウントアップ
    };

    document.getElementById('item-image').addEventListener('change', function (e) { // 変化監視要素
      const file = e.target.files[imageElementNum];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
      imageElementNum++; // カウントアップ
    });
  }
});
