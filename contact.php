<?php ?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link type="text/css" rel="stylesheet" href="contact.css">
    <link rel="stylesheet" href="style_index.css">
    <link rel="stylesheet" href="./footer/footer.css">
    <link rel="stylesheet" href="nav.css">

</head>
<body>
    <nav>
        <?php include ('nav.php');?>
    </nav>
    <section class="contact">
        <div class="contact_header">
            <h1>
                Contactez nous
            </h1>

        </div>

    <div class="contact_contact-us">

            <div class="contact_contact_us-form-and-information">
                <div class="contact_contact_us-our-contact-information">
                    <h2>
                        Nos coordonnées
                    </h2>
                </div>
        <div class="contact_contact_us-our-informations">
                <div class="contact_contact_us_our_contact_infomation-adress">
                    <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/label-2935363_960_720.png"
                        alt="Icone représentant l'adresse."
                    />
                    <p>6 Avenue Thiers, 33100 Bordeaux</p>
                </div>
                <div class="contact_contact_us_our_contact_infomation-phone-number">
                    <img src="https://cdn.pixabay.com/photo/2016/03/31/15/28/analog-1293316_960_720.png"
                        alt="icone représentant un téléphone"
                    />
                    <p>05.01.02.03.04</p>
                </div>
                <div class="contact_contact_us_our_contact_information-mail">
                    <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/letter-2935365_960_720.png"
                        alt="icone représentant les emails"
                    />
                    <p>dunefleuralautre@gmail.com</p>
                </div>
        </div>
            </div>
                <div class="contact_contact_us-Ou">
                    <h3>
                        Ou
                    </h3>
                </div>
                <div class="contact_contact_us-introduction-formulaire">
                    <h2>Ecrivez nous</h2>
                </div>
                <div class="contact_contact_us-formulaire">
                    <form id="contactForm">

                        <label  for="nom">Nom :</label>
                        <input  type="text"  id="nom"  name="user_name">

                        <label for="firstName">Prénom :</label>
                        <input type="text" id="prénom" name="user_firstName">

                        <label  for="courriel">Courriel :</label>
                        <input  type="email"  id="courriel"  name="user_email">

                        <label for= "phone">Téléphone  : </label>
                        <input type= "text" id="phoneNumber" name="user_phone">

                        <label  for="message">Message :</label>
                        <textarea  id="message"  name="user_message"></textarea>

                        <div class="contact_contact_us_formulaire-option">
                                    <label for="select">Sujet </label>
                                    <select name = "select" id= "select">
                                        <option> Problème de livraison
                                        <option> Mariage
                                        <option> Enterrement
                                        <option> Baptême
                                        <option> Cadeau
                                        <option> Évenement
                                        <option> Autre
                        </div>
                        <div  class="button">
                            <input type="submit" value="Submit">
                            <script src="contact.js"></script>
                        </div>
                    </form>
        </div>
    </section>
    <?php include('./footer/footer.php'); ?>
    </body>
</html>


