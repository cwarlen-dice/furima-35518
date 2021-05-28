document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('item-image-0')) { // 変化監視要素:イメージのフォーム
    const ImageList = document.getElementById('image-list'); // プレビュー差し込み対象
    const ImageForm = document.getElementById('item-image-0'); // イメージのフォーム
    const clone_element = ImageForm.cloneNode(true); // 複製

    const createImageHTML = (blob, e) => {
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
      // const addImages = document.querySelectorAll('.image-element'); // 追加された画像の数
      // const ImagesCount = addImages.length;
      // const imageElementNum = ImagesCount - 1; // カウンターセット
      const ImagesCount = 0; // カウンターセット
      // const targetId = `item-image-${ImagesCount}`;
      // if (ImagesCount != 0) {
      // }
      delHTML.setAttribute('onclick', `document.getElementById('${e.target.id}').value = ""; this.closest(".image-element").remove()`);

      // 画像と削除ボタンをセットにする
      const inputDiv = document.createElement('div');
      inputDiv.setAttribute('class', 'img-preview image-del');
      inputDiv.appendChild(blobImage);
      inputDiv.appendChild(delHTML);

      // ファイル添付ボタンを生成
      const inputHTML = document.createElement('input');
      inputHTML.setAttribute('id', `item-image-${ImagesCount}`);
      inputHTML.setAttribute('name', 'item[images][]'); // formの配列名に合わせる
      inputHTML.setAttribute('type', 'file')

      // 生成したHTMLの要素をブラウザに表示
      // if (e.target.id == 'item-image-0') {
      // }
      imageElement.appendChild(inputDiv);
      imageElement.appendChild(inputHTML);
      // ImageList.appendChild(imageElement);
      e.srcElement.insertAdjacentHTML('afterend', imageElement);
      // console.log(e);
      // console.log(e.srcElement);
      // console.log(e.target.id);

      inputHTML.addEventListener('change', (e) => {
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
