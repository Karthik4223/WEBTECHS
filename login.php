

<?php
session_start(); // Start session

if(isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost', 'root', 'root', 'wt1');
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        // Retrieve user data based on email
        $stmt = $conn->prepare("SELECT id, name, password FROM register WHERE email = ?");
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if ($user && password_verify($password, $user['password'])) {
            // Store user data in session for authentication
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['name'];

            // Redirect to home page after successful login
            header("Location: blog.html");
            exit();
        } else {
            echo "Invalid email or password. Please try again.";
        }

        $stmt->close();
        $conn->close();
    }
}
?>
