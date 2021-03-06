const pay = () => {
  Payjp.setPublicKey(process.env.PAYJP_PUBLIC_KEY); // 公開鍵入力
  const form = document.getElementById("charge-form"); // 要素 ID 入力
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formResult = document.getElementById("charge-form"); // const formと同じ要素 ID 入力
    const formData = new FormData(formResult);

    const card = {
      number: formData.get("order_destination[number]"),
      cvc: formData.get("order_destination[cvc]"),
      exp_month: formData.get("order_destination[exp_month]"),
      exp_year: `20${formData.get("order_destination[exp_year]")}`,
    };

    Payjp.createToken(card, (status, response) => {
      if (status == 200) {
        const token = response.id;
        const renderDom = document.getElementById("charge-form"); // const formと同じ要素 ID 入力
        const tokenObj = `<input value=${token} name='token' type="hidden">`;
        renderDom.insertAdjacentHTML("beforeend", tokenObj);
      }

      document.getElementById("card-number").removeAttribute("name");
      document.getElementById("card-cvc").removeAttribute("name");
      document.getElementById("card-exp-month").removeAttribute("name");
      document.getElementById("card-exp-year").removeAttribute("name");

      document.getElementById("charge-form").submit(); // const formと同じ要素 ID 入力
    });

  });
};

window.addEventListener("load", pay);
