<?php ?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style_index.css">
    <link rel="stylesheet" href="./footer/footer.css">
    <link rel="stylesheet" href="nav.css">
    <title>D'une fleur à l'autre</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Calligraffitti&family=Raleway&display=swap');
    </style>
</head>
<body>
<?php include 'nav.php'; ?>

<main>
    <section class="index_section">

    <h1 class="title-of-the-page">D'une fleur à l'autre</h1>
    <div class="index_banner">
        <p>Fleuriste situé en plein coeur de Bordeaux Bastide.<br>Compositions par évènements ou à la carte<br>Possibilité de cartes personnalisées.<br>Livraison possible.</p>

    </div>
    <h2>Nos compositions d'Automne</h2>
    <div class="index_composition">
        <div class="index_composition_bouquet">
            <img src="https://images.unsplash.com/photo-1551273309-d2dd55fddd57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="bouquet1">
            <h3>Soleil d'Automne</h3>
        </div>
        <div class="index_composition_bouquet">
            <img src="https://images.unsplash.com/flagged/photo-1575291004265-ab53e90dc6ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="bouquet2">
            <h3>Ambre</h3>
        </div>
        <div class="index_composition_bouquet" >
            <img src="https://images.unsplash.com/photo-1600404769928-cd182de604db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="bouquet3">
            <h3>Bouquet Champêtre</h3>
        </div>
        <div class="index_composition_bouquet">
            <img src="https://images.unsplash.com/photo-1511690005878-e66ce2772f3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="bouquet4">
            <h3>Bouquet Sauvage</h3>
        </div>

    </div>

    <footer>
        <?php include './footer/footer.php'; ?>

    </footer>
        
    </section>
</main>
<script src="nav.js"></script>
</body>
</html>