const profileData = {
    profilePicture: "",
    name: "K.Avinash",
    id: "211FA04204",
    age: 20,
    email: "avi@123.com",
    rating: 85,
    enrolledCourses: ["Course 1", "Course 4", "Course 5"],
    completedCourses: ["Course 2", "Course 3"],
    attemptedTests: 15,
    nonAttemptedTests: 5,
    rank: 3
  };
  
  const profilePicture = document.querySelector(".profile-picture");
  profilePicture.src = profileData.profilePicture;
  
  document.getElementById("name").textContent = profileData.name;
  document.getElementById("id").textContent = `ID: ${profileData.id}`;
  document.getElementById("age").textContent = `Age: ${profileData.age}`;
  document.getElementById("email").textContent = `Email: ${profileData.email}`;
  document.getElementById("rating").textContent = profileData.rating;
  
  const enrolledCoursesList = document.querySelector(".enrolled-courses");
  profileData.enrolledCourses.forEach(course => {
    const li = document.createElement("li");
    li.textContent = course;
    enrolledCoursesList.appendChild(li);
  });
  
  const activitiesList = document.querySelector(".activities");
  activitiesList.innerHTML = `
    <li>Completed Courses: ${profileData.completedCourses.join(", ")}</li><br>
    <li>Attempted Tests: ${profileData.attemptedTests}</li><br>
    <li>Non-Attempted Tests: ${profileData.nonAttemptedTests}</li><br>
    <li>Rank: ${profileData.rank}</li>
  `;