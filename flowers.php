<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D'une fleur à l'autre</title>
    <link rel="stylesheet" href="./footer/footer.css">
    <link rel="stylesheet" href="flowersstyle.css">
    <link rel="stylesheet" href="nav.css">
    <link href="https://fonts.googleapis.com/css2?family=Calligraffitti&family=Raleway&display=swap" rel="stylesheet">
</head>

<body>
<div class="page-container">
<?php include("nav.php"); ?>
    <main>
        <div class="page-container">
            <h1 class="title-of-the-page"> Boutique en ligne </h1>
            <p class="flowers_subtitle">Composez votre bouquet !</p>
            <section class="flowers_container">
                <div class="flowers_rose flower_unite-container" data-aos="zoom-in">
                    <img class="flowerpicture" src="https://images.unsplash.com/photo-1576857990591-aad2585f34d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
                    <div class="flowers_text">
                        <h2> Rose </h2>
                        <p>Prix: <b>€2.99</b></p>

                        <button id="rose-button">Ajouter au panier</button>
                    </div>
                </div>
                <div class="flowers_daffodil flower_unite-container" data-aos="zoom-in">
                    <img class="flowerpicture" src="https://images.unsplash.com/photo-1547606373-7097fb4b75d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
                    <div class="flowers_text">
                        <h2>Jonquille</h2>
                        <p>Prix: <b>€3.99</b></p>

                        <button id="jon-button">Ajouter au panier</button>
                    </div>
                </div>
                <div class="flowers_anemone flower_unite-container" data-aos="zoom-in">
                    <img class="flowerpicture" src="https://images.unsplash.com/photo-1589744534282-f1f71d5e3616?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80" alt="">
                    <div class="flowers_text">
                        <h2>Anémone</h2>
                        <p>Prix: <b>€2.49</b></p>

                        <button id="anem-button">Ajouter au panier</button>

                    </div>
                </div>
                <div class="flowers_carnation flower_unite-container" data-aos="zoom-in">
                    <img class="flowerpicture" src="https://images.unsplash.com/photo-1570631810442-f20e700b0ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
                    <div class="flowers_text">
                        <h2> Œillet</h2>
                        <p>Prix: <b>€4.99</b></p>

                        <button id="oeil-button">Ajouter au panier</button>
                    </div>
                </div>
                <div class="flowers_anthurium flower_unite-container" data-aos="zoom-in">
                    <img class="flowerpicture" src="https://images.unsplash.com/photo-1548031101-42105b053869?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
                    <div class="flowers_text">
                        <h2>Anthurium</h2>
                        <p>Prix: <b>€3.99</b></p>

                        <button id="ant-button">Ajouter au panier</button>
                    </div>
                </div>
                <div class="flowers_gladiolus flower_unite-container" data-aos="zoom-in">
                    <img class="flowerpicture" src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80" alt="">
                    <div class="flowers_text">
                        <h2>Glaïeul</h2>
                        <p>Prix: <b>€3.49</b></p>

                        <button id="gla-button">Ajouter au panier</button>
                    </div>
                </div>
                <div class="flowers_lily flower_unite-container" data-aos="zoom-in">
                    <img class="flowerpicture" src="https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
                    <div class="flowers_text">
                        <h2>Lys</h2>
                        <p>Prix: <b>€1.99</b></p>

                        <button id="lys-button">Ajouter au panier</button>
                    </div>
                </div>
                <div class="flowers_tulip flower_unite-container" data-aos="zoom-in">
                    <img class="flowerpicture" src="https://images.unsplash.com/flagged/photo-1561023368-08a67ce21a09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1358&q=80" alt="">
                    <div class="flowers_text">
                        <h2>Tulipe</h2>
                        <p>Prix: <b>€4.49</b></p>

                        <button id="tul-button">Ajouter au panier</button>
                    </div>
                </div>
                <div class="flowers_orchid flower_unite-container" data-aos="zoom-in">
                    <img class="flowerpicture" src="https://images.unsplash.com/photo-1545818754-87cb4616981b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80" alt="">
                    <div class="flowers_text">
                        <h2>Orchidée</h2>
                        <p>Prix: <b>€3.99</b></p>

                        <button id="orch-button" >Ajouter au panier</button>
                    </div>
                </div>
                <section class="basket">
                    <h2 >Votre panier</h2>
                    <ul id="basket-list">
                        <li id="rose-basketitem"><span id="rose-delete" class="delete-button"> X </span><b>Rose</b> :  <span id="rose-quantity"> 0 </span> ......................€ <span id="rose-amount"> 0 </span> </li>
                        <li id="jon-basketitem"> <span id="jon-delete" class="delete-button"> X </span> <b>Jonquille </b> :  <span id="jon-quantity"> 0 </span> ......................€ <span id="jon-amount"> 0 </span> </li>
                        <li id="anem-basketitem"> <span id="anem-delete" class="delete-button"> X </span><b>Anémone </b> :  <span id="anem-quantity"> 0 </span> ......................€ <span id="anem-amount"> 0 </span> </li>
                        <li id="oeil-basketitem"><span id="oeil-delete" class="delete-button"> X </span> <b>Œillet </b> :  <span id="oeil-quantity"> 0 </span> ......................€ <span id="oeil-amount"> 0 </span> </li>
                        <li id="ant-basketitem"> <span id="ant-delete" class="delete-button"> X </span><b>Anthurium</b> :  <span id="ant-quantity"> 0 </span> ......................€ <span id="ant-amount"> 0 </span> </li>
                        <li id="gla-basketitem"> <span id="gla-delete" class="delete-button"> X </span><b>Glaïeul </b> :  <span id="gla-quantity"> 0 </span> ......................€ <span id="gla-amount"> 0 </span> </li>
                        <li id="lys-basketitem"> <span id="lys-delete" class="delete-button"> X </span><b>Lys </b> :  <span id="lys-quantity"> 0 </span> ......................€ <span id="lys-amount"> 0 </span> </li>
                        <li id="tul-basketitem"> <span id="tul-delete" class="delete-button"> X </span><b>Tulipe </b> :  <span id="tul-quantity"> 0 </span> ......................€ <span id="tul-amount"> 0 </span> </li>
                        <li id="orch-basketitem"><span id="orch-delete" class="delete-button"> X </span><b>Orchidée</b> :  <span id="orch-quantity"> 0 </span> ......................€ <span id="orch-amount"> 0 </span> </li>

                    </ul>

                    <p class="basket-total"><b>TOTAL : €<span id="total-amount">  0 </span></b></p>
                    <button>Commande</button>
                </section>
            </section>

        </div>
        <footer>
            <?php include './footer/footer.php'; ?>
        </footer>
    </main>
</div>
<script src="flowers.js"></script>
<script src="nav.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
    AOS.init();
</script>
</body>

</html>