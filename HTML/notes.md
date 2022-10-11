HTML & CSS
Hypertext Markup Language
HTML doesn't compile
HTML is always the one that people come back to. It's the language that other frameworks and libraries convert to - React, as an example, converts its code to a HTML file

HTML is for content only

CSS (Cascading style sheets) is for the sexy styling

HTML is created using tags <html> </html> <body> </body>


HTML has a skeleton structure:

<head> </head> is where we store information we don't the user to see
<body> </body> is where we put the content we want to show off to the user and the public
<footer> </footer> is where we put legal information, site maps and other info that we feel is necessary to have but not needed to be on show all the time. Policies to download are normally at the bottom
<!DOCTYPE html>
<!-- rendering a html document on the server -->
<html lang="en">
<!-- document will render the English language -->
<head>
    <meta charset="UTF-8">
    <!-- follows the UTF-8 character codes -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- allows the developer to choose what version of compatibility they want to use -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- simply, the device has a width, the website will TRY and conform to that width. Not always successfully. -->
    <meta name="description" content="Deloitte Bootcamp Website">
    <title>Deloitte Bootcamp</title>
    <!-- The tab title  -->
</head>
<body>

    <h1>Deloitte Bootcamp</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti odit totam expedita assumenda aspernatur aperiam molestias maiores distinctio animi.</p>

    <h2>Another heading. But smaller</h2>
    <h3>Another heading. But smaller</h3>
    <h4>Another heading. But smaller</h4>
    <h5>Another heading. But smaller</h5>
    <h6>Another heading. But smaller</h6>

    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png" alt="Mini Sherlock Holmes">

</body>
</html>
CSS
The two default css file names are:

style.css
main.css
CSS using a key : value, property : value format

body {
    font-size: 100px;
}
CSS is rendered in a last-read display format.

CSS also has a closest to the tag rendering policy
Inline CSS
Devil. We try not to use this one. At all costs. Unless we have our backs against a wall.
Internal CSS
External CSS