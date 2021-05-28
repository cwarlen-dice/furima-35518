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
      const delHTML = document.createElement('input');
      delHTML.type = 'button';
      delHTML.value = '削除';
      // delHTML.setAttribute('id', `item_image_del_${imageElementNum}`);
      // delHTML.setAttribute('onclick', 'this.closest(".image-element").remove()');
      if (imageElementNum === 0) {
        const targetId = 'item-image';
      } else {
        const targetId = `item_image_${imageElementNum}`;
      }
      delHTML.setAttribute('onclick', `document.getElementById('${targetId}').value = "";`);

      // 画像と削除ボタンをセットにする
      const inputDiv = document.createElement('div');
      inputDiv.setAttribute('class', 'img-preview image-del');
      inputDiv.appendChild(blobImage);
      inputDiv.appendChild(delHTML);

      // ファイル添付ボタンを生成
      const inputHTML = document.createElement('input');
      inputHTML.setAttribute('id', `item_image_${imageElementNum}`);
      inputHTML.setAttribute('name', 'item[images][]'); // formの配列名に合わせる
      inputHTML.setAttribute('type', 'file')

      // 生成したHTMLの要素をブラウザに表示
      imageElement.appendChild(inputDiv);
      imageElement.appendChild(inputHTML);
      ImageList.appendChild(imageElement);

      inputHTML.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);
        createImageHTML(blob);
      })
      imageElementNum++; // カウントアップ
    };

    document.getElementById('item-image').addEventListener('change', function (e) { // 変化監視要素
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }
});
