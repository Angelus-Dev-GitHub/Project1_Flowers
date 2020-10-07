<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D'une fleur à l'autre</title>
    <link rel="stylesheet" href="services-style.css">
    <link rel="stylesheet" href="./footer/footer.css">
    <link rel="stylesheet" href="nav.css">
    <link href="https://fonts.googleapis.com/css2?family=Calligraffitti&family=Raleway&display=swap" rel="stylesheet">
</head>
<body>
<?php include 'nav.php'; ?>
<main>
    <section class="services_title">
        <h1 class="title-of-the-page">Nos bouquets</h1>
    </section>
    <section class="services_section">
        <article class="services_section-all-bouquets">
            <div class="services_section-left">
                <div class="services_section-left-image">
                    <a href="contact.php"><img src="https://cdn.pixabay.com/photo/2013/07/30/12/25/marriage-168831_960_720.jpg" alt="bouquet de mariage"></a>
                </div>
                <div class="services_section-left-description">
                    <h2 id="services_section-left-description-wedding">Bouquets de Mariage</h2>
                    <div id="services_section-left-description-wedding-text">
                        Retrouvez nos bouquets pour fleurir votre mariage. Plusieurs compositions sont à votre disposition. Des bouquets de notre atelier et des bouquets suivant vos envies.
                    </div>
                    <div class="services_section-left-description-wedding-contact">
                        <p><a href="contact.php">Contactez-nous</a> pour plus de prestations </p>
                    </div>
                </div>
                <div class="services_section-left-description-empty"></div>
            </div>
            <div class="services_section-right">
                <div class="services_section-right-image">
                    <a href="contact.php"><img src="https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792_960_720.jpg" alt="bouquet de roses"></a>
                </div>
                <div class="services_section-right-description">
                    <h2 id="services_section-right-description-love">Bouquets pour les amoureux</h2>
                    <div id="services_section-right-description-love-text">
                        Tous nos bouquets pour la Saint-Valentin, pour offrir à votre femme, conjointe, maîtresse ou pour vous faire pardonner
                    </div>
                </div>
                <div class="services_section-right-description-empty"></div>
            </div>
            <div class="services_section-left">
                <div class="services_section-left-image">
                    <a href="contact.php"><img src="https://images.unsplash.com/photo-1577689349617-63f40cd3be21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80" alt="bouquet d'halloween"></a>
                </div>
                <div class="services_section-left-description">
                    <h2 id="services_section-left-description-halloween">Bouquets d'Halloween</h2>
                    <div id="services_section-left-description-halloween-text">
                        Envie d'offrir un bouquet pour faire peur aux citrouilles ? Jetez un oeil à nos compositions spéciales
                    </div>
                </div>
                <div class="services_section-left-description-empty"></div>
            </div>
            <div class="services_section-right">
                <div class="services_section-right-image">
                    <a href="contact.php"><img src="https://images.unsplash.com/photo-1532986761747-d642d7e195f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="bouquet de décoration"></a>
                </div>
                <div class="services_section-right-description">
                    <h2 id="services_section-right-description-house">Bouquets pour égayer votre maison</h2>
                    <div id="services_section-right-description-house-text">
                        Votre intérieur est morose ? Offrez-lui des fleurs.
                    </div>
                </div>
                <div class="services_section-right-description-empty"></div>
            </div>
        </article>
        <article class="services_section-event-bouquets"></article>
    </section>
    <footer>
        <?php include './footer/footer.php'; ?>
    </footer>
</main>
<script src="nav.js"></script>
<script src="services.js"></script>
</body>
</html>