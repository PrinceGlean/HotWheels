
      // Add smooth scrolling behavior
      document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('a[href^="#"]');
        for (let link of links) {
          link.addEventListener('click', smoothScroll);
        }
      });

      function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }



      var menu = document.getElementById('header');
      var coverHeight = 100;
      var viewportHeight = window.innerHeight;
      
      window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
        if (scrollTop >= coverHeight - viewportHeight / 2) {
          menu.style.top = '0';
          menu.classList.add('visible');
        } else {
          menu.style.top = '0';
          menu.classList.remove('visible');
        }
      });


      function handleClick(event) {
        event.preventDefault(); // Prevent the default navigation behavior
        const destinationURL = event.target.href; // Get the target URL

        // Apply the transition effect by adding a class to the body element
        document.body.classList.add('transition-fade');

        // Wait for the transition to complete before navigating to the target URL
        setTimeout(function() {
            window.location.href = destinationURL; // Navigate to the target URL
        }, 500); // Adjust the duration to match your transition duration
    }

    // Find the navbar links and attach the click event listener
    const navbarLinks = document.querySelectorAll('#navbar a');
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', handleClick);
    });
