const jobs = [
  { company: "Amazon", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg", posted: "5 days ago", title: "Senior UI/UX Designer", type: "Part-Time", level: "Senior-Level", salary: "$120/hr", location: "Mumbai, India" },
  { company: "Google", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg", posted: "3 days ago", title: "Product Designer", type: "Full-Time", level: "Mid-Level", salary: "$150/hr", location: "Bangalore, India" },
  { company: "Apple", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg", posted: "1 week ago", title: "UI Designer", type: "Contract", level: "Senior-Level", salary: "$180/hr", location: "Hyderabad, India" },
  { company: "Microsoft", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg", posted: "2 days ago", title: "UX Researcher", type: "Full-Time", level: "Mid-Level", salary: "$140/hr", location: "Pune, India" },
  { company: "Meta", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meta.svg", posted: "4 days ago", title: "Product Designer", type: "Remote", level: "Senior-Level", salary: "$200/hr", location: "Remote" },
  { company: "Netflix", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netflix.svg", posted: "6 days ago", title: "Motion Designer", type: "Contract", level: "Mid-Level", salary: "$160/hr", location: "Delhi, India" },
  { company: "Figma", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg", posted: "2 days ago", title: "UX Designer", type: "Remote", level: "Junior-Level", salary: "$90/hr", location: "Remote" },
  { company: "Adobe", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg", posted: "1 week ago", title: "Visual Designer", type: "Full-Time", level: "Senior-Level", salary: "$170/hr", location: "Noida, India" },
  { company: "Airbnb", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airbnb.svg", posted: "3 days ago", title: "UX Writer", type: "Remote", level: "Mid-Level", salary: "$130/hr", location: "Remote" },
  { company: "Spotify", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spotify.svg", posted: "5 days ago", title: "Product Designer", type: "Full-Time", level: "Senior-Level", salary: "$165/hr", location: "Gurgaon, India" },

  { company: "Slack", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg", posted: "1 day ago", title: "UX Designer", type: "Remote", level: "Mid-Level", salary: "$140/hr", location: "Remote" },
  { company: "Notion", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg", posted: "2 days ago", title: "Product Designer", type: "Full-Time", level: "Senior-Level", salary: "$175/hr", location: "Remote" },
  { company: "Dropbox", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dropbox.svg", posted: "4 days ago", title: "UI Designer", type: "Contract", level: "Mid-Level", salary: "$145/hr", location: "Remote" },
  { company: "LinkedIn", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg", posted: "6 days ago", title: "UX Researcher", type: "Full-Time", level: "Senior-Level", salary: "$160/hr", location: "Bangalore, India" },
  { company: "Uber", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/uber.svg", posted: "1 week ago", title: "Product Designer", type: "Full-Time", level: "Mid-Level", salary: "$155/hr", location: "Hyderabad, India" },
  { company: "Zoom", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoom.svg", posted: "3 days ago", title: "UX Designer", type: "Remote", level: "Junior-Level", salary: "$95/hr", location: "Remote" },
  { company: "Shopify", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg", posted: "5 days ago", title: "UI Designer", type: "Full-Time", level: "Senior-Level", salary: "$170/hr", location: "Remote" },
  { company: "Stripe", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg", posted: "2 days ago", title: "Product Designer", type: "Full-Time", level: "Senior-Level", salary: "$190/hr", location: "Remote" },
  { company: "PayPal", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg", posted: "4 days ago", title: "UX Designer", type: "Contract", level: "Mid-Level", salary: "$135/hr", location: "Remote" },
  { company: "Tesla", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tesla.svg", posted: "6 days ago", title: "UI Designer", type: "Full-Time", level: "Senior-Level", salary: "$180/hr", location: "Palo Alto, US" },

  { company: "IBM", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ibm.svg", posted: "2 days ago", title: "UX Researcher", type: "Full-Time", level: "Mid-Level", salary: "$145/hr", location: "Bangalore, India" },
  { company: "Intel", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/intel.svg", posted: "3 days ago", title: "UI Designer", type: "Contract", level: "Mid-Level", salary: "$130/hr", location: "Pune, India" },
  { company: "Oracle", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/oracle.svg", posted: "5 days ago", title: "Product Designer", type: "Full-Time", level: "Senior-Level", salary: "$165/hr", location: "Bangalore, India" },
  { company: "Atlassian", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/atlassian.svg", posted: "1 week ago", title: "UX Designer", type: "Remote", level: "Mid-Level", salary: "$150/hr", location: "Remote" },
  { company: "Salesforce", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg", posted: "2 days ago", title: "Visual Designer", type: "Full-Time", level: "Senior-Level", salary: "$175/hr", location: "Hyderabad, India" },
  { company: "Reddit", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/reddit.svg", posted: "4 days ago", title: "UX Writer", type: "Remote", level: "Mid-Level", salary: "$120/hr", location: "Remote" },
  { company: "Pinterest", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinterest.svg", posted: "6 days ago", title: "Product Designer", type: "Full-Time", level: "Senior-Level", salary: "$165/hr", location: "Remote" },
  { company: "Snapchat", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/snapchat.svg", posted: "3 days ago", title: "UI Designer", type: "Contract", level: "Mid-Level", salary: "$140/hr", location: "Remote" },
  { company: "TikTok", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg", posted: "5 days ago", title: "UX Designer", type: "Full-Time", level: "Senior-Level", salary: "$185/hr", location: "Singapore" },
  { company: "Twitter", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg", posted: "1 week ago", title: "Product Designer", type: "Remote", level: "Mid-Level", salary: "$150/hr", location: "Remote" }
];




let sum = ''
jobs.forEach(function(data){
    sum+= `<div class="card">
            <div class="icon">
                <img src=${data.logo}>
                <div class="save" data-applied="false"><h1>Save <i class="ri-bookmark-line"></i></h1></div>
            </div>
            <div class="company">
                <h2>${data.company}</h2>
                <p>${data.posted}</p>
            </div>
            <h1>${data.title} </h1>
            <div class="role">
                <p>${data.type}</p>
                <p>${data.level}</p>
            </div>
            <div class="divider"></div>
            <footer>
                <div class="salary">
                    <h2>${data.salary}</h2>
                    <p>${data.location}</p>
                </div>
                <button data-applied="false">
                    Apply Now
                </button>
            </footer>
        </div>`
        
})
let main = document.querySelector('main')


main.innerHTML=sum

// main.addEventListener("click", function (e) {

  
//     let btn = e.target;

//     if (btn.dataset.applied === "false") {
//       btn.textContent = "Applied";
//       btn.style.background = "#2ecc71";
//       btn.dataset.applied = "true";
//     } else {
//       btn.textContent = "Apply Now";
//       btn.style.background = "#111";
//       btn.dataset.applied = "false";
//     }}
// )

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});

