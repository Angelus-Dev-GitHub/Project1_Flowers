<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D'une fleur à l'autre</title>
    <link rel="stylesheet" href="contact.css">
    <link rel="stylesheet" href="./footer/footer.css">
    <link rel="stylesheet" href="nav.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Calligraffitti&family=Raleway&display=swap');
    </style>

</head>
<body>

<?php include('nav.php'); ?>

<main>
    <section class="contact">
        <div class="contact_header">
            <h1 class="title-of-the-page">
                Contactez nous
            </h1>

        </div>

        <div class="contact_contact-us">


            <div class="contact_contact_us-our-contact-information">
                <h2>
                    Nos coordonnées
                </h2>
            </div>

            <div class="contact_contact_us_our_contact_infomation-adress">

                <p>&#x2709; 6 Avenue Thiers, 33100 Bordeaux</p>
            </div>
            <div class="contact_contact_us_our_contact_infomation-phone-number">

                <p>&#x260E; 05.01.02.03.04</p>
            </div>
            <div class="contact_contact_us_our_contact_information-mail">

                <p>&#x1F4E7; dunefleuralautre@gmail.com</p>
            </div>
        </div>
        <div class="contact_contact_us-Ou">
            <h3>
                Ou
            </h3>
        </div>
        <div class="contact_contact_us-introduction-formulaire">
            <h2>Écrivez nous</h2>
        </div>
        <div class="contact_contact_us-formulaire">
            <form id="contactForm">

                <label for="nom">Nom :</label>
                <input class="inputItems" type="text" id="nom" name="user_name" >

                <label for="firstName">Prénom :</label>
                <input class="inputItems" type="text" id="firstName" name="user_firstName" >

                <label for="courriel">Courriel :</label>
                <input class="inputItems" type="email" id="courriel" name="user_email" >

                <label for="phone">Téléphone : </label>
                <input class="inputItems" type="text" id="phone" name="user_phone" >

                <label for="message">Message :</label>
                <textarea class="inputItems" id="message" name="user_message" ></textarea>

                <div class="contact_contact_us_formulaire-option">
                    <label for="select">Sujet </label>
                    <select name="select" id="select">
                        <option> Sélectionnez un sujet
                        <option> Problème de livraison
                        <option> Mariage
                        <option> Enterrement
                        <option> Baptême
                        <option> Cadeau
                        <option> Évenement
                        <option> Autre
                </div>
                <div class="button">
                    <input id="formSubmission" type="submit" value="Envoyer">
                </div>

            </form>
            <div id="thanksMessage">
                <p>Merci pour votre message. L'équipe répondra sous peu.</p>
                <input id="returnToForm" type="submit" value="Retour" onclick="window.location.reload();">

            </div>
        </div>
    </section>
    <footer>
        <?php include('./footer/footer.php'); ?>
    </footer>
</main>
<script src="nav.js"></script>
<script src="contact.js"></script>
</body>
</html>


