<%@ page import="java.sql.*,java.util.*" %>
<%
String name = request.getParameter("name");
String phone = request.getParameter("phone");
String email = request.getParameter("email");
String password = request.getParameter("password");

try {
    Class.forName("com.mysql.cj.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/wt1", "root", "root");
    Statement st = conn.createStatement();
    String query = "INSERT INTO register (name,phone,email,password) " + "VALUES ('" + name + "', '" + phone + "', '" + email + "', '" + password+ "')";
    int i = st.executeUpdate(query);

    System.out.print(i);
    response.sendRedirect("login.html");
} catch (Exception e) {
    System.out.print(e);
}
%>
