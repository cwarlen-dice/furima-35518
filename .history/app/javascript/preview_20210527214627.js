document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('item-image')) { // 変化監視要素
    const ImageList = document.getElementById('image-list'); // プレビュー差し込み対象

    const createImageHTML = (blob) => {
      // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');
      imageElement.setAttribute('class', "image-element");
      let imageElementNum = document.querySelectorAll('.image-element').length;

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);
      blobImage.setAttribute('class', 'img-preview');

      // // ファイル選択ボタンを生成
      const inputHTML = document.createElement('input');
      inputHTML.setAttribute('id', `item_image_${imageElementNum}`);
      inputHTML.setAttribute('name', 'item[images][]'); // formの配列名に合わせる
      inputHTML.setAttribute('type', 'file');

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      imageElement.appendChild(inputHTML);
      ImageList.appendChild(imageElement);

      inputHTML.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);

        createImageHTML(blob);
      })
    };

    document.getElementById('item-image').addEventListener('change', function (e) { // 変化監視要素
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }
});

del(e) {
  const imageContent = document.querySelector('img');
  if (imageContent) {
    imageContent.remove();
  }
}
