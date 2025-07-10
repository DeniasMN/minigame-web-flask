const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // if the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let ImageSrc = e.target.querySelector("img").src;
      userResult.src = ImageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = ["/static/rock.png", "/static/paper.png", "/static/scissors.png"];
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (B for Batu, K for Kertas, G for Gunting)
      let cpuValue = ["B", "K", "G"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["B", "K", "G"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        BB: "Seri",
        BK: "Cpu",
        BG: "User",
        KK: "Seri",
        KB: "User",
        KG: "Cpu",
        GG: "Seri",
        GB: "Cpu",
        GK: "User",
      };

      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the result
      result.textContent =
        userValue === cpuValue ? "Seri" : `${outComeValue} Won!!!`;
    }, 2500);
  });
});
