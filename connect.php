
<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = $_POST['password'];

$conn = new mysqli('localhost', 'root', 'root', 'wt1');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO register(name, phone, email, password) VALUES(?, ?, ?, ?)");
    $stmt->bind_param('ssss', $name, $phone, $email, $password);
    $stmt->execute();
    $stmt->close();
    $conn->close();

    // Redirect to login page after successful registration
    header("Location: login.html");
    exit();
}
?>
