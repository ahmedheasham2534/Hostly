/*  ---------------------------------------------------
  Template Name: Deerhost
  Description:  Deerhost Hosting HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas__menu__wrapper").addClass("show__offcanvas__menu");
        $(".offcanvas__menu__overlay").addClass("active");
    });

    $(".canvas__close, .offcanvas__menu__overlay").on('click', function () {
        $(".offcanvas__menu__wrapper").removeClass("show__offcanvas__menu");
        $(".offcanvas__menu__overlay").removeClass("active");
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------
        Radio btn
    --------------------*/
    $(".pricing__swipe-btn label").on('click', function (e) {
        $(".pricing__swipe-btn label").removeClass("active");
        $(this).addClass("active");

        if(e.target.htmlFor == 'month') {
            $(".yearly__plans").removeClass('active');
            $(".monthly__plans").addClass('active');
        } else if (e.target.htmlFor == 'yearly') {
            $(".monthly__plans").removeClass('active');
            $(".yearly__plans").addClass('active');
        }     
    });
    /*------------------
        Achieve Counter
    --------------------*/
    $('.achieve-counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);

// ------------------------chat assistance------------------>
const chatIcon = document.getElementById("chat-icon");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");
const chatBody = document.getElementById("chat-body");

chatIcon.addEventListener("click", () => {
  chatWindow.classList.remove("hidden");
});

closeChat.addEventListener("click", () => {
  chatWindow.classList.add("hidden");
});

function selectPlan(type) {
  chatBody.innerHTML = `<p>You selected <strong>${type}</strong>. Please choose a package:</p>`;
  const plans = ["Standard", "Business", "Premium", "Dedicated"];
  plans.forEach((plan) => {
    const button = document.createElement("button");
    button.className = "chat-option";
    button.innerText = plan;
    button.onclick = () => calculatePrice(type, plan);
    chatBody.appendChild(button);
  });
}

function calculatePrice(type, plan) {
  const prices = {
    monthly: {
      Standard: "15.90$",
      Business: "25.90$",
      Premium: "35.90$",
      Dedicated: "45.90$",
    },
    annual: {
      Standard: "150$",
      Business: "250$",
      Premium: "350$",
      Dedicated: "450$",
    },
  };

  chatBody.innerHTML = `<p>You selected <strong>${plan}</strong> under <strong>${type}</strong> subscription.</p>`;
  chatBody.innerHTML += `<p>The price is <strong>${prices[type][plan]}</strong>.</p>`;
  chatBody.innerHTML += `If you want to to contact Custome Service please enter your email below`
}
const userInput = document.getElementById("user-input");
const responseMessage = document.getElementById("response-message");
const sendButton = document.getElementById("send-button");

// Prevent page reload on button click
sendButton.addEventListener("click", (event) => {
  event.preventDefault(); // Stops the default form submission or page reload
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
  if (emailPattern.test(userInput.value)) {
    responseMessage.classList.add("visible");
    responseMessage.textContent = "We will contact you.";
  } else {
    responseMessage.classList.remove("visible");
    responseMessage.textContent = "";
  }
});

// Optional: Clear message on input change
userInput.addEventListener("input", () => {
  if (!userInput.value.trim()) {
    responseMessage.classList.remove("visible");
    responseMessage.textContent = "";
  }
});

// ------------------------/chat assistance------------------>

// domain name
const form = document.getElementById('domainForm');
  const searchInput = document.getElementById('searchInput');
  const domainSelect = document.getElementById('domains-codes');
  const resultDiv = document.getElementById('result');

  // Handle form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const domainName = searchInput.value.trim();
    const selectedExtension = domainSelect.value;

    // Check if both input and extension are provided
    if (domainName && selectedExtension) {
      // Show the result div with the message
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `Your domain <span style="color: #00FF00; font-weight: bold;">${domainName}${selectedExtension}</span> is available.`;
    } else {
      // Hide the result div if input is incomplete
      resultDiv.style.display = 'none';
      alert('Please enter a domain name and select an extension.');
    }
  });
  // -----------------login page-----------------------
  // Get the modal and close button
const modal = document.getElementById('registerModal');
const closeModal = document.getElementById('closeModal');
const LoginForm = document.getElementById('registerForm');
const successMessage = document.getElementById('successMessage');

// Function to open the modal
function openRegisterModal() {
  modal.style.display = 'flex';
}

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  successMessage.style.display = 'none';
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMessage.style.display = 'block'; // Show success message
  setTimeout(() => {
    successMessage.style.display = 'none'; // Hide success message after 3 seconds
    modal.style.display = 'none'; // Close modal
  }, 3000);
});

  // leave a comment btn
  document.addEventListener('DOMContentLoaded', () => {
    const leaveCommentBtn = document.getElementById('leaveCommentBtn');
    const commentForm = document.getElementById('commentForm');
    const submitCommentBtn = document.getElementById('submitCommentBtn');
  
    // Show the hidden section when the button is clicked
    leaveCommentBtn.addEventListener('click', () => {
      commentForm.style.display = 'block'; // Show the comment form
      leaveCommentBtn.style.display = 'none'; // Hide the "Leave Comment" button
    });
  
    // Handle comment submission
    submitCommentBtn.addEventListener('click', () => {
      const userComment = document.getElementById('userComment').value.trim();
      
      if (userComment) {
        alert(`Thank you for your comment: "${userComment}"`);
        // Optionally, you can reset the form or hide it again
        document.getElementById('userComment').value = '';
        commentForm.style.display = 'none';
        leaveCommentBtn.style.display = 'block';
      } else {
        alert('Please write a comment before submitting.');
      }
    });
  });
  