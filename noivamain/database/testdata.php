<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database</title>

  <!-- <link rel="stylesheet" href="/noivamain/database/testdata.css"> -->
</head>
<body>

<form action="testdata.php" method="get">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

<?php 
echo $_GET["name"]; ?><br>

<?php echo $_GET["email"]; ?>
    
</body>
</html>