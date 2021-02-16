const market = () => {
    let player_Money = 0;

    const Exit = () => {
        //const marketScreen = document.querySelector('.marketScreen');
        const Exitbutton = document.querySelector('.Exit');
        //const Shopscreen = document.querySelector('.ShopScreen');

        Exitbutton.addEventListener('click', () => {
            document.getElementById("ShopScreen").style.visibility = "hidden";
            document.getElementById("marketScreen").style.visibility = "visible";



        });

    };
    const ChooseShop = () => {


        const ShopButton = document.querySelector('.Shop');
        //const ShopScreen = document.querySelector('.ShopScreen');
        //const marketScreen = document.querySelector('.marketScreen');

        ShopButton.addEventListener('click', () => {
            document.getElementById("ShopScreen").style.visibility = "visible";
            document.getElementById("marketScreen").style.visibility = "hidden";
            document.getElementById("ShopScreen").style.color = "green";

        });
    };


    Exit();
    ChooseShop();

};
market();