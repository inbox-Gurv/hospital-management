// ================================
// Smooth Scroll for Navigation
// ================================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId.startsWith("#")) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ================================
// Disable Past Dates in Appointment
// ================================
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// ================================
// Department → Doctor Mapping
// ================================
const departmentDoctorMap = {
    Cardiology: ["Dr. Rajesh Kumar"],
    Pediatrics: ["Dr. Priya Sharma"],
    Orthopedics: ["Dr. Anil Verma"],
    Neurology: ["Dr. Sunita Gupta"],
    "General Surgery": ["Dr. Anil Verma"],
    Emergency: ["Dr. Rajesh Kumar"]
};

// ================================
// Filter Doctors Based on Department
// ================================
const departmentSelect = document.getElementById('department');
const doctorSelect = document.getElementById('doctor-select');

if (departmentSelect && doctorSelect) {
    departmentSelect.addEventListener('change', function () {
        doctorSelect.innerHTML = `<option value="">Choose Doctor</option>`;

        const doctors = departmentDoctorMap[this.value];
        if (doctors) {
            doctors.forEach(doc => {
                const option = document.createElement('option');
                option.textContent = doc;
                option.value = doc;
                doctorSelect.appendChild(option);
            });
        }
    });
}

// ================================
// Contact Modal Handling
// ================================
const contactModal = document.getElementById("contactModal");
const openContactBtn = document.getElementById("openContactModal");
const closeContactBtn = document.getElementById("closeContact");

if (openContactBtn && contactModal) {
    openContactBtn.addEventListener("click", () => {
        contactModal.style.display = "flex";
    });
}

if (closeContactBtn) {
    closeContactBtn.addEventListener("click", () => {
        contactModal.style.display = "none";
    });
}

if (contactModal) {
    contactModal.addEventListener("click", (e) => {
        if (e.target === contactModal) {
            contactModal.style.display = "none";
        }
    });
}

// ================================
// Contact Form Submit
// ================================
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent successfully. We will contact you soon.");
    this.reset();
    contactModal.style.display = "none";
});

// ================================
// Contractor Form Submit
// ================================
document.getElementById("contractorForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your contractor request has been submitted successfully.");
    this.reset();
});
// ================================
// Appointment Modal Handling
// ================================
const appointmentModal = document.getElementById("appointmentModal");
const closeAppointment = document.getElementById("closeAppointment");

document.querySelectorAll('a[href="#appointments"]').forEach(btn => {
    btn.addEventListener("click", () => {
        appointmentModal.style.display = "flex";
    });
});

closeAppointment.onclick = () => {
    appointmentModal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === appointmentModal) {
        appointmentModal.style.display = "none";
    }
};

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Appointment booked successfully!");
    this.reset();
    appointmentModal.style.display = "none";
});
const emergencyModal = document.getElementById("emergencyModal");
const openEmergency = document.getElementById("openEmergency");
const closeEmergency = document.getElementById("closeEmergency");

openEmergency.onclick = () => {
    emergencyModal.style.display = "flex";
};

closeEmergency.onclick = () => {
    emergencyModal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === emergencyModal) {
        emergencyModal.style.display = "none";
    }
};

// Optional submit handling
document.getElementById("emergencyForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("🚑 Emergency request submitted! Our team will contact you immediately.");
    emergencyModal.style.display = "none";
    this.reset();
});

// Login & Signup Modals
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

document.getElementById("openLogin").onclick = () => loginModal.style.display = "flex";
document.getElementById("openSignup").onclick = () => signupModal.style.display = "flex";

document.getElementById("closeLogin").onclick = () => loginModal.style.display = "none";
document.getElementById("closeSignup").onclick = () => signupModal.style.display = "none";

document.getElementById("switchToSignup").onclick = () => {
    loginModal.style.display = "none";
    signupModal.style.display = "flex";
};

document.getElementById("switchToLogin").onclick = () => {
    signupModal.style.display = "none";
    loginModal.style.display = "flex";
};

window.onclick = (e) => {
    if (e.target === loginModal) loginModal.style.display = "none";
    if (e.target === signupModal) signupModal.style.display = "none";
};

const form = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");
const avgRatingEl = document.getElementById("avgRating");
const totalReviewsEl = document.getElementById("totalReviews");

let ratings = [5,4,5];

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const rating = Number(document.getElementById("rating").value);
    const comment = document.getElementById("comment").value;

    ratings.push(rating);

    const stars = "★★★★★☆☆☆☆☆".slice(5-rating,10-rating);

    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
        <h4>${name}</h4>
        <div class="stars">${stars}</div>
        <p>${comment}</p>
    `;
    reviewList.appendChild(card);

    const avg = (ratings.reduce((a,b)=>a+b,0)/ratings.length).toFixed(1);
    avgRatingEl.textContent = avg;
    totalReviewsEl.textContent = ratings.length;

    form.reset();
});
