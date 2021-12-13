<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Maze</title>
</head>
<body>
    <div class="main" id="main">
        <div class="border" id="_1"></div>
        <div class="border" id="_3"></div>
        <div class="border" id="_2"></div>
        <div class="border" id="_4"></div>
        <div class="wall" id="start"></div>
    </div>
    <?php
        $servername = "localhost";
        $username = "esparta";
        $password = "1234";

        // Create connection
        $conn = new mysqli($servername, $username, $password);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Create database
        $sql = "CREATE DATABASE myDB";
        if ($conn->query($sql) === TRUE) {
            echo "Database created successfully";
        } else {
            echo "Error creating database: " . $conn->error;
        }

$conn->close();
?>
    <script src="script.js"></script>
</body>
</html>